
<?php if($error){?>
		   <!-- Modal -->
		   <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
			    <div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
						Personalizadas<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<div class="modal-body" id="modal-body">
                                                    <p><?php echo $error;?></p>
						</div><!-- .modal-body -->
					</div><!-- .modal-content -->
			    </div><!-- .modal-dialog -->
		   </div>
		   <!-- END Modal -->
<?php } else if($fotin){ ?>

		   <!-- Modal -->
		   <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
			    <div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
						Personalizadas<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						</div>
						<div class="modal-body" id="modal-body">
                                                    <p>Genial! Ya recibimos tu solicitud, en breve nos pondremos en contacto con vos.</p>
						</div><!-- .modal-body -->
					</div><!-- .modal-content -->
			    </div><!-- .modal-dialog -->
		   </div>
		   <!-- END Modal -->
<?php
      }

?>

                  <div class="modal fade" id="myOtherModal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg" >
                      <div class="modal-content">
                        <div class="modal-header">
                          <button aria-label="Close" data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span></button>
                          <h4 id="gridSystemModalLabel" class="modal-title">Contacto</h4>
                        </div>
                        <div class="modal-body" id="other-modal-body">
                         <p></p>
                        </div>
                      </div>
                    </div>
                  </div>




<script>




function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}


function sendForm(formid){

// else if (formid == 'contact'){
debugger;
var error = '';
var error_message = '';

var data = '';
//var lastname = $('#lastname').val();
var first_name = $('#name').val();if(!first_name){error += '10';error_message = '\nDebe completar su nombre';} else {data = '&name='+first_name;}

//if(first_name){data = '&name='+first_name}
var phone = $('#telefono').val();if(phone){data = data+'&phone='+phone}
//var last_name = $('#contact_last_name').val();if(last_name){data = data+'&last_name='+last_name}
var email = $('#email').val();if(email){data = data+'&email='+email} else {error += '10';error_message = '\nDebe completar su email';}
var contact_message = $('#message').val();if(contact_message){data = data+'&message='+contact_message} else {error += '10';error_message = '\nDebe completar su consulta';}
//if($('#contact_newsletters').prop('checked')){data = data+'&contact_newsletters=1'}

ok = validateEmail(email);

data = encode_utf8(data);

if (error > '1'){alert(error_message); return false;}

if(ok && contact_message){
debugger;
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=contact'+data,
    success: function(response){
debugger;
        if (response == null){

            message = 'No se ha podido registrar la consulta';
            $('#other-modal-body').children('p').text(message);
            $('#myOtherModal').modal('show');

        } else  {
            if (response.trim() == '1'){
            //email not valid
            message = 'No se ha podido registrar su consulta.';
            $('#other-modal-body').children('p').text(message);
            $('#myOtherModal').modal('show');

            }else if (response.trim() == '2'){
            //ok
debugger;
            message = 'Se ha registrado correctamente su consulta';
            $('#myOtherModal').modal('show');
            //$('#myModal').show();
            $('#other-modal-body').children('p').text(message);
//return false;
//            $('#main-contact-form')[0].reset();
            }
            $('#contactForm')[0].reset();
        }

     }

    });

} else {

            message = 'La dirección ingresada no es correcta.';
            $('#other-modal-body').children('p').text(message);
            $('#myOtherModal').modal('show');
//            $('#modal-body').next().p.html(message);

}

}



function sendNewsLetter(){

var email = $('#nl-email').val();

ok = validateEmail(email);

if(ok){

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=newsletter&email='+email,
    success: function(response){
        if (response == null){

            message = 'No se ha podido registrar el correo';
            alert(message);

        } else  {
            if (response.trim() == '1'){
            //email not valid
            alert('El correo ingresado no es válido.');
            }else if (response.trim() == '3'){
            alert('El correo ya se encuentra registrado.'); 
            }else if (response.trim() == '2'){
            //ok
            alert('Se ha registrado correctamente tu correo');
            }
        }

     },

    });

} else {

alert('La dirección ingresada no es correcta.');

}

}



function enviarPersonalizada(){

var error = 0;
var error_message = '';

var name = $('#name').val();if(name){} else{error += '10'; error_message +='El campo nombre es obligatorio.<br />'}
var email = $('#email').val();if(email){} else{error += '10'; error_message +='El campo email es obligatorio.<br />'}
var color_id = $('#color_id').val();if(color_id){} else{error += '10'; error_message +='El campo color es obligatorio.<br />'}
var payment_method_id = $('#payment_method_id').val();
var waist_id = $('#waist_id').val();if(waist_id){} else{error += '10'; error_message +='El campo talle es obligatorio.<br />'}
var shipping_method_id = $('input[name=shipping_method_id]:checked').val();
ok = validateEmail(email);

if( document.getElementById("pictures").files.length == 0 ){
    error += '10'; error_message +='Tenés que subir una imagen para la remera.<br />';
}


    if(error > '0' || !ok){
    
        if(!ok){error += '10'; error_message +='La dirección de correo no es válida<br />'}
    
//              $('#modal-body').children('p').html(error_message);
//              $('#cartModal').modal('show');
        alert(error_message);
    
        return false;
    
    }else if(ok){
    
        $('form#personalizada').submit();
    
    }
    

}

