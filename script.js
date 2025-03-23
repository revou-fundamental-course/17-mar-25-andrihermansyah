
function hitung() {
    let panjang = document.getElementById("panjang").value;
    let lebar = document.getElementById("lebar").value;

    if (panjang && lebar) {
        let luas = panjang * lebar;
        let keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));

        document.getElementById("luas").textContent = luas;
        document.getElementById("keliling").textContent = keliling;
    } else {
        alert("Masukkan panjang dan lebar dengan benar!");
    }
}
