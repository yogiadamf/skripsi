import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'
import ProduksiKepri from './produksiKepri'
import InflasiKepri from './inflasiKepri'
import KonsumsiKepri from './konsumsiKepri'

function Kepri(){
    const styles={marginLeft:"20%"}
    return(
    <>
    <header id='header'>
      <div className='kepri'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 beras-text'>
                <h1>Provinsi Kepulauan Riau
                  <span></span>
                </h1>
                <p>Peramalan Harga Beras, Produksi Padi, Tingkat Inflasi, Konsumsi Provinsi Kepulauan Riau Periode Januari-Desember 2022</p>
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
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Harga Beras Provinsi Kepulauan Riau</h2>
          <p>Plot Peramalan Harga Beras Provinsi Kepulauan Riau Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Aktual Harga Beras',
                        data: [13850,
                          13850,
                          13850,
                          13850,
                          13850,
                          13850,
                          13850,
                          15050,
                          14550,
                          14550,
                          14750,
                          14750
                          ],
                        borderColor: 'black',
                        borderWidth: 1,
                      },
                      {
                        label: 'Data Ramalan Harga Beras',
                        data: [13207.48544,
                          13218.26720,
                          13157.86987,
                          13123.19077,
                          13148.60132,
                          13225.37585,
                          13210.02946,
                          13108.65908,
                          13125.44336,
                          13148.28260,
                          13194.08669,
                          13243.89492,
                          13145.79514,
                          13187.42019,
                          13156.85937,
                          13120.25403,
                          13077.71334,
                          13199.21184,
                          13182.69430,
                          13125.36736,
                          13069.53899,
                          13104.45131,
                          13160.79206,
                          13182.23719,
                          ],
                      borderColor: 'red',
                      borderWidth: 1,
                      },
                    ],
                  }}
                  height={400}
                  width={600}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        display: true,
                        title: {
                          display: true,
                          text: 'Harga Beras (Rp)',
                          font: {
                            size: 20,
                            style: 'normal',
                            lineHeight: 1.2
                          },
                          padding: {top: 30, left: 0, right: 0, bottom: 0}
                        }
                      },
                      x: {
                        display: true,
                        title: {
                          display: true,
                          text: 'Tahun 2021-2022',
                          font: {
                            size: 20,
                            style: 'normal',
                            lineHeight: 1.2
                          },
                          padding: {top: 30, left: 0, right: 0, bottom: 0}
                        }
                      }
                    },
                    legend: {
                      labels: {
                        fontSize: 25,
                      },
                    },
                  }}
                />
        </div>  
    
    <div className='col-lg-8 col-lg-8' style={styles}>
    <h3>Berikut tabel hasil peramalan harga beras di provinsi Kepulauan Riau</h3>
    <h4>Model : Y = 8717.7 - 0.0276X1 + 102.37X 2 + 0.0446X3 + 201</h4>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Provinsi</th>
              <th>Bulan</th>
              <th>Harga Ramalan(Rp)</th>
              <th>Harga Aktual(Rp)</th>
              <th>Error</th>
              <th>Error/Harga Aktual</th>
            </tr>
          </thead>
          <tbody>
            {data.Kepri.map((item, i)=>(
              <tr key={i}>
              <td>{item.Provinsi}</td>
              <td>{item.Tahun}</td>
              <td>{item['Harga Ramalan']}</td>
              <td>{item['Harga Aktual']}</td>
              <td>{item.Error}</td>
              <td>{item['Error/Harga Aktual']}</td>
            </tr>
            ))}
          </tbody>
        </Table>
    </div>
    </div>
    <ProduksiKepri/>
    <InflasiKepri/>
    <KonsumsiKepri/>
    </div>
    </>
    )
}

export default Kepri