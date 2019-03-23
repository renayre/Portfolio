<?php require "functions.php";?>
<!DOCTYPE html>
<html lang = "en">
<head>
	<meta charset = "utf-8">
	<!-- getWebsiteName() function to display website name-->
	<title> <?php getWebsiteName();?> </title> 
	<!--STYLES-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	 <link href="css/blog-home.css" rel="stylesheet">

	<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
	<header><a href="index.php"><?php getWebsiteName();?></a>
		<div id="navbarResponsive">
          	<ul class="navbar-nav ml-auto" id="navBar">
            	<li <?php if($_SERVER['PHP_SELF'] === "/csci2170/A2/theforce.php"):?> class="nav-item active"<?php endif;?> >
                    <a class="nav-link" href="theforce.php">The Force</a>
           		 </li>
          	</ul>
        </div>
    </header>

