<?php
// Create connection
$conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
if (!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * from current";
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>SandWHICH? - New way to make a nice lunch</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.css">
    
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">

    <link rel="stylesheet" href="css/aos.css">

    <link rel="stylesheet" href="css/ionicons.min.css">

    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="css/jquery.timepicker.css">

    
    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="css/icomoon.css">
    <link rel="stylesheet" href="css/style.css">
  <!--<link rel="stylesheet" href="css/style_chat.css">-->

<style>
    @import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,700);
    @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);

    .chat {
        list-style: none;
        background: none;
        margin: 0;
        padding: 0 0 50px 0;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .chat li {
        padding: 0.5rem;
        overflow: hidden;
        display: flex;
    }

    .self .msg {
        border-top-left-radius: 0;
    }

    .self:before {
        content: "";
        position: relative;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        border: 5px solid rgba(0, 0, 0, .04);
        border-left-color: transparent;
        border-bottom-color: transparent;
    }

    .other {
        justify-content: flex-end;
        align-items: flex-end;
    }

    .other .msg {
        background: #208bf5;
        border-bottom-right-radius: 0;
    }

    .other .msg p {
        color: #fff;
    }

    .other:after {
        content: "";
        position: relative;
        display: inline-block;
        right: 0;
        width: 0;
        height: 0;
        border: 5px solid #208bf5;
        border-right-color: transparent;
        border-top-color: transparent;
    }

    .msg {
        background: rgba(0, 0, 0, .03);
        max-width: 70%;
        padding: 10px;
        border-radius: 20px;
        word-wrap: break-word;
    }

    .msg p {
        font-size: 0.9rem;
        margin: 0 0 0.2rem 0;
        color: #777;
    }

    .json-response {
        position: fixed;
        margin-left: 20px;
    }

    input.textarea {
        font-size: 0.9rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 90%;
        height: 50px;
        z-index: 99;
        padding-left: 55px;
        padding-right: 55px;
    }

    #rec {
        position: fixed;
        display: inline-block;
        bottom: 8px;
        right: 25px;
        width: 35px;
        height: 40px;
        z-index: 100;
        cursor: pointer;
        background-color: lightgray;
        border: none;
        border-radius: 10px;
        outline: none;
    }



</style>
  </head>

<body>
<div class="py-1 bg-black top">
    <div class="container">
        <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div class="col-lg-12 d-block">
                <div class="row d-flex">
                    <div class="col-md pr-4 d-flex topper align-items-center">
                        <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                        <span class="text">+ 1-978-123-4567</span>
                    </div>
                    <div class="col-md pr-4 d-flex topper align-items-center">
                        <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                        <span class="text">contact@sandwhich.com</span>
                    </div>
                    <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right justify-content-end">
                        <p class="mb-0 register-link"><span>Open hours:</span> <span>Monday - Sunday</span> <span>11:00AM - 7:30PM</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="index.html">SandWHICH?</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	        	<li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
	        	<li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
	        	<li class="nav-item"><a href="menu.html" class="nav-link">Menu</a></li>
                <li class="nav-item active"><a href="manager.php" class="nav-link">Manager</a></li>
                <li class="nav-item cta"><a href="order.php" class="nav-link">Make an Order</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
<!-- END nav -->

<section class="hero-wrap hero-wrap-2" style="background-image: url('images/insta-1.jpg');" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-center">
            <div class="col-md-9 ftco-animate text-center mb-4">
                <h1 class="mb-2 bread">Manage Your Orders</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Manager <i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>
<!-- style="background-image: url(images/bg_4.jpg)" -->
<section class="ftco-section img" data-stellar-background-ratio="0.5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 ftco-animate">
                <div class="about-author d-flex p-4 bg-light">
                    <div class="container">
                        <table><tr><h5 align="center" style="margin-top: 32px">Manage your orders simply reading the new orders to prepare and the ready orders waiting to be deliver</h5></tr>
                            <tr><td width="10%" height="50px"></td> <!-- empty colum-->
                                <td width="40%" style="vertical-align: top; padding-top: 50px">
                                    <!--------- Retrieving the tables (Current Orders & ready Orders ) from check.php ----------->
                                        <div id = "checking" ><p>Loading....</p>
                                            <!--- the tables will arrive here --->
                                        </div>
                                  </td>
                                <td width="25%" style="padding: 35px"> <!-- sx side part-->
                                    <div id="chat" style="margin-top:50px; height:500px;width:300px;border:2px solid #e2e3e5;overflow: hidden; sc">
                                        <script>
                                            window.setInterval(function() {
                                                var elem = document.getElementById('chat');
                                                elem.scrollTop = elem.scrollHeight;
                                            }, 500);
                                        </script>
                                     <div class="container_chat" >
                                     <ol class="chat"></ol>
                                       </div>
                                       </div>
                                        <div align="center" >
                                            <input style="display: none"  aria-label="Type here the text to process" id="userquery" class="textare_2" type="text" placeholder="Type here!"/>
                                            <button id="rec_2" class="btn btn-dark" class="btn" style="height:70px;width:70px; border-radius: 50%; margin-top: 10px"><i class="fa fa-microphone fa-lg" aria-hidden="true"> </i> </button>

                                                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                                                <script src="voice/static/converse_3.js"></script>
                                        </div>
                               <div style="margin-top:100px;" align="center">
                                  <h5>Orders to prepare:</h5>
                                    <h3>
                                    <!------------------- Getting the current orders number----------------------------->
                                    <div id = "checking-queue" style="background-color:#e2e3e5">
                                            <!--- the # of queues will arrive here --->
                                        </div>
                                    </h3>
                                   <!------------------- Getting the current limit of the orders ----------------------------->
                                   <?php
                                   $sql="SELECT * FROM `orderlimit`";
                                   $result=mysqli_query($conn, $sql);
                                   $row= mysqli_fetch_row($result);
                                   $lim =$row[0];
                                   ?>
                                   <!------------------- Setting and displaying the current limit of the orders --------------->

                               </div>

                    <div id="olimit">
                    </div>
                </td>
            </tr>
        </table>
    </div>
