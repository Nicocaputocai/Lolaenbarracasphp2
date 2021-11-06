<?php

class BlogPost
{
 
public $id;
public $title;
public $post;
public $author;
public $authorId;
public $tags;
public $datePosted;
public $authorArray;
public $postTags;
public $categoryArray;
public $categoryId;
public $categoryName;
public $published;



function __construct($inId=null, $inTitle=null, $inPost=null, $inPostFull=null, $inAuthorId=null, $inDatePosted=null,$inCategory=null,$published=null)
{
global $mysqli;
    if (!empty($inId))
    {
        $this->id = $inId;
    }
    if (!empty($inTitle))
    {
        $this->title = $inTitle;
    }
    if (!empty($inPost))
    {
        $this->post = $inPost;
    }
 
    if (!empty($inDatePosted))
    {
        $splitDate = explode("-", $inDatePosted);
        $this->datePosted = $splitDate[0] . "/" . $splitDate[1] . "/" . $splitDate[2];
    }
 
    if (!empty($inCategory))
    {
        $query = $mysqli->query("SELECT id, name,in_menu FROM categories WHERE id = " . $inCategory .";");
        $row = $query->fetch_assoc(); 
        $this->categoryId = $row["id"];
        $this->categoryName = $row["name"];
    }

    if (!empty($published)){
        $this->published = $published;
    } else {$this->published = 0;}
    

        $cnt = 0;
        $sqlQuery = $mysqli->query("SELECT id, name FROM categories;");
        $categoryArray = array();

        while ($row = $sqlQuery->fetch_assoc()){

            $categoryArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }
        $this->categoryArray = $categoryArray;


    if (!empty($inAuthorId))
    {
        $query = $mysqli->query("SELECT first_name, last_name FROM people WHERE id = " . $inAuthorId . ";");
        $row = $query->fetch_assoc(); 
        $this->author = $row["first_name"] . " " . $row["last_name"];
        $this->authorId = $inAuthorId;
    }


//

        $cnt = 0;
        $sqlQuery = $mysqli->query("SELECT id, first_name, last_name FROM people;");
        $authorArray = array();

        while ($row = $sqlQuery->fetch_assoc()){

            $authorArray[$cnt] = array (
                         "id" => $row['id'],
                         "first_name" => $row['first_name'],
                         "last_name" => $row['last_name'],
                    ); $cnt++;
        }
        $this->authorArray = $authorArray;


 
    $postTags = "No Tags";
    if (!empty($inId))
    {
        $query = $mysqli->query("SELECT tags.* FROM blog_post_tags LEFT JOIN (tags) ON (blog_post_tags.tag_id = tags.id) WHERE blog_post_tags.blog_post_id = " . $inId);

/*
        $tagArray = array();
        $tagIDArray = array();

*/

#$row = $query->fetch_assoc();

      $selectedTags = array();
      $stedTags = array();
      $contador = 0;
        while($row = $query->fetch_assoc())
        {
/*
            array_push($tagArray, $row["name"]);
            array_push($tagIDArray, $row["id"]);
*/
            $stedTags[$contador] = array (
            "id" => $row["id"],
            "name" => $row["name"],
            ); $contador++;

            $selectedTags[$row["id"]] = $row["name"];


        }

    #$this->postTags = $stedTags;
    $this->postTags = $selectedTags;

    }
 

    $tags = array();
     
    $contador = 0;
    $query = $mysqli->query("SELECT tags.* FROM tags;");

    while($row = $query->fetch_assoc())
        {

        $id = $row["id"];
        $name = $row["name"];

        if(isset($selectedTags[$id])) {
 
            $tags[$contador] = array (
            "id" => $row["id"],
            "name" => $row["name"],
            "selected" => 1,
            );

        } else {
            $tags[$contador] = array (
            "id" => $row["id"],
            "name" => $row["name"],
            "selected" => 0,
            );

        } 
    $contador++;
        }


    $this->tags = $tags;
  


}
/* End of function __construct */



 
}
 
?>
