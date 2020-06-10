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

$businessHours = $obj['businessHours'];

$gender = $obj['gender'];

$day = $obj['day'];

switch($day){
    case '0':
        $day = 'sunday';
        break;
    case '1':
        $day = 'monday';
        break;
    case '2':
        $day = 'tuesday';
        break;
    case '3':
        $day = 'wednesday';
        break;
    case '4':
        $day = 'thursday';
        break;
    case '5':
        $day = 'friday';
        break;
    case '6':
        $day = 'saturday';
        break;
}

$subject = $obj['subject'];

//$Query = "SELECT * FROM city where city_name = $city_name";
$Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT * FROM daySchedule LEFT JOIN schedule USING(scheduleID) where $day = $day) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
//"SELECT institutionID, institution_name, gender FROM (SELECT * FROM (SELECT * FROM daySchedule LEFT JOIN schedule USING(scheduleID) where $day = $day) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcityInstitution LEFT JOIN phone using(institutionID)) as SQLcityInstPhone JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
if(!mysqli_set_charset($con,'utf8')){
    printf("error converting to utf-8");
}

$queryResult = mysqli_query($con,$Query);

//$row = mysqli_fetch_array($queryResult);

$resultArray = array();

while($row = mysqli_fetch_assoc($queryResult)){
    array_push($resultArray,$row);
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
