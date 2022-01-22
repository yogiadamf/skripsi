import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'
function ProduksiKalteng(){
    const styles={marginLeft:"20%"}
    return(
        <div id="produksi">
        <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Produksi Padi Provinsi Kalimantan Tengah</h2>
          <p>Plot Peramalan Produksi Padi Provinsi Kalimantan Tengah Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line 
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Ramalan Produksi Padi',
                        data:[39341.9346,
                          46361.16185,
                          47680.47305,
                          52489.30278,
                          49712.74950,
                          45426.19199,
                          37579.91240,
                          45882.93028,
                          44782.69232,
                          44559.29027,
                          31312.30070,
                          38906.69296,
                          40518.35550,
                          47537.58275,
                          48856.89395,
                          53665.72368,
                          50889.17041,
                          46602.61289,
                          38756.33330,
                          47059.35118,
                          45959.11323,
                          45735.71118,
                          32488.72160,
                          40083.11386,
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
                          text: 'Produksi Padi(ton)',
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
            <h3>Berikut tabel hasil peramalan produksi padi di provinsi Kalimantan Tengah</h3>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Provinsi</th>
                    <th>Bulan</th>
                    <th>Produksi Padi(ton)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Kalteng.map((item, i)=>(
                    <tr key={i}>
                    <td>{item.Provinsi}</td>
                    <td>{item.Tahun}</td>
                    <td>{item.Produksi}</td>
                    </tr>
                    ))}
                </tbody>
                </Table>
            </div>
        </div>  
    </div>
    )
}

export default ProduksiKalteng