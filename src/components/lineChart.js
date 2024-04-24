"use client"
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const Linechart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext("2d");

        

        chartInstance.current = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [{
                  label: 'My First Dataset',
                  data: [30, 25, 30, 45, 30, 45, 55, 82, 80],
                  background: 'linear-gradient(180deg, rgba(0,153,69,1) 0%, rgba(0,153,69,0) 100%)',
                  borderColor: '#009945',
                  // Adjust tension for rounder peaks (value between 0 and 1)
                  tension: 0.4, 
                  pointRadius: 0,
                  pointBorderWidth: 0,
                }]
            },
            options: {
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  x: {
                    display: false
                  },
                  y: {
                    display: false
                  }
                },
                // Add background color configuration
                backgroundColor: {
                  // Set to 'rgba' with desired transparency (0 for fully opaque)
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Example: white with 80% opacity
                }
              }
            });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="w-[100%] flex ">
            <canvas ref={chartRef} className="w-[100%] " />
        </div>
    );
};

export default Linechart;
