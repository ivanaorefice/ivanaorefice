<!-- Bootstrap CSS -->
<link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
  </head>
<?php

$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}else{

 $bread=$_GET["bread"];
$main=$_GET["main"];
$s1=$_GET["s1"];
$s2=$_GET["s2"];
$s3=$_GET["s3"];
$sauce=$_GET["sauce"];
$contact=$_GET["contact"];

$second = $_GET["s1"] . " " . $_GET["s2"]. " " . $_GET["s3"];

print($bread);
$sql_check_limit="SELECT * from current_orders";
$result_check_limit=mysqli_query($conn, $sql_check_limit);
$total_num_rows=mysqli_num_rows($result_check_limit);

$sql_get_limit="SELECT * FROM orderlimit ";
$result_get_limit=mysqli_query($conn, $sql_get_limit);
$current_limit=mysqli_fetch_row($result_get_limit);
if($total_num_rows < $current_limit[0])
{


$sql="SELECT `ID` FROM current_orders ORDER BY `ID` DESC LIMIT 1";
$result=mysqli_query($conn, $sql);
$row= mysqli_fetch_row($result);

    $sql2="SELECT `ID` FROM ready_orders ORDER BY `ID` DESC LIMIT 1";
    $result2=mysqli_query($conn, $sql2);
    $row2= mysqli_fetch_row($result2);
    if ($row[0]>$row2[0])
        $max= $row[0] + 1;
    else
        $max= $row2[0] +1;
$sql = "INSERT INTO `current_orders`(`ID`, `Bread`, `Main_stuffed`, `Second_stuffed`, `Sauce`, `Contact`) 
VALUES ('$max', '$bread','$main','$second','$sauce','$contact')";

if ($result=mysqli_query($conn, $sql))
{
    header("Location: thanks.php" );
}
else echo "failed";

} else{
    header("Location: busy.php" );

   ?><a href="index.html" class="button">Go back to Home page</a><?php
    exit;
  }
}

include 'thanks_2.php';
?>
<br>
<a href="index.html" class="button">Go back to Home page</a>







<script>
 function myfunction(m){
var xhr = new XMLHttpRequest();
var content=m;
alert(content);
xhr.open("GET", "https://platform.clickatell.com/messages/http/send?apiKey=CpO0s60aQHiTFYfYEIOGEg==&to=393914861161&content=Thanks for ordering through the SandWhich. Estimated Time for your order is  " + m + " minutes", true);
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
        console.log('success')
    }
};
xhr.send();
 }
  
</script>

