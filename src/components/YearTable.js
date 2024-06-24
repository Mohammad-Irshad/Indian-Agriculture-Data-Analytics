

import React from 'react';
import { Table } from '@mantine/core';

const YearTable = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>Year</th>
        <th>Crop with Maximum Production</th>
        <th>Crop with Minimum Production</th>
      </tr>
    </thead>
    <tbody>
      {data.map(row => (
        <tr key={row.year}>
          <td>{row.year}</td>
          <td>{row.maxCrop}</td>
          <td>{row.minCrop}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default YearTable;
