<br>
<?php 
	$host = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "2170";
	$conn = new mysqli($host, $username, $password, $dbname);

	if($conn->connect_error){
		die("Nope!".$conn->connect_error);
	}
	$sqlQuery_view = "SELECT m_id, m_name, m_thought, m_date FROM mindfeed";
	$result = $conn->query($sqlQuery_view);

	if($result->num_rows > 0){
		while ($row = $result->fetch_assoc()){
			echo '<div id="commentView">
					<div id="commentView_details"> <img src="img/profile_pic.png">
					<h3> '.$row["m_name"].'&emsp; </h3>	<p> on &emsp; </p>	<p>'. $row["m_date"] .'</p> </div>
					<p id="commentView_thought">'. $row["m_thought"] .'</p>
				</div> <br>'; 
		}
	}
	else {
		echo "Notin";
	}
?>

