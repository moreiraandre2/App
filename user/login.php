<?php  

$con = mysqli_connect("localhost","MeuUser","MinhaSenha","MeuBD");

// Check connection
if (mysqli_connect_errno())
  {
  	echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

 $json = file_get_contents('php://input');

 $object = json_decode($json, true);


 $email = $object['email'];

 $pwd = md5($object['password']);

 $queryLogin = "SELECT * FROM users WHERE email='$email' AND password='$pwd'";

 $check = mysqli_fetch_array(mysqli_query($con,$queryLogin));

 if(isset($check)){
 	$LoginMsg = 'Acesso Liberado';
 	$LoginJson = json_encode($LoginMsg);
 	echo $LoginJson;
 }else{
 	$loginFailedMsg = 'Usuário ou Senha Inválidos Por favor tente novamente';
 	$LoginJson = json_encode($LoginFailedMsg);
 	echo $LoginJson;
 }
 mysqli_close($con);
?>
