<?php  

$con = mysqli_connect("localhost","MeuUsuario","MeuSenha","MeuBD");

// Check connection
if (mysqli_connect_errno())
  {
  	echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

 $json = file_get_contents('php://input');

 $object = json_decode($json, true);

 $nameItem = $object['nameItem'];

 $idFicha = $object['idFicha'];

 $qtd = $object['qtd'];

 $preco = $object['preco'];
 
 $Sql_Query = "insert into ItensFicha (idFicha,nameItem,qtd,preco) values ('$idFicha','$nameItem', '$qtd','$preco')";
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
