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
    z = x.value * y.value / 2;  // untuk menampilkan di box hasil
    if (x.value >= 0 && y.value >= 0) {
        console.log(z)
        document.getElementById("hasilSeg").value = z;
    } else if (isNaN(x.value && y.value || x.value && y.value < 1 || x.value && y.value > 1)) {
        text = "masukkan angka";
    }
    document.getElementById("alertProp1").innerHTML = text;
}

function clacReset1() {
    if (z == z) {
        document.getElementById("hasilSeg").value = "";
        x.value = "";
        y.value = "";
    } else if (isNaN(x.value && y.value || x.value && y.value < 1 || x.value && y.value > 1)) {
        document.getElementById("alertProp1").value = "";
        x.value = "";
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
    if (a.value > 0 && b.value > 0 && c.value > 0) {
        console.log(d);
        document.getElementById("hasilKel").value= d;
    } else if (a.value === "" || 0, b.value === "" || 0, c.value === "" || 0) {
        console.log("masukkan angka")
        document.getElementById("alertProp2").innerHTML = text;
    }
    else if (isNaN(a.value && b.value && c.value)) {
        document.getElementById("alertProp2").innerHTML = text;
    }

}

function clacReset2() {
    if (d == d) {
        document.getElementById("hasilKel").value = ""
        document.getElementById("alertProp2").innerHTML = ""
        a.value = ""
        b.value = ""
        c.value = ""
    } else if (isNaN(a.value && b.value && c.value || a.value && b.value && c.value < 1 || a.value && b.value && c.value > 1)) {
        document.getElementById("hasilKel").value = ""
        document.getElementById("alertProp2").innerHTML = ""
        a.value = ""
        b.value = ""
        c.value = ""
    }
}