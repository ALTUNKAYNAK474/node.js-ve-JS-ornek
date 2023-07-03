//*DAY 1 GİRİŞ
    //TODO: Alıştırma: Seviye 1
        //! Yorumların kodu okunabilir hale getirebileceğini söyleyen tek satırlık bir yorum yazın
        //yorum satrı yapıldı :D
        //! 30DaysOfJavaScript'e Hoş Geldiniz yazan başka bir tek yorum yazın
        //30DaysOfJavaScript'e Hoş Geldiniz
        //! Yorumların kodu okunabilir, yeniden kullanımı kolay ve bilgilendirici hale getirebileceğini söyleyen çok satırlı bir yorum yazın
        /*
        selam
        dünya
        */
        //! Değer atamadan dört değişken bildirin
        // const a, b, c, d;
        //! Atanan değerlerle dört değişken bildirin
        // let a = 1, b = 2, c = 3, d = 4;
        //! Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı değişkenler bildirin
        // let ad = "Mikail",
        //   soyad = "ALTUNKAYNAK",
        //   medeniDurum = "Bekar",
        //   ulke = "Türkiye",
        //   yas = 20;
//*DAY 2 VERİ TÜRLERİ
    //TODO: Alıştırma: Seviye 1
        //! Challenge adında bir değişken tanımlayın ve bunu '30 Days Of JavaScript' başlangıç ​değerine atayın .
        // let challenge='30 days of js';
        //! Dizeyi , console.log() kullanarak tarayıcı konsolunda yazdırın
        // var abc = "Merhaba, JS!"; console.log(abc);
        //! Dizenin uzunluğunu , console.log() kullanarak tarayıcı konsolunda yazdırın
        // let abc = "Merhaba, JS!";
        // console.log("uzunlık:" + abc.length);
        //! toLowerCase() yöntemini kullanarak tüm dize karakterlerini küçük harflere değiştirin
        // let abc = "Merhaba, JS!";
        // console.log(abc.toLowerCase());
        //! toUpperCase() yöntemini kullanarak tüm dize karakterlerini büyük harflere değiştirin
        // let abc = "JavaScript'in 30 Günü";
        // console.log(abc.toUpperCase());
        //! substr() veya substring() yöntemini kullanarak dizenin ilk kelimesini kesin (dilimleyin)
        // let abc = "Merhaba, JS!";
        // console.log(abc.substring(0,3));
        //! 30 Days Of JavaScript'ten Days Of JavaScript ifadesini dilimleyin.
        // let abc = "30 Days Of JavaScript";
        // let abcs = abc.substring(3);
        // console.log(abcs);
        //! Dizenin bir Dünya Komut Dosyası içerip içermediğini, include () yöntemini kullanarak kontrol edin.
        // let abc = "Uzay,Evren,Dünya,Türkiye,İstanbul";
        // let abcs = abc.includes("Dünya");
        // console.log(abcs);
        //! Dizeyi split() yöntemini kullanarak bir diziye ayırın
        // let abc = "Uzay Evren Dünya Türkiye İstanbul";
        // let abcs=abc.split(' ');
        // console.log(abcs);
        //! 30 Days Of JavaScript dizesini , split() yöntemini kullanarak boşlukta bölün
        // let abc = "30 Days Of JavaScript";
        // let abcs=abc.split(' ');
        // console.log(abcs);
        //! "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" dizesini virgülden ayırın ve bir diziye değiştirin.
        // let abc = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
        // let abcs=abc.split(',');
        // console.log(abcs);
        //! replace() yöntemini kullanarak 30 Günlük JavaScript'i 30 Günlük Python olarak değiştirin .
        // let abc = "30 Days Of JavaScript";
        // console.log(abc.replace("JavaScript", "Python"));
        //! 'JavaScript'in 30 Günü' dizesindeki 11. dizindeki karakter nedir? charAt() yöntemini kullanın .
        // let abc = "JavaScript'in 30 Günü";
        // console.log(abc.charAt(11));
        //! charCodeAt() kullanılarak 'JavaScript'in 30 Günü' dizesindeki J'nin karakter kodu nedir?
        // let abc = "JavaScript'in 30 Günü";
        // console.log(abc.charCodeAt(0)); //? (sol_alt) + ((numlk)74) = J
        //! 30 Günlük JavaScript'te i'nın ilk geçtiği konumu belirlemek için indexOf kullanın.
        // let abc = "JavaScript'in 30 Günü";
        // console.log(abc.indexOf("i"));
        //! 30 Günlük JavaScript'te a öğesinin son geçtiği konumu belirlemek için lastIndexOf öğesini kullanın .
        // let abc = "JavaScript'in 30 Günü";
        // console.log(abc.lastIndexOf('a'));
        //! Bir dizgenin başındaki ve sonundaki boşlukları kaldırmak için trim()'i kullanın . Örneğin ' 30 Days Of JavaScript '.
        // let abcs = "               30 Days Of JavaScript       ";
        // console.log(abcs);          //? trim() X
        // let abc = "               30 Days Of JavaScript       ";
        // console.log(abc.trim(abc)); //? trim() V
        //! 30 Days Of JavaScript dizesiyle startsWith() yöntemini kullanın ve sonucu doğru yapın
        // let abc = "30 Days Of JavaScript";
        // console.log(abc.startsWith('30'));
        //! 30 Days Of JavaScript dizesiyle endsWith() yöntemini kullanın ve sonucu doğru yapın
        // let abc = "30 Days Of JavaScript";
        // console.log(abc.endsWith("ipt"));
        //! 30 Günlük JavaScript'teki tüm a'ları bulmak için match() yöntemini kullanın
        // let abc = "JavaScript'in 30 Günü";
        // console.log(abc.match(/a/gi)); //? g => GLOBAL i=> Harf Harf Parçalama
        //! concat() kullanın ve '30 Days of' ile 'JavaScript'i '30 Days Of JavaScript' tek bir dizede birleştirin.
        // let abc = "30 Days of ";
        // let abcs = "JavaScript";
        // console.log(abc.concat(abcs));
        //! 30 Günlük JavaScript'i 2 kez yazdırmak için repeat() yöntemini kullanın
        // let abc = "30 Günlük JavaScript ";
        // console.log(abc.repeat(2));
    //TODO: Alıştırma: Seviye 2
        //! typeof '10'un tam olarak 10'a eşit olup olmadığını kontrol edin. Değilse tam olarak eşit yapın.
        // if (typeof '10' === typeof 10) {
        //     console.log("türleri eşit");
        // }else{
        //     console.log("türleri eşit değil");
        //     const abc=parseInt('10');
        //     console.log(typeof abc);
        // }
        //! Hem python hem de jargonda 'on' ifadesinin bulunup bulunmadığını kontrol edin
        // var abc = "python , jargon";      
        // console.log(abc.includes('on'));
        //! Umarım bu ders jargonla dolu değildir . Cümlede jargon olup olmadığını kontrol edin .
        // let abc = "Umarım bu ders jargonla dolu değildir.";
        // console.log(abc.includes("jargon"));
        //! 0 ile 100 arasında rasgele bir sayı oluşturun.
        // console.log(Math.random()*100+1);
        //! 50 ile 100 arasında rasgele bir sayı oluşturun.
        // console.log(Math.floor(Math.random() * (50) + 50));
        //! 0 ile 255 arasında rasgele bir sayı oluşturun.
        // console.log(Math.floor(Math.random() * 255));
        //! Rastgele bir sayı kullanarak 'JavaScript' dize karakterlerine erişin.
        // let abc = 'JavaScript';
        // let abcs = Math.floor(Math.random() * abc.length);
        // console.log(abc.charAt(abcs));

    //TODO: Alıştırma: Seviye 3
        //! 'Aşk bu dünyadaki en güzel şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.' Bu cümledeki aşk kelimesinin sayısını sayın .
        // let abc = "Aşk bu dünyadaki en güzel şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.";
        // console.log(abc.match(/aşk/gi).length);
        //! Metinden sayıları çıkararak kişinin toplam yıllık gelirini hesaplayınız. 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurs kazanıyor.
        // let abc = "Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurs kazanıyor.";
        // console.log(abc); //!ERROR BAŞARAMADIK.
