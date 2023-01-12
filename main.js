
let btn = document.getElementById('CosmographDaytona')

btn.addEventListener('click', function(){
    let i = prompt(`Please choose desired quantity (1-10)`)
    let globalPrice = 43340*i
    if (i>0 && i<11) {
        alert(`Thank You for Your purchase \nYou have choosen ${i}x Rolex Cosmograph Daytona`+ '\n' + `Total price: ${globalPrice} $`)
    } else {
        alert('Sorry We could not provide more than 10 items' + '\n' + 'See You soon' )
    }
});

let btn2 = document.getElementById('Submariner')

btn2.addEventListener('click', function(){
    let i = prompt(`Please choose desired quantity (1-10)`)
    let globalPrice = 10000*i
     if (i>0 && i<11) {
        alert(`Thank You for Your purchase \nYou have choosen ${i}x Rolex Submariner14060`+ '\n' + `Total price: ${globalPrice} $`)
     }  else {
        alert('Sorry We could not provide more than 10 items' + '\n' + 'See You soon')
     }      
});

let btn3 = document.getElementById('Day-Date')

btn3.addEventListener('click', function(){
    let i = prompt(`Please choose desired quantity (1-10)`)
    let globalPrice = 99450*i
    if (i>0 && i<11) {
        alert(`Thank You for Your purchase \nYou have choosen ${i}x Rolex Day-Date President`+ '\n' + `Total price: ${globalPrice} $`)
    }  else {
        alert('Sorry We could not provide more than 10 items' + '\n' + 'See You soon')
    } 
});

let btn4 = document.getElementById('Datejust')

btn4.addEventListener('click', function(){
    let i = prompt(`Please choose desired quantity (1-10)`)
    let globalPrice = 86480*i
    if (i>0 && i<11) {
        alert(`Thank You for Your purchase \nYou have choosen ${i}x Rolex Datejust 16200`+ '\n' + `Total price: ${globalPrice} $`)
    }  else {
        alert('Sorry We could not provide more than 10 items' + '\n' + 'See You soon')+ '\n' + `Total price: ${globalPrice} $`
    }    
});

let element = document.querySelector(".back-to-top")

element.addEventListener("click", function() {
  window.scrollTo({top: 0,})
})

window.addEventListener("scroll", function() {
  if (window.scrollY === 0) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
})
