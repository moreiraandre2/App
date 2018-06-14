<?php  

$con = mysqli_connect("localhost","id4162093_admin","Kickflip","id4162093_teste");

// Check connection
if (mysqli_connect_errno())
  {
  	echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

 $json = file_get_contents('php://input');

 $object = json_decode($json, true);

 $name = $object['name'];

 $email = $object['email'];

 $tel = $object['tel'];

 $rua = $object['rua'];

 $bairro = $object['bairro'];

 $num = $object['num'];

 $cidade = $object['cidade'];

 $estado = $object['estado'];

 $queryChkEmail = "SELECT * FROM ficha WHERE email='$email'";

 $checkEmail = mysqli_fetch_array(mysqli_query($con,$queryChkEmail));

 if(isset($checkEmail)){
 	$emailExistMsg = 'Email já cadastrado';
 	$emailExistJson = json_encode($emailExistMsg);
 	echo $emailExistJson;
 }else{
 	$Sql_Query = "insert ficha (name,email,tel,rua,bairro,num,cidade,estado) values ('$name','$email','$tel','$rua','$bairro','$num','$cidade','$estado')";
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