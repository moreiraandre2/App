<?php  

$con = mysqli_connect("localhost","id4162093_admin","Kickflip","id4162093_teste");

// Check connection
if (mysqli_connect_errno())
  {
  	echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

 $json = file_get_contents('php://input');

 $object = json_decode($json, true);

 $id = $object['id'];

 $sql = "SELECT * FROM ItensFicha WHERE idFicha='$id'";

 $result = $con->query($sql);

 if ($result->num_rows > 0)
 {
 	while($row[] = $result->fetch_assoc()){
 		$item = $row;
 		$json = json_encode($item);
 	}
 }else{
 	$noResult = 'Nada Encontrado';
 	$json = json_encode($noResult);
 	echo $json;
 }
echo $json;
$con->close();
?>