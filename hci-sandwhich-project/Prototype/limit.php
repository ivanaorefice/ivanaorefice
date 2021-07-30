<?php

$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}else{
    $id = $_POST["limit"];
    $sql = "UPDATE `orderlimit`
    SET `order-limit` = '$id'";
    if($result = mysqli_query($conn, $sql))
    {
        header("Location: manager.php");
        exit;
    }else
    {
        echo "error in setting limit";
    }
}
    ?>