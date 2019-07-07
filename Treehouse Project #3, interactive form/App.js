const otherTitle = document.querySelector('#other-title');
//Sets initial focus on name field for filling out form
$('#name').focus();
//Hides the job role title initially
$('#other-title').hide();
//Function to show text field when other Title is selected
$('#title').on('change', function(e){
    if($('#title option:selected').val() === 'other'){
        $('#other-title').show();
    }else {
        $('#other-title').hide();
    }
});
//Displays the appropriate T-shirt colors via drop box
$('#design').on('change', function(e){
    for (let i = 0; i <= $('#color option').length; i +=1){
        $('#color option').eq(i).prop('disabled',false);
    }
    if($('#design option:selected').val() === 'js puns'){
        for (let js = 0; js <=2; js +=1){
            $('#color option').eq(js).prop('disabled',true);
            $('#color option').eq(3).attr('selected',true);
        }
    }
    if($('#design option:selected').val() === 'heart js'){
        for (let hjs =3; hjs <=6; hjs +=1){
            $('#color option').eq(hjs).prop('disabled',true);
            $('#color option').eq(0).attr('selected',true);
        }
    }
});