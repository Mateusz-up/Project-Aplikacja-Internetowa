
var reset = function(e) {
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
}


$('#resetTextButton').click(function(e) {
  reset($('#height'));
  e.preventDefault();
});
$('#resetTextButton').click(function(e) {
  reset($('#radius'));
  e.preventDefault();
});
$('#resetTextButton').click(function(e) {
  reset($('#total'));
  e.preventDefault();
});

var reset = function(e) {
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
}


$('#resetTextButton2').click(function(e) {
  reset($('#forming'));
  e.preventDefault();
});
$('#resetTextButton2').click(function(e) {
  reset($('#radius2'));
  e.preventDefault();
});
$('#resetTextButton2').click(function(e) {
  reset($('#total2'));
  e.preventDefault();
});

	  $(document).ready(function() {
	
	    function compute() {
		
		
          var a = $('#radius2').val();
          var b = $('#forming').val();
			var t='π';
			
			
		  
          var total2 = (a*a)+(a*b);
		 
          $('#total2').val(total2+t);
		  
		 

        }

        $('#radius2, #forming').change(compute);
		
		
	  });
	
	  $(document).ready(function() {
	    function compute() {
		var x =1/3;
          var a = $('#radius').val();
          var b = $('#height').val();
			var t='π';
		  
          var total = x *(a*a)*b;
		  
          $('#total').val(total+t);
        }

        $('#radius, #height').change(compute);
		
	  });

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '50');
});

