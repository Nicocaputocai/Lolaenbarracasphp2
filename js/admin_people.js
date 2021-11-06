// --- Definicion de directorios, urls etc:  --- //
var profilePictFolder = '/images/authors/thumbs/';
var ikonFolder = '/iconz/ikons/64/';
var profileViewUrl = '/author/profile/';

// --- Array que vincula action con id de divs, menús: --- ///
var assocText = new Object(); // or just {}
assocText['getAllPosts'] = 'articles';
assocText['getAllProfiles'] = 'admin';
assocText['editPage'] = 'editPage';
assocText['getAllSections'] = 'sections';
assocText['getAllEvents'] = 'events';
assocText['getAllMessages'] = 'crm';
assocText['getAllProducts'] = 'products';
assocText['getAllSales'] = 'sales';


// --- Document Ready: --- ///
jQuery(document).ready(function(){

    var button = $('#upload_button'), interval;

    new AjaxUpload('#upload_button', {
        action: '/includes/uploader.php',
        onSubmit : function(file , ext){
        if (! (ext && /^(jpg|png|jpeg|gif)$/.test(ext))){
            // extensiones permitidas
            alert('Error: Solo se permiten imagenes');
            // cancela upload
            return false;
        } else {

// ----     Cambio el texto del boton y lo deshabilito --- //
            button.text('Subiendo...');
            this.disable();
        }
        },
        onComplete: function(file, response){
            button.text('Subir foto');
            // habilito upload button                       
            this.enable();          
            // Agrega archivo a la lista
            var fotoSrc = '/images/authors/thumbs/'+file; 
            $('#avatarPict').attr('src',fotoSrc);
            $('#avatarUrl').val(file);

//            $('#avatarPict').val(fotoSrc);

            message = 'Se ha subido la foto correctamente';

            printMessage(message,'notify');
 
        }   
    });



// Setea actiones, menú etc a partir de la action:

    var adminAction = $('#adminAction').val();
    if (adminAction){
        if (adminAction == 'getAllPosts'){
            getAllPosts('');

        } else if (adminAction == 'editPage'){
            editMode(adminAction,'');
        } else if (adminAction == 'getAllEvents'){
            getAllEvents();
        } else if (adminAction == 'getAllSales'){
            getAllSales();
        } else if (adminAction == 'getAllProducts'){
            getAllProducts();
        } else if (adminAction == 'getAllSections'){
            getAllSections();
        } else if (adminAction == 'getAllProfiles'){
            getAllProfiles();
        }
            cleanMenu(adminAction);
            setSectionStyle(adminAction);
    }

    $('#checkallProducts:checkbox').change(function () {
        if ($(this).prop("checked")) {
            $('input:checkbox').prop('checked', 'checked');
        } else {
            $('input:checkbox').removeProp('checked');
        }
    });


  $('#eventQ').keypress(function(e) {
            // Enter pressed?
            if(e.which == 10 || e.which == 13) {
                getAllEvents('search');
            }
        });


  $('#q').keypress(function(e) {
            // Enter pressed?
            if(e.which == 10 || e.which == 13) {
                getAllPosts('search');
            }
        });

  $('#prodQ').keypress(function(e) {
            // Enter pressed?
            if(e.which == 10 || e.which == 13) {
                getAllProducts('search');
            }
        });
    $('#priceFrom').keypress(function(e) {
        // Enter pressed?
        if(e.which == 10 || e.which == 13) {
            getAllProducts('search');
        }
    });

    $('#priceTo').keypress(function(e) {
        // Enter pressed?
        if(e.which == 10 || e.which == 13) {
            getAllProducts('search');
        }
    });



});
// final de Document Ready.


function setSectionStyle(section){

/*       $('#main_menu li').removeClass("selectedSection");*/
       var li_selected = assocText[section];
       $('#'+li_selected+'_li').addClass('selectedSection');
}


function cleanMenu(action){

$('#actionsMenu ul').hide();

    if (action == 'getAllPosts'){

       $('#postsMenu').show();
       $('#postsActMenu').show();

   }else if (action == 'getAllSections'){

        $('#sectionsActMenu').show();
        $('#sectionsMenu').show();


    }else if (action == 'getAllMessages'){

        $('#CRMMenu').show();
        $('#CRMActMenu').show();

    }else if (action == 'getAllEvents'){

        $('#eventsActMenu').show();       
        $('#eventsMenu').show();       

    }else if (action == 'getAllEventsCat'){

        $('#eventsActMenu').show();       
        $('#eventsMenu').show();       

    }else if (action == 'getAllSectionsCat'){

        $('#sectionsActMenu').show();

    }else if (action == 'getAllEventsCat'){

        $('#eventsActMenu').show();       
        $('#eventsMenu').show();       

    }else if (action == 'editPage'){
        

    }else if (action == 'getAllPersonalizadas'){

debugger;
        $('#salesActMenu').hide();
        $('#personalizadasActMenu').show();

    }else if (action == 'getAllSales'){

        $('#salesMenu').show();
        $('#salesActMenu').show();
        $('#personalizadasActMenu').hide();

    }else if (action == 'getAllProducts'){

         $('#productsMenu').show();
        $('#productsActMenu').show();

    }else if (action == 'getAllProfiles'){

        $('#adminActMenu').show();       
        $('#adminMenu').show();
   }

}

function cleanTables(action){

$('.profileList').hide();

    if (action == 'getAllPosts'){
           $('#postTable').show();
   
// Acciones de eventos:
    }else if (action == 'getAllEvents'){

        $('#eventsTable').show();

   

    }else if (action == 'getAllSectionsCat'){


    }else if (action == 'getAllEventsCat'){

        $('#eventsCatTable').show();

    }else if (action == 'getAllPlaces'){

        $('#placesTable').show();


    }else if (action == 'getAllSections'){

        $('#sectionsTable').show();

    }else if (action == 'getAllProfiles'){

        $('#profileTable').show();

    }else if (action == 'getAllNewsContacts'){

    }else if (action == 'getAllMessages'){

            $('#messagesTable').show();

    }else if (action == 'getAllPersonalizadas'){

        $('#salesTable').hide();       
    }else if (action == 'getAllSales'){

        $('#salesTable').hide();       
    }else if (action == 'getAllProducts'){

        $('#productsCatTable').hide();       

    }else if (action == 'getAllProductsSubCategories'){
        $('#productsSubCatTable').show();

    }else if (action == 'getAllProductsCategories'){
        $('#productsCatTable').show();

    }else if (action == 'getAllCategories'){

        $('#catTable').show();       

    }

}


function editMode(operation,id){

$('#postImageUrl').val('');
$('#sectionImageUrl').val('');

$('#editBox form').fadeOut();

$('#main').fadeOut();
$('#editBox').fadeIn();

if(operation != 'editProduct' && operation != 'newProduct'){
    $('#editBox img').attr('src','');
}


$("#editEvent" )[ 0 ].reset();
$("#editPerson" )[ 0 ].reset();
$("#editPost" )[ 0 ].reset();
$("#editProduct" )[ 0 ].reset();
$("#editCategory" )[ 0 ].reset();
$("#editProductCategory" )[ 0 ].reset();
$("#editPage" )[ 0 ].reset();
$("#editSection" )[ 0 ].reset();
$("#editSale" )[ 0 ].reset();
$("#editProductSubCategory" )[ 0 ].reset();
$("#editPersonalizada" )[ 0 ].reset();


    if (operation == 'editPerson' && id !='undefined'){

        $('#editPerson').fadeIn();
        $('#idPerson').val(id);
        $('#operation').val(operation);
        
        getPerson(id);return false;

    } else if (operation == 'editMessage' && id !='undefined'){

       $('#operation').val(operation);
       $('#editMessage').fadeIn();
        
        getMessage(id);return false;

    } else if (operation == 'newProductSubCategory'){

        $('#operation').val(operation);
        $('#idProdSubCategory').val('');
        $("#subcat_in_menu").attr("checked", false);
        $('#editProductSubCategory').fadeIn();

    getProductsCategories('subcat_catid');


   } else if (operation == 'newProductsCategory'){
        $('#operation').val(operation);
        $('#idProdCategory').val('');
        $("#in_menu").attr("checked", false);
        $('#editProductCategory').fadeIn();

    } else if (operation == 'editSale' && id !='undefined'){

        $('#editSale').fadeIn();
        $('#idSale').val(id);
        $('#operation').val(operation);
        
        getSale(id);return false;

    } else if (operation == 'editPersonalizada' && id !='undefined'){

        $('#editPersonalizada').fadeIn();
        $('#idPersonalizada').val(id);
        $('#operation').val(operation);
        
        getPersonalizada(id);return false;

    } else if (operation == 'editSectionCategory' && id !='undefined'){

        $('#editSectionCategory').fadeIn();
        $('#section_cat_id').val(id);
        $('#operation').val(operation);
        
        getSectionCategory(id);return false;

    } else if (operation == 'newSectionCategory'){
               $('#editSectionCategory').fadeIn();
               $('#operation').val(operation);
        $('#section_cat_id').val('');

    } else if (operation == 'editCategory' && id !='undefined'){

        $('#editCategory').fadeIn();
        $('#idCategory').val(id);
        $('#operation').val(operation);
                
        getCategory(id);return false;

    } else if (operation == 'editProductSubCategory' && id !='undefined'){

                $('#editProductSubCategory').fadeIn();
        $('#idProdSubCategory').val(id);
        $('#operation').val(operation);
               
        getProductSubCategory(id);return false;

    } else if (operation == 'editProductCategory' && id !='undefined'){

                $('#editProductCategory').fadeIn();
        $('#idProdCategory').val(id);
        $('#operation').val(operation);
               
        getProductCategory(id);return false;

    } else if (operation == 'editEventCategory' && id !='undefined'){

       
        $('#editEventCategory').fadeIn();
        $('#idEventCategory').val(id);
        $('#operation').val(operation);
        
        getEventCategory(id);return false;

    } else if (operation == 'newEvent'){
               $('#editEvent').fadeIn();
        $('#idEvent').val('');
        $('#operation').val(operation);
       
    initEventEditor();    
getMarkerSelect();
getEventCatSelect();

    } else if (operation == 'editEvent' && id !='undefined'){

              $('#editEvent').fadeIn();
              $('#idEvent').val(id);
        $('#operation').val(operation);
      

    initEventEditor();    
        getEvent(id);return false;


    } else if (operation == 'editSection' && id !='undefined'){

             $('#editSection').fadeIn();
             $('#idSection').val(id);
        $('#operation').val(operation);
         initSectionEditor();    
        
        getSection(id);return false;

    } else if (operation == 'newSection'){

                $('#editSection').fadeIn();
             $('#idSection').val('');
        $('#operation').val(operation);
         initSectionEditor();    
getSectionCatSelect();
    } else if (operation == 'editPage'){
             $('#operation').val(operation);
             editPage();
                $('#editPage').fadeIn();
//         $('#foto').attr('src','');
//        getAuthorSelect();
//       getTags();

    } else if (operation == 'newEventCategory'){
             $('#editEventCategory').fadeIn();
             $('#operation').val(operation);
        $('#idEventCategory').val('');
        $("#in_menu").attr("checked", false);
     

    } else if (operation == 'newCategory'){
            $('#editCategory').fadeIn();
            $('#operation').val(operation);
        $('#idCategory').val('');
        $("#in_menu").attr("checked", false);
    
    } else if (operation == 'editPost' && id !='undefined'){
           $('#editPost').fadeIn();
           $('#idPost').val(id);
        $('#operation').val(operation);
       initPostEditor();    
        getPost(id);return false;

    } else if (operation == 'newPost'){
           $('#editPost').fadeIn();
           $('#operation').val(operation);
        $('#idPerson').val('');
   $('#postImageBox').html('');
   //$('#postImageUrl').val('');
//         $('#foto').attr('src','');
//                            $('#author_id').html('');
 //                           $('#category_id').html('');
  //                          $('#tagsBox').html('');
    initPostEditor();    

        getAuthorSelect();
        //getTags();
        getCategories();

    } else if (operation == 'newProduct'){

           $('#operation').val(operation);
           $('#editProduct').fadeIn();

        $('#idPerson').val('');
           $('#postImageBox').html('');
        $('#sub_type').html('');
    $('.pictBox').remove();
 
        getProductsCategories('product_category_id');

    } else if (operation == 'editProduct'){

          $('#operation').val(operation);
        $('#editProduct').fadeIn();

        $('#idProduct').val(id);
          $('#productImagesBox').html('');
  $('.pictBox').remove();
//        initPostEditor();    
//        getAuthorSelect();
//        getCategories();
getProduct(id);

    } else if (operation == 'newPerson'){
        $('#editPerson').fadeIn();
        $('#idPerson').val('');
        $('#operation').val(operation);

    }
}


