const { SERVFAIL } = require("dns");
userss = [
  {
    id: 1,
    name: "Mikail",
    surname: "ALTUNKAYNAK",
    age: 21,
    adress: {
      il: "Istanbul",
      ilce: "Kucukcekmece",
      mahalle: "Kanarya",
      sokak: "Ordek",
      no: 1,
      daire: 3,
    },
  },
  {
    id: 2,
    name: "Osman",
    surname: "DEMIRKOL",
    age: 35,
    adress: {
      il: "Istanbul",
      ilce: "Fatih",
      mahalle: "Kanarya",
      sokak: "Tiyatro",
      no: 9,
      daire: 2,
    },
  },
  {
    id: 3,
    name: "Mehmet",
    surname: "Emir",
    age: 40,
    adress: {
      il: "Istanbul",
      ilce: "Basaksehir",
      mahalle: "OSB",
      sokak: "Suleyman Demirel",
      no: 4,
      daire: 1,
    },
  },
  {
    id: 4,
    name: "Orhan",
    surname: "Yilmaz",
    age: 89,
    adress: {
      il: "Istanbul",
      ilce: "Fatih",
      mahalle: "Kanarya",
      sokak: "Tiyatro",
      no: 14,
      daire: 15,
    },
  },
  {
    id: 5,
    name: "Ali",
    surname: "KIYAR",
    age: 16,
    adress: {
      il: "Istanbul",
      ilce: "Kucukcekmece",
      mahalle: "Kanarya",
      sokak: "Ordek",
      no: 3,
      daire: 1,
    },
  },
  {
    id: 6,
    name: "Yasar",
    surname: "ALTIN",
    age: 9,
    adress: {
      il: "Istanbul",
      ilce: "Avcilar",
      mahalle: "Pazarcik",
      sokak: "Ordek",
      no: 7,
      daire: 2,
    },
  },
  {
    id: 7,
    name: "Sami",
    surname: "COL",
    age: 18,
    adress: {
      il: "Istanbul",
      ilce: "Basaksehir",
      mahalle: "OSB",
      sokak: "Ordek",
      no: 4,
      daire: 6,
    },
  },
  {
    id: 8,
    name: "Mustafa",
    surname: "MAVI",
    age: 17,
    adress: {
      il: "Istanbul",
      ilce: "Kucukcekmece",
      mahalle: "Sogutlucesme",
      sokak: "Ordek",
      no: 13,
      daire: 1,
    },
  },
  {
    id: 9,
    name: "Emine",
    surname: "MOR",
    age: 32,
    adress: {
      il: "Istanbul",
      ilce: "Basaksehir",
      mahalle: "OSB",
      sokak: "Suleyman Demirel",
      no: 16,
      daire: 8,
    },
  },
  {
    id: 10,
    name: "Aleyna",
    surname: "TUNC",
    age: 12,
    adress: {
      il: "Istanbul",
      ilce: "Kucukcekmece",
      mahalle: "Kanarya",
      sokak: "Ordek",
      no: 7,
      daire: 9,
    },
  },
  {
    id: 11,
    name: "Elif",
    surname: "AKINCI",
    age: 10,
    adress: {
      il: "Istanbul",
      ilce: "Basaksehir",
      mahalle: "Kanarya",
      sokak: "Ordek",
      no: 1,
      daire: 2,
    },
  },
  {
    id: 12,
    name: "Orhan",
    surname: "AGAC",
    age: 24,
    adress: {
      il: "Istanbul",
      ilce: "Basaksehir",
      mahalle: "OSB",
      sokak: "Suleyman Demirel",
      no: 2,
      daire: 3,
    },
  },
  {
    id: 13,
    name: "Omer",
    surname: "KAYNAK",
    age: 87,
    adress: {
      il: "Istanbul",
      ilce: "Kucukcekmece",
      mahalle: "Sefakoy",
      sokak: "Sultan Murat",
      no: 11,
      daire: 8,
    },
  },
  {
    id: 14,
    name: "Eren",
    surname: "ER",
    age: 54,
    adress: {
      il: "Istanbul",
      ilce: "Basaksehir",
      mahalle: "OSB",
      sokak: "Suleyman Demirel",
      no: 10,
      daire: 5,
    },
  },
  {
    id: 15,
    name: "Enes",
    surname: "ARSLAN",
    age: 11,
    adress: {
      il: "Istanbul",
      ilce: "Avcılar",
      mahalle: "Pazarcik",
      sokak: "Sali",
      no: 11,
      daire: 9,
    },
  },
];
/** yorum satır renk
 * ! rdfhhdh
 * * fhdhdfhhfh
 * ? hfdhfhdhfhfh
 * TODO: fhdhdfhd
 * @param myFunction Parametre...
 */
