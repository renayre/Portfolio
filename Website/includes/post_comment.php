<?php 
	$thought_error = false;
	$error_message = "";

	if (isset($_POST['submitThought'])) {
		$mindfeed_name = "C-3PO";
		$mindfeed_date = date("j F Y");
		$mindfeed_thought = validateData($_POST['thought']);

		if ($mindfeed_thought != "") {// if message not empty add to db

			$sql = "INSERT INTO mindfeed (m_name, m_date, m_thought) VALUES ('{$mindfeed_name}', '{$mindfeed_date}', '{$mindfeed_thought}')";
			$submit_thought_result = $conn->query($sql);

			if ($submit_thought_result === true) {
				header("Location: index.php");
				die();
			}
			else {
				$error_message = "Sorry, there is an error submitting your thought: " . $sql . "<br>" . $conn->error;
			}
		}
		else {
			$thought_error = true;
			$error_message = "Your thought cannot be empty, 3PO! You know better.";
		}
	}

	//include("process_comments.php"); attempt, not working as well as I'd like
?>
			<!-- Comment form -->
			<div class="py-5">
				<form class="form-signin" action="<?php echo basename($_SERVER['PHP_SELF']); ?>" method="post">
					<h3 class="h4 mb-3 font-weight-normal">Type and save. You know the drill.</h3>
					<?php
						if ($thought_error === true) {
							echo "<p class='text-danger'>$error_message</p>";
						}
					?>
					<textarea class="form-control" id="c3polog" name="thought" rows="3" maxlength="254" placeholder="Do not enter more than 254 characters!" required></textarea>
					<div class="mx-auto py-4">
						<button class="btn btn-lg btn-primary w-25 right" type="submit" name="submitThought">Save</button>
						<button class="btn btn-lg btn-warning w-25" type="reset">Clear</button>
					</div>
				</form>
			</div>