
<?php
require('Uploader.php');
require('configs.php');

$path = dirname(__FILE__);

$upload_dir = $full_path.'fotos/articulos/';

$valid_extensions = array('gif', 'png', 'jpeg', 'jpg');

$randomNumber = mt_rand();

$Upload = new FileUpload('uploadfile');
$fileName = $Upload->getFileName(); // Get the extension of the uploaded file

$ext = $Upload->getExtension(); // Get the extension of the uploaded file
$Upload->newFileName = $randomNumber.'-'.$fileName;
$result = $Upload->handleUpload($upload_dir, $valid_extensions);

if (!$result) {
    echo json_encode(array('success' => false, 'msg' => $Upload->getErrorMsg()));
}

$data = image_resize($upload_dir.$Upload->newFileName, $upload_dir.$images_width.'x'.$images_height.$Upload->newFileName, $images_width, $images_height, false);

if(!$data){
    echo json_encode(array('success' => false, 'msg' => 'Ocurrío un error al procesar la imagen'));
    die;
}

echo json_encode(array('success' => true, 'file' => $Upload->getFileName(),'thumb'=> $images_width.'x'.$images_height.$Upload->newFileName));
die;



function image_resize($src, $dst, $width, $height, $crop=0){

    if(!list($w, $h) = getimagesize($src)) return "Unsupported picture type!";

    $type = strtolower(substr(strrchr($src,"."),1));

    if($type == 'jpeg') $type = 'jpg';
    switch($type){
        case 'bmp': $img = imagecreatefromwbmp($src); break;
        case 'gif': $img = imagecreatefromgif($src); break;
        case 'jpg': $img = imagecreatefromjpeg($src); break;
        case 'png': $img = imagecreatefrompng($src); break;
        default : return "Unsupported picture type!";
    }

    // resize
    if($crop){
        if($w < $width or $h < $height) return "Picture is too small!";
        $ratio = max($width/$w, $height/$h);
        $h = $height / $ratio;
        $x = ($w - $width / $ratio) / 2;
        $w = $width / $ratio;
    }
    else{
        if($w < $width and $h < $height) return "Picture is too small!";
        $ratio = min($width/$w, $height/$h);
        $width = $w * $ratio;
        $height = $h * $ratio;
        $x = 0;
    }

    $new = imagecreatetruecolor($width, $height);

    // preserve transparency
    if($type == "gif" or $type == "png"){
        imagecolortransparent($new, imagecolorallocatealpha($new, 0, 0, 0, 127));
        imagealphablending($new, false);
        imagesavealpha($new, true);
    }

    imagecopyresampled($new, $img, 0, 0, $x, 0, $width, $height, $w, $h);

    switch($type){
        case 'bmp': imagewbmp($new, $dst); break;
        case 'gif': imagegif($new, $dst); break;
        case 'jpg': imagejpeg($new, $dst); break;
        case 'png': imagepng($new, $dst); break;
    }
    return true;
}


?>
