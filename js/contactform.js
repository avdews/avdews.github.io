var message = "";

$("contact-button").on("click", function() {
	message = $("#contactform").serialize();
	$.ajax({
		url: "//formspree.io/avdews@umich.edu",
		method: "POST",
		data: {message: message},
		dataType: "json"
	});
	alert('Thanks for the message, I\'ll be in touch soon.');
	return false;
});