<?php
  session_start();
  if (isset($_SESSION['loginTest'])){
    //echo "All logged in buddy";

    
  }
  else{ //unset session if not signed in correctly (from php.net: https://secure.php.net/manual/en/function.session-destroy.php)
    $_SESSION = array();

    if (ini_get("session.use_cookies")) {
      $params = session_get_cookie_params();
      setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
      );
    }
    session_destroy();
  }

	require "includes/db.php";
	require "includes/functions.php"; 
	//$websiteName = "MindFeed"; prints regardless?

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<title><?php echo getWebsiteName(); ?></title>
		<meta charset="utf-8">
		<!-- Bootstrap core CSS -->
		<!-- Used from https://www.getbootstrap.com, 29 January 2019 -->
		<link href="css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">

		<!-- Custom CSS styles -->
		<link rel="stylesheet" href="css/styles.css">

		<!-- login styles -->
		<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
		<!--font?-->
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">

		<!-- Drop Down Menu Reference: https://www.w3schools.com/howto/howto_css_dropdown.asp -->
		

	</head>
	<body>

		<header>
			<div class="container">
				<nav class="navbar navbar-dark bg-dark">
					<a class="navbar-brand" href="index.php"><?php echo getWebsiteName(); ?></a>
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link" href="theforce.php">The Force</a>
						</li>
						<?php
							if(isset($_SESSION['uFullName'])){?>
						<div class="dropDownMenu">
							<a class="dropDownLink" href="#">
								<?php
									if(isset($_SESSION['uFullName'])){
										echo $_SESSION['uFullName'];
									}
								?>
							</a>
							<div class="dropDownContent">
								<a href="includes/logout.php">Logout</a>
							</div>
						</div>
					<?php }// end of if
						?>
					</ul>
				</nav>


					<!-- jQuery and Bootstrap JavaScript links -->
					<!-- Used from https://www.getbootstrap.com, 29 Januay=ry 2019 -->
					<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
					<script src="js/bootstrap.bundle.min.js" integrity="sha384-zDnhMsjVZfS3hiP7oCBRmfjkQC4fzxVxFhBx8Hkz2aZX8gEvA/jsP3eXRCvzTofP" crossorigin="anonymous"></script>
			</div>

			<div class="container">
				<div class="jumbotron">
					<h1 class="display-3 text-center">Record your observations, 3PO!</h1>
				</div>
			</div>
		</header>

