document.body.onload = () =>{
    updateVisitCount();
}

document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.ham').classList.add("show")
})

document.querySelector('.close').addEventListener("click", ()=>{
    document.querySelector('.ham').classList.remove("show")
})

const span = document.querySelector(".count");

function updateVisitCount() {
	fetch(`https://api.countapi.xyz/hit/${number}`)
	.then(res => res.json())
	.then(res => {
		span.innerText = res.value;
	})
}