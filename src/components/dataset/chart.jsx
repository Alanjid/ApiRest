import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4, 3, 2, 2, 1, 2, 3];
const pData = [3, 2, 1, 3, 8, 3, 4];
const lData = [1, 3, 4, 2, 4, 8, 3];
const xLabels = [
  'Alimentos',
  'Bebidas',
  'Acciones',
  'Partes del cuerpo',
  'Prendas de vestir',
];

export default function chart() {
  return (
    <BarChart
      height={300}
      sx={{maxWidth: '100%'}}
      series={[
        { data: pData, label: 'pv', id: 'pvId' },
        { data: uData, label: 'uv', id: 'uvId' },
        { data: lData, label: 'lv', id: 'lvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}