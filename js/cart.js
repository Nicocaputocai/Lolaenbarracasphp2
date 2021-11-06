





function alterQty(thisobject){



var value = $(thisobject).val();

var fieldId = $(thisobject).attr('id');
var array = fieldId.split("-");
var sales_id = $('#sales_id').val();
var price = $('#price'+array["1"]).val();
//alert(value+'  '+array["1"]);


params = 'operation=updateCartRow&prod_id='+array["1"]+'&qty='+value+'&sales_id='+sales_id;

    $.ajax({
    url: '/includes/cart_ajax.php',
    type: 'POST',
//    dataType: 'json',
    data: params,
    success: function(total){

//                 refreshProducts();
//                 var text = message[0];
//                 var result = message[1];
//                 if (message[3]){var newId = message[3];}

//                 if (result == '1'){result = 'success'}else{result = 'error'}

//                 printMessage(text,result);
//                 $('#operation').val('editPost');
//                 if (newId){$('#idPost').val(newId);}

//var envio = parseInt($('#valorEnvio').html());
var numericTotal = parseInt(total);
//var finalTotal = (envio + numericTotal);
var finalTotal = numericTotal;
$('#totalPrice').html(total);
$('#finalTotal').html(finalTotal);

                 return false;

             },

           });


//si no canceló el stock de ese producto ahi actualizar $Total parcial y totales finales.
var totalProductPrice = value * price;
//alert('value='+value+'  price='+price+'subtotal='+(value * price));
$('#totalXqty'+array["1"]).html(totalProductPrice);

}





function validateCartForm(sales_id){

var error = 0;
var error_message = '';
var params = 'operation=confirmSale'
//metodo envio

var documento = $('#documento').val();if (documento){params = params+'&documento='+documento;} else{error += '10'; error_message +='El campo Documento es obligatorio.<br />'}
var address = $('#address').val();if (address){params = params+'&address='+address;} else{error += '10'; error_message +='El campo Dirección es obligatorio.<br />'}
var postcode = $('#postcode').val();if (postcode){params = params+'&postcode='+postcode;}else{error += '10'; error_message +='El campo Código postal es obligatorio.<br />'}
var provincia = $('#provincia').val();if (provincia){params = params+'&provincia='+provincia;}else{error += '10'; error_message +='El campo Provincia es obligatorio.<br />'}
var localidad = $('#localidad').val();if (localidad){params = params+'&localidad='+localidad;}else{error += '10'; error_message +='El campo Localidad es obligatorio.<br />'}
var client_message = $('#client_message').val();if (client_message){params = params+'&client_message='+client_message;}
var firstname = $('#firstname').val();if (firstname){params = params+'&firstname='+firstname;}else{error += '10'; error_message +='El campo Nombre es obligatorio.<br />'}
var lastname = $('#lastname').val();if (lastname){params = params+'&lastname='+lastname;}else{error += '10'; error_message +='El campo Apellido es obligatorio<br />'}
var phone = $('#phone').val();if (phone){params = params+'&phone='+phone;}else{error += '10'; error_message +='El campo Teléfono es obligatorio<br />'}
var email = $('#email').val();if (email){params = params+'&email='+email;}else{error += '10'; error_message +='El campo email es obligatorio<br />'}
if (sales_id){params = params+'&sales_id='+sales_id;}
var payment_method_id = $('input[name=payment_method_id]:checked').val();if(payment_method_id){params = params+'&payment_method_id='+payment_method_id;}
var shipping_method_id = $('input[name=shipping_method_id]:checked').val();if(shipping_method_id){params = params+'&shipping_method_id='+shipping_method_id;}

var client_message = $('#client_message').val();if (client_message){params = params+'&client_message='+client_message;}

ok = validateEmail(email);

 
//medio de pago


if(error > '0' || !ok){

    if(!ok){error += '10'; error_message +='La dirección de correo no es válida<br />'}

          $('#modal-body').children('p').html(error_message);
          $('#cartModal').modal('show');

return false;

}else if(ok){

    //
    $("#confirm_sale").html("<span><i class='fa-li fa fa-spinner fa-spin'></i>Espere por favor</span>");
    document.getElementById("confirm_sale").disabled = true;
    $.ajax({
    url: '/includes/cart_ajax.php',
    type: 'POST',
    dataType: 'json',
    data: params,
    success: function(respuesta){

    if(respuesta[0] == '1'){

        debugger;
        var boton = 'En breve nos comunicaremos con usted para coordinar la entrega';
        if(respuesta[1].length > '3'){
            boton = respuesta[1];
        }
        $('#modal-body').children('p').html('' +
            '<h3>¡Muchas gracias por su pedido!</h3><br /><br />'+boton+'. <br/><br/>' +
            '<div class="alert alert-danger" role="alert">\n' +
            '  <strong>IMPORTANTE:  La disponibilidad de talle y color será confirmada a la brevedad</strong>' +
            '</div>' +
            '<br/> <a class="btn btn-success" href="http://www.lolaenbarracas.com.ar/?unsetCkies=1">Cerrar y Guardar</a>');
        $('#cartModal').modal('show');

        setTimeout(function() {
            window.location = '/?unsetCkies=1';
            return false;
        }, 15000);


    } else { 
        $('#modal-body').children('p').html('No se pudo guardar la reserva');
        $('#cartModal').modal('show');
    }


                 return false;

    },

    });

    ///

}

}



function getLocalidades(){

    var provincia_id = $('#provincia').val();
    var params = 'operation=getLocalidades';
   $('#localidad').html('');

    if(provincia_id){
        params = params+'&provincia_id='+provincia_id;
        $.ajax({
            url: '/includes/cart_ajax.php',
            type: 'POST',
            dataType: 'json',
            data: params,
            success: function(response){

                for(index=0; index<response.length; index++) {
                               var id = response[index].id;
                               var name = response[index].name;

                            $('#localidad').append('<option value="'+id+'">'+name+'</option>');

                } 
            },
    
        });
    





    }

}

