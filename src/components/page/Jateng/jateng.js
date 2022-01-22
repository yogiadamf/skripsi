import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'
import ProduksiJateng from './produksiJateng'
import InflasiJateng from './inflasiJateng'
import KonsumsiJateng from './konsumsiJateng'

function Jateng(){
    const styles={marginLeft:"20%"}
    return(
    <>
    <header id='header'>
      <div className='jateng'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 beras-text'>
                <h1>Provinsi Jawa Tengah
                  <span></span>
                </h1>
                <p>Peramalan Harga Beras, Produksi Padi, Tingkat Inflasi, Konsumsi Provinsi Jawa Tengah Periode Januari-Desember 2022</p>
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
          <h2>Peramalan Harga Beras Provinsi Jawa Tengah</h2>
          <p>Plot Peramalan Harga Beras Provinsi Jawa Tengah Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Aktual Harga Beras',
                        data: [12000,
                          12150,
                          12000,
                          12000,
                          12000,
                          12050,
                          12100,
                          12150,
                          12200,
                          14200,
                          14200,
                          14300,
                          ],
                        borderColor: 'black',
                        borderWidth: 1,
                      },
                      {
                        label: 'Data Ramalan Harga Beras',
                        data: [11746.26649,
                          11704.30258,
                          11717.00932,
                          11707.41906,
                          11732.92946,
                          11768.70196,
                          11786.99260,
                          11760.95954,
                          11738.11253,
                          11733.94869,
                          11767.63941,
                          11790.22520,
                          11747.24190,
                          11712.66627,
                          11724.87064,
                          11715.74473,
                          11740.82592,
                          11776.99515,
                          11794.91907,
                          11769.22498,
                          11746.06465,
                          11742.19043,
                          11775.61344,
                          11798.44669,
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
    <h3>Berikut tabel hasil peramalan harga beras di provinsi Jawa Tengah</h3>
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
            {data.Jateng.map((item, i)=>(
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
    <ProduksiJateng/>
    <InflasiJateng/>
    <KonsumsiJateng/>
    </div>
    </>
    )
}

export default Jateng