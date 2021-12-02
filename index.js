const bdayDate = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputShown = document.querySelector("#output");
//console.log("hi");

checkButton.addEventListener('click',checkBirthDayIsLucky)
function checkBirthDayIsLucky(){
    var dobEntered = bdayDate.value;
    var luckynoEntered = luckyNumber.value;
    //console.log(bdayDate.value);
    var sum = calculateSum(dobEntered);
    if(sum&&luckynoEntered){
        if((sum%luckynoEntered)===0 )
        {
            console.log("lucky");
            outputShown.innerText = "Hurray!!your birthday lucky!!";
        }
        else{
        outputShown.innerText = "Not so lucky!! No problem buddy you make your own luck!!";
        }
    }   
    else{
      outputShown.innerText = "Please enter valid inputs";
        }                                                                                                                 
    
}
    
function calculateSum(dobEntered){
dobEntered = dobEntered.replaceAll("-","");
let sum=0;
for(let i=0; i<dobEntered.length;i++)
{
    sum = sum+Number(dobEntered.charAt(i));
}
return sum;
}