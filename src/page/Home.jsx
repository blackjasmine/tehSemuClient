import Nav from '../nav/Nav.jsx';
import './Home.css';

function Home() {
  
  
  return (
    <div className='container'>
      <Nav />
      <div className='background'>
        <p className='p1'>------ Kuliner Minuman</p>
        <h1 className='hsemu'>TEH SEMU</h1>
        <p className='semu'>Teh Semanis Senyummu :)</p>

        <div className="info">
          <div className="contText">
            <p className="text1">Lokasi:<br />Dk.Wonosari Ds.Tempurejo<br />Kec.Blora Kab.Blora</p>
            <p className="text2">Pesan antar: 085290792614<br />Hanya melayani untuk pemesanan<br />area Blora kota</p>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="sec1">
        <h3>Jelajahi banyak rasa dari racikan kami!</h3>
        <div className="letter">
          <p>Kami menyajikan banyak rasa yang dapat kamu jelajahi,
            dengan racikan yang dijamin sudah pasti enak untuk
            meredakan haus dan dahagamu, ataupun untuk menemani
            hari-harimu dikala kamu kesepeian dan butuh teman!
            Banyak variannya loh, yakin gk mau coba?
          </p>
          <p>
            Banyak menu pilihan yang bisa kamu pilah dan pilih untuk
            menemukan varian minuman yang kamu sukai. Mulai dari varian
            "Milk Shake", "Iced Coffee", "Iced Tea", dan juga "Squash".
            Buruan ke outlet kami di alamat yang sudah tertera diatas,
            dan rasakan kenikmatan dari minuman yang akan kami sajikan.
          </p>
        </div>
      </div>
      <div className="sec2">
        <p className='h2'>Menu andalan kami diantara lain adalah:</p>
        <div className="menu">
          <div className="ol1">
            <p className='jud'>1. Milk Shake Series</p>
            <div className="li1">
              <p className='color'>- Choco Cheese</p>
              <p className='color'>- Matcha</p>
            </div>
          </div>
          <div className="ol2">
            <p className='jud'>2. Iced Coffee Series</p>
            <div className="li1">
              <p className='color'>- lychee Coffee</p>
              <p className='color'>- Brown Sugar Coffee</p>
            </div>
          </div>
          <div className="ol3">
            <p className='jud'>3. Iced Tea Series</p>
            <div className="li1">
              <p className='color'>- Lemon Tea</p>
              <p className='color'>- lychee Tea</p>
            </div>
          </div>
          <div className="ol4">
            <p className='jud'>4. Squash Series</p>
            <div className="li1">
              <p className='color'>- Lemon Squash</p>
              <p className='color'>- lychee Squash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;