<?php 
session_start(); 
include("connection.php");
$movie =$_POST["movie"];

$sql = "SELECT `movie`, `rating` FROM `comment` WHERE 1";
$result = mysqli_query($con,$sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    $count = 0;

    while($row = mysqli_fetch_array($result)) {
        if($row['movie'] == $movie){
        $sum += $row['rating'];
        $count++;
        //echo $row['movie'];
        }
    }
    $sql = "SELECT `movie_id` FROM `movie_score` WHERE 1";
    $result = mysqli_query($con,$sql);
    $avgrating = $sum/$count;

    if (mysqli_num_rows($result) > 0) {
        while($row = mysqli_fetch_array($result)){
            $rmovie = $row['movie_id'];
            if( $rmovie == $movie){
                echo $avgrating;
                $sql ="UPDATE `movie_score` SET  
                    `score`='$avgrating',
                    `realscore` = '$avgrating'  
                    WHERE `movie_id` ='$movie' ";
                $result1 = mysqli_query($con,$sql);

            }
            else{
                $sql ="INSERT INTO `movie_score` (`movie_id`, `score`,`realscore`) VALUES ('$movie', '$avgrating','$avgrating')";
                $result2 = mysqli_query($con,$sql);
                echo "test";
            }
        }

        } else {
            echo "error ควยไรว่ะ";
        }
        
} else {
    echo "0 results";
}




?>