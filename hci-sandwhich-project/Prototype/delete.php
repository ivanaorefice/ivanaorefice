<?php

$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}else {

    $id = $_POST["id"];
    $sql3 = "DELETE FROM `ready_orders` WHERE `ID` = '$id'";
    if ($result2 = mysqli_query($conn, $sql3)) {
        echo "success";

    } else echo "fail";
}
?>
