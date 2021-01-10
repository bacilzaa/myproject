<?php 
session_start();
include("connection.php");
        if(isset($_POST['user'])){
                  $username = $_POST['user'];
                  $password = $_POST['pass'];
                  echo "<script>";
                  echo "var movie = localStorage.getItem('movie');";
                  echo "</script>";

                  $sql="SELECT * FROM users 
                  WHERE  username='".$username."' 
                  AND  password='".$password."' ";
                  $result = mysqli_query($con,$sql);
				
                  if(mysqli_num_rows($result)==1){
                      $row = mysqli_fetch_array($result);
                      $_SESSION["username"] = $row["username"];
                      $_SESSION["role"] = $row["role"];
                      $user = $row["username"];

                      if($_SESSION["role"]=="admin"){ 
                        echo "<script>";
                          echo "localStorage.setItem('username', '$user');";
                          echo "localStorage.setItem('role', 'admin');";
                        echo "</script>";
                      }
                      if ($_SESSION["role"]=="user"){ 
                        echo "<script>";
                          echo "localStorage.setItem('username', '$user');";
                          echo "localStorage.setItem('role', 'user');";
                        echo "</script>";
                      }
                      }else{
                        echo "<script>";
                          echo "alert(\" Username หรือ  Password ไม่ถูกต้อง\");"; 
                          echo "window.history.back()";
                        echo "</script>";
                  }
        }else{

             Header("Location: index.php"); //user & password incorrect back to login again
 
        }
?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
  $(document).ready(function(){
    var user = localStorage.getItem('username');
    var role = localStorage.getItem('role');
    var movie = localStorage.getItem('movie');
    if((movie == null)||(movie == " ")){
      window.location.href="browse.html";
    }else{
      window.location.href=`page.php?movie=${movie}`;
    }
    

  })
</script>