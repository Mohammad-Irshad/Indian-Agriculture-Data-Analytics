

import React from 'react';
import { Table } from '@mantine/core';

const CropTable = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>Crop</th>
        <th>Average Yield</th>
        <th>Average Cultivation Area</th>
      </tr>
    </thead>
    <tbody>
      {data.map(row => (
        <tr key={row.crop}>
          <td>{row.crop}</td>
          <td>{row.averageYield}</td>
          <td>{row.averageArea}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default CropTable;
