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
    document.getElementById("alertProp1").innerHTML = "";
    text2 = "angka yang anda masukka belum lengkap"
    if (x.value > 0 && y.value > 0) {
        console.log(z);
        document.getElementById("hasilSeg").value = z;
    } 
    else if (x.value === "" || 0, y.value === "" || 0) { 
        document.getElementById("alertProp1").innerHTML = text2;
    }
    else if (isNaN(x.value, y.value)) {
        document.getElementById("alertProp1").innerHTML = text;
    }
    return;
}

function clacReset1() {
    if (z == z) {
        document.getElementById("hasilSeg").value = "";
        document.getElementById("alertProp1").innerHTML = "";
        x.value = "";
        y.value = "";
    } else if (isNaN(x.value && y.value)) {
        document.getElementById("alertProp1").value = "";
        document.getElementById("alertProp1").innerHTML = "";
        x.value = "";
        y.value = "";
    } else if (isNaN(x.value > 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp1").innerHTML = "";
        x.value = "";
        x.style.border = "none";
    } else if (isNaN(y.value > 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        y.value = "";
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
    text2 = "angka yang anda masukkan belum lengkap"
    document.getElementById("alertProp2").innerHTML = "";
    if (a.value > 0 && b.value > 0 && c.value > 0) {
        console.log(d);
        document.getElementById("hasilKel").value = d;
    } else if (a.value === "" || 0, b.value === "" || 0, c.value === "" || 0) {
        console.log("masukkan angka");
        document.getElementById("alertProp2").innerHTML = text2;
    } 
    else if (isNaN(c.value, a.value, b.value)) {
        document.getElementById("alertProp2").innerHTML = text;
    }
    return;
}

// mereset di setiap input
function clacReset2() {
    if (d == d) {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        a.value = "";
        b.value = "";
        c.value = "";
    } else if (isNaN(a.value && b.value && c.value || a.value && b.value && c.value < 0 || a.value && b.value && c.value > 0)) {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        a.value = "";
        b.value = "";
        c.value = "";
    } else if (isNaN(a.value < 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        a.value = "";
    } else if (isNaN(b.value < 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        b.value = "";
    } else if (isNaN(c.value < 0))  {
        document.getElementById("hasilKel").value = "";
        document.getElementById("alertProp2").innerHTML = "";
        c.value = "";
    } 
}
// sistem perhitungan keliling segitiga end