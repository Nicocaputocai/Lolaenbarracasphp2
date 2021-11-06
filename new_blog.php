<?php
global $file_id;
$file_id = '5';
$file_name = 'Blog - Lola en Barracas';
include ('header.php');

$start = '0';

if($_GET['currentpage']){
        $start = $_GET['currentpage'];
}

?>


<?php

if (!$blogPosts){echo "<br>No se han encontrado posts con ese criterio de búsqueda." ;}

else{

//    if($inId > 0 && $inCategoryId < 0){
    if($inId > 0){

        foreach ($blogPosts as $post)
        { 

    $title = $post->title;
    $titleUrl = seoUrl($post->title);
    $postText = $post->post;
    $authorId = $post->authorId;
    $author = $post->author;
    $authorUrl = seoUrl($author); 
    $datePosted = $post->datePosted;
    $categoryId = $post->categoryId;
    $categoryName = $post->categoryName;
    $categoryNameUrl = seoUrl($categoryName);
    $postPict = $post->postPict;#if (!$postPict){$postPict = "not-found.gif";}
    $postId = $post->id;
         }




?>


  <!-- Main Container -->
  <section class="blog_post bounceInUp animated">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-9">
          <div class="page-title">
            <h1><?php echo $title; ?></h1>
          </div> <div class="entry-detail">
            <div class="entry-photo">
              <figure><img src="/fotos/articulos/<?php echo $postPict;?>" alt="<?php echo $title;?>"></figure>
            </div>
            <div class="entry-meta-data"> <span class="author"> <i class="fa fa-user"></i>&nbsp; by: <a href="#"><?php echo $author;?></a></span> <span class="cat"> <i class="fa fa-folder"></i>&nbsp; <a href="/categoria/<?php echo $categoryId.'-'.$categoryNameUrl;?>"><?php echo $categoryName;?></a>  </span>  <span class="date"><i class="fa fa-calendar">&nbsp;</i>&nbsp; 2015-08-05</span>
            </div>
            <div class="content-text clearfix">
              <p><?php echo $postText ;?></p>
            </div>



          </div>

        </div>
        <!-- right colunm -->
        <aside class="right sidebar col-xs-12 col-sm-3"> 
          <!-- Blog category -->
          <div class="block blog-module">
            <p class="title_block">Categorías del Blog</p>
            <div class="block_content"> 
              <!-- layered -->
              <div class="layered layered-category">
                <div class="layered-content">
                  <ul class="tree-menu">

<?php

$catNavArray = array();

$catNavArray = getCategoryNav();

foreach ($catNavArray as $catNav){ 

$catUrl = seoUrl($catNav["name"]);

?>


<li><a  href="/categoria/<?php echo $catNav["id"].'-'.$catUrl;?>"><i class="fa fa-angle-right"></i>&nbsp;<?php echo $catNav["name"];?></a></li>



 <?php
}


?>


                  </ul>
                </div>
              </div>
              <!-- ./layered --> 
            </div>
          </div>
          <!-- ./blog category  --> 
          <!-- Popular Posts -->
          <div class="block blog-module wow fadeInUp">
            <p class="title_block">Últimos artículos</p>
            <div class="block_content"> 
              <!-- layered -->
              <div class="layered">
                <div class="layered-content">
                  <ul class="blog-list-sidebar">


                      <?php
                      $LTSposts = GetBlogPosts('','','',"2",'','1','','');
                      $latestPosts = $LTSposts[0];

                      if($latestPosts) {
                          ?>


                          <?php

                          foreach ($latestPosts as $lstPost) {

                              $title = $lstPost->title;
                              $titleUrl = seoUrl($lstPost->title);
                              $datePosted = $lstPost->datePosted;
                              $postPict = $lstPost->postPict;#if (!$postPict){$postPict = "not-found.gif";}
                              $postId = $lstPost->id;

                          ?>

                              <li>
                                  <div class="post-thumb"> <a href="#"><img src="/fotos/articulos/<?=$postPict;?>" alt="Blog"></a> </div>
                                  <div class="post-info">
                                      <h5 class="entry_title"><a href="#"><?=$title;?></a></h5>
                                      <div class="post-meta"> <span class="date"><i class="fa fa-calendar">&nbsp;</i> <?=$datePosted;?></span></div>
                                  </div>
                              </li>

                          <?php
                          }

                      }

                      ?>

                  </ul>
                </div>
              </div>
              <!-- ./layered --> 
            </div>
          </div>
          <!-- ./Popular Posts --> 

                  </aside>
        <!-- ./right colunm --> 
      </div>
    </div>
  </section>
  <!-- Main Container End -->

<?php
//else de  if($inId > 0) 
     }  else    {

?>


  <!-- Main Container -->
  
  <section class="blog_post bounceInUp animated">
    <div class="container"> 
      
      <!-- row -->
      <div class="row"> 
        
        <!-- Center colunm-->
        <div class="center_column col-xs-12 col-sm-9" id="center_column">
          <div class="page-title">
            <h2>Nuestro blog</h2>
          </div>
          <ul class="blog-posts">



<?php
        foreach ($blogPosts as $post)
        { 

    $title = $post->title;
    $titleUrl = seoUrl($post->title);
    $postText = $post->post;
    $authorId = $post->authorId;
    $author = $post->author;
    $authorUrl = seoUrl($author); 
    $datePosted = $post->datePosted;
    $categoryId = $post->categoryId;
    $categoryName = $post->categoryName;
    $categoryNameUrl = seoUrl($categoryName);
    $postPict = $post->postPict;#if (!$postPict){$postPict = "not-found.gif";}
    $postId = $post->id;

    ?>


            <li class="post-item wow fadeInUp">
              <article class="entry">
                <div class="row">
                  <div class="col-sm-5">
                    <div class="entry-thumb image-hover2"> <a href="/blog/<?php echo $postId.'-'.$titleUrl; ?>">
                      <figure><img src="/fotos/articulos/<?php echo $postPict;?>" alt="<?php echo $title; ?>"></figure>
                      </a> </div>
                  </div>
                  <div class="col-sm-7">
                    <h3 class="entry-title"><a href="/blog/<?php echo $postId.'-'.$titleUrl; ?>"><?php echo $title; ?></a></h3>
                    <div class="entry-meta-data"> <span class="author"> <i class="fa fa-user"></i>&nbsp; by: <a href="#"><?php echo $author;?></a></span> <span class="cat"> <i class="fa fa-folder"></i>&nbsp; <a href="/categoria/<?php echo $categoryId.'-'.$categoryNameUrl;?>"><?php echo $categoryName; ?></a> </span>  <span class="date"><i class="fa fa-calendar"></i>&nbsp; <?php echo $datePosted; ?></span> </div>
                    <div class="entry-excerpt"><?php echo $postText;?></div>
                    <div class="entry-more"> <a href="/blog/<?php echo $postId.'-'.$titleUrl; ?>" class="button">Seguir Leyendo&nbsp; <i class="fa fa-angle-double-right"></i></a> </div>
                  </div>
                </div>
              </article>
            </li>




<?php    } //end foreach $blogPosts ?>


          </ul>
          <div class="sortPagiBar">
            <div class="pagination-area wow fadeInUp animated" style="visibility: visible;">
              <ul>
                  <?php if($pagesLinks && (!$inId || $inId == 'all')){echo "$pagesLinks"; }?>
              </ul>
            </div>
          </div>
        </div>
        <!-- ./ Center colunm --> 
        <!-- Left colunm -->
        
        <aside class="right sidebar col-xs-12 col-sm-3"> 
          <!-- Blog category -->
          <div class="block blog-module">
            <p class="title_block">Categorías del blog</p>
            <div class="block_content"> 
              <!-- layered -->
              <div class="layered layered-category">
                <div class="layered-content">
                  <ul class="tree-menu">

                      <?php

                      $catNavArray = array();

                      $catNavArray = getCategoryNav();

                      foreach ($catNavArray as $catNav){

                          $catUrl = seoUrl($catNav["name"]);

                          ?>


                          <li><a  href="/categoria/<?php echo $catNav["id"].'-'.$catUrl;?>"><i class="fa fa-angle-right"></i>&nbsp;<?php echo $catNav["name"];?></a></li>



                          <?php
                      }


                      ?>

                  </ul>
                </div>
              </div>
              <!-- ./layered --> 
            </div>
          </div>
          <!-- ./blog category  --> 
          <!-- Popular Posts -->
          <div class="block blog-module wow fadeInUp">
            <p class="title_block">Últimos artículos</p>
            <div class="block_content"> 
              <!-- layered -->
              <div class="layered">
                <div class="layered-content">
                  <ul class="blog-list-sidebar">
                      <?php
                      $LTSposts = GetBlogPosts('','','',"3",'','1','','');
                      $latestPosts = $LTSposts[0];
                        if($latestPosts) {
                        ?>

                        <?php

                        foreach ($latestPosts as $lstPost) {

                            $title = $lstPost->title;
                            $titleUrl = seoUrl($lstPost->title);
                            $datePosted = $lstPost->datePosted;
                            $postPict = $lstPost->postPict;#if (!$postPict){$postPict = "not-found.gif";}
                            $postId = $lstPost->id;

                            ?>

                            <li>
                                <div class="post-thumb"> <a href="#"><img src="/fotos/articulos/<?=$postPict;?>" alt="Blog"></a> </div>
                                <div class="post-info">
                                    <h5 class="entry_title"><a href="#"><?=$title;?></a></h5>
                                    <div class="post-meta"> <span class="date"><i class="fa fa-calendar">&nbsp;</i> <?=$datePosted;?></span></div>
                                </div>
                            </li>

                            <?php
                        }

                    }

                    ?>
                  </ul>
                </div>
              </div>
              <!-- ./layered --> 
            </div>
          </div>
          <!-- ./Popular Posts -->
                  </aside>
        <!-- ./left colunm --> 
      </div>
      <!-- ./row--> 
    </div>
  </section>
  <!-- Main Container End --> 


<?

    }

}

?>

<?php include ('footer.php'); ?>