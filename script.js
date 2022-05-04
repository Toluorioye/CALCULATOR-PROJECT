let display = document.getElementById('display');
let buttons = Array.from(document.querySelectorAll('.button'));

buttons.map(button =>{
    button.addEventListener('click', (e) => {
      switch (e.target.innerText){
          case "C":
            display.innerHTML =" ";
            break;
            case "←":
                if(display.innerHTML){
                display.innerHTML= display.innerHTML.slice(0,-1)
                };
                break;
                case "=":
                    try{
                    display.innerHTML = eval(display.innerHTML);
                    } catch {
                        display.innerHTML ="Error"
                    }
                    break;
          default:
              display.innerHTML += e.target.innerText;
      }












        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
    })
})