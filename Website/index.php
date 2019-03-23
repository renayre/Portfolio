<?php include "includes/header.php"; ?>

		<main class="container">
			
<?php
			//LOG OUT MESSAGE 
			if (isset($_GET['logOut']) && $_GET['logOut'] = 1){ ?> 
                <h5 id="logOutMessage">Sucessfully Logged Out</h5>
                <?php $_GET['logOut'] = 0;}?>

            <?php
			 if (!isset($_SESSION['loginTest'])){////not logged in display login 
			 ?> 

				<div class="row" id="panel">
    				<aside class="col-sm-4" id="login">
    					<div class="card">
        					<article class="card-body">
            					<a href="" class="float-right btn btn-outline-primary">Sign up</a>
            					<h4 class="card-title mb-4 mt-1">Sign in</h4>
           						<form action="includes/login.php" method="POST">
                						<div class="form-group">
                   						<label>Your email</label>
                   						<?php if (isset($_GET['loginError']) && $_GET['loginError'] = 1){ ?> 
                    						<h5 id="errorMessage">Error, please try logging in</h5>
                   						<?php $_GET['loginError'] = 0;}?>

                   						<input name="username" id="username" class="form-control" placeholder="Username" type="text" required="true">
                					</div> <!-- form-group// -->
                					<div class="form-group">
                  						<a class="float-right" href="#">Forgot?</a>
                   						<label>Your password</label>
                    					<input name="password" id="password" class="form-control" placeholder="*********" type="password" required="true">
                					</div> <!-- form-group// --> 
                					<div class="form-group"> 
                						<div class="checkbox">
                    						<label> <input type="checkbox"> Save password </label>
               					 		</div> <!-- checkbox .// -->
               				 		</div> <!-- form-group// -->  
               						<div class="form-group">
                   						<button type="submit" class="btn btn-primary btn-block"> Login  </button>
                					</div> <!-- form-group// -->       
            					</form>
        					</article>
    					</div> <!-- card.// -->
					</aside> <!-- col.// -->
				</div>
			
			<?php 
			}	
			else if(isset($_SESSION['loginTest']) && $_SESSION['loginTest'] = 1){?>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, elit sed euismod tempor, enim elit lacinia lectus, ac gravida lectus justo ut lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut massa pulvinar, lobortis nisi eget, malesuada nisi. Etiam vitae tortor ligula. Aliquam erat volutpat. Sed ac pellentesque nisi, nec lobortis nisi. Vestibulum id turpis aliquam erat rutrum efficitur. Curabitur aliquam rutrum tempus. Fusce auctor, risus at porttitor lobortis, quam libero dapibus turpis, quis consectetur tellus risus et magna. Aliquam nec vestibulum velit. Nulla varius eget velit finibus vestibulum. Nam bibendum magna et sem lobortis luctus. Donec vel lorem varius mauris pretium tempor. Ut luctus, libero sed viverra eleifend, lorem ex laoreet nibh, vitae bibendum felis lectus sit amet diam. Suspendisse maximus elementum dolor eget consectetur. Sed lobortis malesuada sem, a ultricies sem dictum sit amet.</p>

				<p>Etiam aliquet elit nec tristique sagittis. Donec id lectus eu arcu sollicitudin venenatis. Nam auctor suscipit convallis. Etiam tristique leo nisl, id tincidunt nibh rutrum at. Curabitur elementum odio et sem mattis egestas. Nulla facilisi. Proin condimentum, nisl vitae mollis vulputate, leo tortor pharetra justo, a scelerisque tortor leo sollicitudin enim. Pellentesque ut consectetur nisl, quis eleifend ligula. In feugiat, quam eu imperdiet vehicula, enim ipsum ultrices enim, quis condimentum ligula enim eu est. Aliquam vel est vehicula, imperdiet nunc sed, blandit neque.</p>


				<?php include "includes/post_comment.php" ?>

				<?php //include "includes/view_comments.php"; 
			} //end of else if 
			?>
		</main>

<?php include "includes/footer.php"; ?>