function getAllPlaces(){

var data = 'operation=getAllPlaces';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Lugares';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#placesTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{

                               var id = response[index].id;
                               var name = response[index].name;
                               var address = response[index].address;

                            $('#placesTable').append('<tr '+trclass+'><td><a href="#" onclick="window.open(\'/admin/phpsqlajax_map_v3.phtml?id='+id+'\', \' Ver '+name+' \', \'height=800,width=1000\');" >' + name +'</td><td>'+address+'</td><td><a href="#" onclick="deletePlace('+id+',\''+name+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');

                           }
                       }
$('#placesTable').show();
        }

     },

    });



//            cleanMenu(adminAction);
//            setSectionStyle(adminAction);
            cleanTables('getAllPlaces');

}

function getAllSectionsCat(id){

var data = 'operation=getAllSectionsCat';
if (id){data = data+'&id='+id;}

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Categorías';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#sectionsCatTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{

                               var id = response[index].id
                               var name = response[index].name

                            $('#sectionsCatTable').append('<tr '+trclass+'><td><input type="hidden" value="'+id+'" class="rowID"><a href="#"onclick="editMode('+"'editSectionCategory','"+id+"');"+'return false;" >' + name +'</td><td><a href="#" onclick="reOrderTable(\'sectionsCatTable\',this,\'up\');return false;" ><img width="22px" height="22px" src="'+ikonFolder+'square_up.png" /></a> <a href="#" onclick="reOrderTable(\'sectionsCatTable\',this,\'down\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'square_down.png" /></a></td><td><a href="#" onclick="deleteSectionCategory('+id+',\''+name+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');

                           }
                       }
$('#sectionsCatTable').show();
        }

     },

    });



            cleanMenu(adminAction);
            setSectionStyle(adminAction);
            cleanTables('getAllSectionsCat');

}


function getAllNewsContacts(){

var data = 'operation=getAllNewsContacts';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado contactos';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#newsContactsTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{

                               var id = response[index].id
                               var first_name = response[index].first_name
                               var last_name = response[index].last_name
                               var email = response[index].email
                               var answered = response[index].answered

                            $('#newsContactsTable').append('<tr '+trclass+'><td>' + id +'</td><td>' + email + '</td><td><a href="#" onclick="deleteContact('+id+');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');

                           }
                       }
$('#newsContactsTable').show();
        }

     },

    });



//            cleanMenu(adminAction);
 //           setSectionStyle(adminAction);
            cleanTables('getAllNewsContacts');

}



function getAllMessages(){

var data = 'operation=getAllMessages';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado mensajes';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#messagesTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{

                               var id = response[index].id
                               var first_name = response[index].first_name
                               var last_name = response[index].last_name
                               var email = response[index].email
                               var answered = response[index].answered;if (answered == '1'){answered = 'Sí'}else{answered = 'No'}

                            $('#messagesTable').append('<tr '+trclass+'><td><a href="#"onclick="editMode('+"'editMessage','"+id+"');"+'return false;" >' + id +'</td><td>' + last_name + '</td><td>' + first_name + '</td><td>' + email + '</td><td>' + answered + '</td><td><a href="#" onclick="deleteMessage('+id+');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');

                           }
                       }
$('#messagesTable').show();
        }

     },

    });



            cleanMenu(adminAction);
            setSectionStyle(adminAction);
            cleanTables('getAllMessages');

}

function getAllEventsCat(){

var data = 'operation=getAllEventsCat';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Categorías';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#eventsCatTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{

                               var id = response[index].id
                               var name = response[index].name

                            $('#eventsCatTable').append('<tr '+trclass+'><td><input type="hidden" value="'+id+'" class="rowID"><a href="#"onclick="editMode('+"'editEventCategory','"+id+"');"+'return false;" >' + name +'</td><td><a href="#" onclick="reOrderTable(\'eventsCatTable\',this,\'up\');return false;" ><img width="22px" height="22px" src="'+ikonFolder+'square_up.png" /></a> <a href="#" onclick="reOrderTable(\'eventsCatTable\',this,\'down\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'square_down.png" /></a></td><td><a href="#" onclick="deleteEventCategory('+id+',\''+name+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');

                           }
                       }
$('#eventsCatTable').show();
        }

     },

    });



            cleanMenu(adminAction);
            setSectionStyle(adminAction);
            cleanTables('getAllEventsCat');

}









function getAllProductsSubCategories(){

var data = 'operation=getAllProductsSubCategories';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Sub Categorías';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#productsSubCatTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{

                               var id = response[index].id;
                               var name = response[index].name;
                               var cat_name = response[index].cat_name;
                               var in_menu = response[index].in_menu;
                               var orden = response[index].orden;

                               if (in_menu == 'Y'){
                               in_menu = 'Sí';
                               }else{
                               in_menu = 'No';
                               }

                            //$('#productsCatTable').append('<tr '+trclass+'><td><input type="hidden" value="'+id+'" class="rowID"><a href="#"onclick="editMode('+"'editProductCategory','"+id+"');"+'return false;" >' + name +'</td><td><a href="#" onclick="reOrderTable(\'productsCatTable\',this,\'up\');return false;" ><img width="22px" height="22px" src="'+ikonFolder+'square_up.png" /></a> <a href="#" onclick="reOrderTable(\'productsCatTable\',this,\'down\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'square_down.png" /></a></td><td>'
                            $('#productsSubCatTable').append('<tr '+trclass+'><td><input type="hidden" value="'+id+'" class="rowID"><a href="#"onclick="editMode('+"'editProductSubCategory','"+id+"');"+'return false;" >' + name +'</td><td>'
+ in_menu + '</td><td>'+cat_name+'</td><td><a href="#" onclick="reOrderTable(\'productsSubCatTable\',this,\'up\');return false;" ><img width="22px" height="22px" src="'+ikonFolder+'square_up.png" /></a> <a href="#" onclick="reOrderTable(\'catTable\',this,\'down\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'square_down.png" /></a></td><td><a href="#" onclick="deleteProductSubCategory('+id+',\''+name+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');

                           }
                       }
$('#productsSubCatTable').show();
        }

     },

    });



            cleanMenu(adminAction);
            setSectionStyle(adminAction);
            cleanTables('getAllProductsSubCategories');

}








function getAllProductsCategories(){

var data = 'operation=getAllProductsCategories';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Categorías';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#productsCatTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{

                               var id = response[index].id
                               var name = response[index].name
                               var in_menu = response[index].in_menu

                               if (in_menu == 'Y'){
                               in_menu = 'Sí';
                               }else{
                               in_menu = 'No';
                               }

                            //$('#productsCatTable').append('<tr '+trclass+'><td><input type="hidden" value="'+id+'" class="rowID"><a href="#"onclick="editMode('+"'editProductCategory','"+id+"');"+'return false;" >' + name +'</td><td><a href="#" onclick="reOrderTable(\'productsCatTable\',this,\'up\');return false;" ><img width="22px" height="22px" src="'+ikonFolder+'square_up.png" /></a> <a href="#" onclick="reOrderTable(\'productsCatTable\',this,\'down\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'square_down.png" /></a></td><td>'
                            $('#productsCatTable').append('<tr '+trclass+'><td><input type="hidden" value="'+id+'" class="rowID"><a href="#"onclick="editMode('+"'editProductCategory','"+id+"');"+'return false;" >' + name +'</td><td>'
+ in_menu + '</td><td><a href="#" onclick="reOrderTable(\'productsCatTable\',this,\'up\');return false;" ><img width="22px" height="22px" src="'+ikonFolder+'square_up.png" /></a> <a href="#" onclick="reOrderTable(\'catTable\',this,\'down\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'square_down.png" /></a></td><td><a href="#" onclick="deleteProductCategory('+id+',\''+name+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');

                           }
                       }
$('#productsCatTable').show();
        }

     },

    });



            cleanMenu(adminAction);
            setSectionStyle(adminAction);
            cleanTables('getAllProductsCategories');

}




function getAllCategories(){

var data = 'operation=getAllCategories';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Categorías';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#catTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{

                               var id = response[index].id
                               var name = response[index].name
                               var in_menu = response[index].in_menu

                               if (in_menu == '1'){
                               in_menu = 'Sí';
                               }else{
                               in_menu = 'No';
                               }

                            $('#catTable').append('<tr '+trclass+'><td><input type="hidden" value="'+id+'" class="rowID"><a href="#"onclick="editMode('+"'editCategory','"+id+"');"+'return false;" >' + name +'</td><td><a href="#" onclick="reOrderTable(\'catTable\',this,\'up\');return false;" ><img width="22px" height="22px" src="'+ikonFolder+'square_up.png" /></a> <a href="#" onclick="reOrderTable(\'catTable\',this,\'down\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'square_down.png" /></a></td><td>'
+ in_menu + '</td><td><a href="#" onclick="deleteCategory('+id+',\''+name+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');

                           }
                       }
$('#catTable').show();
        }

     },

    });



            cleanMenu(adminAction);
            setSectionStyle(adminAction);
            cleanTables('getAllCategories');

}




function getAllPersonalizadas(){
        $('#salesActMenu').hide();
        $('#personalizadasActMenu').show();
            cleanMenu('getAllPersonalizadas');

var data = 'operation=getAllPersonalizadas';
var personalizadas_f_date = $('#personalizadas_f_date').val(); if (personalizadas_f_date != ''){data += '&personalizadas_f_date='+personalizadas_f_date}
var personalizadas_t_date = $('#personalizadas_t_date').val(); if (personalizadas_t_date != ''){data += '&personalizadas_t_date='+personalizadas_t_date}
var personalizadas_f_status= $('#personalizadas_f_status').val(); if (personalizadas_f_status != ''){data += '&personalizadas_f_status='+personalizadas_f_status}

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){

        if (response == null){

            message = 'No se han encontrado ventas';
            printMessage(message,'notify');

        } else  {

        clearMode();

        //arrayDeSales = response[0];
        arrayDeSales = response;

                 $('#personalizadasTable tbody').html('');


                            for(index=0; index<arrayDeSales.length; index++) {
                                if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}

                                if (arrayDeSales[index].cantidad != null){
                                    var registros = arrayDeSales[index].cantidad;
                                    $('.paginas').html('Hay '+registros+' Registros <br/><ul>');
                                    var cntPag = registros / 80;
                                    cntPag =  Math.round(cntPag); 
                                    for(i=0; i<cntPag; i++){
                                    $('.paginas').append('<a href="#" onclick="refreshCrm('+i+')">'+i+'</a> | ')
                                }
                                $('.paginas').append('</ul>');
                        
  
                                }else{

debugger;

                                var id = arrayDeSales[index].id;
                                var name = arrayDeSales[index].name;
                                var email = arrayDeSales[index].email;
                                var phone = arrayDeSales[index].phone;
                                var color = arrayDeSales[index].color;
                                var payment = arrayDeSales[index].payment;
                                var shipping = arrayDeSales[index].shipping;
                                var waist = arrayDeSales[index].waist;
                                var message = arrayDeSales[index].message;
                                var file = arrayDeSales[index].file;
                                var p_date = arrayDeSales[index].p_date;

//                                $('#salesTable').append('<tr '+trclass+'><td><a href="#"onclick="editMode('+"'editSale','"+id+"');"+'return false;" >'+id+'</a></td><td>'+client_name+'</td><td>'+initdate+ '</td><td>'+s_status+ '</td><td>$'+total+'</td></tr>');
                                $('#personalizadasTable').append('<tr '+trclass+'><td><a href="#"onclick="editMode('+"'editPersonalizada','"+id+"');"+'return false;" >'+id+'</a></td><td>'+p_date+'</td><td>'+name+'</td><td>'+email+'</td><td>'+phone+'</td><td>'+color+'</td><td>'+waist+'</td><td><a href="/users_uploads/'+file+'" target="_blank" ><img src="/users_uploads/'+file+'" width="30px" height="30px;"></a></td></tr>');

$('#personalizadasTable').show();
                               }
                           }




        }

     },

    });

            cleanTables('getAllPersonalizadas');

}








function getAllSales(){

$('#salesActMenu').show();
$('#personalizadasActMenu').hide();

var data = 'operation=getAllSales';
var sales_f_date = $('#sales_f_date').val(); if (sales_f_date != ''){data += '&sales_f_date='+sales_f_date}
var sales_t_date = $('#sales_t_date').val(); if (sales_t_date != ''){data += '&sales_t_date='+sales_t_date}
var sales_f_status= $('#sales_f_status').val(); if (sales_f_status != ''){data += '&sales_f_status='+sales_f_status}


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){

        if (response == null){

            message = 'No se han encontrado ventas';
            printMessage(message,'notify');

        } else  {

        clearMode();

        //arrayDeSales = response[0];
        arrayDeSales = response;

                 $('#salesTable tbody').html('');


                            for(index=0; index<arrayDeSales.length; index++) {
                                if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}

                                if (arrayDeSales[index].cantidad != null){
                                    var registros = arrayDeSales[index].cantidad;
                                    $('.paginas').html('Hay '+registros+' Registros <br/><ul>');
                                    var cntPag = registros / 80;
                                    cntPag =  Math.round(cntPag); 
                                    for(i=0; i<cntPag; i++){
                                    $('.paginas').append('<a href="#" onclick="refreshCrm('+i+')">'+i+'</a> | ')
                                }
                                $('.paginas').append('</ul>');
                        
  
                                }else{


                                var id = arrayDeSales[index].id;
                                var initdate = arrayDeSales[index].initdate;
                                var client_name = arrayDeSales[index].client_name;
                                var total = arrayDeSales[index].total;
                                var s_status = arrayDeSales[index].s_status;
                                var client_message = arrayDeSales[index].client_message;
                                var staff_message = arrayDeSales[index].staff_message;




                                $('#salesTable').append('<tr '+trclass+'><td><a href="#"onclick="editMode('+"'editSale','"+id+"');"+'return false;" >'+id+'</a></td><td>'+client_name+'</td><td>'+initdate+ '</td><td>'+s_status+ '</td><td>$'+total+'</td></tr>');

$('#salesTable').show();
                               }
                           }




        }

     },

    });

            cleanTables('getAllSales');

}






