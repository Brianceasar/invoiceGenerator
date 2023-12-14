<?php

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "billing"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Process form data
    $clientName = mysqli_real_escape_string($conn, $_POST['clientName']);
    
    // Process itemized list
    $itemDescriptions = isset($_POST['itemDescription']) ? $_POST['itemDescription'] : [];
    $itemCosts = isset($_POST['itemCost']) ? $_POST['itemCost'] : [];

    // Calculate totals
    $subtotal = array_sum($itemCosts);
    $tax = $subtotal * 0.1; // Assuming 10% tax, adjust as needed
    $grandTotal = $subtotal + $tax;

    // Insert data into the database
    $sql = "INSERT INTO invoices (
        client_name, 
        item_description, 
        item_cost, subtotal, 
        tax, grand_total
        ) VALUES (
            '$clientName', 
            '" . implode("','", array_map([$conn, 'real_escape_string'], $itemDescriptions)) . "', 
            '" . implode("','", array_map([$conn, 'real_escape_string'], $itemCosts)) . "', 
            $subtotal, 
            $tax, 
            $grandTotal
        )";

    if ($conn->query($sql) === TRUE) {
        echo "Invoice submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();

?>
