
<?php

$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}else{


    $sql_check_limit="SELECT * from current_orders";
    $result_check_limit=mysqli_query($conn, $sql_check_limit);
    $total_num_rows=mysqli_num_rows($result_check_limit);

    $sql_get_limit="SELECT * FROM orderlimit ";
    $result_get_limit=mysqli_query($conn, $sql_get_limit);
    $current_limit=mysqli_fetch_row($result_get_limit);
    if($total_num_rows < $current_limit[0])
    {
        header("Location: order.html" );

        ?><?php
        exit;
    } else{
        header("Location: busy.php" );

        ?><?php
        exit;
    }
}

?>

