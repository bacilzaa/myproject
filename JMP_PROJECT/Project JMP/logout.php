<?php
session_start();
session_destroy();
echo "<script>";
echo "localStorage.clear();";
echo "window.location.href='index.html';";
echo "</script>";	
?>