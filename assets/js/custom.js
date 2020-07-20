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
    		let single_data = JSON.parse(data);
    		$('img#single_student_img').attr('src', 'assets/media/students/' + single_data.photo );
    		 $('h2#single_name').text(single_data.name);
    		 $('td#single_name').text(single_data.name);
    		 $('td#single_email').text(single_data.email);
    		 $('td#single_cell').text(single_data.cell);
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


// Edit Student Data

$(document).on('click','a#edit_student', function(e){
 e.preventDefault();
 
 let edit_id = $(this).attr('chatro_id');
 $.ajax({
 	url : 'inc/ajax/edit_student.php',
 	data : { id : edit_id },
 	method : "POST",
 	success : function(data){
 		let edit_data = JSON.parse(data);
 		$('#student_update_modal input[name="name"]').val(edit_data.name);
 		$('#student_update_modal input[name="student_id"]').val(edit_data.id);
 		$('#student_update_modal input[name="email"]').val(edit_data.email);
 		$('#student_update_modal input[name="cell"]').val(edit_data.cell);
 		$('#student_update_modal input[name="old_photo"]').val(edit_data.photo);
 		$('#student_update_modal img').attr('src', 'assets/media/students/' + edit_data.photo);
 	}
 });
 
  $('#student_update_modal').modal('show');
});


// Update student data

$(document).on('submit','form#update_student_form', function(e){
  e.preventDefault();

  $.ajax({
  	url : 'inc/ajax/update_student.php',
  	data : new FormData(this),
  	contentType : false,
  	processData : false,
  	method : "POST",
  	success : function(data){

  		$('#student_update_modal').modal('hide');

  		$('.mess_all').html('<p class="alert alert-success">Student data update successfull! <button class="close" data-dismiss="alert">&times;</button></p>');

		 allStudentData();
  	}
  })
});





















 });

})(jQuery)