//*DAY 3 BOOLEAN, OPERATÖRLER, TARİH
    //TODO: Alıştırma: Seviye 1
        //! firstName, lastName, country, city, age, isMarried, year değişkenini bildirin ve ona bir değer atayın ve farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.
        // const adim = "Mikail";
        // const soyadim = "ALTUNKAYNAK";
        // const dogumYeri = "Türkiye";
        // let yasadıgımYer = "İstanbul";
        // let yasim = 20;
        // let medeniDurum = false ;
        // const yil = 2023;
        // console.log(typeof adim);
        // console.log(typeof soyadim);
        // console.log(typeof dogumYeri);
        // console.log(typeof yasadıgımYer);
        // console.log(typeof yasim);
        // console.log(typeof medeniDurum);
        // console.log(typeof yil);
        //! '10' türünün 10'a eşit olup olmadığını kontrol edin
        // console.log(typeof "10" === typeof 10);
        //! parseInt('9.8')'in 10'a eşit olup olmadığını kontrol edin
        // console.log(parseInt('9.8') === 10); 
        //! Boolean değeri true veya false'tur. Örnek: Doğru JavaScript ifadesi yazın.,
        // console.log(typeof true === typeof true);

    //TODO: Alıştırma: Seviye 2
        //! Kullanıcıdan üçgenin a, b ve c kenarlarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın
        // let a = 5;
        // let b = 6;
        // let c = 7;
        // let cevre = a + b + c;
        // console.log(cevre);
        //! Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve cümle oluşturun.
        // let firstName = "Ahmet";
        // let surname = "Kaçan";
        // bool = firstName.length === surname.length;
        // console.log(`Adım ${firstName}, Soyadım ${surname} uzunlukları ${bool}`);
    //TODO: Alıştırma: Seviye 3
        //! Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir insanın yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım
        // let yil = 1;
        // let saniye = yil * 365 * 24 * 60 * 60;
        // console.log(saniye);

//*DAY 4 EĞER
    //TODO: Alıştırma: Seviye 1
        //! Prompt'u kullanarak kullanıcı girişi alın ("Yaşınızı girin:"). Kullanıcı 18 yaşında veya daha büyükse, "Araba kullanacak yaştasınız" şeklinde geri bildirimde bulunun, ancak 18 yaşında değilse, 18 yaşına girmesi için kaç yıl beklemesi gerektiğini belirten başka bir geri bildirimde bulunun.
        // let mesaj = prompt("Yaşınızı Girin: "); //? Node.js de prompt() fonksiyonu yok hata görebilirsin. Webde sorunusuz şekilde çalışıyor.
        // if (mesaj > 18) {
        //     alert("Araba kullanıcak Yaştasınız.");
        // } else {
        //     let yasHesap=18-mesaj;
        //     alert("18 yaşına girmesi için "+yasHesap+" yıl beklemesi gerek");
        // }
        //! a, b'den büyükse, "a b'den büyüktür" aksi takdirde "a, b'den küçüktür" döndürün. şekillerde uygulamaya çalışın
        // let a = 4;
        // let b = 5;
        // if (a > b) {
        //     console.log(`${a} > ${b} 'den büyüktür`);
        // }else if (a == b){
        //     console.log(`${a} ve ${b} eşittir`);
        // }else {
        //     console.log(`${a} < ${b} 'den küçüktür`);
        // }
        //! Çift sayılar 2 ile bölünür ve kalan sıfırdır. Bir sayının çift olup olmadığını JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?
        // let sayi = 564;
        // if (sayi % 2 == 0) {
        //     console.log("Çift sayı");
        // }else{
        //     console.log("Tek sayı");
        // }

    //TODO: Alıştırma: Seviye 2
        //! Öğrencilere puanlarına göre not veren bir kod yazınız: 89-A 30-F
        // let puan = 45;
        // switch (true) {
        //   case puan >= 89:
        //     console.log(`${puan} | A`);
        //     break;
        //   case puan >= 70:
        //     console.log(`${puan}| B`);
        //     break;
        //   case puan >= 60:
        //     console.log(`${puan}| C`);
        //     break;
        //   case puan >= 45:
        //     console.log(`${puan}| D`);
        //     break;
        //   default:
        //     console.log(`${puan}| F KALDI `);
        //     break;
        // }
        //! Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Kullanıcı girişi ise: Eylül, Ekim veya Kasım, mevsim sonbahardır.: Kasım-Sonbahar.
        // let ays = prompt("Mevsimi Öğrenmek İçin Ay Girin: ");
        // let ay = ays.toLowerCase()
        // if (ay == "aralık" || ay == "ocak" || ay == "şubat") {
        //     console.log(`${ay} | Kış`);
        // }else if (ay == "mart" || ay == "nisan" || ay == "mayıs") {
        //     console.log(`${ay} | İLKBAHAR`);
        // }else if(ay == "haziran" || ay == "temmuz" || ay == "ağustos"){
        //     console.log(`${ay} | Yaz`);
        // }else if (ay == "eylül" || ay == "ekim" || ay == "kasım"){
        //     console.log(`${ay} | Sonbahar`);
        // }else{
        //     console.log("Hata");
        // }

    //TODO: Alıştırma: Seviye 3
        //! Bir aydaki gün sayısını bulan programı yazınız.: Bir ay girin: Ocak / Ocak 31 gündür.
        // let ays = "şubat";
        // let ay = ays.toLowerCase()
        // switch (true) {
        //     case ["ocak", "mart", "mayıs", "temmuz", "ağustos", "ekim", "aralık"].includes(ay) :
        //         console.log(`${ay} ayı 31 çeker.`);
        //         break;
        //     case ["nisan", "haziran", "eylül", "kasım"].includes(ay):
        //         console.log(`${ay} ayı 30 çeker.`);
        //         break;
        //     case "şubat" == ay:
        //         console.log(`${ay}ayı 28 çeker. 4Yılda 1 29 çeker.`);
        //         break;
        //     default:
        //         console.log("Hata");
        //         break;
        // }

