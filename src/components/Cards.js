import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Peramalan</h2>
          <p>Peramalan harga beras, produksi padi, tingkat inflasi, jumlah konsumsi di Indonesi wilayah bagian barat</p>
          <div className='cards'>
            <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='img/beras.jpeg'
                  text='Peramalan Harga Beras'
                  label='Peramalan'
                  path='/peramalanHargaBeras'
                />
                <CardItem
                  src='img/padi.jpg'
                  text='Peramalan Produksi Padi'
                  label='Peramalan'
                  path='/peramalan'
                />
                <CardItem
                  src='img/inflasi.jpg'
                  text='Peramalan Tingkat Inflasi'
                  label='Peramalan'
                  path='/peramalan'
                />
                <CardItem
                  src='img/konsumsi.png'
                  text='Peramalan Konsumsi'
                  label='Peramalan'
                  path='/peramalan'
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Cards;
