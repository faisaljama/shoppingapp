var $form = $('#shoppingapp');
var $itemList = $('#item-list');



$form.submit(function(event){
	var text = $('#addnewitem').val();
	createNewItem(text);
	event.preventDefault();
	console.log("foo");
});


function createNewItem(text){
	var $item = $('<li>');
	var $input = $('<input>' , {type: 'checkbox'} )
	$item.html($input);
	$item.append(text);
	$itemList.append($item);
	console.log("new list")
}

$('#remove-item').click(function(event){
    $('#item-list input:checked').parent('li').remove();

});

$('#clear-items').click(function(event){
	$('#item-list li').remove();
});

$('#completed-item-list').click(function(event){
	$('#item-list input:checked').parent('li').remove();
	

});

/*$(document).click(function).parent('li').remove();
$('#completed-item-list').click(function(event){
	$('#items')
}*/