//*DAY 5 DİZİ
    //TODO: Alıştırma: Seviye 1
        //!Boş bir dizi bildirin ;
        // let diz = Array();
        // console.log(diz);
        //? 
        // const arr = []
        // console.log(arr);
        //! 5'ten fazla öğe içeren bir dizi bildirin
        // let dizi = Array("a, b, c, d, e");
        //! Dizinizin uzunluğunu bulun
        // let dizi = Array("a", "b", "c", "d", "e");
        // console.log(dizi.length);
        //! Dizinin ilk öğesini, orta öğesini ve son öğesini alın
        // let dizi = ["abc","asd","wsd","fgh","jkl","zxc","bnm"];
        // let ilk= dizi[0];
        // let orta= dizi[Math.floor(dizi.length/2)];
        // let son= dizi[dizi.length-1];
        // console.log(`ilk: ${ilk},\norta: ${orta},\nson: ${son}`);
        //! mixDataTypes adlı bir dizi bildirin , diziye farklı veri türleri koyun ve dizinin uzunluğunu bulun. Dizi boyutu 5'ten büyük olmalıdır
        // let mixDataTypes = ["merhaba", 10, null, true,{e},(10,11,"dünya")]
        // console.log(mixDataTypes); //? 6
        //! Bir dizi değişken adı sirkets bildirin ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon başlangıç ​​değerlerini atayın ve Console.log() kullanarak diziyi yazdırın
        // let sirkets = Array("Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]; //? altenatif
        // console.log(sirkets);
        //! Dizideki şirket sayısını yazdır
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // console.log("Şirket Sayısı: " + sirkets.length);
        //! Her şirket adını birer birer büyük harfle değiştirin ve yazdırın
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // sirkets.forEach(sirketler => {
        //     console.log(sirketler.toUpperCase());});
        //! Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon büyük BT şirketleridir.
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // console.log(sirkets.slice(0, 5) + " ve " + sirkets[sirkets.length - 1]);
        //! sirkets dizisinde belirli bir şirketin var olup olmadığını kontrol edin. Varsa şirketi iade edin, aksi halde şirket bulunamadı
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // let sirket = "Apple";
        // sirkets.includes(sirket) ? console.log(sirket) : console.log("Hata");
        //! Filtre yöntemi olmadan *birden fazla 'o' harfi olan şirketleri filtreleyin
        // const sirkets = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon', 'Coca Cola', 'Ford', 'Boeing'];
        //? BAŞARAMADIK x
        //! sort() yöntemini kullanarak diziyi sıralayın
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // console.log(sirkets.sort());
        //! reverse() yöntemini kullanarak diziyi ters çevirin
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // console.log(sirkets.reverse());
        //! Diziden ilk 3 şirketi dilimleyin
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // console.log(sirkets.slice(0,3));
        //! Diziden son 3 şirketi dilimleyin
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // console.log(sirkets.slice(-3));
        //! Ortadaki şirketini veya şirketleri diziden dilimleyin
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // let sirketo = Math.floor(sirkets.length/2);
        // console.log(sirkets.slice(sirketo,-sirketo));
        //! İlk şirketini diziden kaldırın
        // const sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // console.log(sirkets.shift());
        // console.log(sirkets);
        //! Ortadaki şirketini veya şirketlerini diziden çıkarın
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // let sirketo = Math.floor(sirkets.length/2);
        // console.log(sirkets.splice(sirketo, 1));
        // console.log(sirkets);
        //! Dizide ki son şirketini kaldırın
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // console.log(sirkets.pop());
        // console.log(sirkets);
        //! Tüm şirketlerini kaldırın
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // sirkets.splice(0,sirkets.length)
        // console.log(sirkets);

    //TODO: Alıştırma: Seviye 2
        //! Ulkeler dizisinde, dizide 'Fransa' olup olmadığını kontrol edin, varsa 'FRANSA' yazdırın. Eğer yoksa ülkeler listesine ekleyin.
        // let ulkes = ["Türkiye", "Hollanda", "Fransa", "Arjantin", "Katar", "İspanya", "Rusya", "Belçika", "Irak"];
        // let ulke = "ABD";
        // if(ulkes.includes(ulke)){
        //     console.log(ulke.toUpperCase());
        // }else{
        //     console.log("ulke Dizisine eklendi." + ulkes.push(ulke));
        // }
        // console.log(ulkes);
        //! iki dizi birleştirin ve bir yenidizi değişkeninde saklayın.
        // let ulkes = ["Türkiye", "Hollanda", "Fransa", "Arjantin", "Katar", "İspanya", "Rusya", "Belçika", "Irak"];
        // let sirkets = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
        // let birles = sirkets.concat(ulkes);
        // console.log(birles);
//*DAY 6 Döngü
    //TODO: Alıştırma: Seviye 1
        //! for döngüsünü kullanarak 10'dan 0'a yineleyin, while kullanarak aynısını yapın ve do while döngüsünü yapın.
        // for (let i = 0; i <= 10; i++) {
        //     console.log(i)
        // } //? ------------------ for döngüsü
        // let i = 0;
        // do {
        //     console.log(i);
        //     i++;
        // } while (i<=10); //? --- dowhile dögüsü
        // let i = 0;
        // while (i <= 10) {
        //     console.log(i);
        //     i++;
        // } //? ------------------- while döngüsü
        //! for döngüsünü kullanarak 0'dan n'ye yineleyin
        // for (let i = 0; i <= n; i++) {
        //     console.log(i);          
        // }
        //! yandaki deseni yazdırmak için döngüyü kullanın: 0 x 0 = 0, 1 x 1 = 1, 2 x 2 = 4
        // for (let i = 0; i <= 5; i++) {
        //     console.log(`${i} x ${i} = ${i * i}`);
        // }
        //! 0'dan 100'e yinelemek ve yalnızca çift sayıları yazdırmak için for döngüsünü kullanın
        // for (let i = 0; i < 100; i++) {
        //     if (i % 2 == 0) {
        //         console.log(i);
        //     } 
        // }
        //! 0'dan 100'e yinelemek ve yalnızca tek sayıları yazdırmak için while döngüsünü kullanın
        // let i = 0;
        // while (i<=100) {
        //     if (i % 2 == 1) {
        //         console.log(i);
        //     }
        //     i++;
        // }
        //! 0'dan 100'e yinelemek ve tüm sayıların toplamını yazdırmak için for döngüsünü kullanın.
        // let top = 0;
        // for (let i = 0; i <= 100; i++) {
        //     top += i;
        // }
        // console.log(top);
        //! 5 rasgele sayıdan oluşan bir dizi oluşturan küçük bir komut dosyası geliştirin
        // let arr = [];
        // for (let i = 0; i < 5; i++) {
        //     arr.push(Math.floor(Math.random()*9 + 1))
        // }
        // console.log(arr);

    //TODO: Alıştırma: Seviye 2 
        //! console.log() kullanarak üçgen kalıbı oluşturan bir döngü yazın: # ## ### ####
        // let ucgen = '';
        // for (let i = 0; i < 10; i++) {
        //     ucgen += '#';
        //     console.log(i + " " + ucgen);
        // }
        //! Altı karakterlik bir rasgele kimlik oluşturan küçük bir komut dosyası geliştirin: 5j2khz
        // const klavye = "qwertyuıopğüasdfghjklşizxcvbnmöç1234567890QWERTYUIOPĞÜASDFGHJKLŞİZXCVBNMÖÇ";
        // let arr = "";
        // for (let i = 0; i < 6; i++) {
        //   let newrandom = Math.floor(Math.random() * klavye.length);
        //   arr += klavye[newrandom];
        // }
        // console.log(arr);
        //! Rastgele bir rgb renk numarası üreten bir komut dosyası yazın.
        // let arr = "R-G-B: ";
        // for (let i = 0; i < 3; i++) {
        //     let newrandom = Math.floor(Math.random() * 255);
        //     arr += newrandom;
        //     if (i !== 2){
        //         arr += " ";
        //     }
        // }console.log(arr);
        //! ülkeler dizisinde, 'ia' alt dizesi ile biten bir ülke veya ülkeler olup olmadığını kontrol edin. İle biten ülkeler varsa dizi olarak yazdırın. 'ai' kelimesini içeren bir ülke yoksa, 'Bunlar ia olmadan biten ülkelerdir' yazdırın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // let arr = [];
        // for (let i = 0; i < ulkes.length; i++) {
        //   if (ulkes[i].match(/ia/gi)) {
        //     arr.push(ulkes[i])
        //   }
        // }
        // console.log(arr);
        //! ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bulgaria","Bolivia","Singapore","Hungary","Ireland","Romania","Japan","Kenya"];
        // uzunluk = ulkes.map((item) => item.length);
        // max = 0;
        // for (let i = 0; i < ulkes.length; i++) {
        //   if (ulkes[i].length > max) {
        //     max = ulkes[i].length;
        //   }
        // }
        // console.log(ulkes[max]);
        //! ülkeler dizisini kullanarak yalnızca 5 karakter içeren ülkeyi bulun.
        // const ulkes = ["Albania","Austria","Canada","Japan","Denmark","Ethiopia","Finland","Germany","Bulgaria","Bolivia","Singapore","Hungary","Ireland","Romania","Kenya"];
        // uzunluk = ulkes.map((item) => item.length);
        // kisa = [];
        // for (let i = 0; i < ulkes.length; i++) {
        //   if (uzunluk[i] == 5) {
        //    kisa.push(ulkes[i])
        // }}
        // console.log(kisa);

    //TODO: Alıştırma: Seviye 3
        // !Aşağıdaki dizi dizisini oluşturmak için ulke dizisini kullanın: [['Japan', 5],['Kenya', 5],['Singapore', 9]]
        // const ulkes = ["Albania","Austria","Canada","Japan","Denmark","Ethiopia","Finland","Germany","Bulgaria","Bolivia","Singapore","Hungary","Ireland","Romania","Kenya"];
        // let arr = [];
        // uzunluk = ulkes.map((item) => item.length);
        // for (let i = 0; i < ulkes.length; i++) {
        //     altDizi = [ulkes[i], uzunluk[i]];
        //   arr.push(altDizi)
        // }
        // console.log(arr);
        //! ülkeler dizisini kullanarak, ülkeler uzunluk sırası için bir dizi oluşturun'.
        // const ulkes = ["Albania","Austria","Canada","Japan","Denmark","Ethiopia","Finland","Germany","Bulgaria","Bolivia","Singapore","Hungary","Ireland","Romania","Kenya"];
        // uzunluk = ulkes.map((item) => item.length);
        // arr = [];
        // for (let i = 0; i < ulkes.length; i++) {
        //     arr.push(ulkes[i])
        // }
        // console.log(ulkes.sort((a, b) => b.length - a.length));
        //! 5 rasgele sayıdan oluşan bir dizi oluşturan ve sayıların benzersiz olması gereken küçük bir komut dosyası geliştirin
        // let arr = [];
        // for (let i = 0; i < 5;) {
        //   let num = Math.floor(Math.random() * 9) + 1;
        //   if (arr.indexOf(num) == -1) {
        //     arr.push(num);
        //     i++; //? döngü istenen sayıda dönmesini sağlıyor
        //   }
        // }
        // console.log(arr); //? benzer sayı yok ama eksik dizi ! [2 ile 5 basamaklı]

