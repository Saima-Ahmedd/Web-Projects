const btnsEle = document.querySelectorAll("button")
// console.log(btnsEle);
const inputEle = document.getElementById("result")

for(let i = 0; i<btnsEle.length; i++){
    btnsEle[i].addEventListener("click", ()=>{
        // console.log(btnsEle[i].textContent);
        const btnValue = btnsEle[i].textContent
        if(btnValue === "C"){
            clearResult()
        }
        else if(btnValue === "="){
            calculateResult()
        }else{
            appendValue(btnValue)
        }
    })
}


function clearResult(){
    inputEle.value = ""
}

function calculateResult(){
    inputEle.value = eval(inputEle.value)
}
function appendValue(btnValue){
    inputEle.value += btnValue
}


document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Allow digits and operators
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    }
    // Enter key for equals
    else if (key === "Enter") {
        calculateResult();
    }
    // Backspace to delete last character
    else if (key === "Backspace") {
        inputEle.value = inputEle.value.slice(0, -1);
    }
    // Escape or 'c' to clear
    else if (key.toLowerCase() === "c" || key === "Escape") {
        clearResult();
    }
});
