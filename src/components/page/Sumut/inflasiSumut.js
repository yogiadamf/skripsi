import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'

function InflasiSumut(){
    const styles={marginLeft:"20%"}
    return(
        <div id="features">
        <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Tingkat Inflasi Provinsi Sumatera Utara</h2>
          <p>Plot Peramalan Tingkat Inflasi Provinsi Sumatera Utara Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line 
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Ramalan Tingkat Inflasi',
                        data: [0.791234755,
                          0.916689301,
                          1.299416566,
                          1.254871135,
                          1.223052987,
                          0.940325771,
                          0.982598543,
                          0.979416778,
                          0.813053207,
                          0.905780534,
                          0.910326052,
                          1.037598827,
                          0.851950273,
                          0.977404819,
                          1.360132084,
                          1.315586653,
                          1.283768506,
                          1.001041289,
                          1.043314062,
                          1.040132296,
                          0.873768725,
                          0.966496053,
                          0.971041570,
                          1.098314346,
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
                    {data.Sumut.map((item, i)=>(
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

export default InflasiSumut