</script>



  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-lg-4">
          <div class="footer-logo"><a href="/"><img src="/images/footer-logo.png" alt="fotter logo"></a></div>
          <p>Rodriguez Peña 1051 - Buenos Aires, Argentina. </p>
		  <p>Local B.20 - Galeria Bond Street. </p>
          <div class="payment">
            <ul>
              <li><img title="Trabajamos con Mercado Pago" alt="Visa" src="/images/mercado.png" class="grayscale"></a></li>
               <!--<li><a href="#"><img title="Paypal" alt="Paypal" src="/images/paypal.png" class="grayscale"></a></li>
              <li><a href="#"><img title="Discover" alt="Discover" src="/images/discover.png" class="grayscale"></a></li>
              <li><a href="#"><img title="Master Card" alt="Master Card" src="/images/master-card.png" class="grayscale"></a></li>-->
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-xs-12 col-lg-2 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">Información<a class="expander visible-xs" href="#TabBlock-1">+</a></h3>
            <div class="tabBlock" id="TabBlock-1">
              <ul class="list-links list-unstyled">
                <li><a href="/quienes_somos.php">Quienes Somos</a></li>
				<li><a href="/medidas_talles.php">Medidas de Talles</a></li>
                <li><a href="/faq.php">FAQs</a></li>
                <li><a href="/contacto.php">Contáctenos</a></li>
                <!--<li><a href="faq.php">FAQs</a></li>
                <li><a href="#">Terminos y Condiciones</a></li>-->
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-xs-12 col-lg-2 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">Catálogo<a class="expander visible-xs" href="#TabBlock-2">+</a></h3>
            <div class="tabBlock" id="TabBlock-2">
              <ul class="list-links list-unstyled">
                <li><a href="/productos/all/?type=RE">Remeras</a></li>
                <li><a href="/productos/all/?type=MU">Musculosas</a></li>
                <li><a href="/productos/all/?type=AB">Abrigos</a></li>
                <li><a href="/productos/all/?type=AC">Accesorios</a></li>
                <li><a href="/productos/all/?type=LA">Ladies</a></li>
                
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-xs-12 col-lg-2 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">Categorías<a class="expander visible-xs" href="#TabBlock-3">+</a></h3>
            <div class="tabBlock" id="TabBlock-3">
              <ul class="list-links list-unstyled">
                <li> <a href="/productos/cat/21-calaveras?type=RE">Calaveras</a> </li>
                <li> <a href="/productos/cat/22-cine-y-television?type=RE">Cine y Televisión</a> </li>
                <li> <a href="/productos/cat/23-frases-y-comicas?type=RE">Frases y Cómicas</a> </li>
                <li> <a href="/productos/cat/24-personajes-famosos?type=RE">Personajes Famosos</a> </li>
                <li> <a href="/productos/cat/25-rock-y-musica?type=AB">Rock y Música</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3 col-xs-12 col-lg-2 collapsed-block">
          <div class="footer-links">
            <h3 class="links-title">Servicios<a class="expander visible-xs" href="#TabBlock-4">+</a></h3>
            <div class="tabBlock" id="TabBlock-4">
              <ul class="list-links list-unstyled">
                <li> <a href="/personalizadas.php">Personalizá tu Remera</a> </li>
				<li> <a href="/blog/all/">Blog</a> </li>
                <li> <a href="/cart.php">Mi Carrito</a> </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-newsletter">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h3>Subcribite al nuestro Newsletter!</h3>
            <p>Mantenete al día con las últimas noticias y promos.</p>
            
            <form id="newsletter-validate-detail" method="post" action="#">
              <div class="newsletter-inner">
                <input class="newsletter-email" name='Email' placeholder='Ingresá tu Email'/>
                <button class="button subscribe" type="submit" title="Subscribe">Subcribir</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-coppyright">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-xs-12 coppyright"> Copyright © <?php echo date('Y'); ?> <a href="#"> Lola en Barracas </a>. Todos los derechos reservados. </div>
		  <div class="social col-sm-6 col-xs-12">
            <ul class="inline-mode">
              <li class="social-network fb"><a title="Facebookeanos" target="_blank" href="https://www.facebook.com/moe.bond.street"><i class="fa fa-facebook"></i></a></li>
              <!--<li class="social-network googleplus"><a title="Connect us on Google+" target="_blank" href="https://plus.google.com"><i class="fa fa-google-plus"></i></a></li>-->
              <li class="social-network instagram"><a title="Instagrameá" target="_blank" href="https://www.instagram.com/moe.bond.street/"><i class="fa fa-instagram"></i></a></li>
			  <li class="social-network wa"><a title="Watsapeanos al +5411 6157-3683" target="_blank" href="https://twitter.com/"><i class="fa fa-whatsapp"></i></a></li>
              <!--<li class="social-network rss"><a title="Connect us on Instagram" target="_blank" href="https://instagram.com/"><i class="fa fa-rss"></i></a></li>-->
              <!--<li class="social-network linkedin"><a title="Connect us on Linkedin" target="_blank" href="https://www.pinterest.com/"><i class="fa fa-linkedin"></i></a></li>-->
              
            </ul>
          </div>
        </div>
      </div>
    </div>
	<div class="footer-coppyright">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-xs-12 coppyright">  <a href="http://www.pmfuturo.com.ar" target="_blank"> Diseñado por pmfuturo - comunicación integral </a> </div>
          <div class="social col-sm-6 col-xs-12">
            <ul class="inline-mode">
              <!--<li class="social-network fb"><a title="Connect us on Facebook" target="_blank" href="https://www.facebook.com/moe.bond.street"><i class="fa fa-facebook"></i></a></li>
              <!--<li class="social-network googleplus"><a title="Connect us on Google+" target="_blank" href="https://plus.google.com"><i class="fa fa-google-plus"></i></a></li>-->
              <!--<li class="social-network tw"><a title="Connect us on Twitter" target="_blank" href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
              <!--<li class="social-network rss"><a title="Connect us on Instagram" target="_blank" href="https://instagram.com/"><i class="fa fa-rss"></i></a></li>-->
              <!--<li class="social-network linkedin"><a title="Connect us on Linkedin" target="_blank" href="https://www.pinterest.com/"><i class="fa fa-linkedin"></i></a></li>-->
              <!--<li class="social-network instagram"><a title="Connect us on Instagram" target="_blank" href="https://instagram.com/"><i class="fa fa-instagram"></i></a></li>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <a href="#" class="totop"> </a> </div>

