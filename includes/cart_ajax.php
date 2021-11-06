<?php  
//header('Content-type: text/html');
include 'includes.php';
include 'PHPMailer/mailer.php';
include 'configs.php';
/* Indicar el tipo de contenido que tendrá la respuesta */
  


//veo la operacion y decido qué function
$operation = $_POST['operation'];

if ($operation == 'CSVExport'){CSVExport();}
if ($operation == 'getPerson'){getPerson();}
if ($operation == 'getEvent'){getEvent();}
if ($operation == 'getPost'){getPost();}
if ($operation == 'getReservation'){getReservation();}
if ($operation == 'getProduct'){getProduct();}
if ($operation == 'updateCartRow'){updateCartRow();}
if ($operation == 'confirmSale'){confirmSale();}

#from includes.
if ($operation == 'getProvinciasSelect'){getProvinciasSelect();}
if ($operation == 'getLocalidades'){getLocalidades('json');}


function confirmSale(){

global $mysqli;

$error = 0;
if(isset($_COOKIE["active_sale"])) {

    $sales_id = $mysqli->real_escape_string($_POST['sales_id']);if(!$sales_id){$error = $error + 1;}
    $address = $mysqli->real_escape_string($_POST['address']);  if(!$address){$error = $error + 1;}
    $documento = $mysqli->real_escape_string($_POST['documento']);  if(!$documento){$error = $error + 1;}
    $postcode = $mysqli->real_escape_string($_POST['postcode']); if(!$postcode){$error = $error + 1;}
    $provincia = $mysqli->real_escape_string($_POST['provincia']); if(!$provincia){$error = $error + 1;}
    $localidad = $mysqli->real_escape_string($_POST['localidad']); if(!$localidad){$error = $error + 1;}
    $client_message = $mysqli->real_escape_string($_POST['client_message']); #if(!$client_message){$error = $error + 1;}
    $payment_method_id = $mysqli->real_escape_string($_POST['payment_method_id']);if(!$payment_method_id){$payment_method_id = '0';}

    $shipping_method_id = $mysqli->real_escape_string($_POST['shipping_method_id']);if(!$shipping_method_id){$shipping_method_id = '0';}
    $firstname = $mysqli->real_escape_string($_POST['firstname']); if(!$firstname){$error = $error + 1;}
    $lastname = $mysqli->real_escape_string($_POST['lastname']); if(!$lastname){$error = $error + 1;}
    $phone = $mysqli->real_escape_string($_POST['phone']); if(!$phone){$error = $error + 1;}
    $email = $mysqli->real_escape_string($_POST['email']); if(!$email){$error = $error + 1;}

    $cookieValue = $_COOKIE["active_sale"];

    $tempArray = explode('-', $cookieValue);
    $cookie_sales_id = $mysqli->real_escape_string($tempArray[1]);
    $random_cookie = $tempArray[0];
   
    if($cookie_sales_id == $sales_id && $error <= 0){ 

        #insert de cliente y obtención de id.
        $SQLquery = "INSERT INTO clients SET 
        email='$email', 
        first_name = '$firstname', 
        last_name = '$lastname',
        provincia = '$provincia',
        ciudad = '$localidad',
        address = '$address',
        postal_code = '$postcode',
        documento = '$documento',
        phone = '$phone' ; ";

        if(mysqli_query($mysqli, $SQLquery)){
            
            $sumaTotal = 0;
            $clientid = $mysqli->query("SELECT id FROM clients ORDER BY id DESC LIMIT 0,1;")->fetch_object()->id;  

            $sqlStatement = "SELECT 
                            sales_data.sales_id,
                            sales_data.prod_id,
                            sales_data.price,
                            sales_data.qty,
                            p_colors.`desc` as color_desc,
                            p_types.`desc` as type_desc,
                            p_waists.`desc` as waists_desc,
                            p_waists.`group` as waists_group,
                            sales_data.print_type,
                            p_sub_types.weight,
                            products.name
                            FROM sales_data
                            LEFT JOIN products ON sales_data.prod_id = products.id
                            LEFT JOIN p_colors ON sales_data.color_id = p_colors.id
                            LEFT JOIN p_types ON sales_data.type_id = p_types.id
                            LEFT JOIN p_waists ON sales_data.waist_id = p_waists.id
                            LEFT JOIN p_sub_types ON products.sub_type = p_sub_types.id                            
                            WHERE sales_data.sales_id = '$sales_id'";

            $sqlQuery = $mysqli->query($sqlStatement);

            $productsArray = array();
            $productsHtmlDetail = '';
            $productsTextDetail = '';

            $totalWeight = 0;
            while ($row2 = $sqlQuery->fetch_assoc()){

                $sumaTotal = $sumaTotal + ($row2['qty'] * $row2['price']);

                $prod_id = $row2['prod_id'];
                $qty = $row2['qty'];
                $price = $row2['price'];
                $print_type = $row2['print_type'];

                $group = '';
                if($row2["waists_group"]){
                    if($row2["waists_group"] == 'M'){
                        $group = ' (Calzado)';
                    }elseif ($row2["waists_group"] == 'W'){
                        $group = ' (Prendas)';
                    }elseif ($row2["waists_group"] == 'C'){
                        $group = ' (Niño)';
                    }
                }

                $name = $row2['name']." ".$row2['type_desc']." ".$row2['color_desc']." - Talle: ".$row2['waists_desc'] .$group;
                $thisUrl = "http://$_SERVER[HTTP_HOST]";

                $productsHtmlDetail .= "<p>$name x $qty unidad/es: $".$price*$qty."($price cada uno)</p>". "(<a href='$thisUrl/productos/$prod_id-".seoUrl($row2['name'])."'> Ver Online </a>)";
                $productsTextDetail .= "$name x $qty unidad/es: $".$price*$qty."($price cada uno)";

                $totalWeight = $totalWeight +($row2["weight"]*$qty);
                $productsArray[$cnt] = array (
                             "prod_id" => $row2['prod_id'],
                             "qty" => $row2['qty'],
                             "price" => $row2['price'],
                             "name" => $row2['name'],
                             "weight" => $row2['weight'],
                        ); $cnt++;
            }

            $query = "UPDATE sales_info SET s_status='2',client_id = '$clientid',lastmod = NOW(),total = '$sumaTotal', client_message = '$client_message', shipping_method = '$shipping_method_id', payment_method = '$payment_method_id' WHERE id = '$sales_id';";
            if(mysqli_query($mysqli, $query)){

            $payment_method_desc = $mysqli->query("SELECT name FROM payment_methods WHERE id='$payment_method_id';")->fetch_object()->name;  
            $shipping_method_desc = $mysqli->query("SELECT name FROM shipping_methods WHERE id='$shipping_method_id';")->fetch_object()->name;  




$ToEmail = 'info@lolaenbarracas.com.ar';
#$ToEmail = 'ferlavezzari@gmail.com';


$ToName  = 'Admin';
$MessageHTML = '<h1>Nueva venta web:</h1>
-------------------
<p>Nombre y Apellido:  <b>'.$firstname.' '.$lastname.'</b></p>
<p>Documento de Identidad:  <b>'.$documento.'</b></p>
<p>Teléfono:  <b>'.$phone.'</b></p>
<p>Correo electrónico:  <b>'.$email.'</b></p>
<p>Total: <b>$'.$sumaTotal.'</b></p>
<p>Método de pago: <b>'.$payment_method_desc.'</b></p>
<p>Método de envío: <b>'.$shipping_method_desc.'</b></p>
<p>Mensaje del cliente: <b>'.$client_message.'</b></p>
<p>Detalle del pedido:</p>
'.$productsHtmlDetail;

$MessageTEXT = 'Nueva venta Web:
------------------
Nombre y Apellido: '.$firstname.' '.$lastname.'
Documento de Identidad: '.$documento.'
Correo electrónico: '.$email.'
Teléfono:  '.$phone.'
Correo electrónico:  '.$email.'
Total: $'.$sumaTotal.'
Método de pago: '.$payment_method_desc.'
Método de envío: '.$shipping_method_desc.'
Mensaje del cliente: '.$client_message.'
Detalle del pedido:
'.$productsTextDetail;


$cartDetails = "
<p><b> A continuación podrás ver un resumen del mismo:</b></p>

<p>Nombre y Apellido:  <b>$firstname $lastname</b></p>
<p>Teléfono:  <b>$phone</b></p>
<p>Detalle del pedido:</p>
$productsHtmlDetail
<p>Total: <b>$$sumaTotal</b></p>
<p>Método de pago: <b>$payment_method_desc</b></p>
<p>Método de envío: <b>$shipping_method_desc</b></p>
<hr>";


                $subject = "$firstname $lastname recibimos tu Pedido - Lola en Barracas";
                $body = "<h2>¡$firstname $lastname recibimos tu Pedido! - Lola en Barracas</h2>
                         <h3>En breve un representante de nuestro equipo se pondrá en contacto con vos para coordinar la entrega.</h3>";
                $template = "thanks_mp.html";
                $paymentButton = '';
                $withShipping = 0;
                //si es mercadopago obtengo el botón de pago.
                if($payment_method_id == '6'){

                    if($shipping_method_id == '2'){
                        $withShipping = 1;
                        $box = '15x30x30';
                        if($totalWeight <= 500){
                            $box = '15x30x30';
                        }
                        else if($totalWeight <= 1000){
                            $box = '15x40x40';
                        }else if($totalWeight > 1000){
                            $box = '15x50x50';
                        }
                    }

                    $paymentButton =  createPaymentButton($sales_id,$sumaTotal,$withShipping,$totalWeight,$box);

                }

                $Send2 = SendHtmlMailTemplate($email, $subject, $body, $template,$paymentButton,$cartDetails);
                $Send = SendMail( $ToEmail, $MessageHTML, $MessageTEXT,'Recibimos un nuevo pedido en '.$thisUrl );

                $response = '1';
                echo $json = json_encode(array($response,$paymentButton));


            } else {
 
                $response = '3';
                echo $json = json_encode($response);

            }
        }
    
    } else {

        $response = '2';
        echo $json = json_encode($response);

    }
    
    

} else {
    $response = '0';
    echo $json = json_encode($response);
} //end if else de "issset COKKIE active_sale"

}


