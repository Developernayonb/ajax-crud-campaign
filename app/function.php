<?php 


/**
 * Old data 
 */
function old($name){
	if(isset($_POST[$name])){
		echo $_POST[$name];
	}else{
		echo "";
	}
	
}
/**
 * file uplode system
 */
function fileUp($file, $location, $format=['png','jpg','gif']){


	
	$file_name = $file['name'];
	$file_tmp_name = $file['tmp_name'];
	//file extenation

	$file_arr = explode('.', $file_name);
	$ext = strtolower(end($file_arr));
	

	//unice name
	$unicname = md5(time().rand()).".".$ext;
		


	//send file to folder
	if (in_array($ext,$format)) {

		move_uploaded_file($file_tmp_name,$location.$unicname);
		$status = 'yes';
	}else{
		$status = 'no';
	};
	return[
		'file_name' => $unicname,
		'status' => $status


	];




}


/**
 * Value Check 
 */

function unique($conn, $table, $col, $data ){
	$sql = "SELECT $col FROM $table WHERE $col='$data' ";
	$data = $conn -> query($sql);
	$row = $data -> num_rows;

	if ( $row > 0 ) {
		return false;
	}else{
		return true;
	}
}
/**
 * Success MSG Function 
 */

function setMsg($msg){

	setcookie('smsg', $msg, time()+10);

}



function getMsg(){

	if ( isset($_COOKIE['smsg']) ) {
		
		echo "<p class=\" alert alert-success  \">" .$_COOKIE['smsg'] . " <button class=\"close\" data-dismiss=\"alert\">&times;</button> </p>";
	}

}
 