////users.forech(( key , value) => )

//! dizi olup olmadığını kontrol et.
// let abc = Array.isArray(userss);

// console.log(abc);

//? Toplam İndexi( uzunluk )Söyler length
// let uzun = userss.length;
// console.log(uzun);

//TODO: Verilen bir JSON nesnesindeki özelliklerin bir listesini oluşturan bir JavaScript fonksiyonu nasıl yazılır?
// for (let i = 0; i < userss.length; i++) {
//     // const data =JSON.parse(userss)
// console.log(userss[i].id,userss[i].name,userss[i].surname,userss[i].age,userss[i].adress.il,userss[i].adress.ilce,userss[i].adress.mahalle,userss[i].adress.sokak,userss[i].adress.no,userss[i].adress.daire);
// /// console.log(userss[i]);
// }

//? filter
// let dataf = userss.filter(oge => oge.adress.ilce ==='Basaksehir');
// console.log(dataf)

// //?find
// let ara = userss.find(item => item.adress.ilce === 'Basaksehir');
// console.log(ara);

//?findIndex()
// let ara = userss.findIndex(item=>item.adress.ilce==='Basaksehir');
// console.log(ara);

//?tüm indexi çağıran fonksiyon Object.keys()
// let ara = userss.filter((item) => item.adress.ilce === "Basaksehir");
// const indexes = Object.keys(ara);
// console.log(indexes);

//?dizi içinde index numarsı bulma indexOf()
// let qaz = userss.indexOf();
// console.log(qaz);

//TODO: dizi içindeki çift sayıları bul
// let numbers = [5, 4, 54, 5454, 424, 27, 3, 34, 7, 352, 78, 67, 11, 45, 8]
// let cift = numbers.filter(sayi => sayi % 2 == 0)
// console.log(cift);

//TODO: İsminin baş harfi "M" olan listeyi çağır
// let b = a.filter(c=>c.name.startsWith('M'))
// console.log(b);

//TODO: basaksehir olan nesneleri döndür (dizi içinde olacak)
// userss.forEach(data => {
//     if (data.adress.ilce === 'Basaksehir') {
//         const don =JSON.stringify(data)
//         console.log(data);
//     }
// });

//! tip//// console.log(typeof userss);

//TODO: 18 yaşındann büyük olanı çağır

// // const data = JSON.stringify(userss)

//TODO: 18 yaşından küçük/büyük bul
//* 1.yöntem
// for (let i = 0; i < userss.length; i++) {
//     const user = userss[i];
//     if (user.age <= 18) {
//         console.log(`Adı: ${user.name}, Yaşı: ${user.age}`);
//     };
// };

//* 2.yöntem
// userss.forEach((data) => {
//   if (data.age >= 18) {
//     console.log(`Adı: ${data["name"]}, Yaşı: ${data.age}`);
//   }
// });

//* 3.yöntem
// const ass = userss.filter(function (item) {
//   return item.age > 18;  
// } );
// console.log(ass);

// const asa = userss.filter((item) =>{return item.age > 18 && item.adress.ilce =='Basaksehir'});
// console.log(asa);

// const asa = userss.filter((item) =>(item.age > 18 && item.adress.ilce =='Basaksehir'));
// console.log(asa);

//? concat() dizi birleştirme
//* 1.
// userss2=[{
//   name:"Mehmet",
//   surname:"KARA",
//   age:15,
//   adress:{
//     il:null,
//     ilce:null,
//     no:null,
//     daire:null
//   }
// }]
// const userss3 = userss.concat(userss2);
// console.log(userss3);

//* 2.
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...userss];
// console.log(numbersCombined);

//? Dizi içinde çagırır ve dizi oluşturur
// let namesArr = userss.map(item=>(item.age))
// console.log(namesArr);

//? dizinin son öğesini pop() kaldırır
// a = userss.pop();
// console.log(a);

// console.log(userss);

//? dizinin son kısmına push() ekler
//  let a = userss.push(userss.name='qaz')
//  console.log(a)

//  console.log(userss);
