import React from 'react'

function HeaderBeras(){
    return (
    <header id='header'>
      <div className='beras'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 beras-text'>
                <h1>Peramalan
                  <span></span>
                </h1>
                <p>Peramalan Harga Beras, Produksi Padi, Tingkat Inflasi, Konsumsi di Indonesia Wilayah Bagian Barat</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
}

export default HeaderBeras