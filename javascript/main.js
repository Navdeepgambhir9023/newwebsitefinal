	$(document).ready(function() {
	  $(window).scroll(function() {
	    // sticky navbar on scroll script
	    if (this.scrollY > 20) {
	      $('.navbar').addClass("sticky");
	    } else {
	      $('.navbar').removeClass("sticky");
	    }
	  });
	  var windowHeight = $(window).height(),
	    topSection = $('master-section');
	  topSection.css('height', windowHeight);

	  $(window).resize(function() {
	    var windowHeight = $(window).height();
	    topSection.css('height', windowHeight);
	  });
	});
