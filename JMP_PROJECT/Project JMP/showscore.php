<?php 
session_start(); 
include("connection.php");

$movie = $_GET['movie'];

$sql = "SELECT * FROM `movie_score` WHERE movie_id ='".$movie."'";// movie_id ='".$movie."'
$result = mysqli_query($con,$sql);
$json_array = array();
while($row = mysqli_fetch_assoc($result)){
    $json_array[] = $row;
}

echo json_encode($json_array);


?>