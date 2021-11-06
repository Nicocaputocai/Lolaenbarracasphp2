<?php
global $file_id;
$file_id = '11';
$file_name = 'Checkout - ';
include ('header.php');
//scrips en base a la sección.
$cart = 1;

$provinciasArray = getProvinciasSelect('');
$paymentsArray = getPaymentMethods('');


?>

       <!-- Breadcrumbs -->
  
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Go to Home Page" href="/">Home</a><span>&raquo;</span></li>
           
            <li class="category13"><strong>Confirmar pedido</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumbs End -->


<form action="">
<!-- Main Container -->
<section class="main-container col2-right-layout bounceInUp animated">
  <div class="main container">
    <div class="row">
      <div class="col-main col-sm-12">
        <div class="page-title">
          <h2>Confirmación de Pedido</h2>
        </div>
        <div class="page-content checkout-page">

            <h4 class="checkout-sep">1. Sus datos de facturación</h4>
            <div class="box-border">
                <ul>
                    <li class="row">
                        <div class="col-sm-6">
                            <label for="first_name" class="required">Nombre</label>
                            <input type="text" class="input form-control" id="firstname" name="firstname" placeholder="Nombre" >
                        </div><!--/ [col] -->
                        <div class="col-sm-6">
                            <label for="last_name" class="required">Apellido</label>
                            <input type="text"  class="input form-control" id="lastname" name="lastname" placeholder="Apellido" >
                        </div><!--/ [col] -->
                    </li>
                    <li class="row">
                        <div class="col-sm-6">
                            <label for="last_name" class="required">Documento de Identidad</label>
                            <input type="text"  class="input form-control" id="documento" name="documento" placeholder="00000000" >
                        </div><!--/ [col] -->
                        <div class="col-sm-6">
                            <label for="email_address" class="required">Email</label>
                            <input type="text" class="input form-control" id="email" name="email" placeholder="email@ejemplo.com" >
                        </div><!--/ [col] -->
                    </li><!--/ .row -->
                    <li class="row">


                        <div class="col-sm-6">
                            <label for="telephone" class="required">Teléfono</label>
                            <input class="input form-control" type="text" id="phone" name="phone"  >
                        </div><!--/ [col] -->
                        <div class="col-sm-6">

                            <label for="postal_code" class="required">Código Postal</label>
                            <input class="input form-control" type="text" id="postcode" name="postcode" placeholder="0000" >
                        </div><!--/ [col] -->
                    </li><!--/ .row -->
                    <li class="row"> 
                        <div class="col-xs-12">

                            <label for="address" class="required">Calle y Numeración</label>
                            <input type="text" class="input form-control" id="address" name="address"  placeholder="Calle y Numero" >

                        </div><!--/ [col] -->

                    </li><!-- / .row -->

                    <li class="row">

                        <div class="col-sm-6">
                            
                            <label for="city" class="required">Provincia</label>
                                <select id="provincia" name="provincia"  class="input form-control" onchange="getLocalidades();return false;" >

                                <option value="0" selected>Seleccione provincia</option>
<?php 

if($provinciasArray){


    foreach($provinciasArray as $provArray){
?>


				<option value="<?php echo $provArray['id']?>"><?php echo $provArray['name'];?></option>
	<?php  
    }
}else {

echo "<option>no hay provincias</option>";

}   

?>




                            </select>

 <!--                           <input class="input form-control" type="text" name="city" id="city">-->

                        </div><!--/ [col] --> <div class="col-sm-6">
                            <label class="required">Ciudad</label>
                                <select id="localidad" name="localidad" class="input form-control" >

                                   </select>
                        </div><!--/ [col] -->
                    </li><!--/ .row -->

                    <li class="row">
                    </li><!--/ .row -->

                    <li>
                    </li>
                </ul>
            </div>
            <h4 class="checkout-sep">2. Método de envío</h4>
            <div class="box-border">
                <ul class="shipping_method">
                    <li>
                        <input type="radio" checked="checked" value="1" name="shipping_method_id">  Retira en el local<br/>
                        <input type="radio" checked="checked" value="2" name="shipping_method_id">  Envío<br/>
                    </li>
                </ul>
            </div>
            <h4 class="checkout-sep">3. Método de pago</h4>
            <div class="box-border">
                <ul>

