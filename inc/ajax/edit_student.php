<?php 
/**
 * DB Connection
 */
require_once "../../app/db.php";
require_once "../../app/function.php";


$id = $_POST['id'];

$sql = "SELECT * FROM students WHERE id ='$id'";
$data = $connection -> query($sql);

$edit_data = $data -> fetch_assoc();
echo json_encode($edit_data);


 






?>