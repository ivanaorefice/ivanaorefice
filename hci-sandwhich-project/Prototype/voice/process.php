<?php
require __DIR__.'/vendor/autoload.php'; // match automatico tra il servizio richiesto e il giusto elemneto in Vendor
use Google\Cloud\Dialogflow\V2\SessionsClient;
use Google\Cloud\Dialogflow\V2\QueryInput;
use Google\Cloud\Dialogflow\V2\TextInput;


class  Preparing_request{
    public $sort;
    public $ID;
    public $order;
    public $number;
    public $status;
}
class Status_request {
    public $order;
    public $sort;
    public $number;
    public $status;

}
class Query {
    public $sort;
    public $ID;
    public $stuffing;
    public $order;

}



function order_number($num, $sort, $id)
{$conn = mysqli_connect("localhost", "root", "","sandwhich");

    if($num != "") { // if user select a specific ID
        $sql = "SELECT COUNT(*) FROM current_orders WHERE ID = " . $num;
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        if ((int)$row['COUNT(*)'] == 0) {
            printf("Order ID not found.");
        } else {
            return $num;
        }
    }
    else {// if user tell "current order" or similar
        //find current order number
        $sql = "SELECT ID from current_orders ORDER BY ID ASC ";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        //echo "You have {$row['Bread']} left!";
        $id_max = (int)$row['ID'];

        if ($sort == "Current") {
            return $id_max;
        } elseif ($sort == "Next") {
            return $id_max + 1;
        } elseif ($id != "") {
            return $id_max;
        } else {
            return null;
        }
    }
}

function cancel_action()
{
    $myFile = "save_data.txt";
    $lines = file($myFile);//file in to an array
    $action = $lines[0];
    $id = $lines[1];
    $bread = $lines[2];
    $main = $lines[3];
    $second = $lines[4];
    $sauce = $lines[5];
    $contact = "text@me.com";

    if (strpos($action, 'r') !== false) {

        $conn = mysqli_connect("localhost", "root", "", "sandwhich");

// Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        } else {
            $sql2 = "INSERT INTO `current_orders`(`ID`, `Bread`, `Main_stuffed`, `Second_stuffed`, `Sauce`, `Contact`) VALUES ('$id', '$bread','$main','$second','$sauce','$contact')";
            if ($result1 = mysqli_query($conn, $sql2)) {

                $sql3 = "DELETE FROM `ready_orders` WHERE `ID` = '$id'";
                if ($result2 = mysqli_query($conn, $sql3)) {
                    echo "Ok, action canceled.";

                }
            } else echo "fail";
        }


    }

    if (strpos($action, 'd') !== false) {

        $conn = mysqli_connect("localhost", "root", "", "sandwhich");

// Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        } else {
            $sql2 = "INSERT INTO `ready_orders`(`ID`, `Bread`, `Main_stuffed`, `Second_stuffed`, `Sauce`, `Contact`)  VALUES ('$id', '$bread','$main','$second','$sauce','$contact')";
            if ($result2 = mysqli_query($conn, $sql2)) {
                echo "Ok, delivery canceled.";

            } else echo "fail";

        }
    }
}

function ready_query($ID)
{


    $conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
    if (!$conn)
    {
        die("Connection failed: " . mysqli_connect_error());
    }
    else
    {
        $sql = "SELECT * from `current_orders` where `ID` = '$ID'";
        $result = mysqli_query($conn, $sql);
        $row=mysqli_fetch_row($result);
        $sql2 = "INSERT INTO `ready_orders`(`ID`, `Bread`, `Main_stuffed`, `Second_stuffed`, `Sauce`, `Contact`) VALUES ('$row[0]', '$row[1]','$row[2]','$row[3]','$row[4]','$row[5]')";

        $myfile = fopen("save_data.txt", "w") or die("Unable to open file!");
        $txt = "r\n".$row[0]."\n".$row[1]."\n".$row[2]."\n".$row[3]."\n".$row[4]."\n".$row[5]."\n";
        fwrite($myfile, $txt);
        fclose($myfile);


        if($result1 = mysqli_query($conn, $sql2))
        {

            $sql3 = "DELETE FROM `current_orders` WHERE `ID` = '$ID'";
            if($result2 = mysqli_query($conn, $sql3))
            {
               echo "Ok, sandwich is ready, notification sent.";

            }
        }else echo "fail";
    }

}


function delivered_query($ID)
{
    $conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
    if (!$conn)
    {
        die("Connection failed: " . mysqli_connect_error());
    }else {

        $sql = "SELECT * from `current_orders` where `ID` = '$ID'";
        $result = mysqli_query($conn, $sql);
        $row=mysqli_fetch_row($result);

        $myfile = fopen("save_data.txt", "w") or die("Unable to open file!");
        $txt = "d\n".$row[0]."\n".$row[1]."\n".$row[2]."\n".$row[3]."\n".$row[4]."\n".$row[5]."\n";
        fwrite($myfile, $txt);
        fclose($myfile);


        $sql3 = "DELETE FROM `ready_orders` WHERE `ID` = '$ID'";
        if ($result2 = mysqli_query($conn, $sql3)) {
            echo "Ok, sandwich delivered.";
        } else echo "fail";
    }

}


function change_limit($limit){

    $conn = mysqli_connect("localhost", "root", "","sandwhich");

// Check connection
    if (!$conn)
    {
        die("Connection failed: " . mysqli_connect_error());
    }else{

        $sql1 = "DELETE FROM `orderlimit`";
        $result1 = mysqli_query($conn, $sql1);
        $sql = "INSERT INTO `orderlimit`(`order-limit`) VALUES ('$limit')";
        if($result2 = mysqli_query($conn, $sql))
        {
           echo "Ok, orders limit modified";

        } else{
           echo "Sorry, i cant change the orders limit. There is an internal error";

        }
    }

}





