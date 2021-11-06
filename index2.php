<?php
session_start();

if($_SESSION['user_name']){

include '../includes/includes.php';
include '../includes/configs.php';

$domain = "http://$_SERVER[HTTP_HOST]";

$typesArray = getAllProductTypes("");
$pTypesArray = $typesArray["0"];


if(isset($_GET['adminAction'])){$adminAction = $_GET['adminAction'];}

$limit = '5';

$colors = getAllProductsColors();

?>
<html>
    <head>
        <title>Admin</title>
        <link rel="shortcut icon" href="/admin/favicon-con.png" type="image/png" />
<!--<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300italic' rel='stylesheet' type='text/css' >-->
        <link type="text/css" href="/css/admin_style.css?3232" rel="stylesheet" >
        <link type="text/css" href="/css/pikaday.css" rel="stylesheet" >
        <link type="text/css" href="/css/jquery-ui.min.css" rel="stylesheet" >

        <script src="/js/jquery-1.11.0.min.js"></script>
        <script src="/js/jquery-ui.1.11.0.js "></script>
        <script src="/js/moment.js"></script>
        <script src="/js/pikaday.js"></script>
        <script src="/js/SimpleAjaxUploader.js"></script>
        <script src="/js/ajaxupload.js"></script>
        <script src="/js/admin_people.js"></script>
        <script src="/js/tinymce/tinymce.min.js"></script>

        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>

<body>
<input type="hidden" id="adminAction" name="adminAction" value="<?php echo $adminAction;?>">

<div style="display:none;" id="messageContainer" class="messageAlert">

<div class="icon icon_success fltsLeft"></div><div id="message" name="message" class="fltsLeft"></div>
<a href="#" class="fltsRight" onclick="closeMessage();return false;"><div class="icon icon_close"></div></a>
</div>


<!-- Header start -->
<div id="header">
    <ul id="main_menu">
    <li><a href="/admin/"><div class="icon icon_home"></div><div> Inicio </div></a></li>
    <!--<li><a href="/admin/author/profile/all/"> Autores </a></li>-->
    <li id="editPage_li"><a href="/admin/?adminAction=editPage"><div class="icon icon_page"></div><div> Página </div></a></li>
    <li id="sections_li"><a href="/admin/?adminAction=getAllSections"><div class="icon icon_sections"></div><div> Secciones </div></a></li>
    <li id="articles_li"><a href="/admin/?adminAction=getAllPosts"><div class="icon icon_articles"></div><div> Blog </div></a></li>
    <li id="products_li"><a href="/admin/?adminAction=getAllProducts"><div class="icon icon_products"></div><div> Productos </div></a></li>
    <li id="sales_li"><a href="/admin/?adminAction=getAllSales"><div class="icon icon_sales"></div><div> Ventas </div></a></li>
    <li id="crm_li"><a href="/admin/?adminAction=getAllMessages"><div class="icon icon_crm"></div><div> CRM </div></a></li>
<!--    <li><a href="/admin/?adminAction=getAllProfiles"><div class="icon icon_crm"></div><div> CRM </div></a></li>-->
    <li id="admin_li"><a href="/admin/?adminAction=getAllProfiles"><div class="icon icon_admin"></div><div> Administración </div></a></li>
    <li><a href="/"><div class="icon icon_web"></div><div> Ir a la Web </div></a></li>
    <li class="last"><a href="/admin/logout.php"><div class="icon icon_logOut"></div><div> LogOut </div></a></li>
    </ul>
</div>
<!-- /Header end -->


<div class="clear"></div>

<!-- admin menu -->
<div class="menu">

    <ul id="pageMenu">
        <li><a href='#' onclick="editMode('newPost','');return false;" ><b>+</b> Crear nuevo Post</a></li>
    </ul>

    <ul id="postsMenu">
        <li><a href='#' onclick="getAllPosts();return false;" ><div> Listado de Artículos</div></a></li>
        <li><a href='#' onclick="getAllCategories();return false;" ><div> Categorías </div></a></li>
        <div style="float:right;width:auto;"><a class="fltsLeft" href="#" onclick="getAllPosts('search');return false;"><div class="icon icon_search"></div></a><div style="margin-top:8px;"><input type="text" id="q" name="q" size="20px"/></div></div>
    </ul>

    <ul id="productsMenu">
        <li><a href='#' onclick="getAllProducts();return false;" ><div> Listado de Productos </div></a></li>
        <li><a href='#' onclick="getAllProductsCategories();return false;" ><div> Categorías de Productos </div></a></li>
        <li><a href='#' onclick="getAllProductsSubCategories();return false;" ><div> Sub Categorías de Productos </div></a></li>
        <li><a href="#" onclick="getPortada();return false;"><div> Destacados y Novedades Home </div></a></li>
 <!--       <div style="float:right;width:auto;"><a class="fltsLeft" href="#" onclick="getAllProducts('search');return false;"><div class="icon icon_search"></div></a><div style="margin-top:8px;"><input type="text" id="q" name="q" size="20px"/></div></div>-->
    </ul>
    <ul id="salesMenu">
        <li><a href='#' onclick="getAllSales();return false;" ><div> Pedidos </div></a></li>
        <li><a href='#' onclick="getAllPersonalizadas();return false;" ><div> Personalizadas </div></a></li>
    </ul>


    <ul id="eventsMenu">

        <li><a href='#' onclick="getAllEvents();return false;" > Eventos </a></li>
    </ul>
    <ul id="CRMMenu">
        <li><a href='#' onclick="getAllMessages();return false;" > Consultas </a></li>
        <li><a href='#' onclick="getAllNewsContacts();return false;" > Contactos (Newsletters) </a></li>
    </ul>
    <ul id="sectionsMenu">
        <li><a href='#' onclick="getAllSections();return false;" > Secciones </a></li>
        <li><a href='#' onclick="getAllSectionsCat();return false;" > Categorías </a></li>
    </ul>

    <ul id="adminMenu">
        <li><a href='#' onclick="getAllProfiles();return false;" > Usuarios </a></li>
    </ul>

</div>
<!-- /admin menu -->


<!-- Actions menu -->

<div class="actionsMenu">

    <ul id="pageActMenu">
    </ul>

    <ul id="sectionsActMenu">
        <li><a class="btn blueBtn" href='#' onclick="editMode('newSection','');return false;" > Crear Sección</a></li>
        <li><a class="btn blueBtn btn-mleft" href='#' onclick="editMode('newSectionCategory','');return false;" > Crear categoría </a></li>
        <li><a class="btn greenBtn btn-mleft" href='#' onclick="saveCategoryOrder('sectionsCatTable');return false;" id="saveSectCatOrder" style="display:none;" > Guardar orden </a></li>
    </ul>

    <ul id="postsActMenu">
        <li><a class="btn blueBtn blueBtn" href='#' onclick="editMode('newPost','');return false;" > Crear artículo </a></li>
        <li><a class="btn blueBtn blueBtn btn-mleft" href='#' onclick="editMode('newCategory','');return false;" > Crear categoría </a></li>
        <li><a class="btn greenBtn btn-mleft" href='#' onclick="saveCategoryOrder('catTable');return false;" id="saveBlogCatOrder" style="display:none;" > Guardar orden </a></li>
    </ul>

    <div id="productsActMenu">
        <ul>
            <li><a class="btn blueBtn blueBtn" href='#' onclick="editMode('newProduct','');return false;" > Crear Producto </a></li>
            <li><a class="btn blueBtn blueBtn btn-mleft" href='#' onclick="editMode('newProductsCategory','');return false;" > Crear Categoría </a></li>
            <li><a class="btn blueBtn blueBtn btn-mleft" href='#' onclick="editMode('newProductSubCategory','');return false;" > Crear Sub Categoría </a></li>

            <li><a class="btn greenBtn btn-mleft" href='#' onclick="saveCategoryOrder('productsCatTable');return false;" id="saveProductsCatOrder" style="display:none;" > Guardar orden de Categorías</a></li>
            <li><a class="btn greenBtn btn-mleft" href='#' onclick="saveCategoryOrder('productsSubCatTable');return false;" id="saveProductsSubCatOrder" style="display:none;" > Guardar orden de Sub Categorías</a></li><br/><br/>
            <li>

                <select name="prod_cat_filter" id="prod_cat_filter" class="" style="float:left;" onchange="getProdSubCatFilter(this.value);return false;">
                    <option value="0">Filtrar Categoría</option>
                </select>
                <select name="prod_subcat_filter" id="prod_subcat_filter" class="required" style="float:left; margin-left:10px;">
                    <option value="0">Filtrar SubCategoría</option>
                </select>
            </li>
            <li><input type="text" id="prodQ" name="prodQ" size="20px" class="inputBusqueda" placeholder="Búsqueda"/></li>
            <li><input type="number" id="priceFrom" name="priceFrom" value="" class="inputBusqueda" placeholder="$ Desde" ></li>
            <li> <input type="number" id="priceTo" name="priceTo" value="" class="inputBusqueda" placeholder="$ Hasta" ></li>
            <li><input type="button" class="button" value="Buscar" onclick="getAllProducts('search');return false;"></li>
        </ul>
        <div class="clear"></div>
        <ul>
            <li><input type="number" name="globalPrice" id="globalPrice"  class="inputBusqueda" value="0"></li>
            <li><input type="button" class="button" value="Aplicar Precio" onclick="aplicarPrecio();return false;"></li>
        </ul>
    </div>

    <ul id="personalizadasActMenu">

    <li>
        <select id="personalizadas_f_status" name="personalizadas_f_status">
        <option selected value="0">Filtrar por estado</option>

<option value="1">Temporal</option><option  value="2">Ingresado</option><option value="3">Abonado</option><option value="4">Enviado - Entregado</option><option value="5">Archivado</option><option value="6">Cancelado</option>

        </select>
    </li>
    <li>
&nbsp;&nbsp; &nbsp;Desde Fecha:           <input style="margin-right:10px;margin-left:10px;margin-top:20px;height:30px;" id="personalizadas_f_date" type="text" name="personalizadas_f_date" size="10px;"  />
     </li>
    <li>
&nbsp;&nbsp; &nbsp;Hasta Fecha:           <input style="margin-right:10px;margin-left:10px;margin-top:20px;height:30px;" id="personalizadas_t_date" type="text" name="personalizadas_t_date" size="10px;"  />
     </li>
<script>
var datepickerFrom = new Pikaday(
    {
        field: document.getElementById('personalizadas_f_date'),
//        format: 'YYYY/MM/DD',
        format: 'YYYY/MM/DD',
        minDate: new Date('2016-01-01'),
        maxDate: new Date('2040-12-31'),
        yearRange: [2016, 2040]
    });
var datepickerTo = new Pikaday(
    {
        field: document.getElementById('personalizadas_t_date'),
//        format: 'YYYY/MM/DD',
        format: 'YYYY/MM/DD',
        minDate: new Date('2016-01-01'),
        maxDate: new Date('2040-12-31'),
        yearRange: [2016, 2040]
    });

</script>
   <!-- <li><a class="btn greenBtn btn-mleft" href='#' onclick="saveCategoryOrder('catTable');return false;" id="saveBlogCatOrder" style="display:none;" > Guardar orden </a></li>-->
    <li><a class="btn blueBtn blueBtn" style="margin-top:20px;margin-left:10px;" href='#' onclick="getAllPersonalizadas();return false;" > Filtrar </a></li>


   </ul>

    <ul id="salesActMenu">

    <li>
        <select id="sales_f_status" name="sales_f_status">
        <option selected value="0">Filtrar por estado</option>

<option value="1">Temporal</option><option  value="2">Ingresado</option><option value="3">Abonado</option><option value="4">Enviado - Entregado</option><option value="5">Archivado</option><option value="6">Cancelado</option>

        </select>
    </li>
    <li>
&nbsp;&nbsp; &nbsp;Desde Fecha:           <input style="margin-right:10px;margin-left:10px;margin-top:20px;height:30px;" id="sales_f_date" type="text" name="sales_f_date" size="10px;"  />
     </li>
    <li>
&nbsp;&nbsp; &nbsp;Hasta Fecha:           <input style="margin-right:10px;margin-left:10px;margin-top:20px;height:30px;" id="sales_t_date" type="text" name="sales_t_date" size="10px;"  />
     </li>
<script>
var datepickerFrom = new Pikaday(
    {
        field: document.getElementById('sales_f_date'),
//        format: 'YYYY/MM/DD',
        format: 'YYYY/MM/DD',
        minDate: new Date('2016-01-01'),
        maxDate: new Date('2040-12-31'),
        yearRange: [2016, 2040]
    });
var datepickerTo = new Pikaday(
    {
        field: document.getElementById('sales_t_date'),
//        format: 'YYYY/MM/DD',
        format: 'YYYY/MM/DD',
        minDate: new Date('2016-01-01'),
        maxDate: new Date('2040-12-31'),
        yearRange: [2016, 2040]
    });

</script>
   <!-- <li><a class="btn greenBtn btn-mleft" href='#' onclick="saveCategoryOrder('catTable');return false;" id="saveBlogCatOrder" style="display:none;" > Guardar orden </a></li>-->
    <li><a class="btn blueBtn blueBtn" style="margin-top:20px;margin-left:10px;" href='#' onclick="getAllSales();return false;" > Filtrar </a></li>


   </ul>

    <ul id="CRMActMenu">
        <li><a class="btn blueBtn" href='#' onclick="CSVExport();return false;" > Descargar Contactos </a></li>
    </ul>

    <ul id="eventsActMenu">
        <li><a class="btn blueBtn" href='#' onclick="editMode('newEvent','');return false;" > Crear evento </a></li>
        <li><a class="btn blueBtn btn-mleft" href='#' onclick="editMode('newEventCategory','');return false;" > Crear categoría </a></li>
        <li><a class="btn blueBtn btn-mleft" href='#' onclick="window.open('/admin/phpsqlinfo_add.html', 'Crear Lugar', 'height=700,width=900');" > Crear lugar </a></li>
        <li><a class="btn greenBtn btn-mleft" href='#' onclick="saveCategoryOrder('eventsCatTable');return false;" id="saveEventCatOrder" style="display:none;" > Guardar orden </a></li>
    </ul>


    <ul id="adminActMenu">
        <li><a class="btn blueBtn" href='#' onclick="editMode('newPerson','');return false;" > Crear Nuevo usuario </a></li>
    </ul>

</div>

<!-- /Actions menu -->

<div class="clear"></div>

<!-- main start -->
<div id="main">

<!-- blogPosts start -->
    <div id="blogPosts">

<?php
//$author || $inTagId || $inId
//if ($authorProfileId){

if (!$adminAction){

?>

<h2>¡Bienvenido <b><?php echo $_SESSION['user_name'];?></b>!</h2>

<br/>

<div class="inicio">

<span><a href="/admin/?adminAction=editPage"><div class="icon icon_page_black fltsLeft"></div><div class="fltsLeft"> Página </div></a></span><br /> <br/>
<span><a href="/admin/?adminAction=getAllSections"><div class="icon icon_sections_black fltsLeft"></div><div class="fltsLeft"> Secciones </div></a></span><br />
<span><a href="/admin/?adminAction=getAllPosts"><div class="icon icon_articles_black fltsLeft"></div><div class="fltsLeft"> Blog </div></a></span><br />
<span><a href="/admin/?adminAction=getAllSales"><div class="icon icon_products_black fltsLeft"></div><div class="fltsLeft"> Ventas </div></a></span><br />
<span><a href="/admin/?adminAction=getAllProducts"><div class="icon icon_products_black fltsLeft"></div><div class="fltsLeft"> Productos </div></a></span><br />
<span><a href="/admin/?adminAction=getAllEvents"><div class="icon icon_calendar_black fltsLeft"></div><div class="fltsLeft"> Agenda </div></a></span><br />
<span><a href="/admin/?adminAction=getAllProfiles"><div class="icon icon_admin_black fltsLeft"></div><div> Administración </div></a></span>
<span><a href="/"><div class="icon icon_web_black fltsLeft"></div><div> Ir a la Web </div></a></span>
<span><a href="/admin/logout.php"><div class="icon icon_logOut_black fltsLeft"></div><div> LogOut </div></a></span><br />
</div>
<?php } ?>
<table class="profileList" id="sectionsTable">
   <thead>
   <tr>
       <th>Título</th>
       <th>Ultima modificación</th>
       <th>Visibilidad</th>
       <th>Categoria</th>
       <th>Eliminar Sección</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>


<table class="profileList" id="profileTable">
   <thead>
   <tr>
       <th>Avatar</th>
       <th>Nombre y apellido</th>
       <th>Post publicados</th>
       <th>Ver perfil online</th>
       <th>Eliminar usuario</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>

<table class="profileList" id="postTable" >
   <thead>
   <tr>
       <th>Título</th>
       <th>Autor</th>
       <th>Categoría</th>
       <th>Publicado</th>
       <th>Visibilidad</th>
       <th>Eliminar</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>

<table class="profileList" id="productsTable" >
   <thead>
   <tr>

       <th><input type="checkbox" name="checkallProducts" id="checkallProducts" /></th>
       <th>Imagen</th>
       <th>Título</th>
       <th>Stock</th>
       <th>Precio</th>
       <th>Categoría</th>
       <th>Sub Categoría</th>
       <th>Publicado</th>
       <th>Eliminar</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>

<table class="profileList" id="newsContactsTable" >
   <thead>
   <tr>
       <th>N°</th>
       <th>email</th>
       <th>Eliminar</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>


<table class="profileList" id="messagesTable" >
   <thead>
   <tr>
       <th>N° de Mensaje</th>
       <th>Apellido</th>
       <th>Nombre</th>
       <th>email</th>
       <th>Respondido</th>
       <th>Eliminar</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>


<table class="profileList" id="productsSubCatTable" >
   <thead>
   <tr>
       <th>Nombre</th>
<!--       <th>Orden</th>  -->
       <th>Publica en menú principal</th>
       <th>Categoria</th>
       <th>Orden</th>
       <th>Eliminar Sub Categoría</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>



<table class="profileList" id="productsCatTable" >
   <thead>
   <tr>
       <th>Nombre</th>
<!--       <th>Orden</th>  -->
       <th>Publica en menú principal</th>
       <th>Orden</th>
       <th>Eliminar Categoría</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>

<table class="profileList" id="catTable" >
   <thead>
   <tr>
       <th>Nombre</th>
       <th>Orden</th>
       <th>Publica en menú principal</th>
       <th>Eliminar categoría</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>


<table class="profileList" id="personalizadasTable">
   <thead>
   <tr>
       <th>ID</th>
       <th>Fecha</th>
       <th>Nombre</th>
       <th>e-mail</th>
       <th>Teléfono</th>
       <th>Color</th>
       <th>Talle</th>
       <th>Foto</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>



<table class="profileList" id="salesTable">
   <thead>
   <tr>
       <th>Venta</th>
       <th>Cliente</th>
       <th>Fecha</th>
       <th>Estado</th>
       <th>Importe</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>




<table class="profileList" id="sectionsCatTable" >
   <thead>
   <tr>
       <th>Nombre</th>
       <th>Orden</th>
       <th>Eliminar categoría</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>


<table class="profileList" id="eventsCatTable" >
   <thead>
   <tr>
       <th>Nombre</th>
       <th>Orden</th>
       <th>Eliminar categoría</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>

<table class="profileList" id="placesTable">
   <thead>
   <tr>
       <th>Nombre</th>
       <th>Dirección</th>
       <th>Eliminar Sección</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>


<table class="profileList" id="eventsTable" >
   <thead>
   <tr>
       <th>Título</th>
       <th>Lugar</th>
       <th>Categoría</th>
       <th>Publicado</th>
       <th>Visibilidad</th>
       <th>Fecha de realización</th>
       <th>Eliminar</th>
   </tr>
   </thead>

   <tbody>
   </tbody>

</table>



<?php
//} else {

/*
    foreach ($blogPosts as $post)
    {

    $title = $post->title;
    $titleUrl = seoUrl($post->title);
    $postText = $post->post;
    $authorId = $post->authorId;
    $author = $post->author;
    $authorUrl = seoUrl($author);
    $datePosted = $post->datePosted;
    $postId = $post->id;
    }
*/

//}
?>
    </div>

<!-- /blogPosts end-->

</div>
<!-- /main end-->

<!-- editBox start -->
<div id="editBox" style="display:none;">

        <input type="hidden" id="idEvent" name="idEvent" value="">
        <input type="hidden" id="idSection" name="idSection" value="">
        <input type="hidden" id="idProdSubCategory" name="idProdSubCategory" value="">
        <input type="hidden" id="idPost" name="idPost" value="">
        <input type="hidden" id="idPerson" name="idPerson" value="">
        <input type="hidden" id="idProduct" name="idProduct" value="">
        <input type="hidden" id="idCategory" name="idCategory" value="">
        <input type="hidden" id="operation" name="operation" value="">
        <input type="hidden" id="idMessage" name="idMessage" value="">
        <input type="hidden" id="idProdCategory" name="idProdCategory" value="">
        <input type="hidden" id="idSale" name="idSale" value="">
        <input type="hidden" id="idPersonalizada" name="idPersonalizada" value="">

    <form class="" id="portada">

        <h3>Definición de Productos destacados en el home del sitio:</h3>

        Posición 1: <select id="portada_01" name="portada_01"></select>
        Posición 2: <select id="portada_02" name="portada_02"></select>
        Posición 3: <select id="portada_03" name="portada_03"></select>
        Posición 4: <select id="portada_04" name="portada_04"></select>
        Posición 5: <select id="portada_05" name="portada_05"></select>
        Posición 6: <select id="portada_06" name="portada_06"></select>
        Posición 7: <select id="portada_07" name="portada_07"></select>
        Posición 8: <select id="portada_08" name="portada_08"></select>
        Posición 9: <select id="portada_09" name="portada_09"></select>
        Posición 10: <select id="portada_10" name="portada_10"></select>
        Posición 11: <select id="portada_11" name="portada_11"></select>
        Posición 12: <select id="portada_12" name="portada_12"></select>

        <input type="submit" class="button" onclick="savePortada();return false;" value="Guardar">

    </form>

    <form id="editPerson" enctype="multipart/form-data" method="POST" action="uploader.php">
<!--/    <form id="editPerson" enctype="multipart/form-data" action="" method="post" class=""> -->
    <h2>&nbsp;Editar persona</h2>
    <fieldset>
        <label>
           <!-- <span>Apellido</span>-->
            <p>Apellido</p>

        </label>
<input id="last_name" type="text" name="last_name" placeholder="Apellido" />
        <label>
            <p>Nombre</p>
        </label>
            <input id="first_name" type="text" name="first_name" placeholder="Nombre" />
        <label>
            <p>Nombre de <b>Usuario</b></p>
        </label>
            <input id="username" type="text" name="username" placeholder="Usuario" />
        <label>
            <p>Contraseña</p>
        </label>
            <input id="password" type="password" name="password" />
        <label>
            <p>Página web</p>
        </label>
            <input id="url" type="text" name="url" placeholder="http://" />

        <label>
            <p>Email:</p>
        </label>
            <input id="email" type="email" name="email" placeholder="Dirección de correo válida / Valid Email Address:" />
        <br/>
        <label>
            <p>Avatar:</p>
        </label>
            <br /><img src="" id="avatarPict" name="avatarPict" width="100px" height="100px">
            <input type="hidden" id="avatarUrl" name="avatarUrl" value="">
<!--<input type="hidden" name="MAX_FILE_SIZE" value="100000" />-->
<!--            <input id="avatar" type="file" name="avatar" />-->
            <div id="upload_button">Subir foto</div>
        <br/>
        <label>
            <p>Acerca de:</p>

        </label>
            <textarea id="self_description" name="self_description" placeholder="Acerca de mi..." cols="60" rows="5"  ></textarea>
<!--         <label>
            <span>Subject :</span><select name="selection">
            <option value="Job Inquiry">Job Inquiry</option>
            <option value="General Question">General Question</option>
            </select>
        </label>
-->
            <input type="submit" class="button" onclick="save();return false;" value="Guardar">
    </fieldset>
    </form>

    <style>

.productsDetails{

opacity:1 !important;
}

.modalDialog {
    position: fixed;
    font-family: Arial, Helvetica, sans-serif;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
}
.modalDialog:target {
    opacity:1;
    pointer-events: auto;
}
.modalDialog > div {
    width: 400px;
    position: relative;
    margin: 10% auto;
    padding: 2em;
    background: #fff;
}
.close {
    background: #606061;
    color: #FFFFFF;
    line-height: 25px;
    position: absolute;
    right: -12px;
    text-align: center;
    top: -10px;
    width: 24px;
    text-decoration: none;
    font-weight: bold;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;
}
.close:hover {
    background: #00d9ff;
}

</style>

    <form id="editPersonalizada" enctype="multipart/form-data" action="" method="post" class="">

        <h2>&nbsp;Detalle de Personalizada</h2>
        <fieldset>
            <label><p>Nombre del cliente</p></label>
                <input id="p_name" type="text" name="p_name"  size="70px;" disabled />
            <label><p>Email</p></label>
                <input id="p_email" type="text" name="p_email"  size="70px;" disabled />
            <label><p>Teléfono</p></label>
                <input id="p_phone" type="text" name="p_phone"  size="70px;" disabled />
            <label><p>Fecha</p></label>
                <input id="p_date" type="text" name="p_date"  size="70px;" disabled />
            <label><p>Foto</p></label>
                <a title="Ver en tamaño completo" href="" target="_blank" id="image_link" name="image_link"><img id="p_image" type="text" name="p_image" src="" width="100px;"/></a>
            <label><p>Talle</p></label>
                <input id="p_waist" type="text" name="p_waist"  size="70px;" disabled />
            <label><p>Color</p></label>
                <input id="p_color" type="text" name="p_color"  size="70px;" disabled />

           <hr></hr>

            <label><p>Forma de pago</p></label>
                <input id="p_payment_id" type="text" name="p_payment_id"  size="70px;" disabled />

            <label><p>Entrega</p></label>
                <input id="p_shipping_id" type="text" name="p_shipping_id"  size="70px;" disabled />

            <label><p>Estado</p></label>

            <div id="perCatBox" class="categories">
                <select name="p_status" id="p_status" class="required">
                <option>Seleccione una opción</option>
                </select>
            </div>
           <label><p>Mensaje del cliente</p></label>
           <!--            <input id="sale_staff_message" type="text" name="sale_staff_message"  size="70px;" />-->
           <textarea id="p_message" name="p_message" rows="8" cols="70" disabled ></textarea>
           <label><p>Comentarios del Staff</p></label>
           <!--            <input id="sale_staff_message" type="text" name="sale_staff_message"  size="70px;" />-->
           <textarea id="p_staff_message" name="p_staff_message" rows="8" cols="70" ></textarea>

            <!--          <input type="checkbox" id="published" name="published"> ¿Publica el producto? <br />-->
           <input type="button" class="button" value="Guardar" onclick="savePersonalizada();return false;"/>

        </fieldset>
                     </form>

    <!-- edit sales START -->
    <form id="editSale" enctype="multipart/form-data" action="" method="post" class="">
<div id="openModal" class="modalDialog">
    <div>
  	<a href="#close" title="Close" class="close">X</a>

        <!--	<h2>Datos del cliente:</h2>-->
        <div>
        <p></p>

        <label><p>Datos del cliente </p></label>
         <br /><br/>
        <p id="client_data">

         </p>
        </div>
    </div>
</div>

    <h2>&nbsp;Detalle de Venta</h2>
    <fieldset>
        <label><p>Nombre del cliente(<a href="#openModal">Ver todos los datos</a>)</p></label>
            <input id="sale_firstname" type="text" name="sale_firstname"  size="70px;" disabled />

       <label><p>Apellido del cliente</p></label>
            <input id="sale_lastname" type="text" name="sale_lastname"  size="70px;" disabled  />
            <input id="sale_id" type="hidden" name="sale_id"  size="70px;" disabled  />

        <label><p>Estado</p></label>

        <div id="catBox" class="categories">
            <select name="sale_status" id="sale_status" class="required">
            <option>Seleccione una opción</option>
            </select>
        </div>

       <hr></hr>



       <label><p>Fecha</p></label>
            <input id="sale_initdate" type="text" name="sale_initdate"  size="70px;" disabled  />
       <label><p>Detalle del pedido</p></label>
            <textarea id="productsDetails" name="productsDetails"  rows="8" cols="70"  disabled  ></textarea>
       <label><p>Total</p></label>
            <input id="sale_total" type="text" name="sale_total"  size="70px;" disabled  />
        <label><p>Retira / Envío</p></label>
        <input id="sale_shipping_method" type="text" name="sale_shipping_method"  size="70px;" disabled  />
       <label><p>Mensaje del cliente</p></label>
            <input id="sale_client_message" type="text" name="sale_client_message"  size="70px;" disabled  />
       <label><p>Comentarios del Staff</p></label>
<!--            <input id="sale_staff_message" type="text" name="sale_staff_message"  size="70px;" />-->
<textarea id="sale_staff_message" name="sale_staff_message" rows="8" cols="70" ></textarea>

 <!--          <input type="checkbox" id="published" name="published"> ¿Publica el producto? <br />-->
           <input type="button" class="button" value="Guardar" onclick="saveSale();return false;"/>

    </fieldset>
                 </form>







    <!-- NEW start products FORM -->
    <form id="editProduct" enctype="multipart/form-data" action="" method="post" class="">
    <h2>&nbsp;Editar Producto</h2>
    <fieldset>
        <label><p>Nombre del producto</p></label>
            <input id="product_name" type="text" name="product_name" placeholder="Nombre del producto" size="70px;" />

        <br>

        <label><p>Resumen:</p></label>
        <textarea id="product_short_desc" name="product_short_desc" rows="3" cols="70" ></textarea>

        <label><p>Imágenes:</p></label>

        <div id="productImagesBoxContainer">
            <div id="productImagesBox" >
            </div>

            <br />

            <div id="productImageBox" ></div>
            <div id="productProgressBox"></div>
            <div class="clear"></div>
            <div>
                <br />            Subir una nueva imágen:

                <!--<input type="hidden" name="MAX_FILE_SIZE" value="100000" />-->
                <input id="uploadProductPict" type="file" name="uploadProductPict" />
                <input id="productImageUrl" type="hidden" name="productImageUrl" />
            </div>
        </div>


        <script>
            var uploader = new ss.SimpleUpload({
                button: 'uploadProductPict',
                url: '/includes/uploadHandler.php', // server side handler
                progressUrl: '/includes/uploadProgress.php', // enables cross-browser progress support (more info below)
                responseType: 'json',
                name: 'uploadfile',
                multiple: true,
                allowedExtensions: ['jpg', 'jpeg', 'png', 'gif'], // for example, if we were uploading pics
                hoverClass: 'ui-state-hover',
                focusClass: 'ui-state-focus',
                disabledClass: 'ui-state-disabled',
                onSubmit: function(filename, extension) {
                    // Create the elements of our progress bar
                    var progress = document.createElement('div'), // container for progress bar
                        bar = document.createElement('div'), // actual progress bar
                        fileSize = document.createElement('div'), // container for upload file size
                        wrapper = document.createElement('div'), // container for this progress bar
                        progressBox = document.getElementById('productProgressBox'); // on page container for progress bars

                    // Assign each element its corresponding class
                    progress.className = 'progress';
                    bar.className = 'bar';
                    fileSize.className = 'size';
                    wrapper.className = 'wrapper';

                    // Assemble the progress bar and add it to the page
                    progress.appendChild(bar);
                    wrapper.innerHTML = '<div class="name">'+filename+'</div>'; // filename is passed to onSubmit()
                    wrapper.appendChild(fileSize);
                    wrapper.appendChild(progress);
                    progressBox.appendChild(wrapper); // just an element on the page to hold the progress bars

                    // Assign roles to the elements of the progress bar
                    this.setProgressBar(bar); // will serve as the actual progress bar
                    this.setFileSizeBox(fileSize); // display file size beside progress bar
                    this.setProgressContainer(wrapper); // designate the containing div to be removed after upload
                },

                // Do something after finishing the upload
                // Note that the progress bar will be automatically removed upon completion because everything
                // is encased in the "wrapper", which was designated to be removed with setProgressContainer()
                onComplete:   function(filename, response) {
                    if (!response) {
                        alert('No se pudo subir el archivo'+filename);
                        return false;
                    }
                    // Stuff to do after finishing an upload...
//          $('#productImageBox').html('');
                    $('#productImageBox').append('<div class="pictBox"><input type="checkbox" name="pictures"  class="uploadeFiles" value="'+response['file']+'" checked="checked"><img src="/fotos/articulos/'+response['file']+'" id="productPict" name="productPict" height="100px" width="100px"></div>');
                    $('#productImageUrl').val(response['file']);

                    $('#productImagesBox').sortable("refresh");

                }
            });
        </script>

       <label><p>Código</p></label>
            <input id="product_code" type="text" name="product_code" placeholder="Código" size="70px;" />

       <label><p>Colores</p></label>
        <br>
        <p><input class="" onchange="checkAllColors();" type="checkbox"  id="checkAll" name="checkAll"> Seleccionar todos</p>
        <p><input class="" onchange="uncheckAllColors();"  type="checkbox" id="uncheckAll" name="uncheckAll"> Deseleccionar todos</p>
        <br>
        <table>

        <tr>
            <?php
            if ($colors){
                foreach ($colors as $color)
                 {
            ?>
            <td><img src="/images/colors/<?= $color['picture']; ?>" style="border: 1px solid black;"></td>
            <?php
                }
            }
            ?>

        </tr>
        <tr>
            <?php

            for ($i=0;$i< sizeof($colors);$i++) {
            ?>
                <td><input class="color_checkbox" type="checkbox" value="<?= $i; ?>" id="<?= $i; ?>" name="colors" ></td>
            <?php
            }
            ?>



        </tr>
        </table>
        <style>
        .marginTable table th td {
           border: 1px solid black;
        }
        </style>
        <br>
        <br>
        <div id="talles">
    <label><p>Talles</p></label>
    <br>
    <p><input class="" onchange="checkAllWaists();" type="checkbox"  id="checkAllW" name="checkAllW"> Seleccionar todos</p>
    <p><input class="" onchange="uncheckAllWaists();"  type="checkbox" id="uncheckAllW" name="uncheckAllW"> Deseleccionar todos</p>
<!--    <p><input class="" onchange="checkAllWomenWaists();"  type="checkbox" id="checkAllWomenW" name="checkAllWomenW"> Seleccionar todos los talles de Mujer</p>
    <p><input class="" onchange="checkAllMenWaists();"  type="checkbox" id="checkAllMenW" name="checkAllMenW"> Seleccionar todos los talles de Hombre</p>
    <p><input class="" onchange="checkAllChildWaists();"  type="checkbox" id="checkAllChildW" name="checkAllChildW"> Seleccionar todos los talles de Niño</p>-->
    <br>
    <table class="marginTable">

        <tr><td colspan="5">Talles de Calsado</td></tr>
        <tr>
        <td>&nbsp;&nbsp;35</td>
        <td>&nbsp;&nbsp;36</td>
        <td>&nbsp;&nbsp;37</td>
        <td>&nbsp;&nbsp;38</td>
        <td>&nbsp;&nbsp;39</td>
        <td>&nbsp;&nbsp;40</td>
        </tr>
        <tr>
        <td>       <input class="waists_checkbox" type="checkbox" value="1" id="w1" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="2" id="w2" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="3" id="w3" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="4" id="w4" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="5" id="w5" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="6" id="w6" name="waists"> </td>
        </tr>
    </table>
    <br>
    <table class="marginTable">

        <tr><td colspan="9">Talles de Prendas</td></tr>
        <tr>
        <td>&nbsp;&nbsp;S</td>
        <td>&nbsp;&nbsp;M</td>
        <td>&nbsp;&nbsp;L</td>
        <td>&nbsp;&nbsp;XL</td>
        <td>&nbsp;&nbsp;XXL</td>
        </tr>
        <tr>
        <td>       <input class="waists_checkbox" type="checkbox" value="10" id="w10" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="11" id="w11" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="12" id="w12" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="13" id="w13" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="14" id="w14" name="waists"> </td>
        <!--<td>       <input class="waists_checkbox" type="checkbox" value="6" id="w6" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="7" id="w7" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="8" id="w8" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="9" id="w9" name="waists"> </td>-->
        </tr>
    </table>
    <br>

<!--    <table class="marginTable">

        <tr><td colspan="9">Talles de Niños</td></tr>
        <tr>
        <td>&nbsp;&nbsp;2</td>
        <td>&nbsp;&nbsp;4</td>
        <td>&nbsp;&nbsp;6</td>
        <td>&nbsp;&nbsp;8</td>
        <td>&nbsp;&nbsp;10</td>
        <td>&nbsp;&nbsp;12</td>
        <td>&nbsp;&nbsp;14</td>
        <td>&nbsp;&nbsp;16</td>
        </tr>
        <tr>
        <td>       <input class="waists_checkbox" type="checkbox" value="15" id="w15" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="16" id="w16" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="17" id="w17" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="18" id="w18" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="19" id="w19" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="20" id="w20" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="21" id="w21" name="waists"> </td>
        <td>       <input class="waists_checkbox" type="checkbox" value="22" id="w22" name="waists"> </td>
        </tr>
    </table>-->


</div>
        <br>
        <br />

        <label><p>Descripcion Larga:</p></label>

         <br />
            <textarea id="product_long_desc" name="product_long_desc" rows="5" cols="70" ></textarea>

        <div class="clear"></div>
        <br />
        <label><p>Categoria</p></label>
        <div id="catBox" class="categories">
            <select name="product_category_id" id="product_category_id" class="required" onchange="getSubCategorySelect(this.value);">
            <option>Seleccione una opción</option>
            </select>
        </div>
       <hr></hr>
        <br />
        <label><p>SubCategoria</p></label>
        <div id="catBox" class="categories">
            <select name="product_subcategory_id" id="product_subcategory_id">
            <option>Seleccione una opción</option>
            </select>
        </div>
       <hr></hr>
       <label><p>Precio</p></label>
            <input id="product_price" type="text" name="product_price" placeholder="0.00" size="" />
       <!--<label><p>Precio - Impresión Digital</p></label>-->
            <input id="product_price2" type="hidden" name="product_price2" placeholder="0.00" size="" />
        <!--<label><p>Precio Sin estampa</p></label>-->
            <input id="product_price3" type="hidden" name="product_price3" placeholder="0.00" size="" />
       <label><p>Precio tachado</p></label>
            <input id="strikethrough_price" type="text" name="strikethrough_price" placeholder="0.00" size="" />

       <label><p>¿Muestra precio tachado?</p></label>
       <br />
            <input id="has_strikethrough_price" type="checkbox" name="has_strikethrough_price" />
       <br /> <br />
       <hr></hr>
       <label><p>Stock / Unidades</p></label>
            <input id="product_stock" type="text" name="product_stock" placeholder="0" size="" />

       <label><p>¿Muestra stock?</p></label>
       <br />
            <input id="shows_stock" type="checkbox" name="shows_stock" />
       <br /> <br />
       <hr></hr>

       <label><p>Talla</p></label>
            <input id="product_size" type="text" name="product_size" placeholder="M, S, XL por ejem" size="" />

       <label><p>Medidas</p></label>
            <input id="product_measures" type="text" name="product_measures" placeholder="0 x 0 x 0" size="" />

       <label><p>Material</p></label>
            <input id="product_material" type="text" name="product_material" placeholder="Material" size="" />

       <label><p>Colores</p></label>
            <input id="product_colors" type="text" name="product_colors" placeholder="Colores" size="" />


             <input type="checkbox" id="published" name="published"> ¿Publica el producto? <br />
            <input type="button" class="button" value="Guardar" onclick="saveProduct();return false;"/>

    </fieldset>
     </form>





    <form id="editPost" enctype="multipart/form-data" action="" method="post" class="">
        <h2>&nbsp;Editar Artículo</h2>
        <fieldset>
        <label>
            <p>Título</p>

        </label>
            <input id="title" type="text" name="title" placeholder="Título de artículo" size="70px;" />

            <label>
            <p>Resumen:</p>

        </label>

            <textarea id="post_descrip" name="post_descrip" rows="3" cols="70" ></textarea>
    <label><p>Imágenes:</p> </label>

        <div id="imagesBoxContainer">
            <div id="imagesBox" >

            </div>


        <br />

            <div id="postImageBox" ></div>
            <div id="progressBox"></div>
            <div class="clear"></div>
            <div>
        <br />            Subir una nueva imágen:

<!--<input type="hidden" name="MAX_FILE_SIZE" value="100000" />-->
            <input id="uploadPostPict" type="file" name="uploadPostPict" />
            <input id="postImageUrl" type="hidden" name="postImageUrl" />
            </div>
        </div>


<script>
var uploader = new ss.SimpleUpload({
      button: 'uploadPostPict',
      url: '/includes/uploadHandler.php', // server side handler
      progressUrl: '/includes/uploadProgress.php', // enables cross-browser progress support (more info below)
      responseType: 'json',
      name: 'uploadfile',
      multiple: true,
      allowedExtensions: ['jpg', 'jpeg', 'png', 'gif'], // for example, if we were uploading pics
      hoverClass: 'ui-state-hover',
      focusClass: 'ui-state-focus',
      disabledClass: 'ui-state-disabled',
      onSubmit: function(filename, extension) {
          // Create the elements of our progress bar
          var progress = document.createElement('div'), // container for progress bar
              bar = document.createElement('div'), // actual progress bar
              fileSize = document.createElement('div'), // container for upload file size
              wrapper = document.createElement('div'), // container for this progress bar
              progressBox = document.getElementById('progressBox'); // on page container for progress bars

          // Assign each element its corresponding class
          progress.className = 'progress';
          bar.className = 'bar';
          fileSize.className = 'size';
          wrapper.className = 'wrapper';

          // Assemble the progress bar and add it to the page
          progress.appendChild(bar);
          wrapper.innerHTML = '<div class="name">'+filename+'</div>'; // filename is passed to onSubmit()
          wrapper.appendChild(fileSize);
          wrapper.appendChild(progress);
          progressBox.appendChild(wrapper); // just an element on the page to hold the progress bars

          // Assign roles to the elements of the progress bar
          this.setProgressBar(bar); // will serve as the actual progress bar
          this.setFileSizeBox(fileSize); // display file size beside progress bar
          this.setProgressContainer(wrapper); // designate the containing div to be removed after upload
        },

       // Do something after finishing the upload
       // Note that the progress bar will be automatically removed upon completion because everything
       // is encased in the "wrapper", which was designated to be removed with setProgressContainer()
      onComplete:   function(filename, response) {
          if (!response) {
            alert('No se pudo subir el archivo'+filename);
            return false;
          }
          // Stuff to do after finishing an upload...
          $('#postImageBox').html('');
          $('#postImageBox').append('<div class="pictBox"><img src="/fotos/articulos/'+response['file']+'" id="postPict" name="postPict" height="100px" width="100px"></div>');
          $('#postImageUrl').val(response['file']);
        }
});
</script>



           <br />

        <label>
            <p>Post:</p>




        </label>



<script>
/*
tinymce.init({
    selector: "textarea#post",
    theme: "modern",
    width: 900,
    height: 300,
    entity_encoding : "raw",

    plugins: [
         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
         "save table contextmenu directionality emoticons template paste textcolor"
   ],
   content_css: "css/content.css",
   toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
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
*/

</script>


<br />
            <textarea id="post" name="post" rows="5" cols="114" ></textarea>

<br />
<br />

        <label>
            <p>Autor:</p>
        </label>

            <select name="author_id" id="author_id">
            <option>Seleccione una opción</option>
            </select>

        <label>
            <p>Fecha:</p>


        </label>
            <input id="date_posted" type="text" name="date_posted" />

        <label><p>Etiquetas:</p> </label>
        <div id="tagsBoxContainer">
            <div id="tagsBox" >

            </div>

        <br />
        <br />

            <div id="newtagBox" >
            Crea una nueva etiqueta:
            <input type="text" id="newTag" name="newTag" placeholder="Crea una nueva etiqueta aqui" size="200px">
            <input type="button" class="button" value="Crear etiqueta" onclick="createTag();return false;"/>
            </div>
        </div>
        <div class="clear"></div>
        <br />
        <label><p>Categorias</p></label>
        <div id="catBox" class="categories">
            <select name="category_id" id="category_id">
            <option>Seleccione una opción</option>
            </select>

        </div>

            <input type="checkbox" id="publish" name="publish"> ¿Publica el artículo? <br />
            <input type="button" class="button" value="Guardar" onclick="savePost();return false;"/>
    </fieldset>
    </form>
    <script>

    var picker = new Pikaday({ field: document.getElementById('date_posted') });

/*
    var picker = new Pikaday(
    {
        field: document.getElementById('date_posted'),
        firstDay: 1,
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });

*/

</script>

    <form id="editSectionCategory" method="POST">
<!--/    <form id="editPerson" enctype="multipart/form-data" action="" method="post" class=""> -->
    <h2>&nbsp;Editar Categoría</h2>
    <fieldset>
        <label>
            <p>Nombre</p>

        </label>
        <input id="section_cat_name" type="text" name="section_cat_name" placeholder="Nombre de Categoría" />
        <input id="section_cat_id" type="hidden" name="section_cat_id" value="" />

        <label><p>Imágenes:</p> </label>
        <div id="imagesBoxContainer">
            <div id="imagesBox" >

            </div>


        <br />

            <div id="newImageBox" ></div>
            <div id="progressBox"></div>
            <div class="clear"></div>
            <div>
        <br />            Subir una nueva imágen:

            <input type="hidden" id="avatarUrl" name="avatarUrl" value="">

<!--<input type="hidden" name="MAX_FILE_SIZE" value="100000" />-->
            <input id="uploadButton" type="file" name="uploadButton" />
            </div>
        </div>


<script>
var uploader = new ss.SimpleUpload({
      button: 'uploadButton',
      url: '/includes/uploadHandler.php', // server side handler
      progressUrl: '/includes/uploadProgress.php', // enables cross-browser progress support (more info below)
      responseType: 'json',
      name: 'uploadfile',
      multiple: true,
      allowedExtensions: ['jpg', 'jpeg', 'png', 'gif'], // for example, if we were uploading pics
      hoverClass: 'ui-state-hover',
      focusClass: 'ui-state-focus',
      disabledClass: 'ui-state-disabled',
      onSubmit: function(filename, extension) {
          // Create the elements of our progress bar
          var progress = document.createElement('div'), // container for progress bar
              bar = document.createElement('div'), // actual progress bar
              fileSize = document.createElement('div'), // container for upload file size
              wrapper = document.createElement('div'), // container for this progress bar
              progressBox = document.getElementById('progressBox'); // on page container for progress bars

          // Assign each element its corresponding class
          progress.className = 'progress';
          bar.className = 'bar';
          fileSize.className = 'size';
          wrapper.className = 'wrapper';

          // Assemble the progress bar and add it to the page
          progress.appendChild(bar);
          wrapper.innerHTML = '<div class="name">'+filename+'</div>'; // filename is passed to onSubmit()
          wrapper.appendChild(fileSize);
          wrapper.appendChild(progress);
          progressBox.appendChild(wrapper); // just an element on the page to hold the progress bars

          // Assign roles to the elements of the progress bar
          this.setProgressBar(bar); // will serve as the actual progress bar
          this.setFileSizeBox(fileSize); // display file size beside progress bar
          this.setProgressContainer(wrapper); // designate the containing div to be removed after upload
        },

       // Do something after finishing the upload
       // Note that the progress bar will be automatically removed upon completion because everything
       // is encased in the "wrapper", which was designated to be removed with setProgressContainer()
      onComplete:   function(filename, response) {
          if (!response) {
            alert('No se pudo subir el archivo'+filename);
            return false;
          }
          // Stuff to do after finishing an upload...
          $('#newImageBox').append('<div class="pictBox"><input type="checkbox" name="pictures"  class="uploadeFiles" value="'+response['file']+'" checked="checked"><img src="/fotos/articulos/'+response['file']+'" id="pict" name="pict" height="100px"></div>');
        }
});
</script>



           <br />
            <input type="submit" class="button" onclick="saveSectionCategory();return false;" value="Guardar">




    </fieldset>
    </form>
    <form id="editProductSubCategory" method="POST">
<!--/    <form id="editPerson" enctype="multipart/form-data" action="" method="post" class=""> -->
    <h2>&nbsp;Editar Sub Categoría</h2>
    <fieldset>
        <label>
            <p>Nombre</p>

        </label>
        <input id="product_subcat_name" type="text" name="product_subcat_name" placeholder="Nombre de Sub Categoría" value=""/>
        <label>
            Pertenece a Categoría
        </label>
            <select name="subcat_catid" id="subcat_catid">
            </select>
        <label>
            Muestra en menú
        </label>
            <input input type="checkbox" name="subcat_in_menu" id="subcat_in_menu"/>
            <br />
            <input type="submit" class="button" onclick="saveProductSubCategory();return false;" value="Guardar">
    </fieldset>
    </form>
    <form id="editProductCategory" method="POST">
<!--/    <form id="editPerson" enctype="multipart/form-data" action="" method="post" class=""> -->
    <h2>&nbsp;Editar Categoría</h2>
    <fieldset>
        <label>
            <p>Nombre</p>

        </label>
        <input id="product_cat_name" type="text" name="product_cat_name" placeholder="Nombre de Categoría" value=""/>
        <label>
            Muestra en menú
        </label>
            <input input type="checkbox" name="in_menu" id="in_menu"/>
            <br />
            <input type="submit" class="button" onclick="saveProductCategory();return false;" value="Guardar">
    </fieldset>
    </form>
    <form id="editCategory" method="POST">
<!--/    <form id="editPerson" enctype="multipart/form-data" action="" method="post" class=""> -->
    <h2>&nbsp;Editar Categoría</h2>
    <fieldset>
        <label>
            <p>Nombre</p>

        </label>
        <input id="cat_name" type="text" name="cat_name" placeholder="Nombre de Categoría" />
        <label>
            Muestra en menú
        </label>
            <input input type="checkbox" name="in_menu" id="in_menu"/>
            <br />
            <input type="submit" class="button" onclick="saveCategory();return false;" value="Guardar">
    </fieldset>
    </form>
    <form id="editMessage" method="POST">
<!--/    <form id="editPerson" enctype="multipart/form-data" action="" method="post" class=""> -->
    <h2>&nbsp;Mensaje</h2>

    <fieldset>
        <label>
            <p>Nombre</p>
        </label>
        <span id="contact_first_name"></span>
        <label>
            <p>Apellido</p>
        </label>
        <span id="contact_last_name"></span>
        <label>
            <p>email</p>
        </label>
        <span id="contact_email"></span>
        <label>
            <p>Mensaje:</p>
        </label>
       <div id="contact_message"></div>
        <label>
            ¿Marcar como respondido?
        </label>
            <input input type="checkbox" name="answered" id="answered"/>
            <br />
            <input type="submit" class="button" onclick="saveMessage();return false;" value="Guardar">
    </fieldset>
    </form>
    <form id="editPage" enctype="multipart/form-data" method="POST">
<!--/    <form id="editPerson" enctype="multipart/form-data" action="" method="post" class=""> -->
    <h2>&nbsp;Información sobre el sitio</h2>
    <fieldset>
        <label>
           <!-- <span>Apellido</span>-->
            <p>Nombre del sitio</p>

        </label>
             <input id="name" type="text" name="name" placeholder="Nombre de la web" />
        <label>
            <p>Descripción</p>
        </label>
           <textarea id="descrip" name="descrip" placeholder="Descripción de la web..." cols="60" rows="5"  ></textarea>
        <label>
            <p>Teléfono</p>
        </label>
            <input id="phone" type="text" name="phone" placeholder="0000 - 0000" />

        <label>
            <p>Dirección</p>
        </label>
            <input id="address" type="text" name="address" placeholder="Dirección" />
        <label>
            <p>Ciudad</p>
        </label>
            <input id="city" type="text" name="city" placeholder="Ciudad" />

        <label>
            <p>Email:</p>
        </label>
            <input id="email" type="email" name="email" placeholder="Dirección de correo válida" />
        <label>
            <p>Url de Google+:</p>
        </label>
            <input id="googleplus" type="text" name="googleplus" placeholder="https://plus.google.com/+" />
        <label>
            <p>Url de Twitter:</p>
        </label>
            <input id="twitter" type="text" name="twitter" placeholder="https://twitter.com/" />
        <label>
            <p>Url de Facebook:</p>
        </label>
            <input id="facebook" type="text" name="facebook" placeholder="https://www.facebook.com/" />
        <br/>

            <input type="submit" class="button" onclick="save();return false;" value="Guardar">
    </fieldset>
    </form>
    <form id="editSection" enctype="multipart/form-data" action="" method="post" class="">
    <h2>&nbsp;Editar Sección</h2>
    <fieldset>
        <label>
            <p>Título</p>

        </label>
            <input id="title" type="text" name="title" placeholder="Título de sección" size="70px;" />
        <label>
            <p>Resumen:</p>

        </label>

            <textarea id="descrip" name="descrip" rows="3" cols="70" ></textarea>


    <label><p>Imágenes:</p> </label>

        <div id="sectionsImagesBoxContainer">
            <div id="sectionsImagesBox" >

            </div>


        <br />

            <div id="sectionImageBox" ></div>
            <div id="sectionProgressBox"></div>
            <div class="clear"></div>
            <div>
        <br />            Subir una nueva imágen:

<!--<input type="hidden" name="MAX_FILE_SIZE" value="100000" />-->
           <input id="uploadSectionPict" type="file" name="uploadSectionPict" />
            <input id="sectionImageUrl" type="hidden" name="sectionImageUrl" />
            </div>
        </div>


<script>
var uploader = new ss.SimpleUpload({
      button: 'uploadSectionPict',
      url: '/includes/uploadHandler.php', // server side handler
      progressUrl: '/includes/uploadProgress.php', // enables cross-browser progress support (more info below)
      responseType: 'json',
      name: 'uploadfile',
      multiple: true,
      allowedExtensions: ['jpg', 'jpeg', 'png', 'gif'], // for example, if we were uploading pics
      hoverClass: 'ui-state-hover',
      focusClass: 'ui-state-focus',
      disabledClass: 'ui-state-disabled',
      onSubmit: function(filename, extension) {
          // Create the elements of our progress bar
          var progress = document.createElement('div'), // container for progress bar
              bar = document.createElement('div'), // actual progress bar
              fileSize = document.createElement('div'), // container for upload file size
              wrapper = document.createElement('div'), // container for this progress bar
              progressBox = document.getElementById('progressBox'); // on page container for progress bars

          // Assign each element its corresponding class
          progress.className = 'progress';
          bar.className = 'bar';
          fileSize.className = 'size';
          wrapper.className = 'wrapper';

          // Assemble the progress bar and add it to the page
          progress.appendChild(bar);
          wrapper.innerHTML = '<div class="name">'+filename+'</div>'; // filename is passed to onSubmit()
          wrapper.appendChild(fileSize);
          wrapper.appendChild(progress);
          progressBox.appendChild(wrapper); // just an element on the page to hold the progress bars

          // Assign roles to the elements of the progress bar
          this.setProgressBar(bar); // will serve as the actual progress bar
          this.setFileSizeBox(fileSize); // display file size beside progress bar
          this.setProgressContainer(wrapper); // designate the containing div to be removed after upload
        },

       // Do something after finishing the upload
       // Note that the progress bar will be automatically removed upon completion because everything
       // is encased in the "wrapper", which was designated to be removed with setProgressContainer()
      onComplete:   function(filename, response) {
          if (!response) {
            alert('No se pudo subir el archivo'+filename);
            return false;
          }
          // Stuff to do after finishing an upload...
          $('#sectionImageBox').html('');
          $('#sectionImageBox').append('<div class="pictBox"><img src="/fotos/articulos/'+response['file']+'" id="sectionPict" name="sectionPict" height="100px" width="100px"></div>');
          $('#sectionImageUrl').val(response['file']);
        }
});
</script>

<br />
<br />

        <label>
            <p>Contenido:</p>

        </label>



<script>
/*
tinymce.init({
    selector: "textarea#content",
    theme: "modern",
    width: 900,
    height: 300,
    entity_encoding : "raw",

    plugins: [
         "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
         "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
         "save table contextmenu directionality emoticons template paste textcolor"
   ],
   content_css: "css/content.css",
   toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
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
*/
</script>


<br />
            <textarea id="content" name="content" rows="10" cols="114" ></textarea>

<br />
<br />
    <label><p>Categoría</p></label>
        <div id="catBox" class="categories">
            <select name="sections_category_id" id="sections_category_id">
            </select>

        </div>

         <label>
            <p>Fecha de publicación:</p>

        </label>

            <input id="section_date_posted" type="text" name="section_date_posted" />

            <input type="checkbox" id="section_published" name="section_published"> ¿Publica la sección? <br />
            <input type="button" class="button" value="Guardar" onclick="saveSection();return false;"/>
    </fieldset>
       </form>
    <script>

    var picker = new Pikaday({ field: document.getElementById('section_date_posted') });

/*
    var picker = new Pikaday(
    {
        field: document.getElementById('date_posted'),
        firstDay: 1,
        minDate: new Date('2000-01-01'),
        maxDate: new Date('2020-12-31'),
        yearRange: [2000,2020]
    });

*/

</script>
    <form id="editEvent" enctype="multipart/form-data" action="" method="post" class="">
    <h2>&nbsp;Editar Evento</h2>
    <fieldset>
        <label>
            <p>Título</p>

        </label>
            <input id="title" type="text" name="title" placeholder="Título del evento" size="70px;" />
        <label>
            <p>Resumen:</p>

        </label>

            <textarea id="eventDescrip" name="eventDescrip" rows="3" cols="70" ></textarea>

 <label><p>Imágenes:</p> </label>

        <div id="eventsImagesBoxContainer">
            <div id="eventsImagesBox" >

            </div>


        <br />

            <div id="eventImageBox" ></div>
            <div id="eventProgressBox"></div>
            <div class="clear"></div>
            <div>
        <br />            Subir una nueva imágen:

<!--<input type="hidden" name="MAX_FILE_SIZE" value="100000" />-->
           <input id="uploadEventPict" type="file" name="uploadEventPict" />
            <input id="eventImageUrl" type="hidden" name="eventImageUrl" />
            </div>
        </div>

<script>
var uploader = new ss.SimpleUpload({
      button: 'uploadEventPict',
      url: '/includes/uploadHandler.php', // server side handler
      progressUrl: '/includes/uploadProgress.php', // enables cross-browser progress support (more info below)
      responseType: 'json',
      name: 'uploadfile',
      multiple: true,
      allowedExtensions: ['jpg', 'jpeg', 'png', 'gif'], // for example, if we were uploading pics
      hoverClass: 'ui-state-hover',
      focusClass: 'ui-state-focus',
      disabledClass: 'ui-state-disabled',
      onSubmit: function(filename, extension) {
          // Create the elements of our progress bar
          var progress = document.createElement('div'), // container for progress bar
              bar = document.createElement('div'), // actual progress bar
              fileSize = document.createElement('div'), // container for upload file size
              wrapper = document.createElement('div'), // container for this progress bar
              progressBox = document.getElementById('progressBox'); // on page container for progress bars

          // Assign each element its corresponding class
          progress.className = 'progress';
          bar.className = 'bar';
          fileSize.className = 'size';
          wrapper.className = 'wrapper';

          // Assemble the progress bar and add it to the page
          progress.appendChild(bar);
          wrapper.innerHTML = '<div class="name">'+filename+'</div>'; // filename is passed to onSubmit()
          wrapper.appendChild(fileSize);
          wrapper.appendChild(progress);
          progressBox.appendChild(wrapper); // just an element on the page to hold the progress bars

          // Assign roles to the elements of the progress bar
          this.setProgressBar(bar); // will serve as the actual progress bar
          this.setFileSizeBox(fileSize); // display file size beside progress bar
          this.setProgressContainer(wrapper); // designate the containing div to be removed after upload
        },

       // Do something after finishing the upload
       // Note that the progress bar will be automatically removed upon completion because everything
       // is encased in the "wrapper", which was designated to be removed with setProgressContainer()
      onComplete:   function(filename, response) {
          if (!response) {
            alert('No se pudo subir el archivo'+filename);
            return false;
          }
          // Stuff to do after finishing an upload...
          $('#eventImageBox').html('');
          $('#eventImageBox').append('<div class="pictBox"><img src="/fotos/articulos/'+response['file']+'" id="eventPict" name="eventPict" height="100px" width="100px"></div>');
          $('#eventImageUrl').val(response['file']);
        }
});
</script>



           <br />
        <label>
            <p>Contenido:</p>

        </label>

<br />
            <textarea id="event" name="event" rows="10" cols="114" ></textarea>

<br />
<br />
        <label>
            <p>Fecha a realizarse:</p>


        </label>

            <input id="initdate" type="text" name="initdate" />
<script>

    var recontrapicker = new Pikaday({ field: document.getElementById('initdate') });

</script>


    <label><p>Categoría</p></label>
        <div id="catBox" class="categories">
            <select name="events_category_id" id="events_category_id">
            <option>Seleccione una opción</option>
            </select>

        </div>

    <label><p>Lugar</p></label>
        <div id="catBox" class="categories">
            <select name="marker" id="marker">
            <option>Seleccione una opción</option>
            </select>

        </div>

            <input type="checkbox" id="event_published" name="event_published"> ¿Publica el evento? <br />
            <input type="button" class="button" value="Guardar" onclick="saveEvent();return false;"/>
    </fieldset>
       </form>
    <form id="editEventCategory" method="POST">
<!--/    <form id="editPerson" enctype="multipart/form-data" action="" method="post" class=""> -->
    <h2>&nbsp;Editar Categoría de evento</h2>
    <fieldset>
        <label>
            <p>Nombre</p>

        </label>
        <input id="event_cat_id" type="hidden" name="event_cat_id" />
        <input id="event_cat_name" type="text" name="event_cat_name" placeholder="Nombre de Categoría" />
            <br />
            <input type="submit" class="button" onclick="saveEventCategory();return false;" value="Guardar">
    </fieldset>
    </form>
    <div style="display:none">
    <input type="submit" name="submit" id="submit"/>
    </div>

</div>

<!-- /editBox end -->

<div class="separator"></div>
<div id="footer"></div>

</body>


</html>
<?php 

} else {

header("Location:/admin/my_login.php");


}
?>