function getAllProducts(type){

var data = 'operation=getAllProducts';

if (type == 'search'){
var prodQ = $('#prodQ').val(); if (prodQ != ''){data += '&prodQ='+prodQ}
var cat_id = $('#prod_cat_filter').val(); if (cat_id != ''){data += '&cat_id='+cat_id}
var subcat_id = $('#prod_subcat_filter').val(); if (subcat_id != ''){data += '&subcat_id='+subcat_id}
var priceFrom = $('#priceFrom').val(); if (priceFrom != ''){data += '&priceFrom='+priceFrom}
var priceTo = $('#priceTo').val(); if (priceTo != ''){data += '&priceTo='+priceTo}
}else{
getProdCatFilter();
}

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Productos';
            printMessage(message,'notify');

        } else  {

            clearMode();
            arrayDePost = response[0];

            $('#productsTable tbody').html('');
            for(index=0; index<arrayDePost.length; index++) {
                if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}

                if (arrayDePost[index].cantidad != null){
                    var registros = arrayDePost[index].cantidad;
                    $('.paginas').html('Hay '+registros+' Registros <br/><ul>');
                    var cntPag = registros / 80;
                    cntPag =  Math.round(cntPag);
                    for(i=0; i<cntPag; i++){
                    $('.paginas').append('<a href="#" onclick="refreshCrm('+i+')">'+i+'</a> | ')
                    }
                    $('.paginas').append('</ul>');

                }else{

                    var id = arrayDePost[index].id;
                    var name = arrayDePost[index].name;
                    var stock = arrayDePost[index].stock;
                    var price = arrayDePost[index].price;
                    var category_name = arrayDePost[index].category_name;
                    var subcategory_name = arrayDePost[index].subcategory_name;
                    var published = arrayDePost[index].published;

                    if (published == 'Y'){published = 'view.png'} else {published = 'view_off.png'}

                    $('#productsTable').append('<tr '+trclass+'><td><input  name="check_products" type="checkbox" class="cb-element" value="'+id+'"></td><td><img width="40px" src="/fotos/articulos/460x460'+arrayDePost[index].picture+'"></td><td><a href="#"onclick="editMode('+"'editProduct','"+id+"');"+'return false;" >' + name +  '</a></td><td>'
                    + stock +'</td><td>'
                    + price + '</td><td>'
                    + category_name + '</td><td>'+ subcategory_name +'</td><td><img width="22px" height="22px" src="'+ikonFolder+published+'"</td><td><a href="#" onclick="deleteProduct('+id+',\''+name+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');
                    $('#productsTable').show();
               }
            }
        }

     },

    });

            cleanTables('getAllProducts');

}




function getAllPosts(type){

var data = 'operation=getAllPosts';

if (type == 'search'){
var q = $('#q').val(); if (q != ''){data += '&q='+q}
}

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Post relacionados';
            printMessage(message,'notify');

        } else  {
clearMode();
        arrayDePost = response[0];

                 $('#postTable tbody').html('');
                            for(index=0; index<arrayDePost.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (arrayDePost[index].cantidad != null){
                            var registros = arrayDePost[index].cantidad;
                            $('.paginas').html('Hay '+registros+' Registros <br/><ul>');
                            var cntPag = registros / 80;
                            cntPag =  Math.round(cntPag); 
                            for(i=0; i<cntPag; i++){
                            $('.paginas').append('<a href="#" onclick="refreshCrm('+i+')">'+i+'</a> | ')
                            }
                            $('.paginas').append('</ul>');
                        
  
                            }else{
   var id = arrayDePost[index].id;
   var title = arrayDePost[index].title;
   var author = arrayDePost[index].author; if (!author){author = 'Sin autor'}
   var authorId = arrayDePost[index].authorId;
   var datePosted = arrayDePost[index].datePosted;
   var categoryName = arrayDePost[index].categoryName; if (!categoryName){categoryName = 'Sin categorÃ­a';}
   var published = arrayDePost[index].published;if (published == '1'){published = 'view.png'} else {published = 'view_off.png'}
//  ikonFolder  

                            $('#postTable').append('<tr '+trclass+'><td><a href="#"onclick="editMode('+"'editPost','"+id+"');"+'return false;" >' + title +  '</a></td><td>' 
+ author +'</td><td>'
+ categoryName + '</td><td>'
+ datePosted + '</td><td><img width="22px" height="22px" src="'+ikonFolder+published+'"</td><td><a href="#" onclick="deletePost('+id+',\''+title+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');
$('#postTable').show();
                           }
                       }
        }

     },

    });

            cleanTables('getAllPosts');

}




function getAllProfiles(){

var data = 'operation=getAllProfiles';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado usuarios';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#profileTable tbody').html('');

                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
  
                            }else{
   var id = response[index].id;
   var first_name = response[index].first_name;
   var last_name = response[index].last_name;
   var avatar = response[index].avatar;

                            $('#profileTable').append('<tr '+trclass+'><td><a href="#" onclick="editMode(\'editPerson\',\''+id+'\');return false;" ><img height="90px" src="' + profilePictFolder + avatar +'"></a></td><td>' 
+ first_name+last_name +'</td><td>' + '33' + '</td><td><a href="'+profileViewUrl+id+'-'+first_name+last_name+'"><img src="'+ikonFolder+'user_square.png" heigth="40px"></a></td><td><a href="#" onclick="deletePerson(\''+id+'\',\''+first_name + ' ' + last_name+'\');return false;" ><img height="40px" src="/iconz/ikons/64/bin.png" /></a></td></tr>');

$('#profileTable').show();

                           }
                       }
        }

     },

    });

            cleanTables('getAllProfiles');

}


function getAllSections(){

var data = 'operation=getAllSections';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado secciones';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#sectionsTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
                            var registros = response[index].cantidad;
                            $('.paginas').html('Hay '+registros+' Registros <br/><ul>');
                            var cntPag = registros / 80;
                            cntPag =  Math.round(cntPag); 
                            for(i=0; i<cntPag; i++){
                            $('.paginas').append('<a href="#" onclick="refreshCrm('+i+')">'+i+'</a> | ')
                            }
                            $('.paginas').append('</ul>');
                        
  
                            }else{
   //                      "id" => $row['id'],
    //                     "title" => $row['title'],
     //                    "descrip" => $row['descrip'],
      //                   "content" => $row['content'],
       //                  "author_id" => $row['author_id'],
        //                 "date_posted" => $row['date_posted'],
         //                "published" => $row['published'],

   var id = response[index].id;
   var title = response[index].title;

//debugger;
   var datePosted = response[index].datePosted;
   var published = response[index].published;
   var last_modified = response[index].last_modified;
   var category = response[index].category;



   if (published == '1'){published = 'view.png'} else {published = 'view_off.png'}
//  ikonFolder  

                            $('#sectionsTable').append('<tr '+trclass+'><td><a href="#"onclick="editMode('+"'editSection','"+id+"');"+'return false;" >' + title +  '</a></td><td>' 
+ last_modified +'</td><td><img width="22px" height="22px" src="'+ikonFolder+published+'"</td></td><td>'+category+'</td><td><a href="#" onclick="deleteSection('+id+',\''+title+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');
$('#sectionsTable').show();
                           }
                       }
        }

     },

    });

            cleanTables('getAllSections');

}









function getAllEvents(type){


var data = 'operation=getAllEvents';

if (type == 'search'){
var q = $('#eventQ').val(); if (q != ''){data += '&q='+q}
}

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado eventos';
            printMessage(message,'notify');

        } else  {
                 clearMode();
                 $('#eventsTable tbody').html('');
                            for(index=0; index<response.length; index++) {
                            if (index % 2 == 0){trclass = 'class="light-blue"';}else{trclass = "";}
                            if (response[index].cantidad != null){
                            var registros = response[index].cantidad;
                            $('.paginas').html('Hay '+registros+' Registros <br/><ul>');
                            var cntPag = registros / 80;
                            cntPag =  Math.round(cntPag); 
                            for(i=0; i<cntPag; i++){
                            $('.paginas').append('<a href="#" onclick="refreshCrm('+i+')">'+i+'</a> | ')
                            }
                            $('.paginas').append('</ul>');
                        
  
                            }else{

   var id = response[index].id;
   var title = response[index].title;
   var marker = response[index].marker;
   var category = response[index].category;
   var date_posted = response[index].date_posted;
   var published = response[index].published;
   var initdate = response[index].initdate;



   if (published == '1'){published = 'view.png'} else {published = 'view_off.png'}
//  ikonFolder  

                            $('#eventsTable').append('<tr '+trclass+'><td><a href="#"onclick="editMode('+"'editEvent','"+id+"');"+'return false;" >' + title +  '</a></td><td>' 
+ marker +'</td><td>'+ category  +'</td><td>'+ date_posted  +'</td><td><img width="22px" height="22px" src="'+ikonFolder+published+'"</td></td><td>'+ initdate  +'</td><td><a href="#" onclick="deleteEvent('+id+',\''+title+'\');return false;"><img width="22px" height="22px" src="'+ikonFolder+'bin.png" /></a></td></tr>');
$('#eventsTable').show();
                           }
                       }
        }

     },

    });

            cleanTables('getAllEvents');

}




function saveMessage(){

var answered = '';
if($("#answered").is(':checked')){var answered = '1';} else {var answered = '0';}; answered = 'answered='+answered; 

//if (document.getElementById('answered').checked){var answered = '1'} else {var answered = '0'}; answered += 'answered='+answered; 

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=saveMessage&id='+$('#idMessage').val()+'&'+answered,

        success: function(message){
                       printMessage(message,'success');
                     return false;
                            }

           });


}



function getMessage(id){
$('#idMessage').val(id);
$('#message').html('');
var operation = 'operation=getMessage'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){
                       var id = data[0].id;
                       var first_name = data[0].first_name;
                       var last_name = data[0].last_name;
                       var email = data[0].email;
                       var message_text = data[0].message;
                       var answered = data[0].answered;
//debugger;
                       $('#contact_first_name').html(first_name);
                       $('#contact_last_name').html(last_name);
                       $('#contact_email').html(email);
                       $('#contact_message').html(message_text);
                       if (answered == '1') {$('#answered').prop('checked', true);
                       } else {$("#answered").prop("checked", false);
                       }
//                       $('#avatarPict').attr('src', profilePictFolder+avatar);
        }
    });

}







function CSVExport(){
    window.open('/includes/CSVExport.php')
}





function getPerson(id){

$('#message').html('');
var operation = 'operation=getPerson'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){
                       var id = data[0];
                       var first_name = data[1];
                       var last_name = data[2];
                       var url  = data[3];
                       var email = data[4];
                       var avatar = data[5];
                       var self_description = data[6];
                       var password = data[7];
                       var username = data[8];

                       $('#first_name').val(first_name);
                       $('#last_name').val(last_name);
                       $('#url').val(url);
                       $('#email').val(email);
                       $('#avatarPict').attr('src', profilePictFolder+avatar);
                       $('#avatarUrl').val(avatar);
                       $('#self_description').val(self_description);
                       $('#password').val(password);
                       $('#username').val(username);
        }
    });

}



