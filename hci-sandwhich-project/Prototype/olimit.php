<?php

$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}else{
    $sql="SELECT * FROM `orderlimit`";
    $result=mysqli_query($conn, $sql);
    $row= mysqli_fetch_row($result);
    $lim =$row[0];
                                    ?> <form action="limit.php" method="POST">
                                    <div style="margin-top:80px; margin-bottom: 80px; border: 2px solid #e2e3e5"   align="center" >
                                    <h5>Limit orders:</h5>
                                      <select class="form-control" id="limit" name="limit" style="max-width:25%"; onmouseover="wait_stop()" onmouseleave="wait_start()">
                                          <option id="1" <?php if ($row[0] == 0  ) echo 'selected="selected"' ; ?> value="0">0</option>
                                          <option  id="2" <?php if ($row[0] == 5) echo 'selected="selected"' ; ?> value="5">5</option>
                                          <option id="3" <?php if ($row[0] == 10  ) echo 'selected="selected"' ; ?> value="10">10</option>
                                          <option  id="4" <?php if ($row[0] == 15) echo 'selected="selected"' ; ?> value="15">15</option>
                                          <option id="5"  <?php if ($row[0] == 20 ) echo 'selected="selected"' ; ?> value="20">20</option>
                                          <option id="6" <?php if ($row[0] == 25) echo 'selected="selected"' ; ?> value="25">25</option>
                                          <option  id="7" <?php if ($row[0] == 30) echo 'selected="selected"' ; ?> value="30">30</option>
                                          <option  id="8" <?php if ($row[0] == 50) echo 'selected="selected"' ; ?> value="50">50</option>
                                          <option id="9"  <?php if ($row[0] == 100) echo 'selected="selected"' ; ?> value="100">100</option>
                                      </select>

                                        <input type="submit" class="btn btn-dark" value="Change"style="margin-top: 8px"> </form>
                             </div><?php
}
                          ?>

