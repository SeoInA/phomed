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

$userID = $obj['userID'];

$passwd = $obj['passwd'];

$CheckSQL = "SELECT * FROM user where userID = '$userID' and passwd = '$passwd'";

$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));

if(isset($check)){
    $UserExistMSG = "Login Successful";

    $UserExistJson = json_encode($UserExistMSG);

    echo $UserExistJson;

}

else{
        $UserNotExistMSG = "User does not match";

        $UserNotExistMSGjson = json_encode($UserNotExistMSG);

        echo $UserNotExistMSGjson;

}

mysqli_close($con);

?>