function getEvent(id){


$('#message').html('');

$('#eventImageBox').html('');


var operation = 'operation=getEvent'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){

                       var id = data[0].id;
                       var title = data[0].title;
                       var eventFull = data[0].eventFull;
//                       var eventContent = data[0].eventContent;
                       var markerId = data[0].markerId;
                       var categoryName = data[0].categoryName;
                       var categoryId = data[0].categoryId;
                       var categoryArray = data[0].categoryArray;
                       var initdate = data[0].initdate;
                       var published = data[0].published;
                       var markerId = data[0].markerId;
                       var markerArray = data[0].markerArray;
                       var eventPict = data[0].eventPict;
                       var eventDescrip = data[0].eventDescrip;

//$('#catBox').html('');
$('#events_category_id').html('');
$('#marker').html('');



                       $('#editBox #idEvent').val(id);
                       $('#editEvent #title').val(title);
                       $('#editEvent #event').val(eventFull);
                       $('#editEvent #initdate').val(initdate);
                       $('#editEvent #eventDescrip').val(eventDescrip);

                       if (published == '1') {$('#editEvent #event_published').prop('checked', true);
                       } else {$("editEvent #event_published").prop("checked", false);
                       }

//                       tinymce.activeEditor.execCommand('mceInsertContent', false, '');
//                       tinymce.activeEditor.execCommand('mceInsertContent', false, eventFull);

                             var selected = '';
                            if (!markerId){selected = 'selected="selected"'}
                            $('#editEvent #marker').append('<option value="0" '+selected+' >Seleccione un lugar</option>');

                            for (index=0; index<markerArray.length; index++) {
                                    if (markerArray[index].id == markerId){
                                    $('#editEvent #marker').append('<option selected="selected" value="'+markerArray[index].id+'">'+markerArray[index].name+'</option>');

                                    } else {
                                    $('#editEvent #marker').append('<option value="'+markerArray[index].id+'">'+markerArray[index].name+'</option>');
                                    }
                            } 



                            $('#editEvent #category_id').append('<option value="0">Seleccione una categoría</option>');

                            for (index=0; index<categoryArray.length; index++) {
                                    if (categoryArray[index].id == categoryId){
                                    $('#editEvent #events_category_id').append('<option selected="selected" value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');

                                    } else {
                                    $('#editEvent #events_category_id').append('<option value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');
                                    }
                            } 
          $('#eventImageBox').html('');
if (eventPict)$('#eventImageBox').append('<div class="pictBox"><img src="/fotos/articulos/'+eventPict+'" id="eventPict" name="eventPict" height="100px"></div>');
          $('#eventImageUrl').val(eventPict);

tinymce.init({selector:'#event'});
tinymce.get($("#event").attr('name')).execCommand('mceInsertContent',false,eventFull);                        
        }
    });
window.location.href = '#header';


}



function getSubCategorySelect(cat_id){

debugger;


$('#product_subcategory_id').html('');

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getAllProductsSubCategories&cat_id='+cat_id,
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado lugares';
            printMessage(message,'notify');
        } else  {
             $('#product_subcategory_id').append('<option value="0">Seleccione una Subcategoría</option>');

            for (index=0; index<response.length; index++) {
                    $('#product_subcategory_id').append('<option value="'+response[index].id+'">'+response[index].name+'</option>');
            } 

        }

     },

    });

}


function getProdSubCatFilter(cat_id){

                            $('#prod_subcat_filter').html('');
//                            $('#category_id').html('');
//                            $('#tagsBox').html('');

if(cat_id){

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getProdSubCatFilter&cat_id='+cat_id,
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado subcategorias';
            printMessage(message,'notify');
        } else  {
             $('#prod_subcat_filter').append('<option value="0">Seleccione una subcategoría</option>');

            for (index=0; index<response.length; index++) {
                    $('#prod_subcat_filter').append('<option value="'+response[index].id+'">'+response[index].name+'</option>');
            } 

        }

     },

    });

}
}


function getProdCatFilter(){

                            $('#prod_cat_filter').html('');
//                            $('#category_id').html('');
//                            $('#tagsBox').html('');


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getProdCatFilter',
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado categorias';
            printMessage(message,'notify');
        } else  {
             $('#prod_cat_filter').append('<option value="0">Seleccione una categoría</option>');

            for (index=0; index<response.length; index++) {
                    $('#prod_cat_filter').append('<option value="'+response[index].id+'">'+response[index].name+'</option>');
            } 

        }

     },

    });

}


function getMarkerSelect(){

                            $('#marker').html('');
//                            $('#category_id').html('');
//                            $('#tagsBox').html('');


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getMarkerSelect',
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado lugares';
            printMessage(message,'notify');
        } else  {
             $('#marker').append('<option value="0">Seleccione un lugar</option>');

            for (index=0; index<response.length; index++) {
                    $('#marker').append('<option value="'+response[index].id+'">'+response[index].name+'</option>');
            } 

        }

     },

    });

}


function getEventCatSelect(){

                            $('#events_category_id').html('');
//                            $('#category_id').html('');
//                            $('#tagsBox').html('');


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getEventCatSelect',
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado categorías';
            printMessage(message,'notify');
        } else  {
//            var makerArray = response;
             $('#events_category_id').append('<option value="0">Seleccione una categoría</option>');

            for (index=0; index<response.length; index++) {
                    $('#events_category_id').append('<option value="'+response[index].id+'">'+response[index].name+'</option>');
            } 

        }

     },

    });

}








function getProduct(id){

$('#message').html('');

$('#productImagesBox').html('');
$('.pictBox').remove();
uncheckAllWaists();
uncheckAllColors();
$('#product_category_id').html('');
$('#product_subcategory_id').html('');
//$('#product_type_id').html('');

var operation = 'operation=getProduct';
var id = 'id='+id;

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){
        var postArray = data[0][0];
        var categoryArray = data[1];
        var subcategoryArray = data[2];
//        var brandArray = data[3];

           var id = postArray[0].id;
           var name = postArray[0].name;
           var short_desc = postArray[0].short_desc;
           var long_desc = postArray[0].long_desc;
           var subcategory_id = postArray[0].subcategory_id;

           var category_id = postArray[0].category_id;
           var price = postArray[0].price;
           var price2 = postArray[0].price2;
           var price3 = postArray[0].price3;
           var strikethrough_price = postArray[0].strikethrough_price;
           var has_strikethrough_price = postArray[0].has_strikethrough_price;

           var stock = postArray[0].stock;
           var shows_stock = postArray[0].shows_stock;
           var published = postArray[0].published;
           var size = postArray[0].size;
           var measures = postArray[0].measures;
           var material = postArray[0].material;
           var colorsArray = postArray[0].colorsArray;
           var waistsArray = postArray[0].waistsArray;
           var code = postArray[0].code;

//                       var categoryArray = postArray[0].categoryArray;

           var picturesArray = postArray[0].picturesArray;

            if (picturesArray){
                for (index=0; index<picturesArray.length; index++) {
                    $('#productImagesBox').append('<div class="pictBox"><input type="checkbox" name="pictures"  class="uploadeFiles" value="'+picturesArray[index].picture+'" checked="checked"><img src="/fotos/articulos/'+picturesArray[index].picture+'" id="pict" name="pict" height="100px"></div>');

                        }
           }


        for (const [key, color] of Object.entries(colorsArray)) {
            /*console.log(color);*/
            $('#'+color.color_id).each(function(){ this.checked = true; });
        }

            if (waistsArray){
                for (index=0; index<waistsArray.length; index++) {
                    $('#w'+waistsArray[index].waist_id).each(function(){ this.checked = true; });
                }
           }
            $( function() {
                $( "#productImagesBox" ).sortable({
                  revert: true
                });
              } );

           $('#idProduct').val(id);

           $('#editProduct #product_name').val(name);
           $('#editProduct #product_code').val(code);
           $('#editProduct #product_short_desc').val(short_desc);
           $('#editProduct #product_long_desc').val(long_desc);
           $('#editProduct #product_price').val(price);
           $('#editProduct #product_price2').val(price2);
           $('#editProduct #product_price3').val(price3);
           $('#editProduct #strikethrough_price').val(strikethrough_price);
           $('#editProduct #product_stock').val(stock);

           if (has_strikethrough_price == 'Y') {$("#editProduct #has_strikethrough_price").attr("checked", true);} else {$("#editProduct #has_strikethrough_price").attr("checked", false)}
           if (shows_stock == 'Y') {$("#editProduct #shows_stock").attr("checked", true);} else {$("#editProduct #shows_stock").attr("checked", false)}
           if (published == 'Y') {$("#editProduct #published").attr("checked", true);} else {$("#published").attr("checked", false)}

           $('#editProduct #product_size').val(size);
           $('#editProduct #product_measures').val(measures);
           $('#editProduct #product_material').val(material);

                $('#editProduct #category_id').append('<option value="0">Seleccione una categoría</option>');

                for (index=0; index<categoryArray.length; index++) {
                        if (categoryArray[index].id == category_id){
                        $('#editProduct #product_category_id').append('<option selected="selected" value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');

                        } else {
                        $('#editProduct #product_category_id').append('<option value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');
                        }
                }

                $('#editProduct #product_subcategory_id').append('<option value="0">Seleccione una subcategoría</option>');

                for (index=0; index<subcategoryArray.length; index++) {
                        if (subcategoryArray[index].id == subcategory_id){
                        $('#editProduct #product_subcategory_id').append('<option selected="selected" value="'+subcategoryArray[index].id+'">'+subcategoryArray[index].name+'</option>');

                        } else {
                        $('#editProduct #product_subcategory_id').append('<option value="'+subcategoryArray[index].id+'">'+subcategoryArray[index].name+'</option>');
                        }
                }

        }
    });
window.location.href = '#header';


}






function getPersonalizada(id){

$('#editPersonalizada #p_status').html('');
$('#p_staff_message').html('');

var operation = 'operation=getPersonalizada'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){

debugger;
                       saleArray = data[0];
                       var id = saleArray.id;
                       var name = saleArray.name;
                       var email = saleArray.email;
                       var phone = saleArray.phone;
                       var color = saleArray.color;
                       var payment = saleArray.payment;
                       var shipping = saleArray.shipping;
                       var waist = saleArray.waist;
                       var p_group = saleArray.p_group;
                       var p_status = saleArray.p_status;
                       var file = saleArray.file;
                       var message = saleArray.message;
                       var staff_comments = saleArray.staff_comments;
                       var p_date = saleArray.p_date;
                       var statusArray = saleArray.statusArray;
//$('#tagsBox').html('');
//$('#postImageBox').append('<div class="pictBox"><img src="/fotos/articulos/'+postPict+'" id="postPict" name="postPict" height="100px"></div>');

                       $('#editPersonalizada #p_name').val(name);
                       $('#editPersonalizada #p_email').val(email);
                       $('#editPersonalizada #p_phone').val(phone);
                       $('#editPersonalizada #p_color').val(color);
                       $('#editPersonalizada #p_payment_id').val(payment);
                       $('#editPersonalizada #p_shipping_id').val(shipping);

var group_desc = '';
if(p_group == 'W'){group_desc = 'Mujer';}
if(p_group == 'M'){group_desc = 'Hombre';}
if(p_group == 'C'){group_desc = 'Niño';}

                       $('#editPersonalizada #p_waist').val(group_desc+' '+waist);
                       $('#p_image').attr('src',"/users_uploads/"+file);
                       $('#image_link').attr('href',"/users_uploads/"+file);

                       $('#editPersonalizada #p_message').val(message);
                       $('#editPersonalizada #p_staff_message').val(staff_comments);
                       $('#editPersonalizada #p_date').val(p_date);
                       $('#idPersonalizada').val(id);


                            for (index=0; index<statusArray.length; index++) {
                                    if (statusArray[index].id == p_status){
                                    $('#p_status').append('<option selected="selected" value="'+statusArray[index].id+'">'+statusArray[index].descrip+'</option>');

                                    } else {
                                    $('#p_status').append('<option value="'+statusArray[index].id+'">'+statusArray[index].descrip+'</option>');
                                    }
                            } 

        }
    });
window.location.href = '#header';


}





function getSale(id){

$('#editSale #sale_status').html('');
$('#message').html('');
//$('#postImageBox').html('');
debugger;

var operation = 'operation=getSale'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){


saleArray = data[0];
                       var id = saleArray.id;
                       var initdate = saleArray.initdate;
                       var client_id = saleArray.client_id;
                       var total = saleArray.total;
                       var client_message = saleArray.client_message;
                       var staff_message = saleArray.staff_message;
                       var firstname = saleArray.firstname;
                       var lastname = saleArray.lastname;
                       var productsDetails = saleArray.productsDetails;
                       var statusArray = saleArray.statusArray;
                       var s_status = saleArray.s_status;
                       var shipping_method = saleArray.shipping_method;
                       if(shipping_method === '1'){shipping_method = 'Retira en el local';}else{shipping_method = 'Envío';}
                       var payment_method = saleArray.payment_method;
                       var paymentArray = saleArray.paymentArray;

                       var provincia_name = saleArray.provincia_name;
                       var ciudad_name = saleArray.ciudad_name;
                       var address = saleArray.address;
                       var postal_code = saleArray.postal_code;
                       var phone = saleArray.phone;
                       var email = saleArray.email;

//$('#tagsBox').html('');
//$('#postImageBox').append('<div class="pictBox"><img src="/fotos/articulos/'+postPict+'" id="postPict" name="postPict" height="100px"></div>');


                       $('#editSale #sale_initdate').val(initdate);
                       $('#editSale #sale_client_id').val(client_id);
                       $('#editSale #sale_total').val(total);
                       $('#editSale #sale_client_message').val(client_message);
                       $('#editSale #sale_staff_message').val(staff_message);
                       $('#editSale #sale_firstname').val(firstname);
                       $('#editSale #sale_lastname').val(lastname);
                       $('#editSale #sale_shipping_method').val(shipping_method);
                       $('#editSale #productsDetails').val(productsDetails);
                       $('#editSale #sale_id').val(id);

client_data = "<b>Nombre y Apellido:</b> "+firstname+' '+lastname+"<br><br><b>Email:</b> "+email+"<br><br><b>Provincia:</b> "+provincia_name+'<br><br><b>Ciudad:</b> '+ciudad_name+'<br><br><b>Dirección:</b>'+address+'<br><br/>'+'<b>Código Postal:</b> '+postal_code+'<br><br/> <b>Teléfono:</b>'+phone;
                       $('#editSale #client_data').html(client_data);

                            for (index=0; index<statusArray.length; index++) {
                                    if (statusArray[index].id == s_status){
                                    $('#editSale #sale_status').append('<option selected="selected" value="'+statusArray[index].id+'">'+statusArray[index].descrip+'</option>');

                                    } else {
                                    $('#editSale #sale_status').append('<option value="'+statusArray[index].id+'">'+statusArray[index].descrip+'</option>');
                                    }
                            } 

        }
    });
