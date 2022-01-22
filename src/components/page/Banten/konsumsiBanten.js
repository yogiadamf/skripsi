import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'
function KonsumsiBanten(){
    const styles={marginLeft:"20%"}
    return(
        <div id="produksi">
        <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Jumlah Pengeluaran Konsumsi Beras Provinsi Banten</h2>
          <p>Plot Peramalan Jumlah Pengeluaran Konsumsi Beras Provinsi Banten Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line 
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Ramalan Pengeluaran Konsumsi',
                        data:[71036.16982,
                          71631.47118,
                          70947.60770,
                          71630.24947,
                          71024.32790,
                          71493.62544,
                          71201.11122,
                          71299.01239,
                          71391.08482,
                          71133.87792,
                          71515.45201,
                          71060.54645,
                          71533.80699,
                          71094.84998,
                          71454.68069,
                          71206.72563,
                          71324.72830,
                          71339.27455,
                          71204.13202,
                          71435.80182,
                          71140.23643,
                          71462.70525,
                          71150.34054,
                          71419.58479,
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
            <h3>Berikut tabel hasil peramalan jumlah pengeluaran konsumsi beras di provinsi Banten</h3>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Provinsi</th>
                    <th>Bulan</th>
                    <th>Pengeluaran Konsumsi(Rp)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Banten.map((item, i)=>(
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

export default KonsumsiBanten