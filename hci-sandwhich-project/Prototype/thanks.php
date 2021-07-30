<?php
$conn = mysqli_connect("localhost", "root", "","sandwhich");
if (!$conn)
{die("Connection failed: " . mysqli_connect_error());
}else{

    $sql="SELECT `ID` FROM current_orders ORDER BY `ID` DESC LIMIT 1";
    $result=mysqli_query($conn, $sql);
    $row= mysqli_fetch_row($result);
    $max= $row[0];

    $sql2="SELECT COUNT(ID) FROM current_orders";
    $result2=mysqli_query($conn, $sql2);
    $row2= mysqli_fetch_row($result2);
    $row3=$row2[0]+5;
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>SandWHICH? - Online Orders</title>
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
</head>
<body onload="myfunction(<?php echo $row3, $max; ?> )>
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
                <li class="nav-item"><a href="manager.php" class="nav-link">Manager</a></li>
                <li class="nav-item cta"><a href="order.php" class="nav-link">Make an Order</a></li>
            </ul>
        </div>
    </div>
</nav>
<!-- END nav -->

<section class="hero-wrap hero-wrap-2" style="background-image: url('images/ab1.jpg');" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-center">
            <div class="col-md-9 ftco-animate text-center mb-4">
                <h1 class="mb-2 bread">Payment</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Payment<i class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section img" style="background-image: url(images/bg_3.jpg)" data-stellar-background-ratio="0.5">

    <div class="container" style="align-content: center">
        <div class="row d-flex">
            <div class="col-md-12 ftco-animate makereservation p-4 px-md-5 pb-md-5">
                <div class="heading-section ftco-animate mb-5 text-center">
                    <span class="subheading">Thanks</span>

                </div>

                <div class="row">
                    <div class="col-md-12 mt-3">
                        <div class="form-group text-center" align="center">
                            <table align="center">
                                <tr>
                                    <td>


                                        <h3>WE ARE PREPARING YOUR SANDWICH!</h3>
                                        <div align="center" style="border-style: groove; border-radius: 5px; border-spacing: 20px; margin: 20px width: 100%; " >
                                        <H4>Your Order ID is: <b><?php echo $max; ?></b> </H4>
                                        <h4>The estimated time for your order is <b><?php echo $row3; ?></b> minutes</h4><br>

                                        <H5>You will receive a notification when your sandwich is ready</H5>
                                        </div>
                                        <!-- <img " src="inst4.jpg" height="200px" width="300px">-->
                                    </td></tr>


                            </table>
                        </div>
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
                    <h2 class="ftco-heading-2">SandWHICH?</h2>
                    <p>To have a more complete experience, we invite you to visit our social pages</p>
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
                        <li class="d-flex"><span>Monday</span><span>11:00 - 19:30</span></li>
                        <li class="d-flex"><span>Tuesday</span><span>11:00 - 19:30</span></li>
                        <li class="d-flex"><span>Wednesday</span><span>11:00 - 19:30</span></li>
                        <li class="d-flex"><span>Thursday</span><span>11:00 - 19:30</span></li>
                        <li class="d-flex"><span>Friday</span><span>11:00 - 19:30</span></li>
                        <li class="d-flex"><span>Saturday</span><span>11:00 - 19:30</span></li>
                        <li class="d-flex"><span>Sunday</span><span>Closed</span></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-4">
                    <h2 class="ftco-heading-2">Instagram</h2>
                    <div class="thumb d-sm-flex">
                        <a href="#" class="thumb-menu img" style="background-image: url(images/inst1.jpg);">
                        </a>
                        <a href="#" class="thumb-menu img" style="background-image: url(images/inst2.jpg);">
                        </a>
                        <a href="#" class="thumb-menu img" style="background-image: url(images/inst3.jpg);">
                        </a>
                    </div>
                    <div class="thumb d-flex">
                        <a href="#" class="thumb-menu img" style="background-image: url(images/inst4.jpg);">
                        </a>
                        <a href="#" class="thumb-menu img" style="background-image: url(images/inst5.jpg);">
                        </a>
                        <a href="#" class="thumb-menu img" style="background-image: url(images/inst6.jpg);">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="ftco-footer-widget mb-4">
                    <h2 class="ftco-heading-2">Newsletter</h2>
                    <p>Let's Keep in touch</p>
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



<!-- loader -->
<div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


<script>


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
<script>
 function myfunction(m, id){
var xhr = new XMLHttpRequest();
var content=m;
//xhr.open("GET", "https://platform.clickatell.com/messages/http/send?apiKey=CpO0s60aQHiTFYfYEIOGEg==&to=393914861161&content=Thanks for ordering through the SandWhich. Estimated Time for your order number "+id+" is  " + m + " minutes", true);
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
        console.log('success')
    }
};
xhr.send();
 }
  
</script>
</body>
</html>
