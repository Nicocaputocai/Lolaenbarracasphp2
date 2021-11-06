

function selectColor(id){

$('.colors').removeClass( "active_field" );
$('.tickcontainer').html("");
$('.colors').removeClass("force_border");

id = parseInt(id);

var whiteTickColors  = [16,9,11,2];

if(whiteTickColors.indexOf(parseInt(id))){
    $("#b"+id).append('<i class="fa fa-check fa-2x white_font" ></i>');
} else {
    $("#b"+id).append('<i class="fa fa-check fa-2x black_font" ></i>');
}

$('#chosen_color').val(id);

}


function selectWaist(selectId){


if(selectId.name == 'women'){
    $("#men").val(0);
    $("#child").val(0);
}else if(selectId.name == 'men'){
    $("#women").val(0);
    $("#child").val(0);

}else{
    $("#women").val(0);
    $("#men").val(0);
}
    var selected_value = selectId.value;
    $('#chosen_waist').val(selected_value);

}


function buy(){

var p_type = $('#p_type').val();
var has_waists = $('#has_waists').val();
var error = 0;
var error_message = ' ';
var p_id = $('#p_id').val();
var params = 'addToCart='+p_id;
var qty = $('#qty').val();if(!qty  || qty <= Number('0')){error = error + '10';error_message = error_message+'Debe seleccionar la cantidad';}else{params = params+'&qty='+qty;}
var color_id = $('#chosen_color').val();if(!color_id){error = error + '10';error_message = error_message+'Debe seleccionar un color';}else{params = params+'&color_id='+color_id;}

if(has_waists == 'Y'){
var waist_id = $('#chosen_waist').val();if(!waist_id || waist_id == "0"){error = error + '10';error_message = error_message+'\nDebe seleccionar un talle';}else{params = params+'&waist_id='+waist_id;}
}

//var print_type = $('#print_type').val();if(!print_type || print_type == '0'){error = error + '10';error_message = error_message+'\nDebe seleccionar un tipo de estampa';}else{params = params+'&print_type='+print_type;}
params = params+'&print_type=1';

if(error > '0'){
    alert(error_message);return false;
} else{

    url = 'http://www.lolaenbarracas.com.ar/cart.php?'+params;
    window.location = url;
}

}
