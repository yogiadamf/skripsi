import React from 'react'

function Fitur(){
    return(
        <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Fitur</h2>
        </div>
        <div className='row'>
          <div className='col-xs-6 col-md-3'>
            <i className='fa fa-poll'></i>
            <h3>Peramalan Harga Beras</h3>
            <p>Peramalan harga beras di indonesia wilayah bagian barat</p>
          </div>
          <div className='col-xs-6 col-md-3'>
            <i className='fa fa-chart-line'></i>
            <h3>Peramalan Produksi Padi</h3>
            <p>Peramalan produksi padi di indonesia wilayah bagian barat</p>
          </div>
          <div className='col-xs-6 col-md-3'>
            <i className='fa fa-chart-area'></i>
            <h3>Peramalan Tingkat Inflasi</h3>
            <p>Peramalan tingkat inflasi di indonesia wilayah bagian barat</p>
          </div>
          <div className='col-xs-6 col-md-3'>
            <i className='fa fa-chart-bar'></i>
            <h3>Peramalan Konsumsi Beras</h3>
            <p>Peramalan jumlah pengeluaran konsumsi beras indonesia wilayah bagian barat</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Fitur