<?php  if($paymentsArray){ ?>

                    <li>

<?php     foreach($paymentsArray as $payArray){  ?>
                         <label for="radio_button_5">
<input type="radio" <?php if ($payArray['id'] == 6 )  { ?> checked <?php } ?>
       value="<?php echo $payArray['id']?>" name="payment_method_id"
       id="payment_method_<?php echo $payArray['id']?>"

>
                             <?php echo $payArray['name'];?> </label><br/>
                                              	<?php      }    ?>
                    </li>
<?php

}else {

echo "";

}   

?>

                </ul>
            </div>
            <h4 class="checkout-sep">4. Mensaje</h4>
            <div class="box-border">
                <ul class="shipping_method">
                    <li>
                        <textarea class="form-control" rows="5" name="client_message" id="client_message"></textarea>
                    </li>
                </ul>
            </div>

            <h4 class="checkout-sep">5. Resumen</h4>
            <div class="box-border">
            <div class="table-responsive">
                <table class="table table-bordered cart_summary">
                    <thead>
                        <tr>
                            <th class="cart_product">Producto</th>
                            <th>Descripción</th>
                            <th>Precio unitario</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th class="action"><i class="fa fa-trash-o"></i></th>
                        </tr>
                    </thead>
                    <tbody>

<?php 
if($sales_products){
    foreach ($sales_products as $sales_prod) { 
?>
                        <tr>
                            <td class="cart_product">
                                <a href="#"><img src="/fotos/articulos/<?php echo $sales_prod['picture'];?>" alt="Product"></a>
                            </td>
                            <td class="cart_description">
                                <p class="product-name"><a href="#"><?php echo $sales_prod['name'];?></a></p>

                            Color : <?php echo $sales_prod['color_desc'];?><br>
                            <?php if($sales_prod['has_waists'] == 'Y'){?>
                                Talle: <?php echo $sales_prod['waist_desc'];?><br>
                            <?php } ?>
                                <br>
                                </td>
                            <td class="price"><span>$<?php echo $sales_prod['price'];?></span></td>
                            <td class="qty"><span><?php echo $sales_prod['qty'];?></span>                          
                            </td>
                            <td class="price">
                                <span>$<?php echo $sales_prod['price'] *  $sales_prod['qty'];?></span>
                            </td>
                            <td class="action">
                                <a href="#"><i class="fa fa-trash-o"></i></a>
                            </td>
                        </tr>

<?php 

}

}

?>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="2" rowspan="2"></td>
                            <td colspan="3">Total productos (IVA incluido)</td>
                            <td colspan="2">$<?php echo $totalPrice;?> </td>
                        </tr>
                        <tr>
                            <td colspan="3"><strong>Total</strong></td>
                            <td colspan="2"><strong>$<?php echo $totalPrice;?> </strong></td>
                        </tr>
                    </tfoot>    
                </table></div>
 <a href="#" onclick="validateCartForm(<?php echo $sales_id;?>);return false;">   <button id="confirm_sale" class="button pull-right"><span>Finalizar Pedido</span></button>
 </a>
 <a href="/cart.php?emptyCart=<?php echo $sales_id;?>">   <button class="button pull-right"><span>Cancelar</span></button></a>
            </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</form>
  <!-- Main Container End -->
 

                   <!-- Modal -->
                   <div class="modal fade" id="cartModal" tabindex="-1" role="dialog">
                            <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                                <div class="modal-header">
                                                Información sobre el pedido : <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                </div>
                                                <div class="modal-body" id="modal-body">
                                                <p></p>
                                                </div>
                                       </div>
                            </div>
                    </div>

<?php include ('footer.php'); ?>


