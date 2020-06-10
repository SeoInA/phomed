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

$institutionID = $obj['passwd'];

$rating = $obj['number'];

$review = $obj['review'];

$CheckSQL = "SELECT * FROM review where userID = '$userID' AND institutionID='$institutionID'";

$check = mysqli_fetch_array(mysqli_query($con, $CheckSQL));

if(isset($check)){
    $UserExistMSG = 'User already exist';

    $UserExistJson = json_encode($UserExistMSG);

    echo $UserExistJson;
}

else{

    $SQL_Query = "insert into review(institutionID,userID,rating,review) values
                        ('$institutionID','$userID','$rating','$review')";

    if(mysqli_query($con, $SQL_Query)){

        $ReviewMSG = 'Writing review was Successful.';

        $ReviewMSGjson = json_encode($ReviewMSG);

        echo $ReviewMSGjson;

    }
    else{
        $errorMSG="Error: Try Again.";
        $errorMSGjson=json_encode($errorMSG);
        echo $errorMSGjson;
    }

}

mysqli_close($con);

?>
