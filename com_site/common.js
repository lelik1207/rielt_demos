$(function() {

	function initSize() {
		$(".box_mnu .panel-heading").each(function() {
			var ph = $(this).height() + 3;
			var pdt = $(this).find(".dropdown-tooggle");
			pdt.height(ph);
		});

		$(".till_item .tc").each(function() {
			var parh = $(this).parent().height();
			$(this).height(parh);
		});
	};

	initSize();

	$(window).resize(function() {
		initSize();
	});

	
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
