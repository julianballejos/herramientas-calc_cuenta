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

	//sugerirTransferencias();

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


function sugerirTransferencias() {
    var nombres = document.querySelectorAll('.names');
    var montos = document.querySelectorAll('.ammount');
    let transferencias = document.getElementById("transferencias");
    transferencias.innerHTML = ""; // Limpiamos sugerencias previas

    let personas = [];

    let total = 0;
    montos.forEach(m => total += parseFloat(m.value || 0));

    let promedio = total / montos.length;

    // Creamos el array de personas con saldo neto
    for (let i = 0; i < nombres.length; i++) {
        let saldo = parseFloat(montos[i].value || 0) - promedio;
        personas.push({
            nombre: nombres[i].value || "Persona " + (i + 1),
            saldo: Math.round(saldo) // Redondeamos para evitar decimales feos
        });
    }

    let deudores = personas.filter(p => p.saldo < 0);
    let acreedores = personas.filter(p => p.saldo > 0);

    let resultado = [];

    // Vamos haciendo las transferencias sugeridas
    while (deudores.length && acreedores.length) {
        let deudor = deudores[0];
        let acreedor = acreedores[0];

        let montoTransferir = Math.min(Math.abs(deudor.saldo), acreedor.saldo);

        resultado.push(`${deudor.nombre} debería transferir $${montoTransferir.toLocaleString()} a ${acreedor.nombre}<br>`);

        deudor.saldo += montoTransferir;
        acreedor.saldo -= montoTransferir;

        if (Math.abs(deudor.saldo) < 1) deudores.shift();
        if (Math.abs(acreedor.saldo) < 1) acreedores.shift();
    }

    if (resultado.length === 0) {
        transferencias.innerHTML = "No se requieren transferencias 🎉";
    } else {
        transferencias.innerHTML = resultado.map(r => `<div>${r}</div>`).join("");
    }
}

function compartirURL() {
    const nombres = Array.from(document.querySelectorAll(".names")).map(input => input.value.trim());
    const montos = Array.from(document.querySelectorAll(".ammount")).map(input => input.value.trim());

    const datos = nombres.map((nombre, i) => ({
        n: encodeURIComponent(nombre),
        m: encodeURIComponent(montos[i] || 0)
    }));

    const query = datos.map(d => `n=${d.n}&m=${d.m}`).join("&");

    const nuevaURL = `${window.location.origin}${window.location.pathname}?${query}`;

    // Intentar copiar automáticamente
    navigator.clipboard.writeText(nuevaURL).then(() => {
        alert("¡Link copiado al portapapeles!\nYa podés compartirlo donde quieras.");
    }).catch(() => {
        // Si falla (por permisos del navegador), mostrarlo en un prompt
        prompt("Copiá y compartí este link:", nuevaURL);
    });

}

function cargarDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    const nombres = params.getAll("n");
    const montos = params.getAll("m");

    if (nombres.length > 0) {
        // Borrar los campos actuales (menos el primero)
        document.querySelectorAll(".field").forEach((el, idx) => {
            if (idx > 0) el.remove();
        });

        // Llenar el primer campo
        document.querySelector(".names").value = decodeURIComponent(nombres[0]);
        document.querySelector(".ammount").value = decodeURIComponent(montos[0] || "0");

        // Agregar el resto
        for (let i = 1; i < nombres.length; i++) {
            addField(document.querySelectorAll("span[onclick^='addField']")[i - 1]);
            document.getElementById(`name_${i + 1}`).value = decodeURIComponent(nombres[i]);
            document.getElementById(`ammount_${i + 1}`).value = decodeURIComponent(montos[i] || "0");
        }

        recalcula();
    }
}

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", cargarDesdeURL);
