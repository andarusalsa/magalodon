import { Line } from "react-chartjs-2";
import { useState } from 'react'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const maggotData = [
 { month: "Jan", sales: 50 },
 { month: "Feb", sales: 100 },
 { month: "Mar", sales: 150 },
 { month: "Apr", sales: 200 },
 { month: "May", sales: 250 },
 { month: "Jun", sales: 300 },
];

const sampahData = [
 { month: "Jan", sales: 100 },
 { month: "Feb", sales: 200 },
 { month: "Mar", sales: 300 },
 { month: "Apr", sales: 400 },
 { month: "May", sales: 500 },
 { month: "Jun", sales: 600 },
];

const dataPenjualan =[
  { month: "Jen", sales: 100 },
  { month: "Feb", sales: 200 },
  { month: "Mar", sales: 300 },
  { month: "Apr", sales: 400 },
  { month: "May", sales: 500 },
  { month: "Jun", sales: 600 },
];

const dataSet = [
  {
    value: "pembelian maggot",
    label: "Pembelian Maggot",
    data: maggotData,
    borderColor: "rgba(255, 99, 132, 1)", // Contoh warna merah
    gradientColorStart: "rgba(255, 99, 132, 0.2)", // Contoh warna gradien merah
  },
  {
    value: "pembelian limbah",
    label: "Pembelian Limbah Pangan",
    data: sampahData,
    borderColor: "rgba(75, 192, 192, 1)", // Contoh warna hijau
    gradientColorStart: "rgba(75, 192, 192, 0.2)", // Contoh warna gradien hijau
  },
  {
    value: "penjualan",
    label: "Penjualan Pangan",
    data: dataPenjualan,
    borderColor: "rgba(255, 205, 86, 1)", // Contoh warna kuning
    gradientColorStart: "rgba(255, 205, 86, 0.2)", // Contoh warna gradien kuning
  },
];

const menuOptions = dataSet.map((item) => ({
  value: item.value,
  label: item.label,
}));



const MyChart = () => {
  const [selectedMenu, setSelectedMenu] = useState("pembelian maggot");
  const handleMenuClick = (value:string) => {
    setSelectedMenu(value);
  };

  const selectedData = dataSet.find((item) => item.value === selectedMenu);

const data = {
  labels: selectedData?.data?.map((data) => data.month) || [],
  datasets: [
    {
      label: selectedData?.label || '',
      data: selectedData?.data.map((data) => data.sales) || [],
      borderColor: selectedData?.borderColor || '',
      borderWidth: 3,
      pointBorderColor: selectedData?.borderColor || '',
      pointBorderWidth: 3,
      tension: 0.5,
      fill: true,
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, selectedData?.gradientColorStart || ''); // Ganti 'blue' dengan warna default yang diinginkan
        gradient.addColorStop(1, "white");
        return gradient;
      },
    },
  ],
};
  
  const options = {
     plugins: {
       legend: {
         display: true,
         labels:{
          font:{
            size:12,
            family: "Poppins, sans-serif",
          },
          padding: 10
         },
       },
     },
     responsive: true,
     scales: {
       y: {
         ticks: {
           font: {
             size: 12,
             family: 'Poppins, sans-serif'
           },
         },
         title: {
           display: false,
         },
         min: 50,
       },
       x: {
         ticks: {
           font: {
            size: 12,
            family: 'Poppins, sans-serif'
           },
         },
         title: {
           display: false,
         },
       },
     },
  } as const;
 
  return (
     <div>
       <div style={{ marginBottom: "20px" }}>
         {menuOptions.map((option) => (
           <button
             key={option.value}
             onClick={() => handleMenuClick(option.value)}
             style={{ 
              marginRight: "10px",
              padding: "8px 16px", // Menambahkan padding untuk kenyamanan
              border: "none", // Menghapus border agar terlihat lebih bersih
              cursor: "pointer", // Mengubah kursor saat dihover
              backgroundColor:
              selectedMenu === option.value ? "lightblue" : "white", // Warna latar belakang saat aktif
              color: selectedMenu === option.value ? "black" : "gray", // Warna teks saat aktif
              borderRadius: "4px", // Mengubah sudut tombol
              transition: "background-color 0.3s, color 0.3s",
              fontFamily: "Poppins, sans-serif"
            }}
           >
             {option.label}
           </button>
         ))}
       </div>
       <div
         style={{
           width: "600px",
           height: "400px",
           marginLeft: "auto",
           marginRight: "auto",
         }}
       >
         <Line options={options} data={data} />
       </div>
     </div>
  );
 };
 
 export default MyChart;