//*DAY 7 Functions
    //TODO: Alıştırma: Seviye 1
        //! Bir işlev fullName bildirin ve tam adınızı yazdırın.
        // const fullName= (name) => {console.log("mikail")}
        // fullName()
        //! Bir işlev fullName bildirin ve şimdi firstName, lastName'i parametre olarak alır ve tam adınızı döndürür.
        // const fullName = (firstName, lastName) => {  console.log(`${firstName} ${lastName}`);    };
        // fullName("Mikail", "Altunkaynak")
        //! Bir işlev addNumbers bildirin ve iki iki parametre alır ve toplamı döndürür.
        // function addNumbers(num1, num2) {
        //   toplam = num1 + num2;
        //   return toplam;
        // }
        // console.log(addNumbers(6 , 5));
        //! Bir dikdörtgenin alanı şu şekilde hesaplanır: alan = uzunluk x genişlik . areaOfRectangle değerini hesaplayan bir fonksiyon yazın .
        // function areaOfRectangle(uzunK, kisaK) {
        //   alan = uzunK * kisaK;
        //   return alan;
        // }
        // console.log(areaOfRectangle(10, 5));
        //! Bir dikdörtgenin çevresi şu şekilde hesaplanır: çevre= 2x(uzunluk + genişlik) . perimeterOfRectangle değerini hesaplayan bir işlev yazın .
        // function perimeterOfRectangle(uzunK, kisaK) {
        //   cevre = 2 * (uzunK + kisaK);
        //   return cevre;
        // }
        // console.log(perimeterOfRectangle(10, 5));
        //! Dikdörtgenler prizmasının hacmi şu şekilde hesaplanır: hacim = uzunluk x genişlik x yükseklik . volumeOfRectPrism'i hesaplayan bir fonksiyon yazın .
        // const volumeOfRectPrism = (uzunK, kisaK, yuksek) => {
        //   hacim = uzunK * kisaK * yuksek;
        //   return hacim;
        // };
        // console.log(volumeOfRectPrism(10, 5, 15));
        //! Dairenin alanı şu şekilde hesaplanır: alan = π xrxr . AreaOfCircle'ı hesaplayan bir fonksiyon yazın
        // function areaOfCircle(r) {
        //   const pi = 3.14;
        //   alan = pi * r * r;
        //   return alan;
        // }
        // console.log(areaOfCircle(10));
        //! Bir dairenin çevresi şu şekilde hesaplanır: çevre = 2πr . CircumOfCircle'ı hesaplayan bir fonksiyon yazın
        // const circumOfCircle = (r) => {
        //   const pi = 3.14;
        //   cevre = 2 * pi * r;
        //   return cevre;
        // };
        // console.log(circumOfCircle(10));
        //! Bir maddenin yoğunluğu şu şekilde hesaplanır: yoğunluk= kütle/hacim . Yoğunluğu hesaplayan bir fonksiyon yazınız .
        // const maddeYogunluk = (kutle, hacim) => {
        //   yogunluk = kutle / hacim;
        //   return yogunluk;
        // };
        // console.log(maddeYogunluk(15,5));
        //! Hız, hareketli bir nesnenin kat ettiği toplam mesafenin, alınan toplam süreye bölünmesiyle hesaplanır. Hareket eden bir cismin hızını hesaplayan bir fonksiyon yazınız .
        // function hizF(yol, zaman) {
        //   hiz = yol / zaman;
        //   return hiz;
        // }
        // console.log(hizF(760, 100));
        //! Bir maddenin ağırlığı şu şekilde hesaplanır: ağırlık = kütle x yerçekimi . Ağırlığı hesaplayan bir fonksiyon yazınız .
        // function agirlikHesap(kutle, yercekimi) {
        //   agirlik = kutle * yercekimi;
        //   console.log(agirlik);
        // }
        // agirlikHesap(15, 5);
        //! oC cinsinden sıcaklık, şu formül kullanılarak oF'ye dönüştürülebilir: oF = (oC x 9/5) + 32 . oC'yi oF convertCelsiusToFahrenheit'e dönüştüren bir işlev yazın .
        // function convertCelsiusToFahrenheit(oC) {
        //     oF = (oC * 9 / 5) + 32;
        //     return oF;
        // }
        // console.log(convertCelsiusToFahrenheit(15));

    //TODO: Alıştırma: Seviye 2
        //! İkinci dereceden denklem şu şekilde hesaplanır: ax2 + bx + c = 0 . İkinci dereceden bir denklemin değerini veya değerlerini hesaplayan bir fonksiyon yazın, solventQuadEquation .
        // function solventQuadEquation(a, b, c) {
        //     const delta = Math.pow(b, 2) - 4 * a * c;
        //     if (delta < 0) {
        //       return "Reel kök yok.";
        //     } else if (delta === 0) {
        //       const x = -b / (2 * a);
        //       return `Tek bir reel kök: x = ${x}`;
        //     } else {
        //       const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        //       const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        //       return `İki adet reel kök: x1 = ${x1}, x2 = ${x2}`;
        //     }
        // }
        // console.log(solventQuadEquation(5, 20, 15)); //? Chat-GPT
        //! Bir işlev adı tanımlayın swapValues ​​. Bu işlev, x'in değerini y'ye değiştirir.
        // function swapValues(x, y) {
        //   tersi = `Değiştirildi. x'in yeni değeri: ${y}, y'nin yeni değeri: ${x}.`;
        //   return tersi;
        // }
        // console.log(swapValues(10, 50));
        //! Bir işlev adı bildirin removeItem . Bir indeks parametresi alır ve bir öğeyi çıkardıktan sonra bir dizi döndürür.
        // function removeItem(dizi, index) {
        //     dizi.splice(index,1) //? splice(kaçıncı silinsin, kaçtane silinsin)
        //     console.log(dizi);
        // }
        // const ulkes = ["Albania","Austria","Canada","Japan","Denmark","Ethiopia","Finland","Germany","Bulgaria","Bolivia","Singapore","Hungary","Ireland","Romania","Kenya"];
        // removeItem(ulkes,2)
        //! Bir işlev adı bildirin sumOfNumbers . Bir sayı parametresi alır ve o aralıktaki tüm sayıları toplar.
        // function sumOfNumbers(sayi) {
        //   let yeniSayi = 0;
        //   for (let i = 1; i <= sayi; i++) {
        //     yeniSayi += i;
        //   }
        //   return yeniSayi;
        // }
        // console.log(sumOfNumbers(5));
        //! Bir işlev adı bildirin sumOfOdds . Bir sayı parametresi alır ve o aralıktaki tüm tek sayıları toplar.
        // function sumOfOdds(sayi) {
        //   let yeniSayi = 0;
        //   for (let i = 1; i <= sayi; i++) {
        //     if (i % 2 == 1) {
        //       yeniSayi += i;
        //     }
        //   }
        //   return yeniSayi;
        // }
        // console.log(sumOfOdds(10));
        //! Bir işlev adı bildirin sumOfEven . Bir sayı parametresi alır ve o aralıktaki tüm çift sayıları toplar.
        // const sumOfEven=(sayi)=>{
        //     let yeniSayi=0;
        //     for (let i = 1; i <= sayi; i++) {
        //         if (i%2==0) {
        //             yeniSayi+=i;
        //         }
        //     }return yeniSayi;
        // }
        // console.log(sumOfEven(10)); //? uzun şekilde
        
        // const sumOfEven = (sayi) => {
        //   let yenisayi = 0;
        //   for (let i = 1; i <= sayi; i += 2) {
        //     yenisayi+=i;
        //   }
        //   return yenisayi;
        // };
        // console.log(sumOfEven(10)); //? kısa tek sayi olması için i'yi 1 e eşitlemek
        //! Bir randomMacAddress üreten bir işlev yazın
        // function generateRandomMACAddress() {
        //   const karakter = "0123456789ABCDEF";
        //   let mac = "";
        //   for (let i = 0; i < 6; i++) {
        //     for (let j = 0; j < 2; j++) {
        //       mac += karakter.charAt(Math.floor(Math.random() * karakter.length));
        //     }
        //     if (i < 5) {
        //       mac += ":";
        //     }
        //   }
        //   return mac;
        // }
        // console.log(generateRandomMACAddress());
        //! Bir işlev adı bildirin randomHexaNumberGenerator . Bu işlev çağrıldığında rastgele bir onaltılık sayı üretir. İşlev onaltılık sayıyı döndürür. örn: #ee33df
        // const randomHexaNumberGenerator = () => {
        //   const karakter = "0123456789ABCDEF";
        //   let hexa = "#";
        //   for (let i = 0; i < 6; i++) {
        //     hexa += karakter.charAt(Math.floor(Math.random()*karakter.length));
        //   }
        //   return hexa;
        // };
        // console.log(randomHexaNumberGenerator());

    //TODO: Alıştırmalar: Seviye 3
        //! Bir işlev adı rgbColorGenerator yazın ve rgb renkleri üretir.
        // const rgbColorGenerator = () => {
        //   arr = "rgb() ";
        //   for (let i = 0; i < 3; i++) {
        //     arr += Math.floor(Math.random() * 255);
        //     if (i !== 2) {
        //       arr += ",";
        //     }
        //   }
        //   return arr;
        // };
        // console.log(rgbColorGenerator());
        //! Herhangi bir sayıda rgb rengi üretebilen bir createColors işlevi yazın . örn: console.log(generateColors('rgb', 2));  ['rgb(29,160,82)','rgb(168, 15, 255)']; console.log(generateColors('rgb', 1))  'rgb(250,245, 108)'
        // function generateColors(adet) {
        //   let createColors = [];
        //   for (let i = 0; i < adet; i++) {
        //     let color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        //     createColors.push(color);
        //   }
        //   return createColors;
        // }
        // console.log(generateColors(4));
        //! İşlevinizi faktöriyel olarak adlandırın , parametre olarak bir tam sayı alır ve sayının bir faktöriyelini döndürür.
        // function factorial(n) {
        //     let sayi = 1;
        //     for (let i = n; i > 1; i--) {
        //         sayi *= i
        //     }   
        //     return sayi;
        // }console.log(factorial(5));
        //! İşlevinizi isEmpty olarak adlandırın , bir parametre alır ve boş olup olmadığını kontrol eder
        // function isEmpty(str="boş"){
        //     console.log(`Merhaba Benim Adim ${str}`);
        // }
        // isEmpty()
        //! İşlevinizi sum olarak adlandırın , herhangi bir sayıda argüman alır ve toplamı döndürür.
        // function sum() {
        //   let toplam = 0;
        //   for (let i = 0; i < arguments.length; i++) {
        //     toplam += arguments[i];
        //   }
        //   return toplam;
        // };
        // console.log(sum(10, 20, 13, 40, 10));

        // const sum = (...numbers) => {
        //   let toplam = 0;
        //   for (let i = 0; i < numbers.length; i++) {
        //     toplam += numbers[i];
        //   }
        //   return toplam;
        // };
        //  console.log(sum(10, 20, 13, 40, 10));
        //! Bir sayının asal sayı olup olmadığını kontrol eden isPrime adlı bir işlev yazın.
        // function isPrime(num) {
        //   for (let i = 2; i <= Math.sqrt(num); i++) {
        //     if (num % i == 0) {
        //       return false;
        //     }
        //   }
        //   return true;
        // }
        // console.log(isPrime(17)); //? Chat-GPT
        //! Dizideki tüm öğelerin aynı veri türü olup olmadığını kontrol eden bir işlev yazın.
        // function isSameType(...args) {
        //   for (let i = 1; i < args.length; i++) {
        //     if (typeof args[i] !== typeof args[0]) {
        //       return false;
        //     }
        //   }
        //   return true;
        // }
        // console.log(isSameType("dsaa", 5, "sdadad", isSameType()));
        // console.log(isSameType(3, 4, 5, 6)); 
        //! 0-9 aralığında yedi(7) rasgele sayıdan oluşan bir dizi döndüren bir işlev yazın. Tüm sayılar benzersiz olmalıdır.
        // function yediRandom() {
        //   let yedi = [];
        //   for (let i = 0; i < 7; ) {
        //     let yeniSayi = Math.floor(Math.random() * 10);
        //     if (!yedi.includes(yeniSayi)) { //? ! tersini alıyor "true" => "false" veya tam tersi 
        //         yedi.push(yeniSayi)
        //         i++; //? döngü tamamlandığında artırılıyor
        //     }
        //   }
        //   return yedi;
        // }
        // console.log(yediRandom());

