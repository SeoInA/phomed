<?php

//include 'DBConfig.php';
//include 'http://localhost:8000/user_registration.php';
$Hostname = "database-1.cnmbise2kblk.ap-northeast-2.rds.amazonaws.com";

$DatabaseName =  "hospital";

$HostUser = "seongmin";

$HostPass = "handong1";

$con  = mysqli_connect($Hostname,$HostUser,$HostPass, $DatabaseName);

$json = file_get_contents("php://input");

$obj = json_decode($json,true);

$city_name = $obj['city_name'];


$Query = "SELECT * FROM city where city_name = '$city_name'";

$check = mysqli_fetch_array(mysqli_query($con, $Query));


if(isset($check)){

    echo $check;

}

else{
        $EmptyResultMSG = "No match found";

        $EmptyResultMSGjson = json_encode($EmptyResultMSG);

        echo $EmptyResultMSGjson;

}

mysqli_close($con);

?>