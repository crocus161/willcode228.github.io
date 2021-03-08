$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
  });
  //E-mail Ajax Send

  //slick slider settings
  $('.examples__list_3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  $('.introduction__list_3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  });
  //slick slider settings


});
      