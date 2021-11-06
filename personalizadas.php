<?php 

$file_name = "Personalizadas - Lola en barracas";
$file_id = 7;

$fotin = '';
$error = '';

include 'includes/db_connect.php';
require_once  "includes/bulletproof/bulletproof.php";

$image = new Bulletproof\Image($_FILES);

// Pass a custom name, or leave it if you want it to be auto-generated
#$image->setName($name); 

// define the min/max image upload size (size in bytes) 
#$image->setSize($min, $max); 

// define allowed mime types to upload
$image->setMime(array('jpeg', 'gif'));  

// set the max width/height limit of images to upload (limit in pixels)
#$image->setDimension($width, $height); 

$folderName = '/home/2222/public_html/users_uploads';
$optionalPermission = '';

// pass name (and optional chmod) to create folder for storage
//$image->setLocation($folderName, $optionalPermission);  
$image->setLocation($folderName, $optionalPermission);  

if($image["pictures"]){
    $upload = $image->upload(); 
	
    if($upload){

$name = $_POST['name'];$name = mysqli_real_escape_string($mysqli,$name);
$email = $_POST['email'];$email = mysqli_real_escape_string($mysqli,$email);
$phone = $_POST['phone'];$phone = mysqli_real_escape_string($mysqli,$phone);
$color_id = $_POST['color_id'];$color_id = mysqli_real_escape_string($mysqli,$color_id);
$payment_method_id = $_POST['payment_method_id'];$payment_method_id = mysqli_real_escape_string($mysqli,$payment_method_id);
$shipping_method_id = $_POST['shipping_method_id'];$shipping_method_id = mysqli_real_escape_string($mysqli,$shipping_method_id);
$waist_id = $_POST['waist_id'];$waist_id = mysqli_real_escape_string($mysqli,$waist_id);
$message = $_POST['message'];$message = mysqli_real_escape_string($mysqli,$message);

#$post = mysqli_real_escape_string($mysqli, $post);

$fotin = $image->getName();
$file_name = $image->getName();
$file_name = $file_name.".".$image->getMime();

$file_name = mysqli_real_escape_string($mysqli,$file_name);

$sql = "INSERT INTO personalizadas 
SET 
name='$name',
email='$email',
phone='$phone',
color_id='$color_id',
payment_method_id='$payment_method_id',
shipping_method_id='$shipping_method_id',
waist_id='$waist_id',
message='$message',
file='$file_name',
p_status='2',
p_date=NOW();";

mysqli_query($mysqli, $sql);

    }else{
#        echo $image["error"]; 
$error = $image["error"];
    }
}

$noIncludes = 1;

include 'includes/includes.php';
include 'includes/configs.php';

include('header.php'); ?>

     <!-- Breadcrumbs -->

  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li class="home"> <a title="Home" href="/">Home</a><span>&raquo;</span></li>
           
            <li class="category13"><strong>Personalizadas</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumbs End --> 
