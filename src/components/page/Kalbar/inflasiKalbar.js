import React from 'react'
import { Line} from 'react-chartjs-2'
import data from '../Beras/data.json'
import { Table } from 'react-bootstrap'

function InflasiKalbar(){
    const styles={marginLeft:"20%"}
    return(
        <div id="features">
        <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Peramalan Tingkat Inflasi Provinsi Kalimantan Barat</h2>
          <p>Plot Peramalan Tingkat Inflasi Provinsi Kalimantan Barat Periode Januari 2021 - Desember 2022</p>
        </div>
        <div style={styles} className="col-lg-8 col-lg-8">
        <Line 
                data={{
                    labels: ['Jan 2021','Feb 2021', 'Mar 2021', 'Apr 2021', 'Mei 2021', 'Jun 2021 ', 'Jul 2021', 'Agu 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Des 2021','Jan 2022','Feb 2022', 'Mar 2022', 'Apr 2022', 'Mei 2022', 'Jun 2022 ', 'Jul 2022', 'Agu 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Des 2022'],
                    datasets: [
                      {
                        label: 'Data Ramalan Tingkat Inflasi',
                        data: [0.486802368,
                          0.31434990,
                          -0.31613927,
                          -0.04032723,
                          0.46856039,
                          0.29636231,
                          -0.27951689,
                          -0.30455643,
                          -0.11579453,
                          -0.11798958,
                          0.10918786,
                          0.22813554,
                          0.49365992,
                          0.36054747,
                          -0.35066075,
                          -0.17527139,
                          0.35964227,
                          0.23096663,
                          -0.43183499,
                          -0.37807668,
                          -0.16749558,
                          -0.15172231,
                          0.15330875,
                          0.19605285,
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
            <h3>Berikut tabel hasil peramalan tingkat inflasi di provinsi Kalimantan Barat</h3>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Provinsi</th>
                    <th>Bulan</th>
                    <th>Tingkat Inflasi(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Kalbar.map((item, i)=>(
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

export default InflasiKalbar