<?php
if (!empty($_POST["username"]) && !empty($_POST["lastname"]) && !empty($_POST["email"]) 
&& !empty($_POST["mob"])&& !empty($_POST["gender"]) 
&& !empty($_POST["appdate"])&& !empty($_POST["mess"]))
$username = $_POST['username'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$mob = $_POST['mob'];
$gender = $_POST['gender'];
$appdate = $_POST['appddate'];
$mess = $_POST['mess'];

if(!empty($username)){
	//create connection
	$con = mysqli_connect('localhost', 'root', '', 'appointment_details'); 
	if (mysqli_connect_error()) {
	die('Connect Error('.mysqli_connect_error().')'. mysqli_connect_error());
} else {
	$sql = "INSERT INTO appointment (username, lastname, email, mob, gender, appdate, mess) values('$username', '$lastname','$email', '$mob', '$gender','$appdate','$mess')";
if($con->query($sql)){ 
    header("Location: index.html");
    exit();
}
else{
  echo "Error".$sql."<br>".$conn->error;
}
$con->close();
}
}else {
	echo "ERROR!!!!!";
	die();
}
?>