window.location.href = '#header';


}








function getPost(id){


$('#message').html('');
$('#postImageBox').html('');

var operation = 'operation=getPost'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){

postArray = data[0];
                       var id = postArray[0].id;
                       var title = postArray[0].title;
                       var post = postArray[0].post;
                       var author_id = postArray[0].authorId;
                       var date_posted = postArray[0].datePosted;
                       var authorArray = postArray[0].authorArray;
                       var categoryArray = postArray[0].categoryArray;
                       var category_id = postArray[0].categoryId;
                       var published = postArray[0].published;
                       var postPict= postArray[0].postPict;
                       var post_descrip = postArray[0].postDescrip;

//                       var categoryArray = data[0].authorArray;
                       var tagsArray = postArray[0].postTags;
//debugger;
//json:
//author //authorId //datePosted //id //post //tags //title // authorArray

$('#tagsBox').html('');
//$('#catBox').html('');
$('#category_id').html('');
$('#author_id').html('');
$('#category_id').html('');
$('#author_id').html('');
$('#post_descrip').html('');

$('#postImageBox').append('<div class="pictBox"><img src="/fotos/articulos/'+postPict+'" id="postPict" name="postPict" height="100px"></div>');
          $('#postImageUrl').val(postPict);



                       $('#editPost #idPost').val(id);
                       $('#editPost #title').val(title);
                       $('#editPost #post').val(post);
                       $('#editPost #date_posted').val(date_posted);
                       $('#editPost #post_descrip').val(post_descrip);
debugger;
                       if (published == '1') {$("#editPost #publish").attr("checked", true);} else {$("#publish").attr("checked", false)}

//                       tinymce.activeEditor.execCommand('mceInsertContent', false, ' ');
//                       tinymce.activeEditor.execCommand('mceInsertContent', false, post);


                            $('#editPost #author_id').append('<option value="0">Seleccione un Autor</option>');

                            for (index=0; index<authorArray.length; index++) {
                                    if (authorArray[index].id == author_id){
                                    $('#editPost #author_id').append('<option selected="selected" value="'+authorArray[index].id+'">'+authorArray[index].first_name+' '+authorArray[index].last_name+'</option>');

                                    } else {
                                    $('#editPost #author_id').append('<option value="'+authorArray[index].id+'">'+authorArray[index].first_name+' '+authorArray[index].last_name+'</option>');
                                    }
                            } 



                            $('#editPost #category_id').append('<option value="0">Seleccione una categoría</option>');

                            for (index=0; index<categoryArray.length; index++) {
                                    if (categoryArray[index].id == category_id){
                                    $('#editPost #category_id').append('<option selected="selected" value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');

                                    } else {
                                    $('#editPost #category_id').append('<option value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');
                                    }
                            } 







// Forma checkbox para tags:


                            for (i=0; i<tagsArray.length; i++) {
//                                if (tagsArray[i].selected == 1){
                                    $('#editPost #tagsBox').append('<input name="tags[]" checked="checked" class="tagsCBox" type="checkbox" value="'+tagsArray[i].id+'">'+tagsArray[i].name+'<br />');
//                                } else {
  //                                  $('#tagsBox').append('<input name="tags[]" class="tagsCBox" type="checkbox" value="'+tagsArray[i].id+'">'+tagsArray[i].name+'<br />');
//                                }
                            }


//nymce.get($("#post").attr('id')).execCommand('mceInsertContent',false,post);                        
                       tinymce.activeEditor.execCommand('mceInsertContent', false, post);

        }
    });
window.location.href = '#header';


}


function getSectionCategory(id){

$('#message').html('');
$('#newImageBox').html('');
var operation = 'operation=getSectionCategory'
var idEvntCat = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+idEvntCat,
    dataType: 'json',
    success: function(data){
                       var name = data[0].name;
                       $('#section_cat_name').val(name);
                       $('#section_cat_id').val(id);
                       var picturesArray = data[0].picturesArray;

                       for (index=0; index<picturesArray.length; index++) {
                                $('#newImageBox').append('<div class="pictBox"><input type="checkbox" name="pictures"  class="uploadeFiles" value="'+picturesArray[index].pict+'" checked="checked"><img src="/fotos/articulos/'+picturesArray[index].pict+'" id="pict" name="pict" height="100px"></div>');


                       } 




        }
    });

}




function getEventCategory(id){

$('#message').html('');
var operation = 'operation=getEventCategory'
var idEvntCat = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+idEvntCat,
    dataType: 'json',
    success: function(data){
                       var name = data[0].name;
                       $('#event_cat_name').val(name);
                       $('#event_cat_id').val(id);
        }
    });

}


function getProductsSubTypes(selectedType,selectedId){

    $('#sub_type').html('');

    var operation = 'operation=getProductsSubTypes';
    var type = "type="+selectedType;
debugger;
    $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+type,
        dataType: 'json',
        success: function(pepe){
            debugger;

            //data = pepe[0];
            categoryArray = pepe;

            if (categoryArray){

                for (index=0; index<categoryArray.length; index++) {
                    debugger;
                    if (categoryArray[index].id == selectedId){
                        $('#sub_type').append('<option selected="selected" value="'+categoryArray[index].id+'">'+categoryArray[index].desc+'</option>');

                    } else {
                        $('#sub_type').append('<option value="'+categoryArray[index].id+'">'+categoryArray[index].desc+'</option>');
                    }
                }
            }

        }

    });

}






function getProductSubCategory(id){
$('#message').html('');
$('#subcat_catid').html('');
var operation = 'operation=getProductSubCategory';
var id = 'subcat_id='+id;

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(pepe){
debugger;
data = pepe[0];
categoryArray = pepe[1];

                       var name = data[0].name;
                       var id = data[0].id;
                       var in_menu = data[0].in_menu;

var cat_id = data[0].cat_id;
//var categoryArray = data[0].categoryArray;

                       if (categoryArray){
                           for (index=0; index<categoryArray.length; index++) {

                               if (categoryArray[index].id == cat_id){
                                   $('#editProductSubCategory #subcat_catid').append('<option selected="selected" value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');

                               } else {
                                    $('#editProductSubCategory #subcat_catid').append('<option value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');
                               }
                           }
                       } 

debugger;
                       $('#product_subcat_name').val(name);

                       if (in_menu == 'Y'){
                       $("#editProductSubCategory #subcat_in_menu").attr("checked", true);
                       } else {
                       $("#editProductCategory #subcat_in_menu").attr("checked", false);
                       }
        }
    });

}



function getProductCategory(id){

$('#message').html('');
var operation = 'operation=getProductCategory'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){
                       var name = data[0].name;
                       var id = data[0].id;
                       var in_menu = data[0].in_menu;
debugger;
                       $('#product_cat_name').val(name);

                       if (in_menu == 'Y'){
                       $("#editProductCategory #in_menu").attr("checked", true);
                       } else {
                       $("#editProductCategory #in_menu").attr("checked", false);
                       }
        }
    });

}



function getCategory(id){

$('#message').html('');
var operation = 'operation=getCategory'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){
                       var name = data[0].name;
                       var id = data[0].id;
                       var in_menu = data[0].in_menu;
                       $('#cat_name').val(name);
                       if (in_menu == '1'){
                       $("#in_menu").attr("checked", true);
                       } else {
                       $("#in_menu").attr("checked", false);
                       }
        }
    });

}


function getSection(id){

$('#message').html('');
$('#sectionImageBox').html('');

var operation = 'operation=getSection'
var id = 'id='+id
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation+'&'+id,
    dataType: 'json',
    success: function(data){
                       var id = data[0];
                       var title = data[1];
                       var descrip= data[2];
                       var content = data[3];
                       var published = data[4];
                       var categoryId = data[5];
                       var sectionPict = data[6];
                       var date_posted = data[7];
                       var categoryArray = data[8];

                       $('#editSection #title').val(title);
                       $('#editSection #descrip').val(descrip);

                       $('#editSection #content').val(content);
                       $('#editSection #published').val(published);
                       $('#editSection #section_date_posted').val(date_posted);

                       $('#editSection #sections_category_id').html('');
                       
                             var selected = '';
                            if (!categoryId){selected = 'selected="selected"'}
                            $('#editSection #sections_category_id').append('<option value="0" '+selected+' >Seleccione un lugar</option>');

                            for (index=0; index<categoryArray.length; index++) {
                                    if (categoryArray[index].id == categoryId){
                                    $('#editSection #sections_category_id').append('<option selected="selected" value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');

                                    } else {
                                    $('#editSection #sections_category_id').append('<option value="'+categoryArray[index].id+'">'+categoryArray[index].name+'</option>');
                                    }
                            } 


//                       tinymce.activeEditor.execCommand('mceInsertContent', false, ' ');
//                       tinymce.activeEditor.execCommand('mceInsertContent', false, content);

                       if (published == '1') {$("#editSection #section_published").attr("checked", true);} else {$("#editSection #section_published").attr("checked", false)}

          $('#sectionImageBox').html('');
if (sectionPict)$('#sectionImageBox').append('<div class="pictBox"><img src="/fotos/articulos/'+sectionPict+'" id="sectionPict" name="sectionPict" height="100px"></div>');
          $('#sectionImageUrl').val(sectionPict);

          

tinymce.get($("#content").attr('id')).execCommand('mceInsertContent',false,content); 

        }
    });

}


