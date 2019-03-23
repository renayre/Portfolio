<?php
//NOTE: took away email part of csv file as not needed in assignment and maes pairing in array easier (for me to understand) 

//parse csv file (Store in array with key value pairs)

//if login sucessful redirect to homepage with 

//login unsucessful 'loginError = 1' in query string and error message in red and bold



require("db.php");
require("functions.php");

$username = validateData($_POST['username']);

$password = validateData($_POST['password']);


echo $username;
echo "<br>";
echo $password;
echo "<br>";


$result1 = mysqli_query($conn, "SELECT * FROM  a4login WHERE login_uname = '$username'");

$result2 = mysqli_query($conn, "SELECT * 
	FROM a4users JOIN a4login ON (a4users.users_id = a4login.login_user_id) 
	WHERE login_uname = '$username' ");
     

//var_dump($result1);
$row = mysqli_fetch_array($result2);

if(mysqli_num_rows($result1)>0 && password_verify($password,$row['login_pswrd'])){
	session_start();
	$_SESSION['loginTest'] = 1;
	$_SESSION['uName'] = $username;
	$_SESSION['uType'] = 'casual';
	$_SESSION['uFullName'] = $row['users_fname'] . ' ' . $row['users_lname'];
	header("Location: ../index.php");
	die();
}
else{
	header("Location: ../index.php?loginError=1");
	die();
}

 
?>