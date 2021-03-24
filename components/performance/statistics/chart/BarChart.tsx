import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { useWindowSize } from '../../../common/hooks/useWindowResize';
import styles from './BarChart.module.scss';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const BarChart = () => {
  useWindowSize();
  return (
    <div className={styles.barChartWrapper}>
      <Pie
      key={Math.random()}
        options={{
          responsive: true,
          maintainAspectRatio: false
        }}
        data={data}
        width={200}
        height={500}
      />
    </div>
  );
};

export default BarChart;
