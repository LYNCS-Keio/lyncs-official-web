//Safari対策
window.onpageshow = function(event) {
  if (event.persisted) {
    window.location.reload();
  }
};
	
$(function(){
	
	$('.cont').fadeMover({
		'effectType': 1,
		'inSpeed': 500,
		'outSpeed': 200,
		'inDelay' : '0',
		'outDelay' : '0',
		'nofadeOut' : 'nonmover'
	});
});