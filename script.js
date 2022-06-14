/*Método 1*/
const textBox1 = document.getElementById("txt-name-1");
const label1 = document.getElementById("lbl-name-1");
const button1 = document.getElementById("btn-name-1");

function mostrarValor1() {
    label1.textContent = textBox1.value;
}

/*Método 2*/
const textBox2 = document.getElementById("txt-name-2");
const label2 = document.getElementById("lbl-name-2");
const button2 = document.getElementById("btn-name-2");

button2.addEventListener("click", () => (label2.textContent = textBox2.value));

/*Método 3*/
const textBox3 = document.getElementById("txt-name-3");
const label3 = document.getElementById("lbl-name-3");
const button3 = document.getElementById("btn-name-3");

button3.addEventListener("click", mostrarValor3)

function mostrarValor3() {
    label3.textContent = textBox3.value;
}
