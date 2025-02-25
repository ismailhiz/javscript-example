// İF ELSE 


// if ve else bir koşul ifadesidir.
// example first low high
// a=10;
// b=10;
// if(a>b)
// {
//     console.log("a büyüktür");

// }
// else if(b>a)
// {
//     console.log("b büyüktür");
// }

// else{
//     console.log("boş");
// }




// EXAMPLE 2

// let sayi=2;


// if(sayi%2==1){
//     console.log("sayi1 bu tek sayıdır.");
// }
// else if(sayi%2==0){
//     console.log("sayı1 cifttir.");
// }
// else{
//     console.log("cins bir sayı");
// }

// EXAMPLE 3

// && operatörü

// let sayi=6;

// if(sayi > 0 && sayi % 2 ===0){
//     console.log("Sayı pozitif ve çifttir.");
// }
// else{
//     console.log("Sayı negatif ve çift değil.");

// }

// EXAMPLE 4

// || operatörü

// let sayi=6;

// if(sayi>=0 || sayi===0){
//     console.log("Sayı pozitif ya da sıfırdır.");
// }
// else{
//     console.log("Sayı negatif.");
// }
// EXAMPLE 5

// ! değil öperatörü

// let sayi= -5;

// if(!(sayi >= 0)) {
//     console.log("sayı negatiftir.")
// }
// else{
//     console.log("sayı pozitiftir.")
// }

// EXAMPLE 6

//  koşullu öperatör

// let sayi=4;

// let sonuc= sayi>5 ? "Sayı 5'den büyük": "Sayı 5'den küçük";
// console.log(sonuc);


// EXAMPLE 7

//  iç içe if else

// let sayi =3 ;

// if (sayi > 0){
//     if(sayi%2===0){
//         console.log("sayi pozitif ve çift")
//     }
//     else{
//         console.log("sayı pozitif ama tek")
//     }
// }
// else{
//     console.log("sayı negatiftir.")
// }


// EXAMPLE 8

// Birinci yapı
// let a = 15, b = 10, c = 5;

// if (a > b && b > c) {
//     console.log("A büyük, B ortada, C en küçük");
// } else if (a < b && b < c) {
//     console.log("C büyük, B ortada, A en küçük");
// } else if (a === b || b === c || a === c) {
//     console.log("Bazı değerler eşit");
// } else {
//     console.log("Farklı bir durum");
// }


// ilk başta burada a,b ve c değer adlarına sırasıyla 15, 1* ve 5 
// değerlerini atamıssın. Sonrasında if açarak eğer a büyükse b den 
// ve b büyükse c den diyerek koşul belirtmissin ardından parantez açarak 
// konsola a büyük, b ortada c en küçük yazmasını söyledin. Sonrasında 
// else if kullanarak diğer koşulu girmeye başladın. Burada ise a 
// küçükse b den ve b küçükse a dan koşulu belirtip  sonrasında 
// c büyük, b ortada... ifadesini yazdırmıssın sonrasında else if açarak
// a, b ye eşitse ya da b c ye eşitse veya a ile c eşitse demiş ve 
// ardından bazı değerler eşit diye ekrana yazdırmıssınız.
// Else kullanarak bunların hiçbiri değilse farklı bir durum 
// şeklinde ekrana yazdırmıssınız.


// İkinci yapı
// let gun = "Pazartesi";
// let saat = 14;

// if ((gun === "Cumartesi" || gun === "Pazar") && saat >= 10) {
//     console.log("Hafta sonu ve saat uygun");
// } else if (gun !== "Cumartesi" && gun !== "Pazar" && saat < 9) {
//     console.log("Hafta içi ve çok erken");
// } else {
//     console.log("Diğer durumlar");
// }

// Burada gün ve saat değerleri belirlemissin sonrasında 
// if yapını açmıssın eğer gün değeri cumartesiye eşitse ya da gun değeri
// pazara eşitse ve saat 10 dan büyük eşitse haftasonu ve saat uygun
// şeklinde ekrana yazdırmıssın. Ardından else if diyerek gun değeri cumartesiye eşit değilse
// ve gun değeri pazara eşit değilse ve saatte 9 dan küçükse, hafta içi ve çok erken şeklinde 
// yazdırmıssın ekrana ardından bunların hiçbiri koşulu karşılamıyorsa diğer durumlar demissin


// Üçüncü yapı
// let not1 = 80, not2 = 60, ortalama = (not1 + not2) / 2;

// if (ortalama >= 90) {
//     console.log("Harf notu: A");
// } else if (ortalama >= 80) {
//     console.log("Harf notu: B");
// } else if (ortalama >= 70) {
//     console.log("Harf notu: C");
// } else if (ortalama >= 60) {
//     console.log("Harf notu: D");
// } else {
//     console.log("Harf notu: F");
// }

