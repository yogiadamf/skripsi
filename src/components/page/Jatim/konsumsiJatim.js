import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'
function KonsumsiJatim(){
    const styles={marginLeft:"20%"}
    return(
        <div id="produksi">
        <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Jumlah Pengeluaran Konsumsi Beras Provinsi Jawa Timur</h2>
          <p>Plot Peramalan Jumlah Pengeluaran Konsumsi Beras Provinsi Jawa Timur Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line 
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Ramalan Pengeluaran Konsumsi',
                        data:[61283.87096,
                          61325.36187,
                          61314.62589,
                          61309.12707,
                          61320.47822,
                          61309.29766,
                          61317.68151,
                          61312.57685,
                          61314.98672,
                          61314.35694,
                          61314.04501,
                          61314.69812,
                          61314.05285,
                          61314.53760,
                          61314.24193,
                          61314.38189,
                          61314.34496,
                          61314.32727,
                          61314.36484,
                          61314.32761,
                          61314.35563,
                          61314.33851,
                          61314.34664,
                          61314.34447,
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
            <h3>Berikut tabel hasil peramalan jumlah pengeluaran konsumsi beras di provinsi Jawa Timur</h3>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Provinsi</th>
                    <th>Bulan</th>
                    <th>Pengeluaran Konsumsi(Rp)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Jatim.map((item, i)=>(
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

export default KonsumsiJatim