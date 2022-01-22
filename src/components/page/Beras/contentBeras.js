import React from 'react'
import '../../Cards.css';
import CardItem from '../../CardItem';

function ContentBeras(){
    return(
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Provinsi</h2>
            </div>
        </div>
        <div className='cards'>
            <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='img/aceh.jpg'
                  text='Aceh'
                  label='Provinsi'
                  path='/peramalanAceh'
                />
                <CardItem
                  src='img/sumut.jpg'
                  text='Sumatera Utara'
                  label='Provinsi'
                  path='/peramalanSumut'
                />
                <CardItem
                  src='img/sumbar.jpg'
                  text='Sumatera Barat'
                  label='provinsi'
                  path='/peramalanSumbar'
                />
                <CardItem
                  src='img/riau.jpg'
                  text='Riau'
                  label='provinsi'
                  path='/peramalanRiau'
                />
                <CardItem
                  src='img/jambi.jpg'
                  text='Jambi'
                  label='provinsi'
                  path='/peramalanJambi'
                />
                <CardItem
                  src='img/sumsel.jpg'
                  text='Sumatera Selatan'
                  label='provinsi'
                  path='/peramalanSumsel'
                />
              </ul>
              <ul className='cards__items'>
              <CardItem
                  src='img/bengkulu.jpg'
                  text='Bengkulu'
                  label='provinsi'
                  path='/peramalanBengkulu'
                />
              <CardItem
                  src='img/lampung.jpg'
                  text='Lampung'
                  label='provinsi'
                  path='/peramalanLampung'
                />
              <CardItem
                  src='img/bangka.jpg'
                  text='Bangka Belitung'
                  label='provinsi'
                  path='/peramalanBangka'
                />
              <CardItem
                  src='img/kepri.jpg'
                  text='Kepulauan Riau'
                  label='provinsi'
                  path='/peramalanKepulauanRiau'
                />
              <CardItem
                  src='img/jakarta.jpg'
                  text='Jakarta'
                  label='provinsi'
                  path='/peramalanJakarta'
                />
              <CardItem
                  src='img/jabar.jpg'
                  text='Jawa Barat'
                  label='provinsi'
                  path='/peramalanJabar'
                />
              </ul>
              <ul className='cards__items'>
              <CardItem
                  src='img/jateng.jpg'
                  text='Jawa Tengah'
                  label='provinsi'
                  path='/peramalanJateng'
                />
              <CardItem
                  src='img/jogja.jpg'
                  text='Yogyakarta'
                  label='provinsi'
                  path='/peramalanJogja'
                />
              <CardItem
                  src='img/jatim.jpg'
                  text='Jawa Timur'
                  label='provinsi'
                  path='/peramalanJatim'
                />
              <CardItem
                  src='img/banten.jpg'
                  text='Banten'
                  label='provinsi'
                  path='/peramalanBanten'
                />
              <CardItem
                  src='img/kalbar.jpg'
                  text='Kalimantan Barat'
                  label='provinsi'
                  path='/peramalanKalbar'
                />
              <CardItem
                  src='img/kalteng.jpg'
                  text='Kalimantan Tengah'
                  label='provinsi'
                  path='/peramalanKalteng'
                />
              </ul>
            </div>
          </div>
          </div>
    </div>
    )
}

export default ContentBeras