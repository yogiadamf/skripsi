import React from 'react';
import './App.css';
import Navigation from './components/navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Peramalan from './components/page/Beras/peramalanBeras';
import Home from './components/page/home'
import BerasAceh from './components/page/Beras/berasAceh';
import Fitur from './components/features';
import Abstrak from './components/abstrak';
import Metode from './components/metode';
import SumateraUtara from './components/page/Sumut/sumut';
import SumateraBarat from './components/page/Sumbar/sumbar';
import Riau from './components/page/Riau/riau';
import Jambi from './components/page/Jambi/jambi';
import Sumsel from './components/page/Sumsel/sumsel';
import Bengkulu from './components/page/Bengkulu/bengkulu';
import Lampung from './components/page/Lampung/lampung';
import Bangka from './components/page/Bangka/bangka';
import Kepri from './components/page/Kepulauan Riau/kepri';
import Jakarta from './components/page/Jakarta/jakarta';
import Jabar from './components/page/Jabar/jabar';
import Jateng from './components/page/Jateng/jateng';
import Jogja from './components/page/Jogja/jogja';
import Jatim from './components/page/Jatim/jatim';
import Banten from './components/page/Banten/banten';
import Kalbar from './components/page/Kalbar/kalbar';
import Kalteng from './components/page/Kalteng/kalteng';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/peramalanHargaBeras' element={<Peramalan/>} />
          <Route path='/fitur' element={<Fitur/>} />
          <Route path='/abstrak' element={<Abstrak/>} />
          <Route path='/metode' element={<Metode/>} />
          <Route path='/peramalan' element={<Peramalan/>} />
          <Route path='/peramalanAceh' element={<BerasAceh/>} />
          <Route path='/peramalanSumut' element={<SumateraUtara/>} />
          <Route path='/peramalanSumbar' element={<SumateraBarat/>} />
          <Route path='/peramalanRiau' element={<Riau/>} />
          <Route path='/peramalanJambi' element={<Jambi/>} />
          <Route path='/peramalanSumsel' element={<Sumsel/>} />
          <Route path='/peramalanBengkulu' element={<Bengkulu/>} />
          <Route path='/peramalanLampung' element={<Lampung/>} />
          <Route path='/peramalanBangka' element={<Bangka/>} />
          <Route path='/peramalanKepulauanRiau' element={<Kepri/>} />
          <Route path='/peramalanJakarta' element={<Jakarta/>} />
          <Route path='/peramalanJabar' element={<Jabar/>} />
          <Route path='/peramalanJateng' element={<Jateng/>} />
          <Route path='/peramalanJogja' element={<Jogja/>} />
          <Route path='/peramalanJatim' element={<Jatim/>} />
          <Route path='/peramalanBanten' element={<Banten/>} />
          <Route path='/peramalanKalbar' element={<Kalbar/>} />
          <Route path='/peramalanKalteng' element={<Kalteng/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
