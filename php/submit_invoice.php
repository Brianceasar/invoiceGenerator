<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "byte_customers"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Process form data
    $clientName = mysqli_real_escape_string($conn, $_POST['clientName']);
    
    // Process itemized list
    $itemDescriptions = $_POST['itemDescription'];
    $itemCosts = $_POST['itemCost'];

    // Calculate totals
    $subtotal = array_sum($itemCosts);
    $tax = $subtotal * 0.1; // Assuming 10% tax, adjust as needed
    $grandTotal = $subtotal + $tax;

    // Insert data into the database
    $sql = "INSERT INTO invoices (
        client_name, 
        item_description, 
        item_cost, subtotal, 
        tax, grand_total, 
        due_date, 
        payment_method, 
        additional_notes
        ) VALUES (
            '$clientName', 
            '$itemDescription', 
             $itemCost, 
             $subtotal, 
             $tax, 
             $grandTotal, 
            '$dueDate', 
            '$paymentMethod', 
            '$additionalNotes'
            )";

    if ($conn->query($sql) === TRUE) {
        echo "Invoice submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();

?>
