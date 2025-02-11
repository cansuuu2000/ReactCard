
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h3>Harry Potter Karakterleri</h3>
      <div className="card-container">
        <Card
          img="https://upload.wikimedia.org/wikipedia/tr/6/61/HarryPotterOotP.jpg" 
          alt="harry-potter"
          title="Harry Potter"
          description="Harry Potter, İngiliz yazar J. K. Rowling tarafından yazılmış yedi fantastik romandan oluşan bir seridir. Romanlar, Hogwarts Cadılık ve Büyücülük Okulu'nda eğitim gören genç büyücü Harry Potter ile arkadaşları Hermione Granger ve Ron Weasley'nin yaşamlarını konu alır."
        />
        <Card
          img="https://images.ctfassets.net/usf1vwtuqyxm/toxlayPDePtX8yx2wvWun/b65f6acd9087031b1ff39461d8f22d0a/severus-snape_2_1800x1248.png"
          title="Severus Snape"
          description="Yazar, böylesine ciddi ve sert mizaçlı bir karaktere Severus Snape adını verirken, Fransızca çok ciddi, sert, cezalandırıcı gibi anlamlara gelen severe kelimesinden esinlenmiştir. Ayrıca antik Yunanda Serverus kötü tanrıdır. Özel büyüsü Sectumsempra'dır. Ayrıca yetkin bir Zihnefendar'dır."
        />
        <Card
          img="https://images.ctfassets.net/usf1vwtuqyxm/4tNCXEveHBZWp1AgccZg52/39c30ab4bc67842362b78ca5ab8e0eef/HP-F4-goblet-of-fire-hermione-great-hall-smiling-book-web-landscape?h=416&w=600&fit=pad"
          title="Hermione Granger"
          description="Hermione çok zeki ve akademik başarısı yüksek bir öğrencidir. Sınıf birincisidir. Zekasıyla ve olaylardaki bütün ayrıntıları yakalamasıyla Harry'ye çok yardımcı olmuştur."
        />
        <Card
        img="https://upload.wikimedia.org/wikipedia/tr/thumb/f/fe/Dumbledore_and_Elder_Wand.JPG/220px-Dumbledore_and_Elder_Wand.JPG"
        title="Albus Dumbledore"
        description="Çok zeki, araştırmacı, sakin ve kendini duygularına kaptırmayan çok güçlü bir büyücüdür. Gençliğinde aşırı güç meraklısıdır, daha sonra daha mantıklı davranmaya karar verir. (Kibar, biraz ilginç ve güçlü yapısıyla tipik iyi büyücü özelliklerini taşımaktadır.) "
        />
        <Card
        img="https://www.donanimhaber.com/cache-v2/?t=20241022112428&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/174755/harry-potter-karakterleri-oyunculari-isimleri-rolleri174755_10.jpg"
        title="Dobby"
        description="Harry Potter'daki hiçbir karakter Dobby'den daha sadık değildir. Hane Elf'i, beklenmedik de olsa Harry'nin en önemli arkadaşlarından biri ve sonunda son savaşta herkesin tahmin edebileceğinden çok daha önemli bir rol oynuyor. "
        />
        <Card
        img="https://upload.wikimedia.org/wikipedia/tr/thumb/f/fe/Rubeus_Hagrid.png/220px-Rubeus_Hagrid.png"
        title="Rubeus Hagrid"
        description="Harry Potter filmlerinin hepsinde olan bu karakter yarı dev yarı insandır. Harry Potter ile arkadaşlarının yakın arkadaşıdır. Ayrıca Dumbledore 'a ayrı bir yakınlığı vardır. Asa kullanması ve büyü yapması kesinlikle yasaktır.  "
        />
        <Card
        img="https://www.donanimhaber.com/cache-v2/?t=20241022112428&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/174755/harry-potter-karakterleri-oyunculari-isimleri-rolleri174755_7.jpg"
        title="Lord Voldemort"
        description="Lord Voldemort, Harry Potter'daki en korkunç kötü karakter. Bunun tek nedeni, serinin birden fazla kez ölümden kurtulmayı başaran aşırı güçlü kötü adamı olması. Kendisinden nefret ettiği fiziğiyle Voldemort, kanının saflığıyla övünen bir melez.  "
        />
        <Card
        img="https://www.donanimhaber.com/cache-v2/?t=20241022112428&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/174755/harry-potter-karakterleri-oyunculari-isimleri-rolleri174755_8.jpg"
        title="Ron Weasley"
        description="Arkadaşlarına çok sadık ve yeri geldiğinde değer verdiği şeyler için her şeyini ortaya koyabilen bir karakterdir. Rowling onu uzun boylu, zayıf, leylek bacaklı, çilli, uzun burunlu ve elleriyle ayakları kocaman şeklinde tanımlamıştır."
        />
      </div>
    </div>
  );
}

export default App;