function deletePlace(id,name){

    if (id != ''){
        var answer = confirm('¿Está seguro de eliminar el lugar '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deletePlace';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllPlaces();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar un lugar para eliminar primero.');

}



function deleteEvent(id,name){

clearMode();


    if (id != ''){
        var answer = confirm('¿Está seguro de eliminar el evento '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteEvent';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllEvents();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar un usuario para eliminar primero.');
}



function deletePerson(id,name){

    if (id != ''){
        var answer = confirm('¿Está seguro de eliminar el usuario '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deletePerson';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllProfiles();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar un usuario para eliminar primero.');
}


function deleteProduct(id,name){

    if (id != ''){
        var answer = confirm('¿Está seguro de eliminar el producto '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteProduct';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllProducts();

                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar un producto para eliminar primero.');

}

function deletePost(id,title){

    if (id != ''){
        var answer = confirm('¿Está seguro de eliminar el artículo '+title+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deletePost';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllPosts();

                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar un artículo para eliminar primero.');

}

function deleteContact(id){
clearMode();

    if (id != ''){
         var answer = confirm('¿Está seguro de eliminar el contacto?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteContact';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllNewsContacts();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar un contacto para eliminar primero.');
}



function deleteMessage(id){
clearMode();

    if (id != ''){
         var answer = confirm('¿Está seguro de eliminar el mensaje?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteMessage';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllMessages();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar un mensaje para eliminar primero.');
}


function deleteProductSubCategory(id,name){
clearMode();

    if (id != ''){
         var answer = confirm('¿Está seguro de eliminar la subcategoría '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteProductSubCategory';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllProductsSubCategories();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar una categoría para eliminar primero.');
}


function deleteProductCategory(id,name){
clearMode();

    if (id != ''){
         var answer = confirm('¿Está seguro de eliminar la categoría '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteProductCategory';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllProductsCategories();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar una categoría para eliminar primero.');
}



function deleteCategory(id,name){
clearMode();

    if (id != ''){
         var answer = confirm('¿Está seguro de eliminar la categoría '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteCategory';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllCategories();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar una categoría para eliminar primero.');
}



function deleteSectionCategory(id,name){

    if (id != ''){
        var answer = confirm('¿Está seguro de eliminar la categoría '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteSectionCategory';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllSectionsCat();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar una categoría para eliminar primero.');
}



function deleteEventCategory(id,name){

    if (id != ''){
        var answer = confirm('¿Está seguro de eliminar la categoría '+name+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteEventCategory';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllEventsCat();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar una categoría para eliminar primero.');
}




function deleteSection(id,title){
clearMode();

    if (id != ''){
        var answer = confirm('¿Está seguro de eliminar la sección '+title+'?');
        if (answer){

        var id  = 'id='+id;
        var operation = 'operation=deleteSection';
     
        $.ajax({
        url: '/includes/ajax.php',
        type: 'POST',
        data: operation+'&'+id,
//        dataType: 'json',
        success: function(message){
                     printMessage(message,'success');
                     clearMode();
                     getAllSections();
                     return false;
                            }

               });
        }
    } else alert('Debe seleccionar una sección para eliminar primero.');
}






function save(){
    operation = $('#operation').val();

    if (operation == 'newPerson'){
    if ($('#first_name').val() == '' || $('#last_name').val() == ''){alert ('Debe completar Nombre y apellido del usuario.');return false;}
    var data = $("#editPerson").serialize();
    data = data+'&foto='+$('#foto').attr('src');
    data = encode_utf8(data);

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=newPerson&'+data,
    dataType: 'json',
    success: function(message){

                 
                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editPerson');
                 if (newId){$('#idPerson').val(newId);}
                 return false;

             },

           });
    } else if (operation == 'editPage'){

    var data = $("#editPage").serialize();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=savePage&'+data,

//    dataType: 'json', ---> Esta mierda, como no estoy devolviendo json, me rompía las pelotas.....

        success: function(message){
                       printMessage(message,'success');
                     return false;
                            }

           });

    } else {

    var data = $("#editPerson").serialize();
    if ($('#first_name').val() == '' || $('#last_name').val() == ''){alert ('Debe completar Nombre y apellido del usuario.');return false;}

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editPerson&idPerson='+$('#idPerson').val()+'&'+data,

//    dataType: 'json', ---> Esta mierda, como no estoy devolviendo json, me rompía las pelotas.....

        success: function(message){
                       printMessage(message,'success');
                     return false;
                            }

           });


}
}


function saveEvent(){
    operation = $('#operation').val();
//debugger;
    if (operation == 'newEvent'){

var data = '';
var title = $('#editEvent #title').val(); if (title != ''){data += 'title='+title;}
var initdate = $('#editEvent #initdate').val(); if (initdate != ''){data += '&initdate='+initdate;}
var eventDescrip = $('#eventDescrip').val(); if (eventDescrip != ''){data += '&eventDescrip='+eventDescrip;}
var marker = $('#marker').val(); if (marker != ''){data += '&marker='+marker;}
var eventPict = $('#eventImageUrl').val(); if (eventPict != ''){data += '&eventPict='+eventPict;}
var events_category_id = $('#events_category_id').val(); if (events_category_id != ''){data += '&events_category_id='+events_category_id;}
//var tags = $('#tags').val(); if (tags != ''){data += '&tags='+tags;}

//if (document.getElementById('event_published').checked){var published = '1'} else {var published = '0'}; data += '&published='+published; 
if($("#editEvent #event_published").is(':checked')){var published = '1';} else {var published = '0';}; data += '&published='+published; 

    data = encode_utf8(data);
var    eventHtml = tinymce.get('event').getContent();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    dataType: 'json',
    data: '&operation=newEvent&'+data +'&eventHtml='+eventHtml,
//    dataType: 'json',
    success: function(message){

//                 refreshProducts();
                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
debugger;
                 $('#operation').val('editEvent');

                 if (newId){$('#idEvent').val(newId);}
                 return false;

             },

           });
 
} else {

var data = '';
var title = $('#editEvent #title').val(); if (title != ''){data += 'title='+title;}
var initdate = $('#editEvent #initdate').val(); if (initdate != ''){data += '&initdate='+initdate;}
var eventDescrip = $('#eventDescrip').val(); if (eventDescrip != ''){data += '&eventDescrip='+eventDescrip;}
var marker = $('#marker').val(); if (marker != ''){data += '&marker='+marker;}
var eventPict = $('#eventImageUrl').val(); if (eventPict != ''){data += '&eventPict='+eventPict;}
var events_category_id = $('#events_category_id').val(); if (events_category_id != ''){data += '&events_category_id='+events_category_id;}

//var date_posted = picker.getDate();
if($("#editEvent #event_published").is(':checked')){var published = '1';} else {var published = '0';}; data += '&published='+published; 
//alert(date_posted);

var idEvent = $('#idEvent').val(); if (idEvent != ''){data += '&idEvent='+idEvent;}

    data = encode_utf8(data);
    //post = tinymce.get('post').getContent();
var    eventHtml = tinymce.get('event').getContent();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editEvent&'+data+'&eventHtml='+eventHtml,

    dataType: 'json', 
        success: function(message){
                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                     return false;

                            },

           });


}

    return false;
}




// ------ Save Product BEGINNING ------- //






function saveProduct(){

operation = $('#operation').val();

var data = '';
var idProduct = $('#idProduct').val(); if (idPost != ''){data += '&idProduct='+idProduct;}
var name = $('#product_name').val(); if (name != ''){data += '&product_name='+name;}
var product_code = $('#product_code').val(); if (product_code != ''){data += '&product_code='+product_code;}
var product_short_desc = $('#product_short_desc').val(); if (product_short_desc != ''){data += '&product_short_desc='+product_short_desc;}
var product_long_desc = $('#product_long_desc').val(); if (product_long_desc != ''){data += '&product_long_desc='+product_long_desc;}
var product_category_id = $('#product_category_id').val(); if (product_category_id != '' && product_category_id != '0'){data += '&product_category_id='+product_category_id;}else{alert('Debe seleccionar una categoría');return false;}
var product_subcategory_id = $('#product_subcategory_id').val(); if (product_subcategory_id != '' && product_subcategory_id != '0'){data += '&product_subcategory_id='+product_subcategory_id;}
var product_price = $('#product_price').val(); if (product_price != ''){data += '&product_price='+product_price;}
var product_price2 = $('#product_price2').val(); if (product_price2 != ''){data += '&product_price2='+product_price2;}
var product_price3 = $('#product_price3').val(); if (product_price3 != ''){data += '&product_price3='+product_price3;}
var strikethrough_price = $('#strikethrough_price').val(); if (strikethrough_price != ''){data += '&strikethrough_price='+strikethrough_price;}
var has_strikethrough_price = $('#has_strikethrough_price').val(); if (has_strikethrough_price != ''){data += '&has_strikethrough_price='+has_strikethrough_price;}
var stock = $('#product_stock').val(); if (stock != ''){data += '&product_stock='+stock;}
var shows_stock = $('#shows_stock').val(); if (shows_stock != ''){data += '&shows_stock='+shows_stock;}
var size = $('#product_size').val(); if (size != ''){data += '&product_size='+size;}
var measures = $('#product_measures').val(); if (measures != ''){data += '&product_measures='+measures;}
var material = $('#product_material').val(); if (material != ''){data += '&product_material='+material;}
//var colors = $('#product_colors').val(); if (colors != ''){data += '&product_colors='+colors;}
var code = $('#product_code').val(); if (code != ''){data += '&product_code='+code;}

if($("#editProduct #published").is(':checked')){var published = 'Y';} else {var published = 'N';}; data += '&published='+published; 
if($("#editProduct #shows_stock").is(':checked')){var shows_stock = 'Y';} else {var shows_stock = 'N';}; data += '&shows_stock='+shows_stock; 
if($("#editProduct #has_strikethrough_price").is(':checked')){var has_strikethrough_price = 'Y';} else {var has_strikethrough_price = 'N';}; data += '&has_strikethrough_price='+has_strikethrough_price; 

var colors= '';
$("input:checkbox[name=colors]:checked").each(function()
{
    // add $(this).val() to your array

    colors= colors+'|'+$(this).val();
//    var thisVal = $(this).val();

});

var waists= '';
$("input:checkbox[name=waists]:checked").each(function()
{
    // add $(this).val() to your array

    waists = waists+'|'+$(this).val();
//    var thisVal = $(this).val();

});


var pictures = '';
$("input:checkbox[name=pictures]:checked").each(function()
{
    // add $(this).val() to your array

    pictures = pictures+'|'+$(this).val();
   // var thisVal = $(this).val();

});

    data += '&pictures='+pictures+'&colors='+colors+'&waists='+waists;

    data = encode_utf8(data);

    if (operation == 'newProduct'){

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    dataType: 'json',
    data: 'operation=newProduct&'+data,
    success: function(message){

                 var text = message[0];
                 var result = message[1];
                 if (message[2]){var newId = message[2];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editPost');
                 if (newId){$('#idProduct').val(newId);}
                 return false;

             },

           });

    } else {


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editProduct'+data,

//    dataType: 'json', ---> Esta mierda, como no estoy devolviendo json, me rompía las pelotas.....

        success: function(message){
                       printMessage(message,'success');
                     return false;

                            }

           });


     }

return false;

}





// ------ Save Product END ------- //






function savePersonalizada(){
//    operation = $('#operation').val();


var data = '';
var p_status = $('#p_status').val(); if (p_status != ''){data += '&p_status='+p_status;}
var p_staff_message = $('#p_staff_message').val(); if (p_staff_message != ''){data += '&p_staff_message='+p_staff_message;}
var idPersonalizada = $('#idPersonalizada').val(); if (idPersonalizada != ''){data += '&idPersonalizada='+idPersonalizada;}
//var tags = $('#tags').val(); if (tags != ''){data += '&tags='+tags;}

//if (document.getElementById('publish').checked){var published = '1'} else {var published = '0'}; data += '&published='+published; 

    data = encode_utf8(data);
//alert(post);

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    dataType: 'json',
    data: 'operation=savePersonalizada'+data,
    success: function(message){

//                 refreshProducts();
                 var text = message[0];
                 var result = message[1];
//                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
//                 $('#operation').val('editPost');
 //                if (newId){$('#idPost').val(newId);}
                 return false;

             },

           });

}





function saveSale(){
//    operation = $('#operation').val();


var data = '';
var sale_status = $('#sale_status').val(); if (sale_status != ''){data += '&sale_status='+sale_status;}
var sale_staff_message = $('#sale_staff_message').val(); if (sale_staff_message != ''){data += '&sale_staff_message='+sale_staff_message;}
var sale_id = $('#sale_id').val(); if (sale_id != ''){data += '&id='+sale_id;}
//var tags = $('#tags').val(); if (tags != ''){data += '&tags='+tags;}

//if (document.getElementById('publish').checked){var published = '1'} else {var published = '0'}; data += '&published='+published; 

    data = encode_utf8(data);
//alert(post);

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    dataType: 'json',
    data: 'operation=saveSale'+data,
    success: function(message){

//                 refreshProducts();
                 var text = message[0];
                 var result = message[1];
//                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
//                 $('#operation').val('editPost');
 //                if (newId){$('#idPost').val(newId);}
                 return false;

             },

           });

}




