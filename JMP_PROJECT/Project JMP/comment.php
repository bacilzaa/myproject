<?php
session_start(); 
include("connection.php");
if(($_POST["username"] != "")||($_POST["comment"] != "")){
$username= $_POST["username"];
$comment = $_POST["comment"];
$movie = $_POST["movie"];
$ratedIndex = $_POST['ratedIndex'];
$ratedIndex++;

$sql ="INSERT INTO `comment` (`username`, `comment`, `movie`,`rating`) VALUES ('$username', '$comment', '$movie','$ratedIndex') ";

$result = mysqli_query($con, $sql) or die ("Error in query: $sql " . mysqli_error());

}
?>