//*DAY 8 NESNELER
    //TODO: Alıştırma: Seviye 1
        //! Boş bir nesne olan "dog" oluşturun
        // let dog = {};
        //! Köpek nesnesini konsola yazdırın
        // console.log(dog);
        //! Köpek nesnesine isim, bacaklar, renk, yaş ve havlama özellikleri ekleyin. "Havlama" özelliği, woof woof döndüren bir yöntemdir.
        // const zoo = {
        //   Dog: {
        //     name: "Alex",
        //     color: "brown",
        //     age: 3,
        //     foot: 4,
        //     zynel: function () {
        //       return "woof woof";
        //     },

        //   },
        // };
        // console.log(zoo.Dog.zynel());
        //! Köpek nesnesinden ad, bacaklar, renk, yaş ve havlama değerlerini alın
        // console.log(zoo.Dog.name);
        // console.log(zoo.Dog.age);
        // console.log(zoo.Dog.color);
        // console.log(zoo.Dog.foot);
        // console.log(zoo.Dog.zynel());
        //! Yeni özellikler köpek nesnesine eklensin: cins, getDogInfo
        // zoo.Dog.getDogInfo  = "Kangal";
        // console.log(zoo.Dog);
    //TODO: Alıştırma: Seviye 2
        // const user = {
        //     Alex: {
        //       email: 'alex@alex.com',
        //       skills: ['HTML', 'CSS', 'JavaScript'],
        //       age: 20,
        //       isLoggedIn: false,
        //       points: 30
        //     },
        //     Angela: {
        //       email: 'asab@asab.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        //       age: 25,
        //       isLoggedIn: false,
        //       points: 50
        //     },
        //     Brook: {
        //       email: 'daniel@daniel.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        //       age: 30,
        //       isLoggedIn: true,
        //       points: 50
        //     },
        //     Daniel: {
        //       email: 'daniel@alex.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        //       age: 20,
        //       isLoggedIn: false,
        //       points: 40
        //     },
        //     John: {
        //       email: 'john@john.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        //       age: 25,
        //       isLoggedIn: true,
        //       points: 50
        //     },
        //     Thomas: {
        //       email: 'thomas@thomas.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        //       age: 20,
        //       isLoggedIn: false,
        //       points: 40
        //     },
        //     Paul: {
        //       email: 'paul@paul.com',
        //       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        //       age: 20,
        //       isLoggedIn: false,
        //       points: 60
        //     }
        //   };
        //! Kullanıcılar nesnesinde ençok beceriye(skills) sahip kişiyi bulun.
        // let maxSkills = 0;
        // let maxSkillsUser = "";
        // Object.keys(user).forEach((element) => {
          // if (user[element].skills.length > maxSkills) {
          //   maxSkills = user[element].skills.length;
          //   maxSkillsUser = element;
          // }
        // });
        // console.log(maxSkills + " ile en çok beceriye sahip olan " + maxSkillsUser);
        //! Oturum açmış kullanıcıları sayın, aşağıdaki nesneden 50'ye eşit puana sahip kullanıcıları sayın.
        // let loginuserpoint = "";
        // Object.keys(user).forEach((element) => {
        //   if (user[element].points == 50 && user[element].isLoggedIn) {//? (2.koşul) otomatik true değerini alır eğer başına ! konulsa false değerini alır;
        //     loginuserpoint += element + " ";
        //   }
        // });
        // console.log(loginuserpoint);
        //! Orijinal user nesnesini değiştirmeden kendi adınızı kullanıcılar nesnesine ekleyin
        // user.Mikail = {
        //   email: "mikail@imece.com",
        //   skills: ["HTML", "CSS", "JavaScript", "C#", "C", "Node"],
        //   age: 20,
        //   isLoggedIn: true,
        //   points: 40
        // };
        // console.log(user);
        //! Ülkeler nesnesini kullanarak bir ülke adı, başkent, nüfus ve dilleri yazdırın.
        // const ulkes = [
        //   {
        //     ulke: "Turkiye",
        //     il: "Ankara",
        //     nufus: 82003882,
        //     diller: ["Türkçe"],
        //   },
        //   {
        //     ulke: "Hollanda",
        //     il: "Lüksenburg",
        //     nufus: 17452055,
        //     diller: ["Flemenkçe"],
        //   },
        //   {
        //     ulke: "İtalya",
        //     il: "Roma",
        //     nufus: 40564208,
        //     diller: ["İtalyanca"],
        //   },
        // ];
        // console.log(ulkes.filter((x) => x.ulke === "Turkiye"));

    //TODO: Alıştırma: Seviye 3
        // const users = [
        //   {
        //     _id: "ab12ex",
        //     username: "Alex",
        //     email: "alex@alex.com",
        //     password: "123123",
        //     createdAt: "08/01/2020 9:00 AM",
        //     isLoggedIn: false,
        //   },
        //   {
        //     _id: "fg12cy",
        //     username: "Asab",
        //     email: "asab@asab.com",
        //     password: "123456",
        //     createdAt: "08/01/2020 9:30 AM",
        //     isLoggedIn: true,
        //   },
        //   {
        //     _id: "zwf8md",
        //     username: "Brook",
        //     email: "brook@brook.com",
        //     password: "123111",
        //     createdAt: "08/01/2020 9:45 AM",
        //     isLoggedIn: true,
        //   },
        //   {
        //     _id: "eefamr",
        //     username: "Martha",
        //     email: "martha@martha.com",
        //     password: "123222",
        //     createdAt: "08/01/2020 9:50 AM",
        //     isLoggedIn: false,
        //   },
        //   {
        //     _id: "ghderc",
        //     username: "Thomas",
        //     email: "thomas@thomas.com",
        //     password: "123333",
        //     createdAt: "08/01/2020 10:00 AM",
        //     isLoggedIn: false,
        //   },
        // ];

        //     const products = [
        //       {
        //         _id: "eedfcf",
        //         name: "mobile phone",
        //         description: "Huawei Honor",
        //         price: 200,
        //         ratings: [
        //           { userId: "fg12cy", rate: 5 },
        //           { userId: "zwf8md", rate: 4.5 },
        //         ],
        //         likes: [],
        //       },
        //       {
        //         _id: "aegfal",
        //         name: "Laptop",
        //         description: "MacPro: System Darwin",
        //         price: 2500,
        //         ratings: [],
        //         likes: ["fg12cy"],
        //       },
        //       {
        //         _id: "hedfcg",
        //         name: "TV",
        //         description: "Smart TV:Procaster",
        //         price: 400,
        //         ratings: [{ userId: "fg12cy", rate: 5 }],
        //         likes: ["fg12cy"],
        //       },
        //     ];
        
        //! Ürüne puan veren / derecelendirme averageRating adında bir işlev oluşturun 
        // function averageRating(userAd, productID, point) {
        //   let userK = "", productK = "",newpoint=0;
        //   Object.keys(users).forEach((element) => {
        //     if (users[element].username === userAd) {
        //       userK = users[element]._id;
        //     } 
        //   });
        //   Object.keys(products).forEach((element) => {
        //     if (products[element]._id == productID) {
        //       productK = products[element].name;
        //       if (point > 1 && point <= 5) {
        //         products[element].ratings.forEach((rat) => {
        //           newpoint = rat.length / (rat.rate + point);
        //         });
        //       }
        //     }
        //   });
        //   console.log(userK,productK,newpoint);//* bir kısma kadar doğru; ilerde işime yaracak bir soru boş olduğunda bak 
        // }
        // averageRating("Thomas","eedfcf",5);
          //? Başarsız X 
          
        //! Beğenilmemişse ürüne beğeni eklemeye ve beğenilmişse beğeniyi kaldırmaya yardımcı olan likeProduct adlı bir işlev oluşturun. 
        //* ilerde işime yaracak bir soru boş olduğunda bak

