$(document).ready(function() {
	console.log("Document is ready for action! :)")

	$("button.dark").click(function() {
		//Do Stuff For Dark Theme
		event.preventDefault()
		$("#applytheme").addClass("dark")
		$("#applytheme").removeClass("light")
		console.log("clicked dark")
		});
	$("button.light").click(function(){
		//Do Stuff For Light Theme
		event.preventDefault()
		$("#applytheme").addClass("light")
		$("#applytheme").removeClass("dark")
		console.log("clicked light")
	});
	

});