//__________________
//connect to sql db
$conn = mysqli_connect("localhost", "root", "","sandwhich");


if(isset($_POST['submit'])) {

    // Check connection
    if (!$conn)
    {
        die("Connection failed: " . mysqli_connect_error());
    }

    $userquery = $_POST['message'];

    //preapare connection to DF service
    $crediendal = array('credentials' => "secret.json"); // chiave privata di DF
    try {

        //connection to DF service
        $sessionClient = new SessionsClient($crediendal); // apro una nuova sessione passando le credenziali
        // setto il progetto su DF che volgio usare
        $session = $sessionClient->sessionName("agent-1-mpdxoi", 00001); // session = unique ID
        //creo la query
        $queryInput = new QueryInput();

        //Ottengo il text della richeista utente e la assegno alla query
        $textInput = new TextInput();
        $textInput->setText($userquery); //passo la query e la porto in string
        $textInput->setLanguageCode("en-US");

        $queryInput->setText($textInput);

        //invio la richeista, passo la query  e l'ID della sessione
        $response = $sessionClient->detectIntent($session, $queryInput);
        // svolge una post request e se ha successo ottengo una response
        $queryResult= $response->getQueryResult();
        //estrggo cio che mi serve -> fulfilment, oppure  le entitis, vedi struttura meassagio risposta DF


        //$parameters = $queryResult ->getParameters();

        $intent = $queryResult->getIntent();
        $displayName = $intent->getDisplayName();


        if($displayName == "help") {
            printf('Here some example about what you can ask me:_"Describe me order number 1."_"Order number 2 is ready."_"Order number 10 has been delivered."');


        }

        if($displayName == "Limit") {
            $parameters = json_decode($queryResult->getParameters()->serializeToJsonString(), true);
            #extract parameters and save it in the struct
            $limit= $parameters["number"]; // next or current
           change_limit($limit);


        }


        if($displayName == "Orders_preparing") {
            $obj = new Preparing_request();
            $obj = new Query();

            $parameters = json_decode($queryResult->getParameters()->serializeToJsonString(), true);
            #extract parameters and save it in the struct
            $obj->sort = $parameters["sort"]; // next or current
            $obj->ID = $parameters["ID"]; // "id" word, could be present or not
            $obj->stuffing = $parameters["stuffing"]; // main, secondary, sauce or nothing
            $obj->object = $parameters["order"];// sandwich or order, not used
            $obj->number = $parameters["number"];
            $id_order = order_number( $obj->number, $obj->sort, $parameters["ID"]); // calculate the correct id order
            // if($id_order == null){printf("I can't find this order ID");}



            if ($obj->ID != "" ){printf('Info for current order ID: %u.', $id_order);}


            //if no stuffing specified -> describe all sandwich

            elseif ($obj->stuffing == "" && $obj->ID == "" && $id_order != 0) {
                $sql="SELECT * FROM current_orders WHERE ID = $id_order";
                // printf("%s", $sql);
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                if($row["Sauce"] == "")$row["Sauce"] = "";
                printf("Info for order  number %u_ \n%s. _\n %s._  \n %s._ \n%s", $row["ID"], $row["Bread"], $row["Main_stuffed"], $row["Second_stuffed"], $row["Sauce"]);

            } // echo "You have {$row['Bread']} left!";}


            elseif ($obj->stuffing != "" && $obj->ID == "" ){
                //$sql="SELECT * FROM current_orders WHERE ID = $id_order";

                $sql = "SELECT ".$obj->stuffing." FROM current_orders WHERE ID = ".$id_order;
                // printf("%s", $sql);
                $result = mysqli_query($conn, $sql);
                $row = mysqli_fetch_assoc($result);
                printf('Info for %s -> %s.', $obj->stuffing, $row[$obj->stuffing]);

            }
        }

        if($displayName == "Orders_status")
        {
            $obj = new Status_request();
            $parameters = json_decode($queryResult->getParameters()->serializeToJsonString(), true);

            $obj->object = $parameters["order"];
            $obj->number = $parameters["number"];
            $obj->stort = $parameters["sort"];
            $obj->status = $parameters["status"];
            if($obj->number == "" && $obj->status != "Cancel"){echo "I can't get the order ID";}
            elseif ($obj->number != "" && $obj->status == "Ready" )
            {ready_query($obj->number);}

            elseif ($obj->number != "" && $obj->status == "Delivered" )
            {delivered_query($obj->number); }

            elseif ($obj->status == "Cancel" )
            {cancel_action(); }

            else {echo "I didn't understand, could you repeat?";}
        }


        //printf('Detected intent: %s ' . PHP_EOL, $displayName);
        // printf('param: %s ', $obj);
        /* foreach($obj as $k => $param) {
               printf('%s ', $param);
           }
   */
        $displayName = $intent->getDisplayName();
        $confidence = $queryResult->getIntentDetectionConfidence();
        //printf('Detected intent: %s (parm: %s)' . PHP_EOL, $displayName, $param);


        $fulfilmentText = $queryResult->getFulfillmentText();
        //risposta alla richiesta Ajax
        echo $fulfilmentText;


    } finally {
        //heandle exeption
        $sessionClient->close();
    }
//creo una sessione - creo inputc query - invio la richiesta - ottengo la risposta

}

?>

