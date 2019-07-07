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
$('#color').hide();

$('#design').on('change', function(e){
    $('#color').show();
    if($('#design option:selected').val() === 'js puns'){
        for (let js = 0; js <=2; js +=1){
            $('#color option').eq(js).hide();
        }
        for (let m =3; m<=6; m+=1){
            $('#color option').eq(m).show();
        }
        $('#color option').eq(3).attr('selected',true);
    }
    if($('#design option:selected').val() === 'heart js'){
        for (let hjs =3; hjs <=6; hjs +=1){
            $('#color option').eq(hjs).hide();
        }
        for (let n = 0; n <=2; n+=1){
            $('#color option').eq(n).show();
        }
            $('#color option').eq(0).attr('selected',true);
        }
    
    if($('#design option:selected').text() === 'Select Theme'){
        $('#color').hide();
    }
});
//Register for activities -

const pmEvents = [$('.activites input:checkbox').eq(2),$('.activities input:checkbox').eq(4)];
const amEvents = [$('.activites input:checkbox').eq(1),$('.activities input:checkbox').eq(3)];
let totalAmount = 0;
$('.activities input:checkbox').on('change',function(e){
 //To inactivate conflicting time slots for classes and calculate costs
    if($('.activities input:checkbox').eq(1).prop('checked')){
        $('.activities input:checkbox').eq(3).prop('disabled',true);
    }else if ($('.activities input:checkbox').eq(1).prop('checked',false)){
        $('.activities input:checkbox').eq(3).prop('disabled',false);
    }
    if($('.activities input:checkbox').eq(3).prop('checked')){
        $('.activities input:checkbox').eq(1).prop('disabled',true);
    }else if ($('.activities input:checkbox').eq(3).prop('checked',false)){
        $('.activities input:checkbox').eq(1).prop('disabled',false);
    }
    if($('.activities input:checkbox').eq(2).prop('checked')){
        $('.activities input:checkbox').eq(4).prop('disabled',true);
    }else if ($('.activities input:checkbox').eq(2).prop('checked',false)){
        $('.activities input:checkbox').eq(4).prop('disabled',false);
    }
    if($('.activities input:checkbox').eq(4).prop('checked')){
        $('.activities input:checkbox').eq(2).prop('disabled',true);
    }else if ($('.activities input:checkbox').eq(4).prop('checked',false)){
        $('.activities input:checkbox').eq(2).prop('disabled',false);
    }
    calculateCost();
})
function calculateCost(){
        //To calculate running Total for classes:
        if($('.activities input:checkbox').eq(0).prop('checked')){
            totalAmount +=200;
        }else if ($('.activities input:checkbox').eq(0).prop('checked',false)){
            totalAmount -=200;
        }
    
    
}