//*DAY 9 Higher Order Functions !"users.js"
    //TODO: Alıştırma: Seviye 1
        //! countries dizisindeki "her bir" ülkeyi console.log kullanarak yazdırın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // ulkes.forEach(element => {
        //   console.log(ulkes);
        // });
        //! numbers dizisindeki "her bir" sayıyı console.log kullanarak yazdırın.
        // const num = [73, 51, 3, 205, 464, 6, 479, 6];
        // num.forEach(element => {
        //   console.log(num);
        // });
        //! countries dizisindeki her bir ülkeyi büyük harflerle yeni bir dizi oluşturmak için "map" kullanın.2
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // const ulke = ulkes.map((element) => element.toUpperCase());
        // console.log(ulke);
        //! countries dizisinden her ülkenin uzunluğundan oluşan bir dizi oluşturmak için "map" kullanın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // const ulke = ulkes.map((element) => element.length);
        // console.log(ulke);
        //! land kelimesi içermeyen ülkeleri filtrelemek için "filter" kullanın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // let ulke = ulkes.filter(i => !i.includes("land"))
        // console.log(ulke);
        //! Altı karaktere sahip olmayan ülkeleri filtrelemek için "filter" kullanın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // let ulke = ulkes.filter(i => i.length < 6)
        // console.log(ulke);
        //! Altı veya daha fazla harf içeren ülkeleri filtrelemek için "filter" kullanın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // let ulke = ulkes.filter(i => i.length >= 6)
        // console.log(ulke);
        //! E harfi ile başlayan ülkeleri filtrelemek için "filter" kullanın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // let ulke = ulkes.filter((i) => i.startsWith("E"));
        // console.log(ulke);
        //! numbers dizisindeki tüm sayıları toplamak için reduce kullanın.
        // const num = [73, 51, 3, 205, 464, 6, 479, 6];
        // const toplam = num.reduce((a, b) => a + b, 0);
        // console.log(toplam);
        //! countries dizisini birleştirerek "Estonya, Finlandiya, İsveç, Danimarka, Norveç ve İzlanda kuzey Avrupa ülkeleridir" vb. cümlesini oluşturmak için reduce kullanın.
        // const countries = ['Estonya', 'Finlandiya', 'İsveç', 'Danimarka', 'Norveç', 'İzlanda'];
        // const listFormatter = new Intl.ListFormat("tr", { style: "long", type: "conjunction"}); //? özel fonkisyon bu gibi örnekte kullan
        // const formattedList = listFormatter.format(countries);
        // console.log(`${formattedList} kuzey Avrupa ülkeleridir.`);
        //! some ve every arasındaki farkı açıklayın.
        // some tek biri true döndürüse hepsi true olarak kabul eder.
        // every tek biri false olrak döndürüse hepsi false olarak kabul eder.
        //! names dizisindeki bazı isimlerin uzunluğunun yedi karakterden büyük olup olmadığını kontrol etmek için some kullanın.
        // const names = ['Ahmet', 'Ayşe', 'Ayşe', 'Ayşe', 'Muhammed', 'Ayşe', 'Ayşe', 'Ayşe', 'Ayşe', 'Ayşe']
        // let name = names.some((i) => i.length > 7);
        // console.log(name);
        //! names dizisindeki bazı isimlerin uzunluğunun yedi karakterden büyük olup olmadığını kontrol etmek için every kullanın.
        // const names = ['Ahmet', 'Ayşe', 'Ayşe', 'Ayşe', 'Muhammed', 'Ayşe', 'Ayşe', 'Ayşe', 'Ayşe', 'Ayşe']
        // let name = names.every((i) => i.length > 7);
        // console.log(name);
        //! find ve findIndex arasındaki farkı açıklayın.
        // find ilk isteneni çağırır.
        // finIndex ilk index çağırır.
        //! countries dizisindeki altı karakterli ülkelerden ilkinin adını bulmak için find kullanın.
        // const countries = ['Estonya', 'Finlandiya', 'İsveç', 'Danimarka', 'Norveç', 'İzlanda'];
        // const ulke = countries.find((i) => i.length == 6);
        // console.log(ulke);
        //! countries dizisindeki altı karakterli ülkelerden ilkinin pozisyonunu bulmak için findIndex kullanın.
        // const countries = ['Estonya', 'Finlandiya', 'İsveç', 'Danimarka', 'Norveç', 'İzlanda'];
        // const ulke = countries.findIndex((i) => i.length == 6);
        // console.log(ulke);
        //! Norveç'in pozisyonunu bulmak için findIndex kullanın, yoksa -1 dönecektir.
        // const countries = ['Estonya', 'Finlandiya', 'İsveç', 'Danimarka', 'Norveç', 'İzlanda'];
        // const ulke = countries.findIndex((i) => i.includes("Norveç"));
        // console.log(ulke);
        //! Rusya'nın pozisyonunu bulmak için findIndex kullanın, yoksa -1 dönecektir.
        // const countries = ['Estonya', 'Finlandiya', 'İsveç', 'Danimarka', 'Norveç', 'İzlanda'];
        // const ulke = countries.findIndex((i) => i.includes("Rusya"));
        // console.log(ulke);
     //TODO: Alıştırma: Seviye 2
        //! Birden fazla dizi döngüleyicisi zincirleyerek (örn. arr.map(callback).filter(callback).reduce(callback)) ürünlerin toplam fiyatını bulun
        // const products = [
        //   { name: "Çikolata", price: 5 },
        //   { name: "Kek", price: 3 },
        //   { name: "Bisküvi", price: 2 },
        //   { name: "Kurabiye", price: 1 },
        //   { name: "Pasta", price: 8 },
        // ];
        // const productPrices = products.map((i) => i.price).filter((j) => j > 0).reduce((l, q) => l + q, 0);
        // console.log(productPrices);
        //! Sadece reduce kullanarak ürünlerin fiyatının toplamını bulun
        // const products = [
        //   { name: "Çikolata", price: 5 },
        //   { name: "Kek", price: 3 },
        //   { name: "Bisküvi", price: 2 },
        //   { name: "Kurabiye", price: 1 },
        //   { name: "Pasta", price: 8 },
        // ];
        // newpro = products.reduce((acc, pro) => acc + pro.price, 0);
        // console.log(newpro);
        //! İlk on ülkeyi içeren bir dizi döndüren getFirstTenCountries işlevini tanımlayın. Ülke dizisi üzerinde farklı işlevsel programlamayı kullanın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // console.log(ulkes.slice(0,10));
        //! Ülkeler dizisindeki son on ülkeyi döndüren getLastTenCountries işlevini tanımlayın.
        // const ulkes = ["Albania","Austria","Canada","Denmark","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // console.log(ulkes.slice(ulkes.length-10));
        //! Ülke adının başlangıcında sıkça kullanılan harfi ülkeler dizisinden bulun (ör. Finlandiya, Fiji, Fransa vb.)
        // const ulkes = ["Albania","Austria","Canada","Denmark","Brazil","Ethiopia","Finland","Germany","Bolivia","Hungary","Ireland","Romania","Japan","Kenya","Bulgaria"];
        // let toplam = {};
        // let encok = ulkes.map((a) => a.slice(0,1)); //? buraya kadar doğru devamı hatalı boş kafa ile başarabilirim.
        // for (let i = 0; i < ulkes.length;) {
        //     if (encok in toplam) {
        //         toplam[i] += 1
        //         i++;
        //     }
        //     else{
        //         toplam[i] = 1
        //     }
        // }
        // console.log(toplam);
     //TODO: Alıştırma: Seviye 3
        //! En çok konuşulan 3 dili bulun:  console.log(encokDil(ulkeler, 3)) : [{ulke: 'English',count:91}, {ulke: 'French',count:45}, {ulke: 'Arabic',count:25},]
        // const dil = [
        //   { adi: "Çince (Mandarin)", konusan: "1117" },
        //   { adi: "İspanyolca", konusan: "534" },
        //   { adi: "İngilizce", konusan: "1232" },
        //   { adi: "Hindistan dili (Hindi)", konusan: "615" },
        //   { adi: "Arapça", konusan: "422" },
        //   { adi: "Portekizce", konusan: "235" },
        //   { adi: "Bengal dili", konusan: "265" },
        //   { adi: "Rusça", konusan: "278" },
        //   { adi: "Japonca", konusan: "128" },
        //   { adi: "Almanca", konusan: "332" }];
        //   function encokDil(kacDil) {
        //     konusanNew = [];
        //     for (let i = 0; i < kacDil; i++) {
        //       konusanNew.push(dil.sort((a, b) => b.konusan - a.konusan)[i])
        //     }
        //     return konusanNew;
        //   }
        //   console.log(encokDil(4));
        //! Bir örneğin merkezi eğilim ölçüsünü (ortalama, medyan, mod) ve değişkenlik ölçüsünü (aralık, varyans, standart sapma) hesaplayan bir program geliştirmeye çalışın. Bu ölçümlere ek olarak örneğin min, max, sayım, yüzdelik ve frekans dağılımını bulun. İstatistik adında bir nesne oluşturabilir ve istatistik nesnesi için yöntem olarak istatistiksel hesaplamalar yapan tüm işlevleri oluşturabilirsiniz.
        // const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
        // function count(dizi = "") {
        //   const statistics = dizi.length;
        //   return statistics;
        // }
        // function sum(dizi = "") {
        //   let statistics = 0;
        //   for (let i = 0; i < dizi.length; i++) {
        //     statistics += dizi[i];
        //   }
        //   return statistics;
        // }
        // function min(dizi = "") {
        // let statistics = Math.min(...dizi)
        //   return statistics;
        // };
        // function max(dizi = "") {
        //   let statistics = Math.max(...dizi)
        //   return statistics 
        // }
        // function range(dizi = "") {
        //   let statistics = max(dizi)-min(dizi)
        //   return statistics;
        // }
        // function mean(dizi = "") {
        //   let statistics = Math.ceil(sum(dizi) / count(dizi));
        //   return statistics;
        // }
        // function siralamaBK(dizi) {
        //   statistics = dizi.sort((a, b) => a - b);
        //   return statistics;
        // }
        // function median(dizi = "") {
        //   let statistics = siralamaBK(dizi)[Math.floor(dizi.length / 2)];
        //   return statistics;
        // }
        // function mode(dizi) {
        //   let counts = {}, mod = 0, maxCount = 0;
        //   for (let i = 0; i < dizi.length; i++) {
        //     const num = dizi[i];
        //     counts[num] = (counts[num] || 0) + 1;
        //     if (counts[num] > maxCount) {
        //       maxCount = counts[num];
        //       mod = num
        //     }
        //   }
        //   return {
        //     mode : mod,
        //     count : maxCount
        //   }
        // }
        // console.log('Count:', count(ages)) // 25
        // console.log('Sum: ', sum(ages)) // 744
        // console.log('Min: ', min(ages)) // 24
        // console.log('Max: ', max(ages)) // 38
        // console.log('Range: ', range(ages)) // 14
        // console.log('Mean: ', mean(ages)) // 30
        // console.log('Median: ', median(ages)) // 29
        // console.log('Mode: ', mode(ages)) // {'mode': 26, 'count': 5}
