<?php 
/**
 * DB Connection
 */
require_once "../../app/db.php";
require_once "../../app/function.php";

/**
 * Form Data table
 */
$sql = "SELECT * FROM students ORDER BY id DESC";
$data = $connection -> query($sql);

$i = 1;
 while($all =$data ->fetch_assoc()) :
?>

<tr>
<td><?php echo $i; $i++; ?></td>
<td><?php echo $all['name']; ?></td>
<td><?php echo $all['email']; ?></td>
<td><?php echo $all['cell']; ?></td>
<td><img src="assets/media/students/<?php echo $all['photo']; ?>" alt=""></td>
<td>
	<a id="single_show" student_id="<?php echo $all['id']; ?>" class="btn btn-sm btn-info" href="#">View</a>
	<a class="btn btn-sm btn-warning" href="#">Edit</a>
	<a id="delete_student" student_id="<?php echo $all['id']; ?>" class="btn btn-sm btn-danger" href="#">Delete</a>
</td>
</tr>
<?php endwhile; ?>
