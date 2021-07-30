<?php

$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}else{
                                    $sql="SELECT count(*) from `current_orders`";
                                    $result=mysqli_query($conn, $sql);
                                    $row= mysqli_fetch_row($result);
                                    echo "$row[0]";
}
                                    ?>