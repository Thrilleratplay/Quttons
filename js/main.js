(function() {

	'use strict';

	// Initialize the buttons

	// For the upload button
	var quttonUpload = Qutton.getInstance(document.querySelector('#qutton_upload'));
	quttonUpload.init({
		fontClass: 'fa fa-upload',
		backgroundColor : "#917466"
	});


	// For the delete button
	var quttonDelete = Qutton.getInstance(document.querySelector('#qutton_delete'));
	quttonDelete.init({
		fontClass: 'fa fa-trash',
		backgroundColor : "#EB1220"
	});

	// For the Sharing button
	var quttonComment= Qutton.getInstance(document.querySelector('#qutton_comment'));
	quttonComment.init({
		fontClass: 'fa fa-comment',
		backgroundColor : "#41AAF1"
	});

})();
