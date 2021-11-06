<?php

class Person 
{
 
public $id;
public $first_name;
public $last_name;
public $url;
public $email;
public $avatar;
public $self_description;

function __construct($inId=null, $inFirstName=null, $inLastName=null, $inUrl=null, $inEmail=null, $inAvatar=null, $inSelfDescription=null)
{
    if (!empty($inId))
    {
        $this->id = $inId;
    }
    if (!empty($inFirstName))
    {
        $this->first_name= $inFirstName;
    }
    if (!empty($inLastName))
    {
        $this->last_name= $inLastName;
    }
 
    if (!empty($inUrl))
    {
        $this->url = $inUrl;
    }
 
    if (!empty($inEmail))
    {
        $this->email = $inEmail;
    }
  
    if (!empty($inAvatar))
    {
        $this->avatar= $inAvatar;
    }

    if (!empty($inSelfDescription))
    {
        $this->self_description= $inSelfDescription;

    }
}
}

