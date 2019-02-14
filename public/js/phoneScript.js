$(document).ready(function(){
	const vzwBtn = document.getElementById('vzw');
	const attBtn = document.getElementById('att');
	const inputNum = document.getElementById('inputNum');
	const submitBtn = document.getElementById('submitBtn');
	let linkInpt = document.getElementById('link');

	$(inputNum).val('');
	$(linkInpt).val('');
	let carrier = '';
	

	vzwBtn.addEventListener('click', function(e){
		e.preventDefault();
		inputNum.style.visibility = 'visible';
		link.style.visibility = 'visible';
		attBtn.style.visibility = 'hidden';
		carrier='@vtext.com';
	});

	attBtn.addEventListener('click', function(e){
		e.preventDefault();
		inputNum.style.visibility = 'visible';
		link.style.visibility = 'visible';
		vzwBtn.style.visibility = 'hidden';
		carrier='@txt.att.net';
	});

	inputNum.addEventListener('keyup', function(e){
		
		submitBtn.style.visibility = 'visible';

	});

	submitBtn.addEventListener('click', function(e){
		let number = $(inputNum).val();
		let link = $(linkInpt).val();
		console.log(link);
		if(number.length === 10){
			console.log('number valid. ' + number + '\ncarrier: ' + carrier);
		$.ajax({
			url: '/',
			type: 'POST',
			dataType: 'json',
			data: {number: number, carrier: carrier, link: link},
		});

		$('#inputNum').val('');
		$('#link').val('');
		vzwBtn.style.visibility = 'visible';
		attBtn.style.visibility = 'visible';
		submitBtn.style.visibility = 'hidden';
		inputNum.style.visibility = 'hidden';
		linkInpt.style.visibility = 'hidden';


		} else {
			
			alert('number invalid. ' + number);
		}
	});



});