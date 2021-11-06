<?php
global $file_id;
$file_id = '10';
$file_name = 'Carrito - Lola en Barracas';

include 'includes/db_connect.php';

$tempEnvioCost = 50;

    #Primero verificar que addToCart sea real.
    $addToCart = $_GET['addToCart'];
    $deleteFromCart = '';
    $emptyCart = 0;
    if(is_numeric($_GET['addToCart'])){$prod_id = $_GET['addToCart'];}
    if(is_numeric($_GET['deleteFromCart'])){$deleteFromCart = $_GET['deleteFromCart'];}
    if(is_numeric($_GET['emptyCart'])){$emptyCart = $_GET['emptyCart'];}

    $totalPrice = 0;
    #Checkcookie. Luego ver si hay add. Luego print

    if(isset($_COOKIE["active_sale"])) {
       
        $query = "SELECT id, name, price,price2,price3 FROM products WHERE id = '$prod_id';";
        if ($result = mysqli_query($mysqli, $query)){
            $row = $result->fetch_assoc();
        }
        $price = $row["price"];
        $price2 = $row["price2"];
        $price3 = $row["price3"];

        $cookieValue = $_COOKIE["active_sale"];

        $tempArray = explode('-', $cookieValue);
        $sales_id = $tempArray[1];
        $random_cookie = $tempArray[0];
        $qty = '0';
        if(is_numeric($_GET["qty"])){
        $qty = $_GET["qty"];
        } 

        if(is_numeric($_GET["color_id"])){
        $color_id = $_GET["color_id"];
        }

        if(is_numeric($_GET["print_type"])){
        $print_type = $_GET["print_type"];
        }if(!$print_type){$print_type = '1';}

        if(is_numeric($_GET["waist_id"])){
        $waist_id = $_GET["waist_id"];
        }else{
        $waist_id = 0;
        } 

        if(is_numeric($_GET["type_id"])){
        $type_id = $_GET["type_id"];
        }else{
        $type_id = 0;
        }

        if($emptyCart > 0){

                $query = "DELETE FROM sales_data WHERE sales_data.sales_id = $sales_id;";    
                mysqli_query($mysqli, $query);

                header("Location: http://".$_SERVER['HTTP_HOST']."/?unsetCkies=1");

#                setcookie("active_sale", "", time()-3600);
#                unset($_COOKIE["active_sale"]);
#                exit(0);
                 $prod_id = 0;
        }

        #si hay prod_id estoy agregando o updateando producto.
        if($prod_id){

        #falta solucionar esto!!!
            $query = mysqli_query($mysqli, "SELECT sales_data.prod_id FROM sales_data WHERE sales_data.prod_id = $prod_id AND sales_data.sales_id = $sales_id;");

            $realPrice = '';
            if($print_type == '1'){$realPrice = $price;}else if($print_type == '2'){$realPrice = $price2;}else if($print_type == '3'){$realPrice = $price3;}else{return false;die();}

            if($realPrice > 0.00){

                if(mysqli_num_rows($query) > 0){

                    $query = "UPDATE  sales_data SET qty='$qty', price= '$realPrice', waist_id= '$waist_id', type_id= '$type_id',color_id='$color_id' ,print_type='$print_type' WHERE prod_id = $prod_id AND sales_data.sales_id = $sales_id;";    
                    mysqli_query($mysqli, $query);

               } else {

                   $query = "INSERT INTO sales_data SET sales_id = '$sales_id',prod_id = '$prod_id', qty = '$qty', price = '$realPrice', waist_id= '$waist_id', type_id= '$type_id',color_id='$color_id',print_type='$print_type';";

                   mysqli_query($mysqli, $query);

               }

            }

        } else if($deleteFromCart > 1){

        $query = "DELETE FROM sales_data WHERE prod_id = '$deleteFromCart' AND sales_data.sales_id = $sales_id;";
        mysqli_query($mysqli, $query);
        }

    ## fin de "IF activeSale"
    } else {

        if(is_numeric($_GET["addToCart"])){
            $prod_id = $_GET["addToCart"];
            $qty = '0';
            if(is_numeric($_GET["qty"])){
                $qty = $_GET["qty"];
            } 

            $query = "INSERT INTO sales_info SET initdate = NOW(),lastmod = NOW();";
            if(mysqli_query($mysqli, $query)){
    
                $id = $mysqli->query("SELECT id FROM sales_info ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;
                if($id){
    
                    $query = "SELECT id, name, price FROM products WHERE id = '$prod_id';";
                    if ($result = mysqli_query($mysqli, $query)){
                        $row = $result->fetch_assoc();
    #                 {$row = mysqli_fetch_row($result);}
                    }
                    $price = $row['price'];

                    if(is_numeric($_GET["color_id"])){
                    $color_id = $_GET["color_id"];
                    }
            
                    if(is_numeric($_GET["waist_id"])){
                    $waist_id = $_GET["waist_id"];
                    }else{
                    $waist_id = 0;
                    } 
            
                    if(is_numeric($_GET["type_id"])){
                    $type_id = $_GET["type_id"];
                    }else{
                    $type_id = 0;
                    }

                   if(is_numeric($_GET["print_type"])){
                   $print_type = $_GET["print_type"];
                   }
 
                   $realPrice = '';
                   if($print_type == '1'){$realPrice = $price;}else if($print_type == '2'){$realPrice = $price2;}

                   if($realPrice > 0.00){

                       $query = "INSERT INTO sales_data SET sales_id = '$id',prod_id = '$prod_id', qty = '$qty', price = '$realPrice', waist_id= '$waist_id', type_id= '$type_id',color_id='$color_id',print_type='$print_type' ;";
                       mysqli_query($mysqli, $query);

                   }
     
                 }
    
            }
     
    # SI está ok crear cookies
        $number_of_days = 10 ;
    
        #TEMP random string code:
        $characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $random_string_length = 15;
        $string = '';
        $max = strlen($characters) - 1;
        for ($i = 0; $i < $random_string_length; $i++) {
             $string .= $characters[mt_rand(0, $max)];
        }
        $original_string = $string;
        $string = $string.'-'.$id;
    
        $date_of_expiry = time() + 6000;
        setcookie('active_sale', $string ,$date_of_expiry,"/");

            $sales_id = $id;

$noIncludes = 1;
include 'includes/includes.php';
include 'includes/configs.php';

        list($sales_products,$totalPrice,$envio) = bringCartList($sales_id,$original_string);

        }

   
    }

include ('header.php');

//scrips en base a la sección.
$cart = 1;

?>



<input type="hidden" id="sales_id" value="<?php echo $sales_id;?>">









  <!-- Main Container -->
  <section class="main-container col1-layout wow bounceInUp animated">
    <div class="main container">
      <div class="col-main">
        <div class="cart">
          <div class="page-title">
            <h2>Carrito</h2>
          </div>
          <div class="page-content page-order">
            <ul class="step">
              <li class="current-step"><span>01. Carrito</span></li>
              <li><span>02. Confirmar pedido</span></li>
            </ul>
<?php if($cantidad > 0){?>            <div class="heading-counter warning">Su carrito tiene: <span><?php echo $cantidad;?> productos</span> </div><?php } ?>
            <div class="order-detail-content">
              <div class="table-responsive">
                <table class="table table-bordered cart_summary">
                  <thead>
                    <tr>
                      <th class="cart_product">Artículo</th>
                      <th>Descripción</th>
                      <th>Precio unitario</th>
                      <th>Cantidad</th>
                      <th>Total</th>
                      <th  class="action"><i class="fa fa-trash-o"></i></th>
                    </tr>
                  </thead>
                  <tbody>


<?php 

if($sales_products){
    foreach ($sales_products as $sales_prod) { 
?>


                    <tr>
                      <td class="cart_product"><a href="#"><img src="/fotos/articulos/<?php echo $sales_prod['picture'];?>" alt="Product"></a></td>
                      <td class="cart_description"><p class="product-name"><a href="#"><?php echo $sales_prod['name'];?></a></p>

                        Color : <?php echo $sales_prod['color_desc'];?><br>
                       <?php if($sales_prod['has_waists'] == 'Y'){?>
                            Talle: <?php echo $sales_prod['waist_desc'];?><br>
                       <?php } ?>
                            <br>

                       </td>
                      <td class="price"><span>$<?php echo $sales_prod['price']; ?></span>

                                                                                                            <input type="hidden" value="<?php echo $sales_prod['price']; ?>" id="price<?php echo $sales_prod["id"];?>">

</td>
                      <td class="qty"><input name="qtybutton" id="qty-<?php echo $sales_prod["id"];?>"    onchange="alterQty(this);" class="form-control input-sm" type="text" value="<?php echo $sales_prod['qty']?>"></td>
                      <td class="price">$<span  id="totalXqty<?php echo $sales_prod['id'];?>" ><?php echo ($sales_prod['price'] * $sales_prod['qty']);?></span></td>
                      <td class="action"><a href="/cart.php?deleteFromCart=<?php echo $sales_prod['id']?>"><i class="icon-close"></i></a></td>
                    </tr>

<?php 

}

}




?>


                   </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="2" rowspan="2"></td>
                      <td colspan="3">Total productos (IVA incl.)</td>
                      <td colspan="2">$<span id="totalPrice"><?php echo $totalPrice;?></span> </td>
                    </tr>
                    <tr>
                      <td colspan="3"><strong>Total</strong></td>
                      <td colspan="2"><strong>$<span id="finalTotal"><?php echo $totalPrice;?></span></strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div class="cart_navigation"> <a class="continue-btn" href="/productos/all/"><i class="fa fa-arrow-left"> </i>&nbsp; Seguir navegando</a> <a class="checkout-btn" href="/checkout.php"><i class="fa fa-check"></i> Confirmar y realizar pedido</a> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<?php include ('footer.php'); ?>


