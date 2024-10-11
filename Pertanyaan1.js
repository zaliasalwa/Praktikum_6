// Daftar pelanggan dengan membership
const members = {
  "Lena": true,
  "Rio": false
};

// Fungsi untuk mengecek membership dan menampilkan diskon
function checkDiscount(name) {
  if (members[name]) {
    console.log(name + " Mendapatkan diskon 5%");
  } else {
    console.log(name + " Tidak mendapatkan diskon");
  }
}

// Kasus
checkDiscount("Lena");
checkDiscount("Rio");
