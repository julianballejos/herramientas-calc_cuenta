calculo(1);

document.getElementById("ammount_1").addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		var boton_mas=document.getElementById("mas_1");
	  event.preventDefault();
	  addField(boton_mas);
	}
});

function calculo(n){
	
	var form1=document.querySelectorAll('.ammount')

	let puso = [];
	for(j=0;j<form1.length;j++){
		puso.push(form1[j].value);
	}

	var sum_puso=0;
	for(j=0;j<puso.length;j++){sum_puso=sum_puso+(+puso[j])}

	var debe= document.getElementById("ammount_"+n).value-sum_puso/puso.length

	if (debe<0){s=" debe";col="red"}else{s=" a favor";col="green"}

	document.getElementById("debe_"+n).innerHTML = " $"+Math.abs(Math.floor(debe)).toLocaleString()+s;
	document.getElementById("debe_"+n).style.color = col;
	//document.getElementById("debe_"+n).classList.remove("conclusion");

}

function recalcula(){

	var form1=document.querySelectorAll('.ammount')
	var form2=document.querySelectorAll('.conclusion')

	let puso = [];
	for(j=0;j<form1.length;j++){
		puso.push(form1[j].value);
	}

	var sum_puso=0;
	for(j=0;j<puso.length;j++){sum_puso=sum_puso+(+puso[j])}

	for(k=0;k<form1.length;k++){
		debe= puso[k]-sum_puso/puso.length
		if (debe<0){s=" debe";col="red"}else{s=" a favor";col="green"}
		form2[k].innerHTML = "$ "+Math.abs(Math.floor(debe)).toLocaleString()+s;
		form2[k].style.color = col;

		
	}

}


var index=2;

function addField(plusElement){

	let displayButton = document.querySelector("form button");
	//var index=document.querySelectorAll('.names').length;

	//console.log(index);

	// Stopping the function if the input field has no value.
	//if(plusElement.previousElementSibling.value.trim() === ""){
	//	return false;
	//}

	// creating the div container.
	let div = document.createElement("div");
	div.setAttribute("class", "field");
	div.setAttribute("id", "linea_"+(index));

	console.log("Estoy en addField("+index+") fila 50. div container creado")

	// Creating the persona element.
	let field = document.createElement("input");
	field.setAttribute("type", "text");
	field.setAttribute("name", "nombres[]");
	//field.setAttribute("value", "Nombre "+(index));
	field.setAttribute("placeholder", "Nombre "+(index)+"...");
	field.setAttribute("class", "names");
	field.setAttribute("id", "name_"+(index));

	console.log("Estoy en addField("+index+") fila 60. input nombre creado")

	// Creating the puso element.
	let field2 = document.createElement("input");
	field2.setAttribute("type", "number");
	field2.setAttribute("name", "puso[]");
	//field2.setAttribute("value", 0);
	field2.setAttribute("placeholder", "Monto...");
	field2.setAttribute("class", "ammount");
	field2.setAttribute("id", "ammount_"+(index));


	console.log("Estoy en addField("+index+") fila 71. input puso creado")
	

	// Creating the resultado element.
	let resu = document.createElement("div");
	resu.setAttribute("id","debe_"+(index))	
	resu.setAttribute("class","conclusion")	

	console.log("Estoy en addField("+index+") fila 78. div resu creado")

	

	// Creating the plus span element.
	let plus = document.createElement("span");
	plus.setAttribute("onclick", "addField(this)");
	let plusText = document.createTextNode("+");
	plus.appendChild(plusText);

	console.log("Estoy en addField("+index+") fila 88. plus span creado")

	// Creating the minus span element.
	let minus = document.createElement("span");
	minus.setAttribute("onclick", "removeField(this)");
	let minusText = document.createTextNode("-");
	minus.appendChild(minusText);

	console.log("Estoy en addField("+index+") fila 96. minus span creado")



	// Adding the elements to the DOM.
	form.insertBefore(div, displayButton);
	div.appendChild(field);
	div.appendChild(field2);	
	div.appendChild(resu);
	div.appendChild(plus);
	div.appendChild(minus);

	console.log("Estoy en addField("+index+") fila 106. elementos añadidos")
	
	resu.setAttribute("value", calculo(index));



	// Un hiding the minus sign.
	plusElement.nextElementSibling.style.display = "block"; // the minus sign
	// Hiding the plus sign.
	plusElement.style.display = "none"; // the plus sign

	// Cuando se ingresa enter se agrega otra fila
	document.getElementById("ammount_"+(index)).addEventListener("keypress", function(event) {
		if (event.key === "Enter") {
		  event.preventDefault();
		  addField(plus);
		}
	});

	recalcula();
	logpruebas();

	index++

}

function removeField(minusElement){
   minusElement.parentElement.remove();
   logpruebas();
   recalcula();
}

let form = document.forms[0];


//let form0=document.getElementsByClassName('names')
//let form1=document.getElementsByClassName('ammount')

	
function logpruebas(){

	var form0=document.querySelectorAll('.names')
    var form1=document.querySelectorAll('.ammount')

	//let data = new FormData(form1);


	var nombres = [];

	//[].forEach.call(form0, function(elm){
	//	console.log(elm.value);
		//if(elm !== ""){
		//	nombres.push(elm.value);
		//}
	//});

	//form0.forEach( function(elm){
	//	if(elm !== ""){
	//		nombres.push(elm.value);
	//	}
	//});

	//console.log(nombres);

	for(j=0;j<form0.length;j++){
		nombres.push(form0[j].value);
	}

	console.log(nombres);



	//form1.forEach( function(elm){
	//	if(elm !== ""){
	//		nombres.push(elm.value);
	//	}
	//});


	let puso = [];
	for(j=0;j<form1.length;j++){
		puso.push(form1[j].value);
	}

	//console.log(puso);


	var sum_puso=0;
	for(j=0;j<puso.length;j++){sum_puso=sum_puso+(+puso[j])}

	//console.log(nombres);
	console.log(sum_puso);

	//console.log(typeof puso[0])
	//console.log(typeof +puso[0])

	//for(j=0;j<puso.length;j++){console.log(+puso[j])}

	document.getElementById('res_monto_total').innerHTML = "$ "+sum_puso.toLocaleString();
	document.getElementById('res_personas').innerHTML = puso.length;

}



function fetchTextNotes(event){
	// prevent the form to communicate with the server.
	event.preventDefault();

	// Fetch the values from the input fields.
	let data = new FormData(form);


	// Storing the values inside an array so we can handle them.
	// we don't want empty values.
	let nombres = [];
	data.forEach( function(value){
		if(value !== ""){
			nombres.push(value);
		}
	});

	let puso = [];
	data.forEach( function(value){
		if(value !== ""){
			puso.push(value);
		}
	});

	// Output the values on the screen.
	let out = "";
	for(let note of notes){
		out += `
			<p>${note} <span onclick="markAsDone(this)">Mark as done</span></p>
		`;
	}
	document.querySelector(".notes").innerHTML = out;

	// Delete all input elements except the last one.
	let inputFields = document.querySelectorAll(".field");
	inputFields.forEach(function(element, index){
		if(index == inputFields.length - 1){
			element.children[0].value = "";
		}else{
			element.remove();
		}
	});
}

function markAsDone(element){
	element.classList.add("mark");
	element.innerHTML = "&check;";
}