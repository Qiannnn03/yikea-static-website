window.onload = review;

function review(){

	document.forms[0].onsubmit = function() {
				var name = document.getElementById('custname').value;
				alert(name + ', your review has been successfully submitted, thanks for your feedback!');
			}

	}
