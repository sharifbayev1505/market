
let jami = 0;
let summa = 0;
let sonlar = [1,1,1,1,1,1,1,1,1];

function plus(i) {
  sonlar[i]++;
  document.getElementById("son"+i).textContent = sonlar[i];
}

function minus(i) {
  if (sonlar[i] > 1) {
    sonlar[i]--;
    document.getElementById("son"+i).textContent = sonlar[i];
  }
}

function savatga(nomi, narx, i) {
  jami += sonlar[i];
  summa += narx * sonlar[i];
  document.getElementById("jamiMahsulot").textContent = "Jami mahsulot: " + jami + " ta";
  document.getElementById("jamiSumma").textContent = "Umumiy summa: " + summa.toLocaleString('uz-UZ') + " so‘m";
  sonlar[i] = 1;
  document.getElementById("son"+i).textContent = 1;
}

function tozalash() {
  jami = 0;
  summa = 0;
  document.getElementById("jamiMahsulot").textContent = "Jami mahsulot: 0 ta";
  document.getElementById("jamiSumma").textContent = "Umumiy summa: 0 so‘m";
}


