unction getName() {
    var year = document.getElementById("yob").value;
    var month = document.getElementById("month").value;
    var dayOfMonth = document.getElementById("day").value;
    var year = document.getElementById("yob").value;
    var date = new Date (`${dayOfMonth}/${month}/${year}`);
    var date = new Date (`${year}-${month}-${dayOfMonth}`);
    var birthDay = date.getDay();
    var male = document.getElementById("male");
    var female = document.getElementById("female");
 @-11,13 +11,13 @ function getName(){
    var maleNames = ["Kwasi", "Kwadwo", "Kwaku", "Kwabena", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "AKua", "Yaa", "Afua", "Ama"];

    if (year == "" || year.length < "4" || year.length > "4"){
    if (year == "" || year.length < 4 || year.length > 4){
        alert("Hey you need to enter a valid year!");
    }
    else if (month < 0 || month > 12 || month == "" ){
    else if (month < 0 || month > 12 ){
        alert("Hey you need to enter a valid month!");
    }
    else if( dayOfMonth < 0 || dayOfMonth >31 || dayOfMonth == "") {
    else if( dayOfMonth < 0 || dayOfMonth >31) {
        alert("Hey you need to re-enter a valid day!");
    }
    else if (male.checked == false && female.checked == false){
@@ -30,7 +30,7 @@ function getName(){
        result.innerHTML = "Hey " + femaleNames[birthDay] +  ". Well, since you were born on a " + days[birthDay] + " that's your Ghanaian name.";
    }
    else{
        alert("Come up Akan, just run!")
        alert("Come on Akan, just run!")
    }
}