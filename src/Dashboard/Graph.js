
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
const Graph=()=> {
    const [chartData, setChartData] = useState();
    const Chart = ()=> {
        setChartData({
            labels: ['1.5', '2.5', '3.5', '5.5' ],
            datasets: [{
                label: 'Show you fllowers',
                data:['32', '65', '40', '80'],
                backgroundColor: [
                   'rgba(0, 140, 255, 1)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    
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
            <Line width="600" height="400" data={chartData} 
            options={{
                responsive:true,
                tension:0.4,
                scales: {
                    y: [{
                        ticks: {
                            autoSkip:true, 
                            maxTicksLimit:10,
                            beginAtZero:true,
                        },
                        gridLines:{
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    xAxes:[{
                        gridLines:{
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
                }
            }} />
        </div>
    )
}
export default Graph;