

export async function fetchData() {
    const response = await fetch('/dataset.json');
    const data = await response.json();
    return data;
  }
  
  export function processData(data) {
    const years = {};
    const crops = {};
  
    data.forEach(item => {
      const year = item.Year;
      const crop = item["Crop Name"];
      const production = item["Crop Production (UOM:t(Tonnes))"] || 0;
      const area = item["Area Under Cultivation (UOM:Ha(Hectares))"] || 0;
      const yieldValue = production / (area || 1);
  
      // Process yearly data
      if (!years[year]) {
        years[year] = { max: { crop: crop, production: production }, min: { crop: crop, production: production } };
      } else {
        if (production > years[year].max.production) {
          years[year].max = { crop: crop, production: production };
        }
        if (production < years[year].min.production) {
          years[year].min = { crop: crop, production: production };
        }
      }
  
      // Process crop data
      if (!crops[crop]) {
        crops[crop] = { totalProduction: 0, totalArea: 0, count: 0 };
      }
      crops[crop].totalProduction += production;
      crops[crop].totalArea += area;
      crops[crop].count += 1;
    });
  
    const yearlyData = Object.keys(years).map(year => ({
      year: year,
      maxCrop: years[year].max.crop,
      minCrop: years[year].min.crop,
    }));
  
    const cropData = Object.keys(crops).map(crop => ({
      crop: crop,
      averageYield: (crops[crop].totalProduction / crops[crop].count).toFixed(3),
      averageArea: (crops[crop].totalArea / crops[crop].count).toFixed(3),
    }));
  
    return { yearlyData, cropData };
  }
  