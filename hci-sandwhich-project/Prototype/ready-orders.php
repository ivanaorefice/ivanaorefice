<?php

$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}
else
{
    $id = $_POST["id"];

    $sql = "SELECT * from `current_orders` where `ID` = '$id'";
    $result = mysqli_query($conn, $sql);
    $row=mysqli_fetch_row($result);
    $sql2 = "INSERT INTO `ready_orders`(`ID`, `Bread`, `Main_stuffed`, `Second_stuffed`, `Sauce`, `Contact`) VALUES ('$row[0]', '$row[1]','$row[2]','$row[3]','$row[4]','$row[5]')";
    if($result1 = mysqli_query($conn, $sql2))
    {
        echo "success";
        $sql3 = "DELETE FROM `current_orders` WHERE `ID` = '$id'";
        if($result2 = mysqli_query($conn, $sql3))
        {
            echo "success";

        }
    }else echo "fail";
}

?>
