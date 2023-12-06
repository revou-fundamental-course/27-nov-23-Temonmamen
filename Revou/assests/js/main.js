// function slide

function show() {
    document.querySelector(".hamburger").classList.toggle("open");
    document.querySelector(".navigation").classList.toggle("active");
}

// function slide end


// sistem perhitungan luas segitiga
var x = document.getElementById("tinggiSeg");
var y = document.getElementById("lebarSeg");
var z;

function clac1() {
    z = Number(x.value) * Number(y.value) / 2;  // untuk menampilkan di box hasil
    text = "masukkan angka";
    if (x.value > 0 && y.value > 0) {
        console.log(z);
        document.getElementById("hasilSeg").value = z;
    } else if ((x.value === "" || 0, y.value === "" || 0)) {
        document.getElementById("alertProp1").innerHTML = text;
        x.style.borderBlockColor = "red";
        y.style.borderBlockColor = "red";
    }
     else if (isNaN(x.value && y.value)) {
        document.getElementById("alertProp1").innerHTML = text;
        x.style.borderBlockColor = "red";
        y.style.borderBlockColor = "red";
    }
    return;
}

function clacReset1() {
    if (z == z) {
        document.getElementById("hasilSeg").value = "";
        document.getElementById("alertProp1").innerHTML = "";
        x.style.border = "none";
        y.style.border = "none";
        x.value = "";
        y.value = "";
    } else if (isNaN(x.value && y.value)) {
        document.getElementById("alertProp1").value = "";
        document.getElementById("alertProp1").innerHTML = "";
        x.style.border = "none";
        y.style.border = "none";
        x.value = "";
        y.value = "";
    } else if (isNaN(x.value < 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp1").innerHTML = "";
        x.value = "";
        x.style.border = "none";
    } else if (isNaN(y.value < 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        y.value = "";
        y.style.border = "none";
    } 

}
// sistem perhitungan luas segitiga end

// sistem perhitungan keliling segitiga 
var a = document.getElementById("sisiSegA");
var b = document.getElementById("sisiSegB");
var c = document.getElementById("sisiSegC");
let d;

function clac2() {
    d = Number(a.value) + Number(b.value) + Number(c.value);
    text = "masukkan angka";
    if (a.value > 0 && b.value > 0 && c.value > 0) {
        console.log(d);
        document.getElementById("hasilKel").value = d;
    } else if (a.value === "" || 0, b.value === "" || 0, c.value === "" || 0) {
        console.log("masukkan angka");
        document.getElementById("alertProp2").innerHTML = text;
        a.style.borderBlockColor = "red";
        b.style.borderBlockColor = "red";
        c.style.borderBlockColor = "red";
    } 
    else if (isNaN(a.value && b.value && c.value)) {
        document.getElementById("alertProp2").innerHTML = text;
        a.style.borderBlockColor = "red";
        b.style.borderBlockColor = "red";
        c.style.borderBlockColor = "red";
    }
    return;
}

function clacReset2() {
    if (d == d) {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        a.style.border = "none";
        b.style.border = "none";
        c.style.border = "none";
        a.value = "";
        b.value = "";
        c.value = "";
    } else if (isNaN(a.value && b.value && c.value || a.value && b.value && c.value < 0 || a.value && b.value && c.value > 0)) {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        a.style.border = "none";
        b.style.border = "none";
        c.style.border = "none";
        a.value = "";
        b.value = "";
        c.value = "";
    } else if (isNaN(a.value < 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        a.value = "";
        a.style.border = "none";
    } else if (isNaN(b.value < 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        b.value = "";
        b.style.border = "none";
    } else if (isNaN(c.value < 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        c.value = "";
        c.style.border = "none";
    } 
}
// sistem perhitungan keliling segitiga end