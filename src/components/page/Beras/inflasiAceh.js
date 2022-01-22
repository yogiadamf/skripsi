import React from 'react'
import { Line} from 'react-chartjs-2'
import data from './data.json'
import { Table } from 'react-bootstrap'

function InflasiAceh(){
    const styles={marginLeft:"20%"}
    return(
        <div id="features">
        <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Tingkat Inflasi Provinsi Aceh</h2>
          <p>Plot Peramalan Tingkat InflasiProvinsi Aceh Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line 
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Ramalan Tingkat Inflasi',
                        data: [0.509636949,
                          0.337970487,
                          0.252939522,
                          0.180088618,
                          0.469595596,
                          0.495360518,
                          0.402436687,
                          0.257127544,
                          0.322969697,
                          0.189448395,
                          0.303470505,
                          0.725423191,
                          0.480706020,
                          0.309039558,
                          0.224008594,
                          0.151157689,
                          0.440664667,
                          0.466429589,
                          0.373505758,
                          0.228196616,
                          0.294038768,
                          0.160517466,
                          0.274539576,
                          0.696492262,
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
                          text: 'Tingkat Inflasi(%)',
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
            <h3>Berikut tabel hasil peramalan tingkat inflasi di Indonesia wilayah bagian barat</h3>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Provinsi</th>
                    <th>Bulan</th>
                    <th>Tingkat Inflasi(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Aceh.map((item, i)=>(
                    <tr key={i}>
                    <td>{item.Provinsi}</td>
                    <td>{item.Tahun}</td>
                    <td>{item.Inflasi}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </div>
        </div>  
    </div>
    )
}

export default InflasiAceh