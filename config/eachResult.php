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

$institutionID= $obj['institutionID'];

$day = $obj['day'];



//$Query = "SELECT * FROM city where city_name = $city_name";
$Query = "SELECT * from (SELECT * FROM (SELECT * FROM daySchedule LEFT JOIN schedule USING(scheduleID) where monday=monday and institutionID = $institutionID) as SQLbusinessHours right JOIN (select * from (select * from phone right join (select * from city left join institution_name using(institutionID) where institutionID=$institutionID) as SQLcityInst using(institutionID)) as SQLcityInstPhone left join hospital_subject using(institutionID)) as SQLcityInstSub using(institutionID)) as SQLwithoutDoc left join (select * from doctor join doctorspecialty using(doctorID) where institutionID=$institutionID) as SQLdoc using(institutionID)";
//"SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT * FROM daySchedule LEFT JOIN schedule USING(scheduleID) where $day = $day) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
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