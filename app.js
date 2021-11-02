const bag =document.querySelector(".bag");
let bagprice = 1 ;

const bagnumber = document.getElementById("bagspan");
const bagproTotal = document.getElementById("bagproTotal");

const shoes =document.querySelector(".shoes");
let shoesprice = 1;

const shoesnumber = document.getElementById("shoesspan");
const shoesproTotal = document.getElementById("shoesproTotal");

const clock =document.querySelector(".clock");
let clockprice = 1;

const clocknumber = document.getElementById("clockspan");
const clockproTotal = document.getElementById("clockproTotal");

const subtotal = document.getElementById("subtotal");

const tax = document.getElementById("taxtotal");

const alltotal = document.getElementById("alltotal");

let bagcost = 25.99;
let shoescost = 45.99;
let clockcost = 74.99;





    bag.addEventListener("click",e =>{
        
     
        
        if (e.target.classList.contains('bagdecrease')) {
            if(bagprice > 1){
            bagprice -= 1 ;
            bagnumber.innerHTML= bagprice;
            bagcost = bagprice * 25.98 
            bagproTotal.innerHTML = `Product Total: $${bagcost}`;
            let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2);
            subtotal.innerHTML = `$${subtot}`; 
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;
        
        
        }}
        else if (e.target.classList.contains('bagincrease')) {
            if(bagprice < 9){
            bagprice += 1;
            bagnumber.innerHTML = bagprice;
            bagcost = bagprice * 25.98 
            bagproTotal.innerHTML = `Product Total: $${bagcost}`;let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2);
            subtotal.innerHTML = `$${subtot}
            `;
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;
            
        
        }}
        
        

        if (e.target.classList.contains("remove")) {
            e.target.parentElement.parentElement.parentElement.remove();
            bagcost = 0 ;
            let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2);
            subtotal.innerHTML = `$${subtot}
            `;
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;
        
        } 
        
    }); 
    shoes.addEventListener("click",e =>{
        
        // let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2);
        
        if (e.target.classList.contains('shoesdecrease')) {
            if(shoesprice > 1){
            shoesprice -= 1 ;
            shoesnumber.innerHTML= shoesprice;
            shoescost = (shoesprice * 45.99).toFixed(2); 
            shoesproTotal.innerHTML = `Product Total: $${shoescost}`;
            let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2);
            subtotal.innerHTML = `$${subtot}`;
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;
        }}
        else if (e.target.classList.contains('shoesincrease')) {
            if(shoesprice < 9){
            shoesprice += 1;
            shoesnumber.innerHTML = shoesprice;
            shoescost = (shoesprice * 45.99).toFixed(2);
            shoesproTotal.innerHTML = `Product Total: $${shoescost}`;
            let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2);
            subtotal.innerHTML = `$${subtot}`;
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;
        }}
        if (e.target.classList.contains("remove")) {
            e.target.parentElement.parentElement.parentElement.remove();
            shoescost = 0;
            let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2);
            subtotal.innerHTML = `$${subtot}`;
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;
        } 
    });

    clock.addEventListener("click",e =>{
               
        if (e.target.classList.contains('clockdecrease')) {
            if(clockprice > 1){
            clockprice -= 1 ;
            clocknumber.innerHTML = clockprice;
            clockcost =(clockprice * 74.99).toFixed(2); 
            clockproTotal.innerHTML = `Product Total:$${clockcost}`;
            let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2);
            subtotal.innerHTML = `$${subtot}`;
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;

        }}
        else if (e.target.classList.contains('clockincrease')) {
            if(clockprice < 9){
            clockprice += 1;
            clocknumber.innerHTML = clockprice;
            clockcost =(clockprice * 74.99).toFixed(2);
            clockproTotal.innerHTML = `Product Total:$${clockcost}`;
            let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2); 
            subtotal.innerHTML = `$${subtot}`;
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;
        }}
        if (e.target.classList.contains("remove")) {
            e.target.parentElement.parentElement.parentElement.remove();
            clockcost = 0;
            let subtot = (Number(bagcost) + Number(shoescost)+Number(clockcost)).toFixed(2); 
            subtotal.innerHTML = `$${subtot}`;
            let taxtop = ((subtot / 100) *18).toFixed(2);
            tax.innerHTML = `$${taxtop}`;
            let total = (Number(taxtop) + Number(subtot) + 15.00).toFixed(2);
            alltotal.innerHTML = `$${total}`;

        } 
    });

