let daysH=document.getElementById("date");
let monthH=document.getElementById("month");
let yearH=document.getElementById("year");
  

let output_year=document.getElementById("output-year");
let output_month=document.getElementById("output-month");
let output_day=document.getElementById("output-day");

const error_day=document.querySelector(".error-day");
const error_month=document.querySelector(".error-month");
const error_year=document.querySelector(".error-year");


const btn=document.getElementById("calc-btn");
var today=new Date;

let d=today.getDate();
let m=today.getMonth()+1;

let y=today.getFullYear();

let maxDays=0;
let monthNum=0;
btn.addEventListener("click",(days,month,year)=>{
  days=daysH.value;
  month=monthH.value;
  year=yearH.value;
  if (daysH.value==""||monthH.value==""||yearH.value==""){

}

if(m==1){
  maxDays=31;
  monthNum=1;
error_day.textContent="must be valid date";
}
else if(m==2){
  maxDays=28;
  monthNum=2;
  
}
else if(m==3){
  maxDays=31;
  monthNum=3;
  
}

else if(m==4){
  maxDays=30;
  monthNum=4;
  
}
else if(m==5){
  maxDays=31;
monthNum=5;
  }
  else if(m==6){
    maxDays=30;
    monthNum=6;
    
  }
  else if(m==7){
    maxDays=31;
    monthNum=7;
  }
  
  else if(m==8){
    maxDays=30;
    monthNum=8;
  }
  else if(m==9){
    maxDays=31;
    monthNum=9;
  }
  else if(m==10){
    maxDays=30;
    monthNum=10;
  }
   else if(m==11){
    maxDays=31;
    monthNum=11;
  }
  
  else{
    maxDays=31;
    monthNum=12;
  }
 var ageYears=y-year;
 if(m<=month){
  m=m+12;

 } 
var ageMonths=m-month;
var ageDays=(maxDays-d) + parseInt(days);

output_year.innerHTML=ageYears;
output_month.innerHTML=ageMonths;
output_day.innerHTML=ageDays;


}); 