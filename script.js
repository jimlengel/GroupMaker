/* var person = ["Alex, Barb, Carrie, David, Ellen, Fred"];

var groupLength = 6;
for (var i = 0; i < groupLength; i++) {
	console.log(person[i]);
	if (person[1] == "yes"  || person[1] == "whatever"){
		if (person[2] == "yes" || person[2] == "whatever" ){
			group1[0] = person[0];
			group1[1] = person[1];
			group1[2] = person[2];

		}
	}

} */




//UI Stuff
// $('select[name=exclude1]').val()
// var selectedOptions = $('select option:selected');
// for (var i=0; i<selectedOptions.length; i++) {
//   console.log($(selectedOptions[i]).val());
//
$('select.form-control').hide()
$('button.create').hide();

var inputVal = [];
$('button.apply').on('click', function() {
	$('input.form-control').each(function(){
		if (this.value!="") {
			inputVal.push($(this).val())
		}
	});
	$.each(inputVal, function(i, e) {
		$('<option value=' + e + ' title="1"/>').html(e).appendTo('select.form-control.exclude');

		$('<option value=' + e + ' title="-1"/>').html(e).appendTo('select.form-control.include');
	});
	$('select.form-control').show()
	$('button.create').show();
	$(this).addClass('disabled');
});


//console.log($('select[name=exclude1]').val());




var groups;
$('button.create').on('click', function() {
console.log('the names are '+inputVal);


//include loop
	var includeSelectedOptions = $('select.include option:selected');
	var includePushedArray;
	var includeArray = [];
	for (var i=0; i<includeSelectedOptions.length; i++) {

		includePushedArray = $(includeSelectedOptions[i]).val();
			includeArray.push(includePushedArray);
	$(this).addClass('disabled');
	}

	//Array that contains all includes
	console.log('this is the include array (list of names in order): ' + includeArray);


//exclude loop
	var excludeSelectedOptions = $('select.exclude option:selected');
	var excludePushedArray;
	var excludeArray = [];
	for (var i=0; i<excludeSelectedOptions.length; i++) {

		excludePushedArray = $(excludeSelectedOptions[i]).val();
			excludeArray.push(excludePushedArray);
		
	}

	//Array that contains all excludes
	console.log('this is the exclude array (list of names in order): ' + excludeArray);

	groups = createGroupings(inputVal, includeArray, excludeArray);
    console.log ("---------END RESULT---------------");
    console.log(groups);
    $("#team").append("Group 1: " + groups[0] + ", " + groups[1] + ", " + groups[2] + "<br>" + "Group 2: " + groups[3] + ", " + groups[4] + ", " + groups[5]);

});
