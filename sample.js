const output_year=document.querySelector(".output-year");
const output_month=document.querySelector(".output-month");
const output_day=document.querySelector(".output-day");
const submit_btn=document.querySelector(".submit-btn");
let isValid=false;

const input_year=document.querySelector("#year");
const input_month=document.querySelector("#month"); 
const input_day=document.querySelector("#day");

const error_day=document.querySelector(".error-day");
const error_month=document.querySelector(".error-month");
const error_year=document.querySelector(".error-year");
submit_btn.addEventListener('click',calculateDate);
input_day.addEventListener("input",(e)=>{
    if(+input_day.value>31){
        error_day.textContent="must be valid date";
        isValid=false;
        return;

    }
    else{
        isValid=true;
        error_day.textContent="";

    }
    if(+input_day.value===0){
        isValid=false;
error_day.textContent="this field is required";
return;

    }
else{
    error_day.textContent="";

}

});
input_month.addEventListener("input",(e)=>{
    if(+input_month.value>12){
        error_month.textContent="must be valid month";
        isValid=false;
        return;

    }
    else{
        isValid=true;
        error_month.textContent="";

    }
    if(+input_month.value===0){
        isValid=false;
error_month.textContent="this field is required";
return;

    }
else{
    error_month.textContent="";

}

});
input_year.addEventListener("input",(e)=>{
    if(+input_year.value>2023){
        error_year.textContent="must be valid year";
        isValid=false;
        return;

    }
    else{
        isValid=true;
        error_year.textContent="";

    }
    if(+input_year.value===0){
        isValid=false;
error_year.textContent="this field is required";
return;

    }
else{
    error_year.textContent="";

}

});
function calculateDate(){
if(isValid){
let birthday=`${input_month.value}/${input_day.value}/${input_year.value}`;

let birthdayobj=new Date(birthday);
let ageDiffMill=Date.now()-birthdayobj;
let ageDate=new Date(ageDiffMill);
let ageyears=ageDate.getUTCFullYear()-1970;

let agemonth=ageDate.getUTCMonth();
let ageday=ageDate.getUTCDay()-1;
output_day.textContent=ageday;
output_month.textContent=agemonth;
output_year.textContent=ageyears;
}
else{
    alert("error");

}

}