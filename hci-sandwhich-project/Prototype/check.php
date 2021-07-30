<style>

    #countdown {
        position: relative;
        margin: auto;
        margin-top: 100px;
        height: 40px;
        width: 40px;
        text-align: center;
    }

    #countdown-number {
        color: white;
        display: inline-block;
        line-height: 40px;
    }

    svg {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        transform: rotateY(-180deg) rotateZ(-90deg);
    }

    svg circle {
        stroke-dasharray: 113px;
        stroke-dashoffset: 0px;
        stroke-linecap: round;
        stroke-width: 2px;
        stroke: white;
        fill: none;
        animation: countdown 10s linear infinite forwards;
    }

    @keyframes countdown {
        from {
            stroke-dashoffset: 0px;
        }
        to {
            stroke-dashoffset: 113px;
        }
    }

</style><?php
$empty_current = 'New orders will appear here';
$empty_ready = 'Ready orders will appear here';
$index =0;
$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn) 
{
    die("Connection failed: " . mysqli_connect_error());
}else{
    $sql = "SELECT * from current_orders";
    $result = mysqli_query($conn, $sql);
    ?>



 <div style="height:400px;width:700px;border:1px;overflow:auto;">

    <table class="table">


        <thead class="thead-dark">
         <h3>Current Orders</h3>
          <tr>
                <th  class="text-center" scope="col" >Order ID</th>
                <th class="text-center" scope="col">Bread</th>
                <th class="text-center" scope="col">Main</th>
                <th class="text-center" scope="col">Secondary</th>
                <th class="text-center" scope="col">Sauce</th>
                <th class="text-center" scope="col">Ready</th>
        </tr>
            </thead>

            <tbody id="tst1">

                <?php
                if(!mysqli_fetch_row($result)){ ?>   </table> <?php echo $empty_current; }
                mysqli_data_seek( $result, 0 );
                while($row=mysqli_fetch_row($result)) {?>
                  <tr>
                    <td  align="center"><?php echo $row[0]; ?></td>
                    <td align="center"><?php echo $row[1]; ?></td>
                    <td  align="center"><?php echo $row[2]; ?></td>
                    <td  align="center"><?php echo $row[3]; ?></td>
                    <td  align="center"><?php echo $row[4]; ?></td>
                    <td> <button id="<?php echo $index; $index=$index+1; ?>_a" type="button" class="btn btn-success" value="<?php echo $row[0]; ?>" onclick="click_check(this.value, id)">Ready</button></td>


                  </tr>
                  <?php } ?>

                </tbody>
        </td>


  </table>
 </div>
    <br><br><br>
    <div style="height:400px;width:700px;border:1px;overflow:auto;">
          <table class="table" id="myTable">

            <tbody class="thead-dark">

            <h3>Ready Orders</h3>

            <tr>
                <th class="text-center" scope="col">Order ID</th>
                <th class="text-center" scope="col">Bread</th>
                <th class="text-center" scope="col">Main</th>
                <th class="text-center" scope="col">Secondary</th>
                <th class="text-center"  scope="col">Sauce</th>
                <th class="text-center" scope="col">Delivery</th>
            </tr>

<?php $index = 0;
              $sql = "SELECT * from ready_orders";
              $result = mysqli_query($conn, $sql);

              if(!mysqli_fetch_row($result)){ ?>   </table> <?php echo $empty_ready;}
              mysqli_data_seek( $result, 0 );
              while($row=mysqli_fetch_row($result)) {?>
              <tr>

                  <td><?php echo $row[0]; ?></td>
                  <td><?php echo $row[1]; ?></td>
                  <td><?php echo $row[2]; ?></td>
                  <td><?php echo $row[3]; ?></td>
                  <td><?php echo $row[4]; ?></td>

                  <td> <button type="button" id="<?php echo $index; $index=$index+1; ?>_b" class="btn btn-danger" value="<?php echo $row[0]; ?>" onclick="click_check(this.value, id)">Delivered</button></td>


              </tr>

              <?php } ?>

            </tbody>

</table>

    </div>

      <?php
}



function ready_voice(){
return "aaaaaa";
}




?>
<script>
var id_time = null;
var id_time_2 = null;

function count(id_buttun) {
var countdownNumberEl = document.getElementById(id_buttun);
    var countdown = 4;

    countdownNumberEl.textContent = 'Undo?  '+countdown+' ';

    setInterval(function() {
        countdown = --countdown <= 0 ? 4: countdown;
        countdownNumberEl.textContent =  'Undo?  '+countdown+' ';
    }, 1000);

}
    function wait(id, id_btn) {
        wait_stop();
        var but = document.getElementById(id_btn);
        but.classList.remove("btn-success");
        but.classList.add("btn-waiting");
        but.innerHTML = "Undo?";
        count(id_btn);
        id_time_2 = setTimeout(transfer_, 3000, id);

    }

    function wait_2(id, id_btn) {
        wait_stop();
        var but = document.getElementById(id_btn);
        but.classList.remove("btn-danger");
        but.classList.add("btn-waiting");
        but.innerHTML = "Undo?";
        count(id_btn);
        id_time = setTimeout(deleting, 3000, id);

    }
    function click_check(id, id_btn )
    {   wait_stop();
        var but = document.getElementById(id_btn);
        if(but.classList.contains("btn-waiting")){
            clearInterval(id_time);
            clearInterval(id_time_2);
            wait_start();
        }
        else {
                if (but.classList.contains("btn-danger")) {
                    wait_2(id, id_btn);
                }


                if (but.classList.contains("btn-success")) {
                    wait(id, id_btn);
                }
        }

    }

</script>
