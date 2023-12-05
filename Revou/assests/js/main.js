function show() {
    document.querySelector(".hamburger").classList.toggle("open");
    document.querySelector(".navigation").classList.toggle("active");
}

var x = document.getElementById("tinggiSeg");
var y = document.getElementById("lebarSeg");
var z;

function clac() {
    z = x.value * y.value / 2;  // untuk menampilkan di box hasil
    
    if (x.value >= 0 && y.value >= 0 ) {
        console.log(z)
        document.getElementById("hasilSeg").value = z;
    }
    
} 

function clacReset() {
    if (z == z) {
        document.getElementById("hasilSeg").value = "";
        x.value = "";
        y.value = "";
    }

}
