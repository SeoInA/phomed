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

if(!mysqli_set_charset($con,'utf8')){
    printf("error converting to utf-8");
}

$queryResult = mysqli_query($con,$Query);

//$row = mysqli_fetch_array($queryResult);

$resultArray = array();

while($row = mysqli_fetch_assoc($queryResult)){
    array_push($resultArray,$row['institutionID']);
}



if(isset($resultArray)){

    $resultJson = json_encode($resultArray,JSON_UNESCAPED_UNICODE);
    echo $resultJson;
    

}

else{
        $EmptyResultMSG = "No match found";

        $EmptyResultMSGjson = json_encode($EmptyResultMSG);

        echo $EmptyResultMSGjson;

}

mysqli_close($con);

?>