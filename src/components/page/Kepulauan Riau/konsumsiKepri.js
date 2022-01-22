import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'
function KonsumsiKepri(){
    const styles={marginLeft:"20%"}    
    return(
        <div id="produksi">
        <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Jumlah Pengeluaran Konsumsi Beras Provinsi Kepulauan Riau</h2>
          <p>Plot Peramalan Jumlah Pengeluaran Konsumsi Beras Provinsi Kepulauan Riau Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Ramalan Pengeluaran Konsumsi',
                        data: [73765.63525,
                        73734.70797,
                        73721.30505,
                        73715.49663,
                        73712.97945,
                        73711.88857,
                        73711.41582,
                        73711.21095,
                        73711.12216,
                        73711.08369,
                        73711.06701,
                        73711.05978,
                        73711.05665,
                        73711.05530,
                        73711.05471,
                        73711.05445,
                        73711.05434,
                        73711.05429,
                        73711.05427,
                        73711.05426,
                        73711.05426,
                        73711.05426,
                        73711.05426,
                        73711.05426,
                        ],
                        borderColor: 'yellow',
                        backgroundColor:'white',
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
                          text: 'Pengeluaran Konsumsi(Rp)',
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
            <h3>Berikut tabel hasil peramalan jumlah pengeluaran konsumsi beras di provinsi Kepulauan Riau</h3>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Provinsi</th>
                    <th>Bulan</th>
                    <th>Pengeluaran Konsumsi(Rp)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Kepri.map((item, i)=>(
                    <tr key={i}>
                    <td>{item.Provinsi}</td>
                    <td>{item.Tahun}</td>
                    <td>{item.Konsumsi}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </div>
        </div>  
    </div>
    )
}

export default KonsumsiKepri