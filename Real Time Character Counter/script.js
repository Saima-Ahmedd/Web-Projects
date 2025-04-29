const  textArea =  document.getElementById("textarea")

const totalChar =document.getElementById("totalchar")

const remChar =document.getElementById("remainingchar")

textArea.addEventListener("keyup", ()=>{
    updateCounter()

})


function updateCounter()
{
    totalChar.innerText = textArea.value.length

    remChar.innerText = textArea.getAttribute("maxLength")-textArea.value.length
}