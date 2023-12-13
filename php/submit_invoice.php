<?php
// Assuming you have a MySQL database set up
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "byte_customers";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validate and sanitize the data (you may add more validation as needed)
    $clientName = mysqli_real_escape_string($conn, $_POST['clientName']);
    $itemDescription = mysqli_real_escape_string($conn, $_POST['itemDescription']);
    $itemCost = floatval($_POST['itemCost']);

    // Insert data into the database
    $sql = "INSERT INTO invoices (client_name, item_description, item_cost) VALUES ('$clientName', '$itemDescription', $itemCost)";

    if ($conn->query($sql) === TRUE) {
        echo "Invoice submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
