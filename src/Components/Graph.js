import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
//

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Line A',
    type: 'line',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  },
  {
    name: 'Line B',
    type: 'line',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'Line C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  },
  {
    name: 'Line D',
    type: 'line',
    data: [75, 95, 46, 50, 48, 15, 34, 62, 89, 16, 100]
  },
  {
    name: 'Line E',
    type: 'line',
    data: [40, 55, 86, 30, 42, 85, 74, 12, 57, 35, 32]
  }
];

export default function Graph() {
  const chartOptions =  {
    stroke: { width: [2, 2, 2,2,2] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 0 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      0,
      5,
      12,
      15,
      20
    ],
    xaxis: { type: 'number' },
    tooltip: {
      shared: false,
      intersect: true,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        }
      }
    }
  };

  return (
    <Card style={{borderRadius:20, height:'100%', backgroundColor:'#E9EEF2'}}>
      <CardHeader title="DSTANCE OVER TIME"   />
      <Box  sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type='line' series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
