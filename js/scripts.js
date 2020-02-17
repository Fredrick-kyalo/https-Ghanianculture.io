function getAkanName(){

    var MM = document.querySelector("#month").value;
    var YYYY = document.querySelector("#year").value;
    var DD = document.querySelector("#day").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;


    if ((MM=="") || (isNaN(MM) || (MM < 0) || (MM>12))) {
        alert('Invalid Month! Please enter correct Month');
        return;
    }

    if ((YYYY=="") || (isNaN(YYYY) || (YYYY < 0))) {
        alert('Invalid Year! Please enter correct Year');
        return;
    }


    if ((DD=="") || (isNaN(DD) || (DD < 0) || (DD>31))) {
        alert('Invalid Day of the Month! Please enter correct Day of the Month');
        return;
    }


    var CC = YYYY.substring(0, 2)
    var YY = YYYY.substring(2, 4)

    // TODO Confirm why formular is inconsistent
    // dayOfTheWeek = (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

    var birthday =  new Date(YYYY, MM, DD);
    var dayOfTheWeek = birthday.getDay();

    var name = "";
    // Sunday
    if (dayOfTheWeek==1){
        if(gender=="male"){
            name = "Kwasi"
        } else {
            name = "Akosua"
        }
    }

     // Monday
     if (dayOfTheWeek==2){
        if(gender=="male"){
            name ="Kwadwo"
        } else {
            name ="Adwoa"
        }
    }

     // Tuesday
     if (dayOfTheWeek==3){
        if(gender=="male"){
            name ="Kwabena"
        } else {
            name ="Abenaa"
        }
    }
     // Wednesday
     if (dayOfTheWeek==4){
        if(gender=="male"){
            name ="Kwaku"
        } else {
            name ="Akua"
        }
    }
     // Thursday
     if (dayOfTheWeek==5){
        if(gender=="male"){
            name ="Yaw"
        } else {
            name ="yaa"
        }
    }
     // Friday
     if (dayOfTheWeek==6){
        if(gender=="male"){
            name ="Kofi"
        } else {
            name ="Afua"
        }
    }
     // Saturday
     if (dayOfTheWeek==7){
        if(gender=="male"){
            name ="Kwame"
        } else {
            name ="Ama"
        }
    }

    alert(
        'The month is ' + MM + '\n'+
        'The century is ' + CC+ '\n'+
        'The year is ' + YY+ '\n'+
        'The day is ' + DD + '\n'+
        'The gender is ' + gender + '\n'+
        'The day of the week born is ' + dayOfTheWeek  + '\n'+
        'Your Akan name is ' + name )
}