function createPaymentButton($sales_id,$total,$withShipping,$weight,$box){

    require_once "mp/mercadopago.php";

    $mp = new MP('6359691820103837', 'GJ0Hz5enVy3OmX74oKrj8mAqBw2J20sM');

    $preference_data = array(
        "items" => array(
            array(
                "id" => "$sales_id",
                "title" => "Pedido $sales_id en Lola en Barracas",
                "currency_id" => "ARS",
                "description" => "Pedido $sales_id en Lola en barracas",
                "quantity" => 1,
                "unit_price" => $total
            ),

        ),

        "back_urls" => array(
            "success" => "http://www.lolaenbarracas.com.ar?unsetCkies=1",
            "failure" => "http://www.lolaenbarracas.com.ar?unsetCkies=1",
            "pending" => "http://www.lolaenbarracas.com.ar?unsetCkies=1"
        ),
        "auto_return" => "approved",
        "payment_methods" => array(
            "installments" => 1,
            "default_payment_method_id" => null,
            "default_installments" => null,
        ),
        "notification_url" => "http://www.lolaenbarracas.com.ar?unsetCkies=1",
        "external_reference" => "$sales_id",
        "expires" => false,
        "expiration_date_from" => null,
        "expiration_date_to" => null
    );
    
    $preference = $mp->create_preference($preference_data);

    $paymentButton = '<p>Si aún no realizaste el pago podés hacerlo ingresando al siguiente link:</p>
                  <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                          <tbody>
                            <tr>
                              <td align="left">
                                <table border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td> 
                                      <script>window.location.href = "'.$preference["response"]["init_point"].'";</script>
                                      <a style="color:white !important;" href="'.$preference["response"]["init_point"].'" target="_blank">Pagar ahora con MercadoPago</a> 
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                 </table>';

    return $paymentButton;

}

