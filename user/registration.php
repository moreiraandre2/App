<?php  

$con = mysqli_connect("localhost","MeuUsuario","MinhaSenha","MeuBD");

// Check connection
if (mysqli_connect_errno())
  {
  	echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

 $json = file_get_contents('php://input');

 $object = json_decode($json, true);

 $name = $object['name'];

 $email = $object['email'];

 $pwd = md5($object['password']);

 $queryChkEmail = "SELECT * FROM users WHERE email='$email'";

 $checkEmail = mysqli_fetch_array(mysqli_query($con,$queryChkEmail));

 if(isset($checkEmail)){
 	$emailExistMsg = 'Email já cadastrado';
 	$emailExistJson = json_encode($emailExistMsg);
 	echo $emailExistJson;
 }else{
 	$Sql_Query = "insert users (name,email,password) values ('$name','$email','$pwd')";
 	if(mysqli_query($con, $Sql_Query)){
 		$msg = 'Cadastro efetuado com sucesso!';
 		$json = json_encode($msg);
 		echo $json;
 	}else{
 		$ErroMsg = 'Não possível cadastrar, por favor tente novamente';
 		$json = json_encode($ErroMsg);
 		echo $json;
 	}
 }
 mysqli_close($con);
?>
