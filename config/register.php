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

$name = $obj['name'];

$gender = $obj['gender'];

$age = $obj['age'];

$user_phone = $obj['user_phone'];

$CheckSQL = "SELECT * FROM user where userID = '$userID'";

$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));

if(isset($check)){
    $UserExistMSG = 'User already exist';

    $UserExistJson = json_encode($UserExistMSG);

    echo $UserExistJson;

}

else{
    $SQL_Query = "insert into user (userID,passwd,name,gender,age,user_phone) values
                        ('$userID','$passwd','$name','$gender','$age','$user_phone')";

    if(mysqli_query($con, $SQL_Query)){

        $RegistrationMSG = 'Registration was Successful.';

        $RegistrationMSGjson = json_encode($RegistrationMSG);

        echo $RegistrationMSGjson;

    }
    else{
        echo 'Try Again';
    }

}

mysqli_close($con);

?>