<!-- End Footer --> 
<!-- JS --> 

<!-- jquery js --> 
<script type="text/javascript" src="/js/jquery.min.js"></script> 

<!-- bootstrap js --> 
<script type="text/javascript" src="/js/bootstrap.min.js"></script> 

<!-- owl.carousel.min js --> 
<script type="text/javascript" src="/js/owl.carousel.min.js"></script> 

<!-- bxslider js --> 
<script type="text/javascript" src="/js/jquery.bxslider.js"></script> 

<!-- flexslider js --> 
<script type="text/javascript" src="/js/jquery.flexslider.js"></script> 


<!--jquery-slider js --> 
<script type="text/javascript" src="/js/slider.js"></script> 

<!--cloud-zoom js --> 
<script type="text/javascript" src="/js/cloud-zoom.js"></script> 

<!-- megamenu js --> 
<script type="text/javascript" src="/js/megamenu.js"></script> 
<script type="text/javascript">
        /* <![CDATA[ */   
        var mega_menu = '0';
        
        /* ]]> */
        </script> 

<!-- jquery.mobile-menu js --> 
<script type="text/javascript" src="/js/mobile-menu.js"></script> 

<!--jquery-ui.min js --> 
<script src="/js/jquery-ui.js"></script> 

<!-- main js --> 
<script type="text/javascript" src="/js/main.js"></script> 

        <?php if($products_section > 0){ ?>
        <script src="/js/products.js"></script>
        <?php }?>

        <?php if($cart > 0){ ?>
        <script src="/js/cart.js"></script>
        <?php }?>

<!-- jquery.waypoints js --> <script type="text/javascript" src="/js/waypoints.js"></script>


<?php if($index > 0){ ?>

<script type="text/javascript">

			/******************************************
				-	PREPARE PLACEHOLDER FOR SLIDER	-
			******************************************/

			var setREVStartSize=function(){};
						
				
			setREVStartSize();
			function revslider_showDoubleJqueryError(sliderID) {}
			var tpj=jQuery;
			tpj.noConflict();
			var revapi6;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_6_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_6_1");
				}else{
					revapi6 = tpj("#rev_slider_6_1").show().revolution({
						sliderType:"standard",
						sliderLayout:"auto",
						dottedOverlay:"none",
						delay:6000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 0.7,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"hades",
								enable:true,
								hide_onmobile:false,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								tmp:'<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div></div>',
								left: {
									h_align:"left",
									v_align:"center",
									h_offset:20,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"center",
									h_offset:20,
									v_offset:0
								}
							}
							,
							bullets: {
								enable:true,
								hide_onmobile:false,
								style:"hades",
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								direction:"horizontal",
								h_align:"center",
								v_align:"bottom",
								h_offset:0,
								v_offset:20,
								space:5,
								tmp:'<span class="tp-bullet-image"></span>'
							}
						},
						gridwidth:1920,
						gridheight:645,
						lazyType:"none",
						shadow:0,
						spinner:"spinner0",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"on",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						startWithSlide:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/
		</script> 


<?php }?>

<?php if($error || $fotin){?>
<script>

$('#myModal').modal('show');

</script>

<?php }?>

</body>
</html>
