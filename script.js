//Soal 1 (Membuat Function dengan return string)
// Buatlah function dengan nama cetakFunction()

//No 1
//jawab
console.log("jawaban nomor 1 dibawah ini")
function cetakFunction(a){
    return `Hallo nama saya ` + a
}

console.log(cetakFunction("bima"));

//No 2
console.log("jawaban nomor 2 dibawah ini")
function myFunction(a, b){
    return angka1 + angka2; 
}

let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2);
console.log(output);

//No 3 (Mengubah dalam bentuk arrow function)
// Terdapat sebuah function sebagai berikut :

// function Hello(){

//     return "Hello"

// }

// ubahlah function tersebut kedalam bentuk function ES6 ( Arrow function)
//jawab no 3
const hello = () =>{
    return a = "halo ges";

}
let bimz = hello()
console.log("soal no 3");
console.log(bim);

//No 4 (Memanggil key dalam sebuah object)
//terdapat object sebagai berikut :

// let object = {
//     nama : "john",
//     umur : 22,
//     bahasa : "indonesia"
// }

// console.log(object.bahasa)

//buatlah pemanggilan object dengan key tertentu untuk menghasilkan output seperti ini :"Indonesia"
//jawab no 4
console.log("jawaban nomor 4 dibawah ini")
let manusia = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia",
    showName : function(){
        console.log(`bahasa ${this.bahasa}`);
    },
}

console.log(manusia.bahasa);

//No 5 (mengubah array menjadi object)
//jawab no 5
console.log("jawaban nomor 5 dibawah ini")

let array = ["john doe", "laki laki", "baca buku", 1992]


let object = {
    nama : array[0],
    kelamin : array[1],
    hobi : array[2],
    tahun : array[3],
}

console.log(array)

//No 6 (membuat sebuah array of obbject dan melakukan filter)
// anda diberikan data data buah seperti dibawah ini
// jawab no 6
console.log("jawaban nomor 6 dibawah ini")

const buah =[{
    nama: 'nanas',
    warna: 'kuning',
    bijinya: 'tidak',
    harga : 9000,
},
{
    nama: 'Jeruk',
    warna: 'oranye',
    bijinya: 'ada',
    harga : 8000,
},
{
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    bijinya: 'ada',
    harga : 10000,
},
{
    nama: 'Pisang',
    warna: 'kuning',
    bijinya: 'tidak',
    harga : 11000,
}
,];

let dataBiji = buah.filter((buah) => buah.bijinya === "tidak"); 
console.log(dataBiji.sort());






