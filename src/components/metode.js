import React from 'react'

function Metode(){
    const styles={textAlign: "justify"}
    return(
        <div id='services' className='text-center'>
      <div className="container">
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Metode</h2>
          <p>Metode yang digunakan untuk peramalan adalah metode Regresi Data Panel & ARIMA</p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className='hover-bg'>
              <a
                href="img/rem.png"
                title="Regresi Data Panel"  >
                <div className='hover-text'>
                  <h4>Regresi Data Panel</h4>
                </div>
                <img src="img/rem.png" className="img-responsive" alt="ARIMA"/>
              </a>
            </div>
            <div className='section-title'>
              <h2 className="text-center">ARIMA</h2>
              <p style={styles}>
              Model Autoregresiive Integrated Moving Average (ARIMA) adalah model yang secara penuh mengabaikan independen variabel dalam membuat peramalan. ARIMA menggunakan nilai masa lalu dan sekarang dari variabel dependen untuk menghasilkan peramalan jangka pendek yang akurat.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className='section-title'>
              <h2>Regresi Data Panel</h2>
                <p style={styles}>
                Regresi Data Panel adalah gabungan antara data cross section dan data time series, dimana unit cross section yang sama diukur pada waktu yang berbeda. Maka dengan kata lain, data panel merupakan data dari beberapa individu sama yang diamati dalam kurun waktu tertentu.
                </p>
            </div>
            <div className='hover-bg'>
              <a
                href="img/pacf.png"
                title="ARIMA"  >
                <div className='hover-text'>
                  <h4>ARIMA</h4>
                </div>
                <img src="img/pacf.png" className="img-responsive" alt="ARIMA"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Metode