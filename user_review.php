<?php

include 'dbConfig.php';

$con  = mysqli_connect($Hostname,$HostUser,$HostPass, $DatabaseName);

$json = file_get_contents("php://input");

$obj = json_decode($json,true);

$rating = $obj['number'];

$review = $obj['review'];

$sql = "INSERT INTO review(rating,review) VALUES('$rating','$review')";

$check = mysqli_fetch_array(mysqli_query($con, $sql));

if(isset($check)){
    $writeMSG = "Review write Successful";

    $writeJson = json_encode($writeMSG);

    echo $writeJson;

}

mysqli_close($con);



?>