// burada not 1, not2, ortalama değerlerini girmissin kısaca mantığı öğrencinin aldığı notları 
// yani not 1 ile not 2 nin ortalamsına göre aldığı harf notunu ekrana yazdırıyorsun. Kodun öantığı bu şekilde. 


// dördüncü yapı
// let yas = 17;
// let ehliyetVarMi = false;

// if (yas >= 18 && ehliyetVarMi) {
//     console.log("Araç kullanabilirsin.");
// } else if (yas >= 18 && !ehliyetVarMi) {
//     console.log("Ehliyet alman gerekiyor.");
// } else {
//     console.log("Yaşın tutmuyor.");
// }

// burada yas ve ehliyetvar mı değerlerini oluşturmus ve değer atamıssın
// ardından if diyerek eğe yaş 18 de büyük eşit ve ehliyet var mı demisisn ardından ekrana araç kullanabilirsin yazmıssın.
// ardından else if kullanarak yas 18 büyük esit diyerek ehliyetvarmının değilini alarak ehliyet alman gerekşyor demisin ardından
// else diyerek yaşın tutmuyor demissin. Ama burada anlamadığım bir nokta var o da ehliyetVarMi= false; demissin ama 
// burada ehliyetin var mı sorusu false yerine true olmayacak mı ilk if de ise ehliyet var mı değerini girdiğimizde araç kullanabilirsin
// else if de ise ehliyetvarmı değerinin değilli olduğundan false gelecekti yani ehliyeti yok bu da ehliyet alman gerekiyor Demesine sebep olmayacak mı? 

// Beşinci yapı
// let x = 3, y = -2, z = 0;

// if (x > 0 && y > 0 && z > 0) {
//     console.log("Tüm sayılar pozitif.");
// } else if (x < 0 || y < 0 || z < 0) {
//     console.log("En az bir sayı negatif.");
// } else if (x === 0 || y === 0 || z === 0) {
//     console.log("En az bir sayı sıfır.");
// } else {
//     console.log("Farklı bir durum oluştu.");
// }

// burada x,y ve z yapıları belirlemissin. Sonrasında bunlara
// if ile x büyükse 0 dan ve y büyükse o dan ve z büyükse 0 dan şeklinde diyerek
// bütün sayıların pozitif olduğunu söylemissin ardından bunu 
// else if ile 0 dan küçük versiyonunu yaparak en az bir negatif vardır cevabını ortaya çıkarmıssın
// sonrasında hepsiini 0 a eşitleyerek en az biri sıfır ile eşittir demissin
// else de ise farklı bir durum demissin. 

// Yeni bir soru
// let kullaniciAdi = "admin";
// let sifre = "1234";
// let girisHakki = 3;

// if (kullaniciAdi === "admin" && sifre === "1234") {
//     console.log("Giriş başarılı! Hoş geldiniz.");
// } else {
//     girisHakki--;

//     if (girisHakki > 0) {
//         console.log("Hatalı giriş! Kalan hakkınız: " + girisHakki);
//     } else {
//         console.log("Hesabınız bloke oldu!");
//     }
// }

// Burada ilk başta 3 değerimiz mevcut bunlar: kullaniciadi, sifre ve giriş hakkı
// buradaki kısmı okuyup genel bir yorumlama yapacak olursam, burası bir login 
// sayfası için yazılmıştır burada giriş hakkımız ve kullanıcı adı ile sifremiz mevcuttur,
// tahminen hatalı girişlerde giriş hakkı sayısı azalacaktır. Bu girişleri kontrol etmek içinde 
// bir sorgu yazacağız. Bu kodların sadece değer kısımlarına bakarak 
// yaptığım bir yorumdu simdi kodlara bakarak bir değer çıkarmaya başlıyrum.
// Burada ilk başta kullanıcıadi admin ile eşit ve sifre 1234 ile eşitse diyip
// console.log ile giriş başarılı ve hoşgeldin yazdırmıssın
// Ardından else diyerek giriş hakkını -- diyerek her döndü başa döndüğünde azaltacak şekilde ayarlamıssın
// ve ardından if koşulu açmısısn burada giriş hakkı büyükse 0 dan diyerek konsola
// hatalı giriş kalan hakkınız diyerek girişhakki değerini yazdırmıssın ardından
// else durumunda yani hak kalmama durumunda hesabınız bloke oldu yazısını 
// konsola yazdırmıssın. Bu yazdıklarıma ithafen ayrıntılı bir yorum bekliyorum :D







// YARIN ÖĞRETİCİ REHBERİ BİTİR

