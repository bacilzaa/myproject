<?php 
session_start(); 
include("connection.php");

$movie = $_GET['movie'];

$sql = "SELECT * FROM `comment` WHERE movie ='".$movie."'";
$result = mysqli_query($con,$sql);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
    $a = $row["comment"];
    $b = urldecode($a);
    array_push($json_array,["username"=>$row["username"],"rating"=>$row["rating"],"movie_id"=>$row["movie"],"comment"=>$b]);
}

echo json_encode($json_array);


?>