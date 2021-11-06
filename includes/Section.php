<?php

class Section 
{
 
public $id;
public $title;
public $descrip;
public $content;
public $sectionPict;

function __construct($inId=null, $inTitle=null, $inDescrip=null, $inContent=null,$inSectionPict)
{
    if (!empty($inId))
    {
        $this->id = $inId;
    }
    if (!empty($inTitle))
    {
        $this->title = $inTitle;
    }
    if (!empty($inSectionPict))
    {
        $this->sectionPict = $inSectionPict;
    }
    if (!empty($inDescrip))
    {
        $this->descrip = $inDescrip;
    }
 
    if (!empty($inContent))
    {
        $this->content = $inContent;
    }

}
} 

