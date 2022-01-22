import React from 'react'

function Header(){
    return(
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>Peramalan Harga Beras
                  <span></span>
                </h1>
                <p>Peramalan Harga Beras di Indonesia Wilayah Bagian Barat dengan Menggunakan Regresi Data Panel</p>
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

export default Header