</div>
</div>
</div>
</div>
</section>
<footer class="ftco-footer ftco-bg-dark ftco-section">
<div class="container">
<div class="row mb-5">
<div class="col-md-6 col-lg-3">
<div class="ftco-footer-widget mb-4">
    <h2 class="ftco-heading-2">Sandwhich?</h2>
    <p>We make sandwich.</p>
    <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
        <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
        <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
        <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
    </ul>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="ftco-footer-widget mb-4">
    <h2 class="ftco-heading-2">Open Hours</h2>
    <ul class="list-unstyled open-hours">
        <li class="d-flex"><span>Monday</span><span>9:00 - 24:00</span></li>
        <li class="d-flex"><span>Tuesday</span><span>9:00 - 24:00</span></li>
        <li class="d-flex"><span>Wednesday</span><span>9:00 - 24:00</span></li>
        <li class="d-flex"><span>Thursday</span><span>9:00 - 24:00</span></li>
        <li class="d-flex"><span>Friday</span><span>9:00 - 02:00</span></li>
        <li class="d-flex"><span>Saturday</span><span>9:00 - 02:00</span></li>
        <li class="d-flex"><span>Sunday</span><span> 9:00 - 02:00</span></li>
    </ul>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="ftco-footer-widget mb-4">
    <h2 class="ftco-heading-2">Instagram</h2>
    <div class="thumb d-sm-flex">
        <a href="#" class="thumb-menu img" style="background-image: url(images/insta-1.jpg);">
        </a>
        <a href="#" class="thumb-menu img" style="background-image: url(images/insta-2.jpg);">
        </a>
        <a href="#" class="thumb-menu img" style="background-image: url(images/insta-3.jpg);">
        </a>
    </div>
    <div class="thumb d-flex">
        <a href="#" class="thumb-menu img" style="background-image: url(images/insta-4.jpg);">
        </a>
        <a href="#" class="thumb-menu img" style="background-image: url(images/insta-5.jpg);">
        </a>
        <a href="#" class="thumb-menu img" style="background-image: url(images/insta-6.jpg);">
        </a>
    </div>
</div>
</div>
<div class="col-md-6 col-lg-3">
<div class="ftco-footer-widget mb-4">
    <h2 class="ftco-heading-2">Newsletter</h2>
    <p>Far far away, behind the word mountains, far from the countries.</p>
    <form action="#" class="subscribe-form">
        <div class="form-group">
            <input type="text" class="form-control mb-2 text-center" placeholder="Enter email address">
            <input type="submit" value="Subscribe" class="form-control submit px-3">
        </div>
    </form>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12 text-center">

<p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
            </div>
        </div>
    </div>
</footer>


</html>
</body>
<!-- loader -->
<div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>
<script>
    $(".chat").append('<li class="' + "other" + '"><div class="msg"><p>' + "Hi! I'm your voice assistant, click on microfone icon above to activate me!" + '</p></div></li>');
    $(".chat").append('<li class="' + "other" + '"><div class="msg"><p>' + "Say 'Help' to get some hints." + '</p></div></li>');

</script>

<script src="js/jquery.min.js"></script>
<script src="js/jquery-migrate-3.0.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/jquery.waypoints.min.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/aos.js"></script>
<script src="js/jquery.animateNumber.min.js"></script>
<script src="js/bootstrap-datepicker.js"></script>
<script src="js/jquery.timepicker.min.js"></script>
<script src="js/scrollax.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
<script src="js/google-map.js"></script>
<script src="js/main.js"></script>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
<script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
<script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
></script>
<script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
></script>

<script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>

<script type="text/javascript">
    <!--
    var stile = "top=10, left=10, width=250, height=200, status=no, menubar=no, toolbar=no scrollbars=no";
    function Popup(apri)
    {
        window.open(apri, "", stile);
    }
    //-->
</script>





<script>
var intervalId = null;


var interval = 1000;
function wait_stop() {

    clearInterval(intervalId);
}
function wait_start() {
    intervalId = setInterval( function () {
        $('#checking').load('check.php');
        $('#checking-queue').load('queue.php');
        $('#olimit').load('olimit.php');
    }, interval); // loads every 1 seconds
}



function transfer_(id)
    {

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "ready-orders.php");
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var str="id="+ id;
        xmlhttp.send(str);
        //alert(str);
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var ret=this.responseText;

                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://platform.clickatell.com/messages/http/send?apiKey=CpO0s60aQHiTFYfYEIOGEg==&to=393914861161&content=Your Order is Ready. Please collect it from the shop. Your Order id is  "+ id, true);
                xhr.onreadystatechange = function(){
                    if (xhr.readyState == 4 && xhr.status == 200){
                        console.log('success')
                    }
                };
                xhr.send();


            }
        };
        wait_start();
    }

function deleting(id)
    {   var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "delete.php");
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var str="id="+ id;
        xmlhttp.send(str);
        //alert(str);
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var ret=this.responseText;
                //document.getElementById("txtHint").innerHTML = ret;
                //alert(ret);
                //location.reload();

            }
        };
        wait_start();
    }




    $(document).ready( function() {

        intervalId = setInterval( function () {
            $('#checking').load('check.php');
            $('#checking-queue').load('queue.php');
            $('#olimit').load('olimit.php');
        }, interval); // loads every 1 seconds
    });





</script>







</script>