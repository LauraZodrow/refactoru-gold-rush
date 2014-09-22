$(document).on('ready', function() {
  var mapPin = $("<img src='pin.png'>").addClass('pin').css ({
  	'width': '20px',
  	'position': 'absolute'
  });
  	// $('.pin').hover(
  	// 	function() { 
		 //  	return;
		 //  }, function () {
		 //  	var newPin = mapPin.clone();
		 //  	var pageX = + $('.x-coordinate').html(event.pageX).text() - 10;
		 //  	var pageY = + $('.y-coordinate').html(event.pageY).text() - 32;
		  	
		 //  	$(this).append(newPin);
		 //  	$(newPin).css({top: pageY + 'px', left: pageX + 'px'});

		 //  	console.log(pageX);
		 //  	console.log(pageY);
		 //  });

$('.map').on('click', function() {
	var newPin = mapPin.clone();
  	var pageX = + $('.x-coordinate').html(event.pageX).text() - 10;
  	var pageY = + $('.y-coordinate').html(event.pageY).text() - 32;
  	
  	$(this).append(newPin);
  	$(newPin).css({top: pageY + 'px', left: pageX + 'px'});

  	$('.pin').on('click', function(e) {
 		e.stopPropagation();
		$(this).remove();
	});

  	// console.log(pageX);
  	// console.log(pageY);
  	
	});
 	

});

