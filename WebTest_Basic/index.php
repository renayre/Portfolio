<?php session_start();
	require "includes/header.php";?>
	<div class="topGraphic">
		<p><center id="tG_title">What's on your mind?</center> </p>
		<p><center id="tG_cap">We promise we're not the FBI, yo.</center></p>
	</div>
<?php require "includes/post_comment.php";
	require "includes/view_comments.php";
?>
<?php require "includes/footer.php";?>