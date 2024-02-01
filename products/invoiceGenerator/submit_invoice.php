<?php

require "config.php";

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if(isset($_POST["submit"])){
    $invoice_no=$_POST["invoice_no"];
    $invoice_date=date("Y-m-d",strtotime($_POST["invoice_date"]));
    $cname=mysqli_real_escape_string($conn,$_POST["cname"]);
    $caddress=mysqli_real_escape_string($conn,$_POST["caddress"]);
    $ccity=mysqli_real_escape_string($conn,$_POST["ccity"]);
    $grand_total=mysqli_real_escape_string($conn,$_POST["grand_total"]);
    
    $sql="insert into invoice (INVOICE_NO,INVOICE_DATE,CNAME,CADDRESS,CCITY,GRAND_TOTAL) values ('{$invoice_no}','{$invoice_date}','{$cname}','{$caddress}','{$ccity}','{$grand_total}') ";
    if($conn->query($sql)){
      $sid=$conn->insert_id;
      
      $sql2="insert into invoice_products (SID,PNAME,PRICE,QTY,TOTAL) values ";
      $rows=[];
      for($i=0;$i<count($_POST["pname"]);$i++)
      {
        $pname=mysqli_real_escape_string($conn,$_POST["pname"][$i]);
        $price=mysqli_real_escape_string($conn,$_POST["price"][$i]);
        $qty=mysqli_real_escape_string($conn,$_POST["qty"][$i]);
        $total=mysqli_real_escape_string($conn,$_POST["total"][$i]);
        $rows[]="('{$sid}','{$pname}','{$price}','{$qty}','{$total}')";
      }
      $sql2.=implode(",",$rows);
      if($conn->query($sql2)){
        echo "<div class='alert alert-success'>Invoice Added Successfully. <a href='print.php?id={$sid}' target='_BLANK'>Click </a> here to Print Invoice </div> ";
      }else{
        echo "<div class='alert alert-danger'>Invoice Added Failed.</div>";
      }
    }else{
      echo "<div class='alert alert-danger'>Invoice Added Failed.</div>";
    }
  }

$conn->close();

?>
