// FOR DÖNGÜSÜ 

// for(i=1; i<=5; i++){
//     console.log("merhaba");
// }

//  for( let i=10;i>=1;i--){
//      console.log(i);
//  }

// let meyveler = ["elma","Armut","Çilek","Muz"];

// for(let i = 0; i< meyveler.length; i++ )
// {
//     console.log(meyveler[i]);
// }

// for(let i=1;i<=20;i++)
// {
// if(i%2===0){
//     console.log(i);
// }
// }

// 1

// for(let i=1; i<=50;i++){
//     console.log(i);
// }


// 2

// for(let i=1;i<=100;i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }

// 3
// let toplam=0;
// for(let i=1;i<=100;i++)
// {
//     toplam+=i;
   
// }
// console.log(toplam);

// 4

// let renkler= ["kırmızı","mavi","yeşil","sarı"];

// for(let i=0; i<renkler.length;i++){
//     console.log(renkler[i]);
// }

// 5

// let kelime="javascript";

// for(let i=0; i<=kelime.length;i++){
//     console.log(kelime.length);
// }

// 6
 
// let sayilar = [10,20,30,40,50];
// let toplam = 0;

// for(let i=0; i< sayilar.length; i++){
//     toplam+=sayilar[i];
// }
// console.log("toplam:", toplam);


// 7

// let sayilar= [15,42,7,90,33,18];

// let enBuyuk = sayilar[0];

// for(let i=0; i< sayilar.length; i++){
//     if(sayilar[i] > enBuyuk){
//         enBuyuk = sayilar[i];
//     }
// }
// console.log("en büyük sayı:", enBuyuk);


// 8

// let sayi = 5;

// let faktoriyel= 1;

// for(let i=sayi; i>=1; i--)
// {
//     faktoriyel*=i;
// }
// console.log(`${sayi}! = ${faktoriyel}`);

// 9

// let kelime= "kodlama";
// let tersKelime="";
// for(i=kelime.length - 1; i>=0;i--)
// {
//     tersKelime += kelime[i];
// }

// console.log("Ters:", tersKelime); 
// 10

// for(let sayi=2; sayi<=100;sayi++){
//     let asal = true;

//    for (let i=2; i< sayi;i++)
//    {
//     if(sayi % i ===0)
//     {
//         asal = false;
//         break;
//     }
//      if(asal){
//         console.log(sayi);
//     }
//    }
// }

// let araba= {marka:"Fiat", model:"500", renk:"beyaz"};

// for(i in araba){
//     console.log(i+"-"+araba[i]);
   
// }

// Ödev 1
// for(let i=20; i<=40;i++)
// {
//     console.log(i);
// }

// Ödev2

// for(let i=0; i<=50; i++)
// {
//     if(i%2===0){
//         console.log(i);
//     }
    
// }

// let araba= {marka:"Fiat", model:"500", renk:"beyaz"};

// for(i in araba)
// {
//     console.log(i+": "+araba[i]);
// }


// ÖRNEK 1

// let toplam= 0;
// for(let i=1; i<=100; i++){
//     if(i%2===0);
//     {
//         toplam+=i;
//     }
// }
// console.log(toplam);


// ÖRNEK 2
// let BuyukSayi=0;
// let sayilar=[1,2,4,5,6,34,62,13,53,15];
// for(i=1;i<sayilar.length;i++)
// {
//     if(BuyukSayi>sayilar[i]){
//         BuyukSayi=i;
//     }
// }
// console.log(BuyukSayi);

// ÖRNEK 3
// let kelime="Hello";

// for(let i=0; i<kelime.length;i++)
// {
//     console.log(kelime[i]);
// }

// ÖRNEK 4

// let yildiz="*";
// for(let i=0; i<5;i++)
// {
//     console.log(yildiz.repeat(i+1));
// }

// ÖRNEK 5

// let isimler=["Ali", "Ayşe", "Mustafa", "Eren", "Cemre"];

// for(let i=0; i<isimler.length;i++)
// {
//     console.log(isimler[i]);
//     if(isimler[i].length>5)
//     {
//         console.log(`uzun isimler ${isimler[i]}`);
//     }
// }

// ÖRNEK 6

//  let sayi=5;
//  let faktoriyel=1;
//  for(let i=1; i<=5;i++)
//  {
//     faktoriyel*=i;
//  }
//  console.log(`${sayi} = ${faktoriyel}`)

// ÖRNEK 7

// let n=10;
// let a=0, b=1,c;

// console.log(a);
// console.log(b);
// for(let i=2;i<n;i++)
// {
//     c=a+b;
//     console.log(c);
//     a=b;
//     b=c;
// }

// ÖRNEK 8

// for(let i=5; i>=1;i--)
// {
//     console.log("*".repeat(i));
// }

// ÖRNEK 9

// let sayi=17;
// let asal=true;

// for(let i=2; i<sayi;i++){
//     if(sayi%i===0)
//     {
//         asal=false;
//         break;
//     }
// }
// console.log(asal ?`${sayi}bir asal sayıdır`: `${sayi} bir asal sayı değişdir.`);


// ÖRNEK 10

// let rastgeleSayilar = [45, 12, 78, 3, 29, 56];
// let enKucuk = rastgeleSayilar[0];

// for(let i=1; i<rastgeleSayilar.length;i++)
// {
//     if(rastgeleSayilar[i] <enKucuk)
//     {
//     enKucuk=rastgeleSayilar[i];
//     }
// }

// console.log(`en Küçük sayı: ${enKucuk}`);