function updateCartRow(){

global $mysqli;

if(isset($_COOKIE["active_sale"])) {


    $prod_id = $_POST['prod_id'];
    $qty = $_POST['qty'];
    $sales_id = $_POST['sales_id'];
 

    $cookieValue = $_COOKIE["active_sale"];

    $tempArray = explode('-', $cookieValue);
    $cookie_sales_id = $tempArray[1];
    $random_cookie = $tempArray[0];
   
    if($qty > 0 && $cookie_sales_id == $sales_id){
        $query = "UPDATE sales_data SET qty='$qty' WHERE prod_id = $prod_id AND sales_id = '$sales_id';";            
        if(mysqli_query($mysqli, $query)){
        

            list($sales_products,$totalPrice,$envio) = bringCartList($sales_id,$random_cookie);
            echo $totalPrice;
        
        } else {
        
            list($sales_products,$totalPrice,$envio) = bringCartList($sales_id,$random_cookie);
 
            echo $totalPrice;        
        }
    
    }
    
    

} //end if issset COKKIE active_sale

}







function getPerson(){
$id = $_POST['id'];  

global $mysqli;

$query = "SELECT id, first_name, last_name, url, email, avatar, self_description,password,username  FROM people WHERE id = '$id';";

if ($result = mysqli_query($mysqli, $query)) {$row = mysqli_fetch_row($result);}
//$product = array('id' => "$id",'nombre');
echo $json = json_encode($row);
}





?>
