
import React, { useEffect, useState } from 'react';
import { fetchData, processData } from './dataProcessing';
import YearTable from './components/YearTable';
import CropTable from './components/CropTable';
import { Container, Title } from '@mantine/core';

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    fetchData().then(data => {
      const processedData = processData(data);
      setYearlyData(processedData.yearlyData);
      setCropData(processedData.cropData);
    });
  }, []);

  return (
    <Container size="lg" style={{ padding: '2rem' }}>
      <Title align="center" style={{ marginBottom: '2rem' }}>Indian Agriculture Data Analytics</Title>
      
      <Title order={2} style={{ marginBottom: '1rem' }}>Crop Production by Year</Title>
      <YearTable data={yearlyData} />

      <Title order={2} style={{ marginTop: '2rem', marginBottom: '1rem' }}>Average Yield and Cultivation Area</Title>
      <CropTable data={cropData} />
    </Container>
  );
}

export default App;
