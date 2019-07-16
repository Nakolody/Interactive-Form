//Variables


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
    if($('#design option:selected').val() === 'heart js'){
        for (let js = 0; js <=2; js +=1){
            $('#color option').eq(js).hide();
        }
        for (let m =3; m<=6; m+=1){
            $('#colors-js-puns').show();
            $('#color option').eq(m).show();
        }
        $('#color option').eq(3).attr('selected',true);
    }
    if($('#design option:selected').val() === 'js puns'){
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
$('.activities').append(div);
let totalCost = 0;



$('.activities').on('change',function(e){
    let checked = $(event.target);
    let checkedText = checked.parent().text();
    let index = checkedText.indexOf("$");
    let price = checkedText.slice(index+1);
    let cost = parseInt(price);
    if($(event.target).prop('checked')){
        totalCost += cost;
    }else {
        totalCost -= cost;
    }
    $('.activities div').html(`<h2>Your total cost is: $ ${totalCost}</h2>`);
    let indexDate = checkedText.indexOf('—');
    let indexTime = checkedText.indexOf(',');
    let dateTime = checkedText.slice(indexDate,indexTime);
    for(let i = 0; i<= $('.activities input').length; i+=1){
        let compareCheck = $('.activities input').eq(i);
        let compareText = compareCheck.parent().text();
        let compareDate = compareText.indexOf('—');
        let compareTime = compareText.indexOf(',');
        let compareDateTime = compareText.slice(compareDate,compareTime);

        if(dateTime.includes(compareDateTime) && (checkedText != compareText)){
            if(checked.prop('checked')){
                compareCheck.prop('disabled',true);
            } else {
                compareCheck.prop('disabled',false);
            }
       }
       
       
    }
});

//Payment section. default credit card

const select_method = $('#payment option').eq(0);
select_method.hide();
const creditCard =$('#payment option').eq(1).prop('selected',true);
const creditCardDiv = $('#credit-card');
const paypal = $('#payment option[value=paypal]');
const paypalDiv = $('fieldset div').eq(8);
paypalDiv.hide();
const bitcoin = $('#payment option[value=bitcoin]');
const bitcoinDiv = $('fieldset div').eq(9);
bitcoinDiv.hide();
$('#payment').on('change',function(e){
    if(creditCard.prop('selected')){
        paypalDiv.hide();
        bitcoinDiv.hide();
        creditCardDiv.show();
    } else if(paypal.prop('selected')){
        creditCardDiv.hide();
        bitcoinDiv.hide();
        paypalDiv.show();
    } else if(bitcoin.prop('selected')){
        creditCardDiv.hide();
        paypalDiv.hide();
        bitcoinDiv.show();
    } else {
        return;
    }
});
// Validation of form
let errorMessage = document.createElement('h2');
errorMessage.innerHTML = 'Please Enter your Name:';
errorMessage.className = 'errorElement';
errorMessage.setAttribute('id','nameError');
$('#name').before(errorMessage);
$('#nameError').hide();


function validName (){
    let userName = $('#name').val();
    let regex =/^[a-z ,.'-]+$/i;

    //Tests name against regex and if valid returns true
    if(regex.test(userName)){
        $('#nameError').slideUp();
        $('#name').removeClass('error');
        //$('#name').val('');
        return true
    }else {
        $('#name').addClass('error');
        $('#nameError').show(1000);
        return false;
    }
}
//Creates element that will append to page for invalid emails.
let mailMessage = document.createElement('h2');
mailMessage.className = 'errorElement';
mailMessage.setAttribute('id','mailMessage');
$('#mail').before(mailMessage);
$('#mailMessage').hide();

//Tests email for to make sure input is valid
function validEmail () {
    let email = $('#mail').val();
    let regex = /^[^@]+@/i;
    let regex2 = /^[^@]+@[^@.]+\./i;
    let regex3 = /^[^@]+@[^@.]+\.\w+/i;
    if(regex.test(email)){
        if(regex2.test(email)){
            $('#mail').removeClass('error');
            if(regex3.test(email)){
                $('#mailMessage').hide(2000);
                $('#mail').removeClass('error');
                return true;
            }else {
                mailMessage.innerHTML = '... stay on target';
                $('#mailMessage').show(500);
                $('#mail').addClass('error');
            }
        }else {
            mailMessage.innerHTML = 'Almost there...';
            $('#mailMessage').show(500);
            $('#mail').addClass('error');
        }
    } else {
        $('#mailMessage').show(1000);
        $('#mail').addClass('error');
        mailMessage.innerHTML = 'Please enter a valid email:';
    }
};


//Element for activities
let activitiesMessage = document.createElement('h2');
activitiesMessage.innerHTML = 'Please select an activity!';
activitiesMessage.className = 'errorElement';
activitiesMessage.setAttribute('id','activitiesMessage');
$('.activities').before(activitiesMessage);
$('#activitiesMessage').hide();
//Checks to see if valid information is placed in activities.
function validActivities(){

    if(totalCost > 0){
        $('#activitiesMessage').hide();
        $('.activities').removeClass('error');
        return true;
    }else {

        $('#activitiesMessage').show();
        $('.activities').addClass('error');
        return false;
    }
}
//Create Credit Card Message element
let credit_cardMessage = document.createElement('h2');
credit_cardMessage.className = 'errorElement';
credit_cardMessage.setAttribute('id','credit_cardMessage');

$('#cc-num').after(credit_cardMessage);
$('#credit_cardMessage').hide();

//Function to validate credit card
function credit_cardvalid(){
    let regexForCreditCard = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
    let credit = $('#cc-num').val();
    if(creditCard){
        if(regexForCreditCard.test(credit)){
            $('#credit_cardMessage').slideUp(1000);
            $('#credit_cardMessage').removeClass('error');
            return true
        } else{
            credit_cardMessage.innerHTML = "Please enter a valid credit card number";
            $('#credit_cardMessage').show(1000);
            $('#cc-num').addClass('error');
            return false
        }

    }else {
        return true;
    }
    
}
//Create Zip Code Message
let zipcodeMessage = document.createElement('h2');
zipcodeMessage.className = 'errorElement';
zipcodeMessage.setAttribute('id','zipcodeMessage');
zipcodeMessage.innerHTML = "Please enter a valid zipcode";
$('#zip').after(zipcodeMessage);
$('#zipcodeMessage').hide();

//Function to validate zipcode
function zipcodeValid () {
    let zipcodeValue = $('#zip').val();
    let regexforZipCode = /^\d{5}$/;

    if(creditCard){
        if(regexforZipCode.test(zipcodeValue)){
            $('#zipcodeMessage').slideUp(1000);
            $('#zip').removeClass('error');
            return true
        }else {
            $('#zipcodeMessage').show(1000);
            $('#zip').addClass('error');
            return false
        }
    }else {
        return true;
    }
}
//Create error message for cvv
let cvvMessage = document.createElement('h2');
cvvMessage.className = 'errorElement';
cvvMessage.setAttribute('id','cvvMessage');
cvvMessage.innerHTML = "Please enter a valid cvv code";
$('#cvv').after(cvvMessage);
$('#cvvMessage').hide();
//Function to validate CVV
function cvvValid () {
    let regexForCVV = /^\d{3}$/;
    let cvv = $('#cvv').val();
    if(creditCard){
        if(regexForCVV.test(cvv)){
            $('#cvvMessage').slideUp(1000);
            $('#cvv').removeClass('error');
            return true
        }else {
            $('#cvvMessage').show(1000);
            $('#cvv').addClass('error');
            return false
        }
    } else {
        return true;
    }
}
//Returns value of true if all functions test true paying by paypal/bitcoin
function validatedFormNonCredit (){
    let validated = validName() && validEmail() && validActivities(); 
    return validated;
}
function validatedFormCred () {
    let validated = validName() && validEmail() && validActivities() && credit_cardvalid() && zipcodeValid() && cvvValid();
    return validated;
}

//Tests to make sure form was filled out the correct way.
$('form').submit(function(e){
    validName();
    validEmail();
    validActivities();
    credit_cardvalid();
    zipcodeValid();
    cvvValid();
    if($('#payment option').eq(1).prop('selected')){
        validatedFormCred();
        if(validatedFormCred()){
            return;
        }else {
            e.preventDefault();
        }
    }else {
        validatedFormNonCredit();
        if(validatedFormNonCredit()){
            return;
        }else {
            e.preventDefault();
        }
    }
});
//Key up handler for email.
$('#mail').keyup(function(e){
    validEmail();
})
//Key Up handler for name.
$('#name').keyup((e)=>{
    validName();
})
//Key Up handler for Credit Card
$('#cc-num').keyup((e)=>{
    credit_cardvalid();
})