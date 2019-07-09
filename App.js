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
$('#colors-js-puns').hide();

$('#design').on('change', function(e){
    $('#color').show();
    if($('#design option:selected').val() === 'js puns'){
        for (let js = 0; js <=2; js +=1){
            $('#color option').eq(js).hide();
        }
        for (let m =3; m<=6; m+=1){
            $('#colors-js-puns').show();
            $('#color option').eq(m).show();
        }
        $('#color option').eq(3).attr('selected',true);
    }
    if($('#design option:selected').val() === 'heart js'){
        for (let hjs =3; hjs <=6; hjs +=1){
            $('#color option').eq(hjs).hide();
        }
        for (let n = 0; n <=2; n+=1){
            $('#colors-js-puns').show();
            $('#color option').eq(n).show();
        }
            $('#color option').eq(0).attr('selected',true);
        }
    
    if($('#design option:selected').text() === 'Select Theme'){
        $('#colors-js-puns').hide();
    }
});
const div = document.createElement('div');
$('.activities input').append(div);
let totalCost = 0;


$('.activities').on('change',function(e){
    let checked = $(event.target);
    let checkedText = checked.parent().text();
    let index = checkedText.indexOf("$");
    let price = checkedText.slice((index+1),index+4);
    let cost = parseInt(price);
    if($(event.target).prop('checked')){
        totalCost += cost;
    }else {
        totalCost -= cost;
    }
    let indexDate = checkedText.indexOf('—');
    let indexTime = checkedText.indexOf(',');
    let dateTime = checkedText.slice(indexDate,indexTime);
    for(let i = 0; i<= $('.activities input').length; i+=1){
        let compareCheck = $('.activities input').eq(i);
        let compareText = compareCheck.parent().text();
        let compareDate = compareText.indexOf('—');
        let compareTime = compareText.indexOf(',');
        let compareDateTime = compareText.slice(compareDate,compareTime);

       if(($(event.target) !== $('.activities input').eq(i)) && (compareDateTime == dateTime)){
            $('.activities input').eq(i).prop('disabled',true);
       }
       
    }
});