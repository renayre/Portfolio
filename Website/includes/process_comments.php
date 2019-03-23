<?php 
	$thought_error = false;
	$error_message = "";

	//not sure how to keep date format, so I kept mindfeed variables 

	/* References: 
	
	Jain, A. (2010, June 11). JQuery: Send JSON Objects with an Ajax Request. Retrieved March 21, 2019, from http://www.tothenew.com/blog/jquery-send-json-object-with-an-ajax-request/

	Soni, S. (2019, January 7). How to Use AJAX in PHP and jQuery. Retrieved March 21, 2019, from https://code.tutsplus.com/tutorials/how-to-use-ajax-in-php-and-jquery--cms-32494
	

	*/

	if (isset($_POST['submitThought'])) {
		$mindfeed_name = "C-3PO";
		$mindfeed_date = date("j F Y");
		$mindfeed_thought = validateData($_POST['thought']);

		if ($mindfeed_thought != "") {// if message not empty add to db 
		?>
			<script>
				var commentArray = {
					"m_name": "<?php echo $mindfeed_name; ?>",
					"m_date": "<?php echo $mindfeed_date; ?>",
					"m_thought" : "<?php echo $mindfeed_thought;?>"
				};
				console.log(commentArray);
				var commentArrayFinal = JSON.stringify(commentArray);
				var objXMLHttpRequest = new XMLHttpRequest();
				objXMLHttpRequest.onreadystatechange = function(){
					if(objXMLHttpRequest.readyState == 4 && objXMLHttpRequest.status == 200){
						alert(objXMLHttpRequest.responseText);
					}
					else {
						alert('Error Code: ' + objXMLHttpRequest.status);
						alert('Error Message: ' + objXMLHttpRequest.statusText);
					}
				}
				objXMLHttpRequest.open("GET", "process_comments.php", true);
				objXMLHttpRequest.send();

				//console.log(commentArrayFinal);
				/*
					Code not working completely, able to recrieve sting but not sucessfully connecting to db through AJAX

				*/
				jQuery.ajax({
					url: "process_comments.php", 
					type: "GET",
					data: {comment: commentArrayFinal},
					dataType: "json",
					success: function(result){

					}
				});
			</script>

		<?php 
		}
		else {
			$thought_error = true;
			$error_message = "Your thought cannot be empty, 3PO! You know better.";
		}
	}
	/*if(isset($commentArray)){
		$commentArrayFinal = json_decode($commentArray, true);
	}*/
?>