function savePost(){
    operation = $('#operation').val();

    if (operation == 'newPost'){

var data = '';
var title = $('#title').val(); if (title != ''){data += '&title='+title;}
var post_descrip = $('#post_descrip').val(); if (post_descrip != ''){data += '&post_descrip='+post_descrip;}
var author_id = $('#author_id').val(); if (author_id != ''){ data += '&author_id='+author_id;}
var date_posted = $('#date_posted').val(); if (date_posted != ''){data += '&date_posted='+date_posted;}
var idPost = $('#idPost').val(); if (idPost != ''){data += '&idPost='+idPost;}
var category_id = $('#category_id').val(); if (category_id != ''){data += '&category_id='+category_id;}
var postPict = $('#postImageUrl').val(); if (postPict != ''){data += '&postPict='+postPict;}
//var tags = $('#tags').val(); if (tags != ''){data += '&tags='+tags;}

//if (document.getElementById('publish').checked){var published = '1'} else {var published = '0'}; data += '&published='+published; 
if($("#editPost #publish").is(':checked')){var published = '1';} else {var published = '0';}; data += '&published='+published; 

var tagsArray = [];
	
	/* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
	$(".tagsCBox:checked").each(function() {
		tagsArray.push($(this).val());
	});

	var selected; //alert(selected);
	selected = tagsArray.join('|') + "|";

        var tags = selected; if (tags != ''){data += '&tags='+tags;}


    data = encode_utf8(data);
    post = tinymce.get('post').getContent();

//alert(post);

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    dataType: 'json',
    data: 'postHtml='+post+'&operation=newPost&'+data,
    success: function(message){

//                 refreshProducts();
                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editPost');
                 if (newId){$('#idPost').val(newId);}
                 return false;

             },

           });

} else {

//    var data = $("#editPost").serialize();
var data = '';
var title = $('#title').val(); if (title != ''){data += '&title='+title;}
var post_descrip = $('#post_descrip').val(); if (post_descrip != ''){data += '&post_descrip='+post_descrip;}
var author_id = $('#author_id').val(); if (author_id != ''){ data += '&author_id='+author_id;}
var date_posted = $('#date_posted').val(); if (date_posted != ''){data += '&date_posted='+date_posted;}
var category_id = $('#category_id').val(); if (category_id != ''){data += '&category_id='+category_id;}
var postPict = $('#postImageUrl').val(); if (postPict != ''){data += '&postPict='+postPict;}
//var date_posted = picker.getDate();
//if (document.getElementById('publish').checked){var published = '1'} else {var published = '0'}; data += '&published='+published; 
if($("#editPost #publish").is(':checked')){var published = '1';} else {var published = '0';}; data += '&published='+published; 


//alert(date_posted);

var idPost = $('#idPost').val(); if (idPost != ''){data += '&idPost='+idPost;}

var tagsArray = [];
	
	/* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
	$(".tagsCBox:checked").each(function() {
		tagsArray.push($(this).val());
	});

	var selected; //alert(selected);
	selected = tagsArray.join('|') + "|";

var tags = selected; if (tags != ''){data += '&tags='+tags;}

    data = encode_utf8(data);
    post = tinymce.get('post').getContent();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editPost'+data+'&postHtml='+post,

//    dataType: 'json', ---> Esta mierda, como no estoy devolviendo json, me rompía las pelotas.....

        success: function(message){
                       printMessage(message,'success');
                     return false;

                            }

           });


}
$('#tagsBox').html(''); 
    getTags();return false;

}




function saveSectionCategory(){
    operation = $('#operation').val();
    if ($('#section_cat_name').val() == ''){
   //         alert ('Debe completar Nombre y apellido del usuario.');return false;

         printMessage('Debe completar el nombre de la categoría','error');

    }

    if (operation == 'newSectionCategory'){
//    var data = $("#editSectionCategory").serialize();
//    data = data+'&foto='+$('#foto').attr('src');

//debugger;
var section_cat_name = $('#section_cat_name').val();if (section_cat_name){var section_cat_name = '&section_cat_name='+section_cat_name}else{alert('Debe completar el nombre de la categoría'); return false;}
//var section_cat_id = $('#section_cat_id');if(section_cat_id){section_cat_id = 'section_cat_id='+section_cat_id}
var pictures = '';

$("input:checkbox[name=pictures]:checked").each(function()
{
    // add $(this).val() to your array
    pictures = pictures+'|'+$(this).val();
var thisVal = $(this).val();

});

    pictures = '&pictures='+pictures;
    data = section_cat_name+pictures;
    data = encode_utf8(data);

//debugger;

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=newSectionCategory'+data,
    dataType: 'json',
    success: function(message){

                 //printMessage(message,'success');
                 //return false;
                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editSectionCategory');
                 if (newId){$('#section_cat_id').val(newId);}
                 return false;

             },

           });

} else {

//    var data = $("#editSectionCategory").serialize();
//debugger;
var section_cat_id = $('#section_cat_id').val();if (section_cat_id){var section_cat_id = '&section_cat_id='+section_cat_id}else{alert('No se puede guardar la categoría'); return false;}
var section_cat_name = $('#section_cat_name').val();if (section_cat_name){var section_cat_name = '&section_cat_name='+section_cat_name}else{alert('Debe completar el nombre de la categoría'); return false;}
//var section_cat_id = $('#section_cat_id');if(section_cat_id){section_cat_id = 'section_cat_id='+section_cat_id}
var pictures = '&pictures=';

$("input:checkbox[name=pictures]:checked").each(function()
{
    // add $(this).val() to your array
    pictures = pictures+'|'+$(this).val();
var thisVal = $(this).val();

});

    data = section_cat_name+pictures+section_cat_id;
    data = encode_utf8(data);


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editSectionCategory&'+data,

        success: function(message){
                       printMessage(message,'success');
                     return false;
                            }

           });


}
}









function saveEventCategory(){
    operation = $('#operation').val();
    if ($('#event_cat_name').val() == ''){
   //         alert ('Debe completar Nombre y apellido del usuario.');return false;

         printMessage('Debe completar el nombre de la categoría','error');

    }

    if (operation == 'newEventCategory'){
    var data = $("#editEventCategory").serialize();
//    data = data+'&foto='+$('#foto').attr('src');
    data = encode_utf8(data);

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=newEventCategory&'+data,
    dataType: 'json',
    success: function(message){

                 //printMessage(message,'success');
                 //return false;
                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editEventCategory');
                 if (newId){$('#event_cat_id').val(newId);}
                 return false;

             },

           });

} else {

    var data = $("#editEventCategory").serialize();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editEventCategory&'+data,

        success: function(message){
                       printMessage(message,'success');
                     return false;
                            }

           });


}
}





function saveCategory(){
    operation = $('#operation').val();
    if ($('#cat_name').val() == ''){
   //         alert ('Debe completar Nombre y apellido del usuario.');return false;

         printMessage('Debe completar el nombre de la categoría','error');

    }

    if (operation == 'newCategory'){
    var data = $("#editCategory").serialize();
//    data = data+'&foto='+$('#foto').attr('src');
    data = encode_utf8(data);

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=newCategory&'+data,
    dataType: 'json',
    success: function(message){

                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editCategory');
                 if (newId){$('#idCategory').val(newId);}
                 return false;
    
             },

           });

} else {

    var data = $("#editCategory").serialize();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editCategory&idCategory='+$('#idCategory').val()+'&'+data,

//    dataType: 'json', ---> Esta mierda, como no estoy devolviendo json, me rompía las pelotas.....

        success: function(message){
                       printMessage(message,'success');
                     return false;
                            }

           });


}
}



function saveProductSubCategory(){
debugger;
    operation = $('#operation').val();
    if ($('#product_subcat_name').val() == ''){
   //         alert ('Debe completar Nombre y apellido del usuario.');return false;

         printMessage('Debe completar el nombre de la categoría','error');

    }

    if (operation == 'newProductSubCategory'){
    var data = $("#editProductSubCategory").serialize();
//    data = data+'&foto='+$('#foto').attr('src');
    data = encode_utf8(data);

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=newProductSubCategory&'+data,
    dataType: 'json',
    success: function(message){

                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editProductSubCategory');
                 if (newId){$('#idProdSubCategory').val(newId);}
                 return false;
    
             },

           });

} else {

    var data = $("#editProductSubCategory").serialize();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editProductSubCategory&idProdSubCategory='+$('#idProdSubCategory').val()+'&'+data,

//    dataType: 'json', ---> Esta mierda, como no estoy devolviendo json, me rompía las pelotas.....

        success: function(message){
                       printMessage(message,'success');
                     return false;
                            }

           });


}
}







function saveProductCategory(){
debugger;
    operation = $('#operation').val();
    if ($('#product_cat_name').val() == ''){
   //         alert ('Debe completar Nombre y apellido del usuario.');return false;

         printMessage('Debe completar el nombre de la categoría','error');

    }

    if (operation == 'newProductsCategory'){
    var data = $("#editProductCategory").serialize();
//    data = data+'&foto='+$('#foto').attr('src');
    data = encode_utf8(data);

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=newProductsCategory&'+data,
    dataType: 'json',
    success: function(message){

                 var text = message[0];
                 var result = message[1];
                 if (message[3]){var newId = message[3];}

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editProductCategory');
                 if (newId){$('#idProdCategory').val(newId);}
                 return false;
    
             },

           });

} else {

    var data = $("#editProductCategory").serialize();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editProductCategory&idProdCategory='+$('#idProdCategory').val()+'&'+data,

//    dataType: 'json', ---> Esta mierda, como no estoy devolviendo json, me rompía las pelotas.....

        success: function(message){
                       printMessage(message,'success');
                     return false;
                            }

           });


}
}




function clearMode(){

$('#editBox').fadeOut();
$('#main').fadeIn();

}

function printMessage(message,type){

var msgClass;
msgClass = '';
if (type == 'error'){
msgClass = 'messageError';//Red Background
} else if (type == 'notify') {
msgClass = 'messageAlert';//Light Blue Background
} else if (type == 'success'){
msgClass = 'messageSuccess';//Green Background
}

var body = $("html, body");
body.animate({scrollTop:0}, '900', 'swing', function() { 
});

    $('#messageContainer').fadeOut("2500", function() {
                                           // 
                                           $("#messageContainer").attr("class", msgClass);
                                           $('#message').html(message);

                                           });
   $('#messageContainer').fadeIn("2500");


	
	// When #scroll is clicked
	jQuery('#scroll').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:catTopPosition}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});


}

function closeMessage(){
$('#messageContainer').slideUp( "slow");
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function getSectionCatSelect(){

                            $('#sections_category_id').html('');
//                            $('#category_id').html('');
//                            $('#tagsBox').html('');


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getSectionCatSelect',
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado Categorias';
            printMessage(message,'notify');
        } else  {
            var catArray = response;


             $('#sections_category_id').append('<option value="0">Seleccione una categoria</option>');

            for (index=0; index<catArray.length; index++) {
//alert ('ds'+authorArray[index].id);
                    $('#sections_category_id').append('<option value="'+catArray[index].id+'">'+catArray[index].name+'</option>');
            } 

        }

     },

    });

}


function getAuthorSelect(){

                            $('#author_id').html('');
//                            $('#category_id').html('');
//                            $('#tagsBox').html('');


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getAuthorSelect',
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado Autores';
            printMessage(message,'notify');
        } else  {
            var authorArray = response;

             $('#author_id').append('<option value="0">Seleccione un autor</option>');

            for (index=0; index<authorArray.length; index++) {
//alert ('ds'+authorArray[index].id);
                    $('#author_id').append('<option value="'+authorArray[index].id+'">'+authorArray[index].first_name+' '+authorArray[index].last_name+'</option>');
            } 

        }

     },

    });

}




function getTags(){

var id = $('#idPost').val();



    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: '/operation=getTags'+'&id='+id,
    dataType: 'json',
    success: function(response){
        if (response == null){
//            message = 'No se han encontrado Autores';
//            printMessage(message,'notify');
        } else  {
            var tagsArray = response;

            for (i=0; i<tagsArray.length; i++) {
                $('#tagsBox').append('<input name="tags[]" checked="checked" class="tagsCBox" type="checkbox" value="'+tagsArray[i].id+'">'+tagsArray[i].name+'<br/>');
            }

        }

     },

    });

}

function getProductsCategories(field){

    $('#'+field).html('');

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getAllProductsCategories',
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado Categorias';
            printMessage(message,'notify');
        } else  {
            var catArray = response;
             $('#'+field).append('<option value="0">Seleccione una categoría</option>');

            for (index=0; index<catArray.length; index++) {
//alert ('ds'+authorArray[index].id);
                    $('#'+field).append('<option value="'+catArray[index].id+'">'+catArray[index].name+'</option>');
            } 

        }

     },

    });

}

function getCategories(){
                            $('#category_id').html('');
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=getAllCategories',
    dataType: 'json',
    success: function(response){
        if (response == null){
            message = 'No se han encontrado Categorias';
            printMessage(message,'notify');
        } else  {
            var catArray = response;
             $('#category_id').append('<option value="0">Seleccione una categoría</option>');

            for (index=0; index<catArray.length; index++) {
//alert ('ds'+authorArray[index].id);
                    $('#category_id').append('<option value="'+catArray[index].id+'">'+catArray[index].name+'</option>');
            } 

        }

     },

    });

}



function createTag(){

//var idPost = $('#idPost').val(); if (idPost != ''){data += '&idPost='+idPost;}
var data = '';

var tagsArray = [];
	
	/* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
	$(".tagsCBox:checked").each(function() {
		tagsArray.push($(this).val());
	});

	var selected; //alert(selected);
	selected = tagsArray.join('|') + "|";

var tags = selected; if (tags != ''){data += '&tags='+tags;}

var newTag = $('#newTag').val(); 
if (newTag == '' || newTag == null){
    message = 'Debés ingresar la descripción de la etiqueta.';
    printMessage(message,'error');
    return false;
} else {
    data += '&newTag='+newTag;
    data = encode_utf8(data);
    post = tinymce.get('post').getContent();
    $('#tagsBox').html('');

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=createTag'+data,

    dataType: 'json', //---> Esta mierda, como no estoy devolviendo json, me rompía las pelotas.....

        success: function(response){


                        for (i=0; i<response.length; i++) {
                                $('#tagsBox').append('<input name="tags[]" checked="checked" class="tagsCBox" type="checkbox" value="'+response[i].id+'">'+response[i].name+'<br />');
                        }


                  }
               
           });
}

}


function editPage(){

$('#message').html('');
var operation = 'operation=editPage'
    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: operation,
    dataType: 'json',
    success: function(data){

//name| descrip| phone| email| address| googleplus| twitter| facebook

                       var name = data[0];
                       var descrip = data[1];
                       var phone = data[2];
                       var email = data[3];
                       var address = data[4];
                       var googleplus = data[5];
                       var twitter = data[6];
                       var facebook = data[7];
                       var city = data[8];

                       $('#editPage #name').val(name);
                       $('#editPage #descrip').val(descrip);
                       $('#editPage #phone').val(phone);
                       $('#editPage #email').val(email);
                       $('#editPage #address').val(address);
                       //$('#address').attr('src', profilePictFolder+avatar);
                       //$('#editPage #address').val(address);
                       $('#editPage #googleplus').val(googleplus);
                       $('#editPage #twitter').val(twitter);
                       $('#editPage #facebook').val(facebook);
                       $('#editPage #city').val(city);
        }
    });
}



function saveSection(){
    operation = $('#operation').val();

    if (operation == 'newSection'){

var data = '';
var title = $('#editSection #title').val(); if (title != ''){data += '&title='+title;}
var descrip = $('#editSection #descrip').val(); if (descrip != ''){data += '&descrip='+descrip;}
var category = $('#editSection #sections_category_id').val(); if (category != ''){data += '&sections_category_id='+category;}
var sectionPict = $('#sectionImageUrl').val(); if (sectionPict!= ''){data += '&sectionPict='+sectionPict;}
var date_posted = $('#section_date_posted').val(); if (date_posted != ''){data += '&date_posted='+date_posted;}

if (document.getElementById('section_published').checked){var published = '1'} else {var published = '0'}; data += '&published='+published; 

    data = encode_utf8(data);
//    content = tinymce.get('#content').getContent();
    content = tinymce.get('content').getContent();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'sectionHtml='+content+'&operation=newSection&'+data,
    dataType: 'json',
    success: function(message){

//                 refreshProducts();
                 var text = message[0];
                 var result = message[1];
                 if (message[2]){var newId = message[2];}
                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 $('#operation').val('editSection');
                 if (newId){$('#idSection').val(newId);}
                 return false;

             },

           });

} else {

//    var data = $("#editPost").serialize();
var data = '';
var title = $('#editSection #title').val(); if (title != ''){data += '&title='+title;}
var descrip = $('#editSection #descrip').val(); if (descrip != ''){data += '&descrip='+descrip;}
var category = $('#editSection #sections_category_id').val(); if (category != ''){data += '&sections_category_id='+category;}
var sectionPict = $('#sectionImageUrl').val(); if (sectionPict!= ''){data += '&sectionPict='+sectionPict;}
var date_posted = $('#section_date_posted').val(); if (date_posted != ''){data += '&date_posted='+date_posted;}

if (document.getElementById('section_published').checked){var published = '1'} else {var published = '0'}; data += '&published='+published; 



//alert(date_posted);

var idSection = $('#idSection').val(); if (idSection != ''){data += '&idSection='+idSection;}

    data = encode_utf8(data);
    //content = tinymce.get('#content').getContent();
    content = tinymce.get('content').getContent();

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: 'operation=editSection'+data+'&sectionHtml='+content,

        success: function(message){
                       printMessage(message,'success');
                       return false;

                            }

           });

}

}


function initPostEditor(){
tinymce.init({
    cleanup_on_startup : true,
    selector: "textarea#post",
    theme: "modern",
    width: 900,
    height: 300,
    entity_encoding : "raw",

    plugins: [
//         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
//         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
//         "save table contextmenu directionality emoticons template paste textcolor"
 "advlist autolink lists link image charmap print preview anchor",
"searchreplace visualblocks code fullscreen",
"insertdatetime media table contextmenu paste jbimages"
   ],
   content_css: "/css/content.css",
   toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image jbimages | forecolor backcolor emoticons", 
 relative_urls: false,
   style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    ]
 }); 

}



function initEventEditor(){

tinymce.init({
    cleanup_on_startup : true,
    selector: "#event",
    theme: "modern",
    width: 900,
    height: 300,
    entity_encoding : "raw",

    plugins: [
//         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
//         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
//         "save table contextmenu directionality emoticons template paste textcolor"
 "advlist autolink lists link image charmap print preview anchor",
"searchreplace visualblocks code fullscreen",
"insertdatetime media table contextmenu paste jbimages"
   ],
   content_css: "/css/content.css",
   toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image jbimages | forecolor backcolor emoticons", 
 relative_urls: false,
   style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    ]
 }); 



}





function initSectionEditor(){


tinymce.init({
    cleanup_on_startup : true,

    selector: "#content",
    theme: "modern",
    width: 900,
    height: 300,
    entity_encoding : "raw",

    plugins: [
//         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
//         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
//         "save table contextmenu directionality emoticons template paste textcolor"
 "advlist autolink lists link image charmap print preview anchor",
"searchreplace visualblocks code fullscreen",
"insertdatetime media table contextmenu paste jbimages"
   ],
   content_css: "/css/content.css",
   toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image jbimages | forecolor backcolor emoticons", 
 relative_urls: false,
   style_formats: [
        {title: 'Bold text', inline: 'b'},
        {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
        {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
        {title: 'Example 1', inline: 'span', classes: 'example1'},
        {title: 'Example 2', inline: 'span', classes: 'example2'},
        {title: 'Table styles'},
        {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
    ]
 }); 

}


function reOrderTable(tableId,row,sense){

//alert(tableId+row+sense)
debugger;
var roww = $(row).parents("tr:first");

        if (sense == 'up') {
            roww.insertBefore(roww.prev());
        } else {
            roww.insertAfter(roww.next());
        }

if (tableId == 'catTable'){
$('#saveBlogCatOrder').fadeIn();
} else if (tableId == 'productsCatTable'){
$('#saveProductsCatOrder').fadeIn();
} else if (tableId == 'productsSubCatTable'){
$('#saveProductsSubCatOrder').fadeIn();
} else if (tableId == 'sectionsCatTable'){
$('#saveSectCatOrder').fadeIn();
} else if(tableId == 'eventsCatTable'){
$('#saveEventCatOrder').fadeIn();
}

}






function savePortada(){

//debugger;
var data = 'operation=savePortada';

var portada_01 = $('#portada_01').val();if (portada_01 != ''){data += '&portada_01='+portada_01;}
var portada_02 = $('#portada_02').val();if (portada_02 != ''){data += '&portada_02='+portada_02;}
var portada_03 = $('#portada_03').val();if (portada_03 != ''){data += '&portada_03='+portada_03;}
var portada_04 = $('#portada_04').val();if (portada_04 != ''){data += '&portada_04='+portada_04;}
var portada_05 = $('#portada_05').val();if (portada_05 != ''){data += '&portada_05='+portada_05;}
var portada_06 = $('#portada_06').val();if (portada_06 != ''){data += '&portada_06='+portada_06;}
var portada_07 = $('#portada_07').val();if (portada_07 != ''){data += '&portada_07='+portada_07;}
var portada_08 = $('#portada_08').val();if (portada_08 != ''){data += '&portada_08='+portada_08;}
var portada_09 = $('#portada_09').val();if (portada_09 != ''){data += '&portada_09='+portada_09;}

var portada_10 = $('#portada_10').val();if (portada_10 != ''){data += '&portada_10='+portada_10;}
var portada_11 = $('#portada_11').val();if (portada_11 != ''){data += '&portada_11='+portada_11;}
var portada_12 = $('#portada_12').val();if (portada_12 != ''){data += '&portada_12='+portada_12;}


    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    dataType: 'json',
    data: data,
    success: function(message){

                 var text = message[0];
                 var result = message[1];

                 if (result == '1'){result = 'success'}else{result = 'error'}

                 printMessage(text,result);
                 return false;

             },

           });

}






function getPortada(){

var data = 'operation=getPortada';

    $.ajax({
    url: '/includes/ajax.php',
    type: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
        if (response == null){

            message = 'No se han encontrado Lugares';
            printMessage(message,'notify');

        } else  {
           /// clearMode(); 

            cleanTables('getAllPlaces');

            $('#editBox form').hide();
            $('#main').hide();
            $('#editBox').show();
            $('#portada').show();

            var postArray = response[0];
            var portadaArray = response[1];
            var cnt = 0;
 
            for (cnt = 0; cnt < 12; cnt++) {

                pepe = cnt +1;if(pepe < 10){pepe = '0'+pepe;}

                $("#portada_"+pepe).html('');
 //               $("#portada_0"+pepe).append('<option value="0">Seleccione un artículo.</option>');
                debugger;
                if (typeof portadaArray[cnt]["id"] !== 'undefined' && typeof portadaArray[cnt]["orden"] !== 'undefined'){

                    $("#portada_"+pepe).append('<option value="0">Seleccione una opción</option>');

                    for(index=0; index<postArray.length; index++) {
                    debugger;
                        if(portadaArray[cnt]["id"] == postArray[index]["id"]){
                            $("#portada_"+pepe).append('<option selected value="'+postArray[index]["id"]+'">'+postArray[index]["name"]+"</option>");
debugger;
                        }else{
                            $("#portada_"+pepe).append('<option value="'+postArray[index]["id"]+'">'+postArray[index]["name"]+"</option>");
                        }

                    } 
                }else{
debugger;
                            $("#portada_"+pepe).append('<option value="0" selected>Seleccione una opción</option>');
                    for(index=0; index<postArray.length; index++) {
                    
                            $("#portada_"+pepe).append('<option value="'+postArray[index]["id"]+'">'+postArray[index]["name"]+"</option>");

                    } 

                }


            } // for


 
          }


     },




//     },

    });


}






function saveCategoryOrder(tableId){

//debugger;
var data = 'operation=saveCategoryOrder&tableId='+tableId;
var cnt = 0;
var arr = new Array();
$('#'+tableId+' tr').each(function() { 

    var catId = $(this).find(".rowID").val(); 
    if (cnt != 0){arr.push(catId);}
    cnt++;
});



//for (var i = 0; i < arr.length; i++) {
//alert('posicion'+i+'\nid de categoría:'+arr[i]);
//}

selected = arr.join('|') + "|";

var categories = selected; if (categories != ''){data += '&categories='+categories;}




}







function checkAllClothesWaists(){

    $('.waists_checkbox').each(function(){
        if(this.id === 'w10' || this.id === 'w11' || this.id === 'w12' || this.id === 'w13' || this.id === 'w14'){
            this.checked = true;
        }
    });
    document.getElementById("checkAllW").checked = false;
    document.getElementById("uncheckAllW").checked = false;
    document.getElementById("checkAllShoesW").checked = false;
    document.getElementById("uncheckAllW").checked = false;
}

function checkAllShoesWaists(){

    $('.waists_checkbox').each(function(){
        if(this.id === 'w1' || this.id === 'w2' || this.id === 'w3' || this.id === 'w4' || this.id === 'w5' || this.id === 'w6' || this.id === 'w7' || this.id === 'w8' || this.id === 'w9'
            || this.id === 'w23'
            || this.id === 'w24' ){

            this.checked = true;
        }


    });

    document.getElementById("checkAllW").checked = false;
    document.getElementById("uncheckAllW").checked = false;


}

function checkAllChildWaists(){

    $('.waists_checkbox').each(function(){

        if(this.id === 'w15' || this.id === 'w16' || this.id === 'w17' || this.id === 'w18' || this.id === 'w19' || this.id === 'w20' || this.id === 'w21' || this.id === 'w22'){
            this.checked = true;

        }

    });

}


function checkAllWaists(){

$('.waists_checkbox').each(function(){ this.checked = true; });
$('#uncheckAllW').each(function(){ this.checked = false; });
}

function uncheckAllWaists(){
$('.waists_checkbox').each(function(){ this.checked = false; });
$('#checkAllW').each(function(){ this.checked = false; });
    //$('#checkAllWomenWaists').each(function(){ this.checked = false; });
    //$('#checkAllMenWaists').each(function(){ this.checked = false; });
    //$('#checkAllChildWaists').each(function(){ this.checked = false; });
}




function checkAllColors(){

//$('.color_checkbox').attr('checked', true);
//$('.myCheckbox').attr('checked', false);
$('.color_checkbox').each(function(){ this.checked = true; });
$('#uncheckAll').each(function(){ this.checked = false; });
}


function uncheckAllColors(){
$('.color_checkbox').each(function(){ this.checked = false; });
$('#checkAll').each(function(){ this.checked = false; });

//$('.color_checkbox').attr('checked', false);
//$('.color_checkbox').removeAttr('checked');

}


/*        var row = $(this).parents("tr:first");alert (row);
        if ($(this).is(".up")) {
            row.insertBefore(row.prev());alert('up');
        } else {
            row.insertAfter(row.next());
        }*/
  //  });


function getSubType(value){

if(value == 'R'){
$('#product_rem_id').show();
$('#product_buz_id').hide();
$('#sub_type_label').show();
$('#talles').show();
}else if(value == 'B'){
$('#product_buz_id').show();
$('#product_rem_id').hide();
$('#sub_type_label').show();
$('#talles').show();
}else{
$('#product_buz_id').hide();
$('#product_rem_id').hide();
$('#sub_type_label').hide();
$('#talles').hide();

}

}

function aplicarPrecio(){

    var precio = $("#globalPrice").val();

    if(precio > 0){

        data = 'operation=updatePrice&';
        data = data+'newPrice='+precio+'&';

        cantidad = 0;
        var products_ids = '';
        $("input:checkbox[name=check_products]:checked").each(function()
        {
            products_ids = products_ids+'|'+$(this).val();
            cantidad++;
        });
        data = data+'products_ids='+products_ids;

        var answer = confirm('¿Confirma actualizar el precio $'+precio+' a '+cantidad+' producto/s?');
        if (answer){

            $.ajax({
                url: '/includes/ajax.php',
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function(message){

                    var text = message[0];
                    var result = message[1];

                    if (result == '1'){result = 'success'}else{result = 'error'}

                    printMessage(text,result);
                    clearMode();
                    getAllProducts('search');
                    return false;

                },

            });
        }


        //return false;



    }

}

