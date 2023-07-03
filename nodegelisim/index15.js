/* 1. Girilen sayının çift olup olmadığını kontrol eden bir fonksiyon yazın. Bu fonksiyon, girilen sayı çift ise true, 
tek ise false döndürsün. Bu fonksiyon 2. parametre olarak bir callback fonksiyonu da alsın ve sonucu callback fonksiyonuna göndersin.
Callback fonksiyonu eğer sonuç true ise girilen sayının çift olduğunu, false ise girilen sayının tek olduğunu konsola yazdırsın.

2. İçine girilen sayının faktöriyelini hesaplayan bir recursive fonksiyon yazın. Fonksiyon içerisinde özel metot veya döngü kullanmayın.()
*/

////////// 1.Örnek Çözüm:
// function call_back_function(result) {
//     var text= (result==true)? "girilen sayı çift":"GİRİLEN SAYI TEK"
//     console.log(text)
// }
// function cift_mi(x,callback) {
//     var result =(x% 2==0)? true : false
//     callback(result)
// }
// cift_mi(0,call_back_function)


//////// 2.Örnek Çözüm:
// function recursive_fac(x) {
//     if (x == 0) return 1;
//     else return x * recursive_fac(x - 1);
// }
// console.log(recursive_fac (2));
//////////////////////////////////////////////////////////////
import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('INDEX SAYFASI');
});
app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
}); // type : modul olması lazım 
