import React from 'react'
import { Line } from 'react-chartjs-2';
function Abstrak(){
    const styles={textAlign: "justify"}
    return(
        <div id="about">
        <div className="container">
            <div className="row">
            <div className="col-xs-12 col-md-6">
            <Line
                  data={{
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Juli', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
                    datasets: [
                      {
                        label: 'Data Aktual Harga Beras',
                        data: [11269,11303,11296,11481,11462,11443,11450,11334,11349],
                        borderColor: 'black',
                        borderWidth: 1,
                      },
                      {
                        label: 'Data Ramalan Harga Beras',
                        data: [11269,11303,11296,11481,11462,11443,11450,11334,11349,11320,11307,11313],
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
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                    legend: {
                      labels: {
                        fontSize: 25,
                      },
                    },
                  }}
                />
            </div>
            <div className="col-xs-12 col-md-6">
                <div className="about-text">
                <h2>Abstrak</h2>
                <p style={styles}>Beras merupakan bahan pangan pokok sebagian besar masyarakat Indonesia. Rata-rata hampir 90% masyarakat Indonesia mengonsumsi beras. Pada awal tahun 2020 harga beras mengalami peningkatan. Harga beras yang semakin naik menjadi perhatian utama, karena berdampak terhadap perkembangan inflasi di Indonesia. Beras merupakan salah satu komoditas pangan yang memiliki pengaruh yang cukup besar terhadap inflasi baik nasional maupun regional. Dalam rangka perumusan kebijakan pengendalian inflasi maka data dan informasi terkait proyeksi keadaan pasar sangat dibutuhkan. Oleh karena itu, pemodelan harga beras di Indonesia sangat perlu dilakukan. Sebagian besar sentra beras di Indonesia berasal dari provinsi di wilayah Indonesia bagian barat, sehingga pada penelitian ini dilakukan pengembangan model harga beras untuk wilayah Indonesia bagian barat dengan menggunakan pendekatan clustering time series. Pemodelan dilakukan dengan tahapan pengumpulan data, pemodelan ARIMA pada level provinsi, pemodelan dengan regresi data panel dan evaluasi keakuratan model dengan menggunakan MAPE dan uji chow dan haussmann.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Abstrak