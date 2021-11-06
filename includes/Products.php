<?php

class Product
{
 
public $id;
public $name;
public $short_desc;
public $long_desc;
public $subcategory_id = 0;
public $subcategory_name = "Sin Subcategoría";
public $category_id = 0;
public $category_name = "Sin Categoría";
public $price;
public $price2;
public $strikethrough_price;
public $has_strikethrough_price;
public $stock;
public $shows_stock;
public $published;
public $size;
public $measures;
public $material;
public $colors;
public $code;
public $picturesArray = array();
public $picture;
public $sub_type;
public $type;
public $sub_type_desc = '';
public $type_desc = '';
public $colorsArray;
public $waistsArray;
public $has_waists;
public $has_women_waists;
public $has_men_waists;
public $has_child_waists;
public $price3;
public $productThumb;

#

public function __construct(
                    $inId=null,
                    $inName=null,
                    $inShortDesc=null,
                    $inLongDesc=null,
                    $inProductPict=null,
                    $inCategoryId=null,
                    $inPrice=null,
                    $inSkThPrice=null,
                    $inHasSkThPrice=null,
                    $inStock=null,
                    $inShowsStock=null,
                    $inPublished=null,
                    $inSize=null,
                    $inMeasures=null,
                    $inMaterial=null,
                    $inColors=null,
                    $inCode,
                    $inSubCategoryId=null,
                    $inPrice2=null,
                    $inSubType=null,
                    $inPrice3=null,
                    $inType=null,
                    $inProductCategoryName=null,
                    $inProductSubCategoryName=null,
                    $inTypeName=null,
                    $inSubTypeName=null,
                    $inHas_waists)
                    {
    global $mysqli;
    if (!empty($inId))
    {

        $this->id = $inId;

        $cnt = 0;
        $sqlQuery = $mysqli->query("SELECT color_id,p_colors.desc,p_colors.picture FROM products_colors,p_colors WHERE product_id = '$inId' AND color_id = id;");
        $colorsArray = array();

        while ($row = $sqlQuery->fetch_assoc()){

            $colorsArray[$cnt] = array (
                         "color_id" => $row['color_id'],
                         "desc" => $row['desc'],
                         "picture" => $row['picture']
                    ); $cnt++;
        }
        $this->colorsArray = $colorsArray;

        $this->has_women_waists = 0;
        $this->has_child_waists = 0;
        $this->has_men_waists = 0;

    }

    if (!empty($inName))
    {
        $this->name = $inName;
    }
    if (!empty($inSubType))
    {
        $this->sub_type = $inSubType;
        $query = $mysqli->query("SELECT p_sub_types.desc FROM p_sub_types WHERE id = " . $inSubType .";");
        $row = $query->fetch_assoc();
        $this->sub_type_desc = $row["desc"];


    }
    if (!empty($inType))
    {
        $this->type = $inType;
        $query = $mysqli->query("SELECT p_types.desc FROM p_types WHERE id = '" . $inType ."';");
        $row = $query->fetch_assoc();
        $this->type_desc = $row["desc"];
    }

    if (!empty($inShortDesc))
    {
        $this->short_desc = $inShortDesc;
    }
    if (!empty($inLongDesc))
    {
        $this->long_desc = $inLongDesc;
    }
    if (!empty($inSubCategoryId) && !empty($inProductSubCategoryName))
    {
        $this->subcategory_id = $inSubCategoryId;
        $this->subcategory_name = $inProductSubCategoryName;
    }
    if (!empty($inCategoryId))
    {
        $this->category_id = $inCategoryId;
        $this->category_name = $inProductCategoryName;
        $this->has_waists = $inHas_waists;
    }
    if (!empty($inPrice2)){
        $this->price2 = $inPrice2;
    }
    if (!empty($inPrice3)){
        $this->price3 = $inPrice3;
    }
    if (!empty($inPrice)){
        $this->price = $inPrice;
    }
    if (!empty($inSkThPrice)){
        $this->strikethrough_price = $inSkThPrice;
    } 
    if (!empty($inHasSkThPrice)){
        $this->has_strikethrough_price = $inHasSkThPrice;
    } 
    if (!empty($inStock)){
        $this->stock = $inStock;
    } 
    if (!empty($inPublished)){
        $this->published = $inPublished;
    }
    if (!empty($inShowsStock)){
        $this->shows_stock = $inShowsStock;
    }
    if (!empty($inSize)){
        $this->size = $inSize;
    } 
    if (!empty($inMeasures)){
        $this->measures = $inMeasures;
    } 
    if (!empty($inMaterial)){
        $this->material = $inMaterial;
    } 
    if (!empty($inColors)){
        $this->colors = $inColors;
    } 
    if (!empty($inCode)){
        $this->code = $inCode;
    } 


}
/* End of function __construct */

public function setProductImages()
{
    global $mysqli;

    $cnt = 0;
    $sqlQuery = $mysqli->query("SELECT picture FROM products_pictures WHERE product_id = '$this->id' ORDER BY orden ASC;");
    $picturesArray = array();

    while ($row = $sqlQuery->fetch_assoc()){

        $picturesArray[$cnt] = array (
            "picture" => $row['picture'],
        ); $cnt++;
    }

    $this->picturesArray = $picturesArray;
}

public function setWaists()
{
    global $mysqli;
    $cnt = 0;
    $sqlQuery = $mysqli->query("
                                    SELECT 
                                    products_waists.product_id,
                                    products_waists.waist_id,
                                    p_waists.group,
                                    p_waists.desc
                                     FROM products_waists,p_waists
                                     WHERE product_id ='$this->id'
                                     AND p_waists.id = products_waists.waist_id
                                     GROUP BY waist_id
                                    
                                    ");
    $waistsArray = array();

    while ($row = $sqlQuery->fetch_assoc()){

        switch ($row['group']){
            case "W":
                $this->has_women_waists++;break;
            case "M":
                $this->has_men_waists++;break;
            case "C":
                $this->has_child_waists++;
        }


        $waistsArray[$cnt] = array (
            "waist_id" => $row['waist_id'],
            "group" => $row['group'],
            "desc" => $row['desc'],
        ); $cnt++;
    }
    $this->waistsArray = $waistsArray;
}

public function setMainPicture()
{
    global $mysqli;

    $this->picture = $mysqli->query("SELECT picture FROM products_pictures WHERE product_id = '$this->id' ORDER BY orden ASC LIMIT 1;")->fetch_object()->picture;
}

} 
