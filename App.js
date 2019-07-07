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