<?php 
session_start();
if(!isset($_SESSION['username'])){
    echo "<script>";
    echo "alert(\"You are not Admin\");"; 
    echo "window.location.href='index.html';";
    echo "</script>";
}
if(isset($_SESSION["role"])){
    if($_SESSION["role"]== "user"){
        echo "test";
        echo "<script>";
        echo "alert(\"You are not Admin\");"; 
        echo "window.location.href='index.html';";
        echo "</script>";
    }
}


?>
<!DOCTYPE html>
<html>
  <head>
      <title>ADMIN PAGE|PHP</title>
      <link rel="stylesheet" type="text/css" href="admin.css">
      <style>
          .back{ background-color: white;}
      </style>

    </head>
<body class="bod">
  <h1>ADMIN PAGE</h1>

<?php
include("connection.php");
// Check connection
$sql = "SELECT * FROM users WHERE role = 'user'";
$result = mysqli_query($con,$sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
        echo "<table class='cen'>";
        echo "<tr>"."<td>Username</td>"."<td>E-mail</td>"."<td>Option</td>"."</tr>";
    while($row = mysqli_fetch_array($result)){
        echo "<tr><td>" . $row['username']."</td><td>".$row['email']."</td>";
        echo "<td><a href='delete.php?ID=$row[0]'>delete</a></td></tr>";
    }
        echo "</table>";
} else {
    echo "0 results";
}

?>
<p style="text-align:center"><button ><a href="browse.html" style="color:black; text-decoration: none;" class="cen">Browse<span></span>
									<span></span>
									<span></span>
									<span></span></a></button></p>
</body>
</html>
<!--
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
    $(document).ready(function(){
        console.log("test")
        var role = localStorage.getItem('role');
        console.log(role)
        if(role == null){
            alert("You are not Admin")
            window.history.back();
        }else{
            if(role == "user"){
                alert("You are not Admin")
                window.history.back();
            }else{
                $('body').removeClass('back');
                $('body').addClass('bod');
            }
        }
    })

</script>-->