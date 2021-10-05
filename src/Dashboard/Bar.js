
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
const BarChart=()=> {
    const [chartData, setChartData] = useState();
    const Chart = ()=> {
        setChartData({
            labels: ['3/5', '4/5', '6/5', '7/5', '8/5', '9/5', '10/5', '11/5', '12/5', '13/5', '10/5', '11/5', '12/5', '13/5'],
            datasets: [{
                label: 'Fllowers',
                data:['32', '25', '65', '45', '80', '70', '60', '55', '82', '75', '60', '55', '82', '75'],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }],
        })
    }
    useEffect(()=>{
        Chart()
    },[])
    return(
        <div className="graph-chartjs">
            <Bar  data={chartData} 
            options={{
                responsive:true,
               
            }} />
        </div>
    )
}
export default BarChart;