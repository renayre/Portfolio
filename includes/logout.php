<?php
//created to help error testing with starting sessions after login 
//unsetting session, connected to header.php (with loginTest and in nav bar)
$_SESSION = array();

    if (ini_get("session.use_cookies")) {
      $params = session_get_cookie_params();
      setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
      );
    }
   session_destroy();

header("Location: ../index.php?logOut=1");
die();

?>