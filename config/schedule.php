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

$gender = $obj['gender'];

$day = $obj['day'];

$businessHours = $obj['businessHours'];

$subject = $obj['subject'];

switch($day){
    case '0':
        $day = 'sunday';
        $Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT SUNDAYOPEN.institutionID, SUNDAYOPEN.TIME as open_time, SUNDAYLOSE.TIME as close_time FROM SUNDAYOPEN JOIN SUNDAYCLOSE ON SUNDAYOPEN.TIME <=(SELECT left('$businessHours', 2)) AND SUNDAYCLOSE.TIME>(SELECT substring(right('$businessHours',5),1,2)) AND SUNDAYOPEN.institutionID = SUNDAYCLOSE.institutionID) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
        break;
    case '1':
        $day = 'monday';
        $Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT MONDAYOPEN.institutionID, MONDAYOPEN.TIME as open_time, MONDAYCLOSE.TIME as close_time FROM MONDAYOPEN JOIN MONDAYCLOSE ON MONDAYOPEN.TIME <=(SELECT left('$businessHours', 2)) AND MONDAYCLOSE.TIME>(SELECT substring(right('$businessHours',5),1,2)) AND MONDAYOPEN.institutionID = MONDAYCLOSE.institutionID) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
        break;
    case '2':
        $day = 'tuesday';
        $Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT TUESDAYOPEN.institutionID, TUESDAYOPEN.TIME as open_time, TUESDAYCLOSE.TIME as close_time FROM TUESDAYOPEN JOIN TUESDAYCLOSE ON TUESDAYOPEN.TIME <=(SELECT left('$businessHours', 2)) AND TUESDAYCLOSE.TIME>(SELECT substring(right('$businessHours',5),1,2)) AND TUESDAYOPEN.institutionID = TUESDAYCLOSE.institutionID) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
        break;
    case '3':
        $day = 'wednesday';
        $Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT WEDNESDAYOPEN.institutionID, WEDNESDAYOPEN.TIME as open_time, WEDNESDAYCLOSE.TIME as close_time FROM WEDNESDAYOPEN JOIN WEDNESDAYCLOSE ON WEDNESDAYOPEN.TIME <=(SELECT left('$businessHours', 2)) AND WEDNESDAYCLOSE.TIME>(SELECT substring(right('$businessHours',5),1,2)) AND WEDNESDAYOPEN.institutionID = WEDNESDAYCLOSE.institutionID) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
        break;
    case '4':
        $day = 'thursday';
        $Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT THURSDAYOPEN.institutionID, THURSDAYOPEN.TIME as open_time, THURSDAYCLOSE.TIME as close_time FROM THURSDAYOPEN JOIN THURSDAYCLOSE ON THURSDAYOPEN.TIME <=(SELECT left('$businessHours', 2)) AND THURSDAYCLOSE.TIME>(SELECT substring(right('$businessHours',5),1,2)) AND THURSDAYOPEN.institutionID = THURSDAYCLOSE.institutionID) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
        break;
    case '5':
        $day = 'friday';
        $Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT FRIDAYOPEN.institutionID, FRIDAYOPEN.TIME as open_time, FRIDAYCLOSE.TIME as close_time FROM FRIDAYOPEN JOIN FRIDAYCLOSE ON FRIDAYOPEN.TIME <=(SELECT left('$businessHours', 2)) AND FRIDAYCLOSE.TIME>(SELECT substring(right('$businessHours',5),1,2)) AND FRIDAYOPEN.institutionID = FRIDAYCLOSE.institutionID) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
        break;
    case '6':
        $day = 'saturday';
        $Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT THURSDAYOPEN.institutionID, THURSDAYOPEN.TIME as open_time, THURSDAYCLOSE.TIME as close_time FROM THURSDAYOPEN JOIN THURSDAYCLOSE ON THURSDAYOPEN.TIME <=(SELECT left('$businessHours', 2)) AND THURSDAYCLOSE.TIME>(SELECT substring(right('$businessHours',5),1,2)) AND THURSDAYOPEN.institutionID = THURSDAYCLOSE.institutionID) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
        break;
}



//$day = 'friday';
//$Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT FRIDAYOPEN.institutionID, FRIDAYOPEN.TIME as open_time, FRIDAYCLOSE.TIME as close_time FROM FRIDAYOPEN JOIN FRIDAYCLOSE ON FRIDAYOPEN.TIME <=(SELECT left('$businessHours', 2)) AND FRIDAYCLOSE.TIME>(SELECT substring(right('$businessHours',5),1,2)) AND FRIDAYOPEN.institutionID = FRIDAYCLOSE.institutionID) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
//"SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT * FROM daySchedule LEFT JOIN schedule USING(scheduleID) where $day = $day) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
//"SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT * FROM daySchedule LEFT JOIN schedule USING(scheduleID) where monday = monday) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";
//"SELECT * FROM (SELECT FRIDAYOPEN.institutionID, FRIDAYOPEN.TIME as open_time, FRIDAYCLOSE.TIME as close_time FROM FRIDAYOPEN JOIN FRIDAYCLOSE ON FRIDAYOPEN.TIME <=(SELECT left('10:00-11:00', 2)) AND FRIDAYCLOSE.TIME>(SELECT substring(right('10:00-11:00',5),1,2)) AND FRIDAYOPEN.institutionID = FRIDAYCLOSE.institutionID)";
//$Query = "SELECT * FROM city where city_name = $city_name";
//$Query = "SELECT institutionID, institution_name FROM (SELECT * FROM (SELECT * FROM daySchedule LEFT JOIN schedule USING(scheduleID) where $day = $day) as SQLbusinessHours JOIN (SELECT * FROM hospital_subject where subject = $subject) as SQLsubject USING(institutionID)) as SQLScheSub JOIN (SELECT * FROM (SELECT * FROM city LEFT JOIN institution_name using(institutionID) where city_name = $city_name) as SQLcity JOIN (SELECT * FROM doctor where gender = $gender) as SQLgender USING(institutionID)) as SQLCityGen USING(institutionID)";

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