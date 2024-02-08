let input = document.getElementById("input");
let change = document.getElementById("chg");
let clear = document.getElementById("clr");
let def = document.getElementById("del");

function color(){
    document.body.style.background = input.value;
    if((document.body.style.background = input.value)==false){
        alert("Field is Empty> Enter a color of your choise!!");
        input.value = "";
    }
    else if(document.body.style.background != input.value){
        alert("The color "+ input.value+ " Donot exist!!");
        // input.value = "";
    }
    
    else if(input.value == "black" ){
        let head = document.getElementById("heading"). style. color = "white";
        input.value = "";
    }
    else{
        let head = document.getElementById("heading"). style. color = "black";
        input.value = "";
    }
}
document.querySelector('#input').addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        document.body.style.background = input.value;
        if((document.body.style.background = input.value)==false){
            alert("Field is Empty> Enter a color of your choise!!");
            // input.value = "";
        }
        else if(document.body.style.background != input.value){
            alert("The color "+ input.value+ " Donot exist!!");
            input.value = "";
        }
        
        else if(input.value == "black" ){
            let head = document.getElementById("heading"). style. color = "white";
            input.value = "";
        }
        else{
            let head = document.getElementById("heading"). style. color = "black";
            input.value = "";
        }
    }
});
document.getElementById("gen").addEventListener("keydown",(i)=>{
    if(i.key === "Escape"){
        confirm("Are you sure you want to exit?");
        location.href = "https://www.google.co.in/";
    }
})

function damage(){
    input.value = "";
}

def.addEventListener("click",()=>{
    input.value = "";
    document.body.style.background = "white";
})
