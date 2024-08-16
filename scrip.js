// const body=document.getElementsByTagName("body")[0]
// const card=document.createElement("div")
// const a=document.createElement("img")
// const h1=document.createElement("h1")
// const p=document.createElement("p")
// const button=document.createElement("button")




// h1.textContent="Twitter"


// p.textContent="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus rerum aut ipsum quo delectus adipisci quod incidunt accusamus velit."
// button.textContent="Button";
// button.classList.add("btn")
// a.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
// card.classList.add("card")
// button.style="font-size:25px;"

//
// card.appendChild(h1)
// card.appendChild(p)
// card.appendChild(button)
// body.appendChild(card)

const body=document.getElementsByTagName("body")[0];
const plus=document.getElementById("plus");
const mines=document.getElementById("mines");
const h1 = document.getElementById("number");



plus.addEventListener("click",()=>{

    h1.textContent++;
        
})
mines.addEventListener("click",()=>{

    h1.textContent--;
        
})


// btn.addEventListener("click",()=>{
//     // body.style.backgroundColor="red";
//     body.classList.add("qizil");
//     body.classList.remove("oq");
//     body.classList.remove("qizil");
//     body.classList.add("oq");

// })
// a.addEventListener("click",()=>{
//     // body.style.backgroundColor="aqua";
//     // a.style="text-align:center  "
//     // body.classList.remove("qizil");
//     // body.classList.add("oq");

// })



   

