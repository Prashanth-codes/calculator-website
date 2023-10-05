let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
let str=`error`
let string = ''

buttons.forEach(element =>
    {
    element.addEventListener('click', (b)=>{
        try{
            if(b.target.innerText == '='){
                string = String(eval(string))
                inputBox.value = string;
            }
            else if (b.target.innerText == 'AC'){
                string = '';
                inputBox.value = string;
            }
            else if(b.target.innerText == 'DEL'){
                string = string.substring(0,string.length-1)
                inputBox.value = string;
            }
            /*else if(b.target.id == 'plusMinus'){
                string = String(-eval(string))
                inputBox.value = string;
            }*/
            else{
                string += b.target.innerText
                inputBox.value = string
            }
        }
        catch(err)
        {
            inputBox.value = `Invalid`;
        }
    })
})












































