<?php 
/**
 * DB Connection
 */
require_once "../../app/db.php";
require_once "../../app/function.php";

/**
 * value Get
 */

$name = $_POST['name'];
$email = $_POST['email'];
$cell = $_POST['cell'];

$data = fileUp($_FILES['photo'], '../../assets/media/students/' );
$photo_name = $data['file_name'];


$sql = "INSERT INTO students (name, email, cell, photo) VALUES ('$name', '$email', '$cell','$photo_name')";
$connection -> query($sql);

echo '<p class="alert alert-success">Student added success ! <button class="close" data-dismiss="alert">&times;</button></p>';




 ?>