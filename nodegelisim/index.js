/*var a = '545464'
var total = Number (a)
console.log(total)
*/
/*
Örnek Çalışma 1
1. "Ekmek", "Pasta", "Börek" değerlerini tutan 3 farklı değişken tanımlayın. Belirtilen sırayla her kelimenin ilk üç harfini kesip elde
ettiğiniz sonuçları tek bir değişkende - ile birleştirin ve çıkan sonucun bütün harflerini büyük harfe dönüştürün.
(Beklenen Sonuç: EKM-PAS-BÖR)
2. var num = sayı şeklinde bir "sayi" değişkeni tanımlayın (örn: var num = 5). If - else yapısını kullanarak girilen sayının tek mi yoksa
çift mi olduğunu konsola yazdırın. Eğer girilen sayının tipi Number değilse konsola bir hata mesajı yazdırın.
(İpucu: typeof)
3. var day = sayı şeklinde bir "   " değişkeni tanımlayın (örn: var day = 11). Switch - case yapısını kullanarak girilen
sayının hangi haftaya denk geldiğini konsola yazdırın.
*/

// const { request } = require("express");

// 1.Soru cevabı :

/*
var a="Ekmek";
var b="Pasta";
var c="Börek";
a = a.slice(0, 3), b = b.slice(0, 3), c = c.slice(0, 3);
console.log(a.toUpperCase(),'-', b.toUpperCase(),'-', c.toUpperCase());
*/

//2.Soru Cevabı :

//   !1.yötem!     //
/*
var sayi;
sayi=564666;

if (0 == sayi % 2) {
    console.log('Bu', 'sayı:', sayi, 'Çift');

} else {
    console.log('Bu', 'sayı:', sayi, 'Tek');
}
*/
//   !2.yöntem!   //
/*
var sayi = 5461;
var response = (0 == sayi % 2) ? console.log('Bu', 'sayı:', sayi, 'Çift') : console.log('Bu', 'sayı:', sayi, 'Tek');
*/

// 3.Soru cevabı :
/*
var gun;
gun= 11;
switch (gun%7) {
    case 1:
        console.log("Pazartesi")
        break;
    case 2:
        console.log("Salı")
        break;
    case 3:
        console.log("Çarşamba")
        break;
    case 4:
        console.log("Perşembe")
        break;
    case 5:
        console.log("Cuma")
        break;
    case 6:
        console.log("Cumartesi")
        break;
    case 7:
        console.log("Pazar")
        break;

    default:
        console.log("Hesaplanamadı")
        break;
}
*/ //JSON örnek denem 

// const jsonData = '[{"name": "Alice", "age": 25}, {"name": "Bob", "age": 30}, {"name": "Charlie", "age": 35}]';
// const data = JSON.parse(jsonData);
// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     console.log(data[i].age);
// }

// const jsonData = '[1, 2, 3, 4, 5]';
// const data= JSON.parse(jsonData)
// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
    
// }
//     console.log(jsonData);

