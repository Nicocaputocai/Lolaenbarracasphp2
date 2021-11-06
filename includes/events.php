<?php

class Event 
{
 
public $id;
public $title;
public $eventContent;
public $eventFull;
public $markerId;
public $markerArray;
public $categoryId;
public $categoryName;
public $categoryArray;
public $published;
public $initdate;
public $marker_name; 
public $marker_address; 
public $marker_lat; 
public $marker_lng; 
public $marker_type; 
public $eventPict; 
public $eventDescrip; 

function __construct($inId=null, $inTitle=null, $inEvent=null, $inEventFull=null, $inMarker=null, $inCategory=null,$published=null,$inInitdate=null,$inEventPict=null,$inEventDescrip=null)
{
global $mysqli;
    if (!empty($inId))
    {
        $this->id = $inId;
    }
    if (!empty($inEventDescrip))
    {
        $this->eventDescrip = $inEventDescrip;
    }
    if (!empty($inTitle))
    {
        $this->title = $inTitle;
    }
    if (!empty($inEventPict))
    {
        $this->eventPict = $inEventPict;
    }
    if (!empty($inst))
    {
        $this->post = $inPost;
    }
    if (!empty($inEventFull))
    {
        $this->eventFull = $inEventFull;
    }
    if (!empty($inEvent))
    {
        $this->eventContent = $inEvent;
    }
 
    if (!empty($inInitdate))
    {
        $splitDate = explode("-", $inInitdate);
        $this->initdate = $splitDate[0] . "/" . $splitDate[1] . "/" . $splitDate[2];
    }
 
    if (!empty($inCategory))
    {
        $query = $mysqli->query("SELECT id, name FROM events_categories WHERE id = " . $inCategory .";");
        $row = $query->fetch_assoc(); 
        $this->categoryId = $row["id"];
        $this->categoryName = $row["name"];
    }

    if (!empty($published)){
        $this->published = $published;
    } else {$this->published = 0;}
    
        $cnt = 0;
        $sqlQuery = $mysqli->query("SELECT id, name FROM events_categories;");
        $categoryArray = array();

        while ($row = $sqlQuery->fetch_assoc()){

            $categoryArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }
        $this->categoryArray = $categoryArray;


    if (!empty($inMarker))
    {
        $query = $mysqli->query("SELECT name,address,lat,lng,type FROM markers WHERE id = " . $inMarker. ";");
        $row = $query->fetch_assoc(); 
        $this->marker_name = $row["name"]; 
        $this->marker_address = $row["address"]; 
        $this->marker_lat = $row["lat"]; 
        $this->marker_lng = $row["lng"]; 
        $this->marker_type = $row["type"]; 
        $this->markerId = $inMarker;
    }

//
        $cnt = 0;
        $sqlQuery = $mysqli->query("SELECT id, name FROM markers;");
        $markersArray = array();

        while ($row = $sqlQuery->fetch_assoc()){

            $markersArray[$cnt] = array (
                         "id" => $row['id'],
                         "name" => $row['name'],
                    ); $cnt++;
        }
        $this->markerArray = $markersArray;


 
 
}
/* End of function __construct */



 
}
 
?>