<style>
.myFile {
  position: relative;
  overflow: hidden;
  float: left;
  clear: left;
}
.myFile input[type="file"] {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  font-size: 100px;
  filter: alpha(opacity=0);
  cursor: pointer;
}
</style>
  <!-- Main Container -->
  <section class="main-container col1-layout wow bounceInUp animated">
    <div class="main container">
      <div class="row">
        <section class="col-main col-sm-12">
          <div class="page-title">
            <h2>Remeras personalizadas</h2>

          </div>
          <div id="contact1" class="page-content page-contact">
               <h2 class="page-subheading">Llena el formulario y subí tu imagen</h2>
            <div class="row">
             <form method="POST" enctype="multipart/form-data" id="personalizada">
              <div class="col-sm-4">
 <!--               <h3 class="page-subheading">Llena el formulario y subí tu imagen</h3>-->
                <div class="contact-form-box">
                  <div class="form-selector">
                    <label>Nombre</label>
                    <input type="text" class="form-control input-sm" id="name" name="name" />
                  </div><br/>
                  <div class="form-selector">
                    <label>Email</label>
                    <input type="text" class="form-control input-sm" id="email" name="email" />
                  </div><br/>
                  <div class="form-selector">
                    <label>Teléfono</label>
                    <input type="text" class="form-control input-sm" id="phone" name="phone"  />
                  </div><br/>

                  <div class="form-selector">
                    <label>Color:</label><br/><br/>
                    <select  id="color_id" name="color_id" style="width:70% !important;" ><option value="0">Selecciona un color</option>
                        <?php
                        
                        $colorsArray = array();
                        
                        $colorsArray = getColors();
                        
                        foreach ($colorsArray as $cArray){ 
                        
                            $id = $cArray["id"];
                            $desc = $cArray["desc"];
                            $hex = $cArray["hex"];
                            
                            ?>
                            <option value="<?php echo $id;?>"><?php echo $desc;?></option>
                            
                            <?php
                        
                        }
                        
                        ?>
                    </select>
                  </div><br>


                  <div class="form-selector">
                    <label>Talle:</label><br/><br/>
                    <select id="waist_id" name="waist_id" style="width:70% !important;" ><option value="0">Selecciona un Talle</option>
                        <?php

    $wArray = getWaists('w');
    $mArray = getWaists('m');
    $cArray = getWaists('c');
                        
                        foreach($mArray as $ma) {
                        
                            $id = $ma["id"];
                            $desc = $ma["desc"];
                            
                            ?>
                            <option value="<?php echo $id;?>">Mujer <?php echo $desc;?></option>
                            
                            <?php
                        
                        }

                        foreach($wArray as $wa) {
                        
                            $id = $wa["id"];
                            $desc = $wa["desc"];
                            
                            ?>
                            <option value="<?php echo $id;?>">Hombre<?php echo $desc;?></option>
                            
                            <?php
                        
                        }
 



                        foreach($cArray as $ca) {
                        
                            $id = $ca["id"];
                            $desc = $ca["desc"];
                            
                            ?>
                            <option value="<?php echo $id;?>">Niño <?php echo $desc;?></option>
                            
                            <?php
                        
                        }


                       
                        ?>
                    </select>
                  </div><br>



                  <div class="form-selector">
                    <label>Forma de pago:</label><br/><br/>
                    <select id="payment_method_id" name="payment_method_id" style="width:90% !important;" ><option value="0">Selecciona una forma de pago</option>
                        <?php

 $paymentsArray = getPaymentMethods('');
 
 foreach($paymentsArray as $payArray){



 ?> 

                            <option value="<?php echo $payArray['id']?>"><?php echo $payArray['name'];?></option>
<?php 

 }    
                             
                             
                        
                        ?>
                    </select>
                  </div><br>



                  <div class="form-selector">
                    <label>Forma de Entrega:</label><br/><br/>
                    <input type="radio" checked="checked" value="1" name="shipping_method_id">  A convenir<br/>
                    <input type="radio" checked="checked" value="2" name="shipping_method_id">  Oca (Sucursal mas cercana)<br/>
                    <input type="radio" checked="checked" value="3" name="shipping_method_id">  Correo Argentino<br/>
                  </div><br>



                <div class="contact-form-box">
                  <div class="form-selector">
                    <label>Mensaje</label>
                    <textarea class="form-control input-sm" rows="10" id="message" name="message"></textarea>
                  </div><br/>
                </div>

                  <div class="form-selector">
                    <label>Foto:</label><br/><br/>
                        <input type="hidden" name="MAX_FILE_SIZE" value="1000000"/>

                        <label  class="myFile">
                            <i class="fa fa-upload fa-2x" aria-hidden="true"></i> Subí tu imagen aca: 
                            <input type="file" name="pictures" id="pictures"/>
                        </label>
                        <br/>
                        <br/>
                        <br/>
                        <button onclick="enviarPersonalizada();return false;" type="submit" class="button"><i class="fa fa-send"></i>&nbsp; <span>Subir</span></button>
                  </div>



                </div>



              </div>


               </form>


            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
  <!-- Main Container End --> 
  
  <!-- home contact -->
  <section id="contact" class="gray">
    <div class="container"> 
      
     <!-- Separador Linea-->
		  <ul class="nav home-nav-tabs home-product-tabs">
          </ul>
     <!-- End separador linea--> 

  </section>
  
  


<?php include('footer.php'); ?>
