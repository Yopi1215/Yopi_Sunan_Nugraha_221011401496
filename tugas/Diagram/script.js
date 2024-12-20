// Ambil elemen canvas
const ctx = document.getElementById('salesChart').getContext('2d');

// Data untuk diagram
const data = {
    labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'], // Label bulan
    datasets: [
        {
            label: '2022',
            data: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945], // Data tahun 2022
            backgroundColor: 'rgba(58, 94, 255)', // Warna biru transparan
            borderColor: 'rgb(58, 94, 255)', // Warna biru solid
            borderWidth: 1
        },
        {
            label: '2023',
            data: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689], // Data tahun 2023
            backgroundColor: 'rgb(255, 0, 0)', // Warna merah transparan
            borderColor: 'rgb(255, 0, 0)', // Warna merah solid
            borderWidth: 1
        }
    ]
};

// Konfigurasi diagram
const config = {
    type: 'bar', // Jenis diagram batang
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Laporan Penjualan (2022 vs 2023)' // Judul diagram
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true // Mulai dari 0
            }
        }
    }
};

// Buat diagram menggunakan Chart.js
new Chart(ctx, config);
