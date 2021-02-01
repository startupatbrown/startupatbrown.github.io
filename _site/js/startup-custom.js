function scrollToBottom() {
	window.scrollTo(0,document.body.scrollHeight);
}

$('#register-button').click(function() {
	//$('#register-button').addClass("hide");
	//$('#register-button').hide();
	//$('#theForm').show();
});


$(function() {
//this is when the document loads
	$('#theForm').hide();

	skrollr.init({
		offset: function() {

            var width = screen.width;
            var offset;

            if (width > 800) {
                offset = 700;
            } else if (width > 600) {
                offset = 2215;
            } else if (width > 400) {
                offset = 2115;
            }

            return offset;
        }
	});

});