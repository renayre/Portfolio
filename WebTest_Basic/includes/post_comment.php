<form method="post" action="index.php">
	<label for="commentSub"><h3>Type and save, yo.</h3></label> 
	<br>
	<textarea id="commentSub" name="commentSub" required="true" maxlength="254">Do not enter more than 254 characters, yo.</textarea>
	<br>
	<input class="btn btn-primary" type="submit" value="Submit" name="submitButt" id="submitButt">
  	<input class="btn btn-primary" type="reset" value="Clear">
</form>

<?php 
	// Connecting to DB
	$host = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "2170";

	$temp_id = 10; //For inserting into db m_id

	$conn = new mysqli($host, $username, $password, $dbname);

	if($conn->connect_error){
		die("Nope!".$conn->connect_error);
	}
	
	//doesn't work.. to sanitize user input :(
	function sanitize($user_input){
		@$comment = stripslashes($user_input);
		@$comment = trim($user_input);
		@$comment = htmlspecialchars($user_input);
		return $comment;
	}
	@$comment_final = sanitize($_POST['commentSub']);
	@$submitButt = $_POST['submitButt'];
	
	if(isset($submitButt)){//press button, and insert comment into db with id, name, and date
		$sqlQuery_insert = "INSERT INTO mindfeed (m_id, m_name, m_thought, m_date) VALUES ('$temp_id', 'C-3PO', '$comment_final', '15 Feb')";
		if ($conn->query($sqlQuery_insert) === TRUE) { //confirmation 
    		echo "New record created successfully";
		}
	}
	mysqli_close($conn);
?>
<br><br>