//*DAY 10 Set() ve Map()
    //TODO: Alıştırma: Seviye 1
        //! boş bir küme(Set) oluştur
        // const mySet = new Set();
        // console.log(mySet);
        //! Döngü kullanarak 0 ila 10 içeren bir küme(Set) oluşturun
        // const mySet = new Set()
        // for (let i = 0; i <= 10; i++) {
        //   mySet.add(i)
        // }
        // console.log(mySet);
        //! Bir kümeden(Set) bir öğeyi kaldırma
        // const mySet = new Set()
        // for (let i = 0; i <= 10; i++) {
        //   mySet.add(i);
        // }
        // mySet.delete(5) //? 5'i Silindi
        // console.log(mySet);
        //! Bir grubu(Set) temizle
        // const sayi = [1, 5, 2, 6, 6, 8]; //? tekrar eden sayilari yazmadı.
        // const mySet = new Set(sayi);
        // console.log(mySet);
        // mySet.clear()
        // console.log(mySet);
        //! Diziden 5 dizi(Set) öğesinden oluşan bir dize oluşturun
        // const myArray = ["apple", "banana", "orange", "kiwi", "pear"];
        // const namea = new Set(myArray);
        // console.log(namea);
        //! ülke sayısı ve bir ülkenin karakter sayısı "Map()" ile Oluşturmak
        // const countries = ["Turkey", "United States", "Russia", "Germany"];
        // const ulke = new Map();
        // for(const ulkes of countries){
        //   ulke.set(ulkes,ulkes.length)
        // }
        // console.log(ulke);
    //TODO: Alıştırmalar:Seviye 2
        //! a ile b'nin kesişeni bul
        // let avb = [(A = [1, 2, 3, 4]), (B = [3, 4, 5, 6])];
        // let a = new Set(A);
        // let b = new Set(B);

        // let c = A.filter((num) => b.has(num));
        // let C = new Set(c);

        // console.log(C);
    //TODO: Alıştırmalar:Seviye 3
        //! En çok konuşulan 10 dili bul console.log(mostSpokenLanguages(countries, 3))[{English=>91},{French=>45},{Arabic=>25}]
        //     const dil = [
        //       { adi: "Çince (Mandarin)", konusan: "1117" },
        //       { adi: "İspanyolca", konusan: "534" },
        //       { adi: "İngilizce", konusan: "1232" },
        //       { adi: "Hindistan dili (Hindi)", konusan: "615" },
        //       { adi: "Arapça", konusan: "422" },
        //       { adi: "Portekizce", konusan: "235" },
        //       { adi: "Bengal dili", konusan: "265" },
        //       { adi: "Rusça", konusan: "332" },
        //       { adi: "Japonca", konusan: "128" },
        //       { adi: "Almanca", konusan: "278" },
        //     ];
        //     function siralaEnCokDil(dizi) {
        //     const sira = dizi.sort((a, b) => b[1] - a[1])
        //     const diller = new Map();
        //     sira.forEach((dizi) => {
        //       diller2 = diller.set(dizi[0], dizi[1])
        //     });
        //     return diller2
        // }
        //     console.log(siralaEnCokDil(dil))

