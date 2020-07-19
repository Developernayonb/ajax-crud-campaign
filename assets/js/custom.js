(function($){

 $(document).ready(function(){

 // Show student_add_modal

 $('a#student_show').click(function(){
   $('#student_add_modal').modal('show');

  return false;

 });

 // Single Show student_modal
 $(document).on('click','a#single_show', function(){
   $('#single_student_modal').modal('show');

   let show_id = $(this).attr('student_id');
    
    $.ajax({
    	url : 'inc/ajax/show_single_student.php',
    	data : { id : show_id },
    	method : "POST",
    	success : function(data){
    		alert(data);
    	}

    });
    

   return false;
 });

// Add new student

$('form#add_student_form').submit(function(e){
	e.preventDefault();

	// Get some input fields value

	let name = $('input[name="name"]').val();
	let email = $('input[name="email"]').val();
	let cell = $('input[name="cell"]').val();

	if ( name == '' || email == '' || cell == '') {
		$('.mess').html('<p class="alert alert-danger">All fields are required ! <button class="close" data-dismiss="alert">&times;</button></p>')
	}else{
		$.ajax({
			url : 'inc/ajax/student_add.php',
			data : new FormData(this),
			method : "POST",
			contentType : false,
			processData : false,
			success : function(data){
				 
				 $('form#add_student_form')[0].reset();
				 $('#student_add_modal').modal('hide');
				 $('.mess_all').html(data);
				 allStudentData();
				
			}
		});
	}
});

// Show all student data
function allStudentData(){
	$.ajax({
	url : 'inc/ajax/show_all.php',
	success : function(data){
		$('tbody#all_students_data').html(data);
		
	}
});

}
allStudentData();

// Delete Student

$(document).on('click','a#delete_student', function(){

 let delete_id = $(this).attr('student_id');

 let conf = confirm('Aare you sure ? ');

 if ( conf == true ) {
 	$.ajax({
	url : 'inc/ajax/delete_student.php',
	data : { id : delete_id },
	method : "POST",
	success : function(data){

		$('.mess_all').html('<p class="alert alert-success">Student data deleted successfull! <button class="close" data-dismiss="alert">&times;</button></p>');

		 allStudentData();
	}
});
 }else {
 	return false;
 }

 


  return false;
});




















 });

})(jQuery)