//* DAY 11 Destructuring ve Spreading
    //TODO: Alıştırma: Seviye 1
        //! E, pi, yerçekimi, insanVucudSicaklik, suKaynamaSicakligi sabitleri dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
        // const constants = [2.72, 3.14, 9.81, 37, 100];
        // let [E, pi, yercekimi, insanVucudSicaklik, suKaynamaSicakligi]=constants
        // console.log(suKaynamaSicakligi);
        //! fin, est, sw, den veya nor olarak ülkeler dizisinin öğelerini destructuring işlemi uygulayın ve atayın.
        // const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
        // let [fin, est, sw, den, nor] = countries;
        // console.log(sw);
        //! Dikdörtgen nesnesini özelliklerine veya anahtarlarına göre destructuring işlemi uygulayın.
        // const rectangle = { width: 20, height: 10, area: 200, perimeter: 60 };
        // let { width, height, area, perimeter } = rectangle;
        // console.log(height);
        
    //TODO: Alıştırma: Seviye 2
    // const users = [
    //   {
    //     name: "Brook",
    //     scores: 75,
    //     skills: ["HTM", "CSS", "JS"],
    //     age: 16,
    //   },
    //   {
    //     name: "Alex",
    //     scores: 80,
    //     skills: ["HTM", "CSS", "JS"],
    //     age: 18,
    //   },
    //   {
    //     name: "David",
    //     scores: 75,
    //     skills: ["HTM", "CSS"],
    //     age: 22,
    //   },
    //   {
    //     name: "John",
    //     scores: 85,
    //     skills: ["HTML"],
    //     age: 25,
    //   },
    //   {
    //     name: "Sara",
    //     scores: 95,
    //     skills: ["HTM", "CSS", "JS"],
    //     age: 26,
    //   },
    //   {
    //     name: "Martha",
    //     scores: 80,
    //     skills: ["HTM", "CSS", "JS"],
    //     age: 18,
    //   },
    //   {
    //     name: "Thomas",
    //     scores: 90,
    //     skills: ["HTM", "CSS", "JS"],
    //     age: 20,
    //   },
    // ];
        //! Kullanıcılar dizisini Iterator ve destructuring kullanarak nesnenin tüm anahtarlarını alın.
        // for (userss of users) {
        //     usersss=Object.keys(userss)
        //     console.log(usersss);
        // }
        //! İkiden az beceriye sahip kişileri bulun.
        // for (const userss of users) {
        //   if (userss.skills.length <= 2) {
        //     console.log(userss.name);
        //   }
        // }
        
    //TODO: Alıştırma: Seviye 3
        //! Tüm ülkelerin adını, paraBirimi, nüfusunu ve dillerini yazdıran ülkeler nesnesine destructuring işlemi uygulayın
        // const countries = {
        //   Turkey: {
        //     language: "tr",
        //     currency: "TRY",
        //     population: 21000,
        //   },
        //   France: {
        //     language: "fr",
        //     currency: "EUR",
        //     population: 200000,
        //   },
        //   Germany: {
        //     language: "de",
        //     currency: "EUR",
        //     population: 200000,
        //   },
        //   Switzerland: {
        //     language: "de",
        //     currency: "CHF",
        //     population: 200000,
        //   },
        // };
        // for (const ulkeAdi in countries) {
        //     const { language, currency, population } = countries[ulkeAdi];
        //     console.log(`Ülke Adı: ${ulkeAdi}`);
        //     console.log(`Dil: ${language}`);
        //     console.log(`Para Birimi: ${currency}`);
        //     console.log(`İnsan Nüfus'u: ${population}`);
        //     console.log("-------------------------");
        // }
//*DAY 12 RegExp / REGULAR EXPRESSİONS (Düzenli İfadeler)
    //TODO: Alıştırma: Seviye 1
        // Aşağıdaki metinden kişinin toplam yıllık gelirini hesaplayınız. 'Aylık maaşından 4000 euro, yıllık 10000 euro ikramiye, ayda 5500 euro online kurs kazanıyor.'
        // Bazı parçacıkların yatay x ekseni üzerindeki konumu -12, -4, -3 ve -1 negatif yönde, 0 orijinde, 4 ve 8 pozitif yönde. Bu sayıları çıkarın ve en uzak iki parçacık arasındaki mesafeyi bulun.
        // Metni temizleyen bir işlev yazın. Aşağıdaki metni temizleyin. Temizledikten sonra, dizide en sık kullanılan üç kelimeyi sayın.
    //TODO: Alıştırma: Seviye 2
    // Bir dizgeden en sık kullanılan on kelimeyi alan tenMostFrequentWords adlı bir işlev yazın.
    //TODO: Alıştırma: Seviye 3
    // Metni temizleyen bir işlev yazın. Aşağıdaki metni temizleyin. Temizledikten sonra, dizide en sık kullanılan üç kelimeyi sayın.