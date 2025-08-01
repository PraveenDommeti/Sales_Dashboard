export interface SalesRecord {
  id: string;
  date: string;
  year: number;
  month: number;
  quarter: number;
  product: string;
  category: string;
  region: string;
  salesperson: string;
  quantity: number;
  unitPrice: number;
  totalSales: number;
  profit: number;
  customer: string;
}

export interface MonthlySales {
  month: string;
  sales: number;
  profit: number;
  year: number;
}

export interface QuarterlySales {
  quarter: string;
  sales: number;
  profit: number;
  year: number;
}

export interface CategorySales {
  category: string;
  sales: number;
  profit: number;
  year: number;
}

export interface RegionSales {
  region: string;
  sales: number;
  profit: number;
  year: number;
}

// Mock sales data based on realistic patterns
export const salesData: SalesRecord[] = [
  // 2022 Data
  { id: "1", date: "2022-01-15", year: 2022, month: 1, quarter: 1, product: "Laptop Pro", category: "Electronics", region: "North America", salesperson: "John Smith", quantity: 25, unitPrice: 1200, totalSales: 30000, profit: 7500, customer: "TechCorp Inc" },
  { id: "2", date: "2022-01-20", year: 2022, month: 1, quarter: 1, product: "Wireless Mouse", category: "Electronics", region: "Europe", salesperson: "Sarah Johnson", quantity: 150, unitPrice: 45, totalSales: 6750, profit: 2025, customer: "Office Solutions Ltd" },
  { id: "3", date: "2022-02-10", year: 2022, month: 2, quarter: 1, product: "Office Chair", category: "Furniture", region: "Asia", salesperson: "Mike Chen", quantity: 80, unitPrice: 250, totalSales: 20000, profit: 6000, customer: "Workspace Design Co" },
  { id: "4", date: "2022-02-25", year: 2022, month: 2, quarter: 1, product: "Standing Desk", category: "Furniture", region: "North America", salesperson: "Emily Davis", quantity: 35, unitPrice: 400, totalSales: 14000, profit: 4200, customer: "Modern Office Inc" },
  { id: "5", date: "2022-03-05", year: 2022, month: 3, quarter: 1, product: "Smartphone", category: "Electronics", region: "Europe", salesperson: "David Wilson", quantity: 120, unitPrice: 800, totalSales: 96000, profit: 28800, customer: "Mobile World" },
  { id: "6", date: "2022-04-12", year: 2022, month: 4, quarter: 2, product: "Tablet", category: "Electronics", region: "Asia", salesperson: "Lisa Wang", quantity: 90, unitPrice: 500, totalSales: 45000, profit: 13500, customer: "Digital Solutions" },
  { id: "7", date: "2022-05-18", year: 2022, month: 5, quarter: 2, product: "Conference Table", category: "Furniture", region: "North America", salesperson: "Robert Brown", quantity: 15, unitPrice: 800, totalSales: 12000, profit: 3600, customer: "Corporate Spaces" },
  { id: "8", date: "2022-06-22", year: 2022, month: 6, quarter: 2, product: "Wireless Headphones", category: "Electronics", region: "Europe", salesperson: "Anna Martinez", quantity: 200, unitPrice: 150, totalSales: 30000, profit: 9000, customer: "Audio Plus" },
  { id: "9", date: "2022-07-08", year: 2022, month: 7, quarter: 3, product: "Monitor 4K", category: "Electronics", region: "Asia", salesperson: "James Lee", quantity: 60, unitPrice: 350, totalSales: 21000, profit: 6300, customer: "Display Tech" },
  { id: "10", date: "2022-08-14", year: 2022, month: 8, quarter: 3, product: "Ergonomic Keyboard", category: "Electronics", region: "North America", salesperson: "Maria Garcia", quantity: 180, unitPrice: 80, totalSales: 14400, profit: 4320, customer: "Input Devices Co" },
  
  // 2023 Data (Higher sales)
  { id: "11", date: "2023-01-10", year: 2023, month: 1, quarter: 1, product: "Laptop Pro Max", category: "Electronics", region: "North America", salesperson: "John Smith", quantity: 40, unitPrice: 1500, totalSales: 60000, profit: 18000, customer: "TechCorp Inc" },
  { id: "12", date: "2023-01-25", year: 2023, month: 1, quarter: 1, product: "Wireless Mouse Pro", category: "Electronics", region: "Europe", salesperson: "Sarah Johnson", quantity: 220, unitPrice: 65, totalSales: 14300, profit: 4290, customer: "Office Solutions Ltd" },
  { id: "13", date: "2023-02-15", year: 2023, month: 2, quarter: 1, product: "Executive Chair", category: "Furniture", region: "Asia", salesperson: "Mike Chen", quantity: 100, unitPrice: 350, totalSales: 35000, profit: 10500, customer: "Workspace Design Co" },
  { id: "14", date: "2023-03-20", year: 2023, month: 3, quarter: 1, product: "Smartphone Pro", category: "Electronics", region: "Europe", salesperson: "David Wilson", quantity: 180, unitPrice: 1000, totalSales: 180000, profit: 54000, customer: "Mobile World" },
  { id: "15", date: "2023-04-08", year: 2023, month: 4, quarter: 2, product: "Tablet Pro", category: "Electronics", region: "Asia", salesperson: "Lisa Wang", quantity: 130, unitPrice: 700, totalSales: 91000, profit: 27300, customer: "Digital Solutions" },
  { id: "16", date: "2023-05-12", year: 2023, month: 5, quarter: 2, product: "Smart Desk", category: "Furniture", region: "North America", salesperson: "Emily Davis", quantity: 50, unitPrice: 600, totalSales: 30000, profit: 9000, customer: "Modern Office Inc" },
  { id: "17", date: "2023-06-18", year: 2023, month: 6, quarter: 2, product: "Noise Cancelling Headphones", category: "Electronics", region: "Europe", salesperson: "Anna Martinez", quantity: 280, unitPrice: 200, totalSales: 56000, profit: 16800, customer: "Audio Plus" },
  { id: "18", date: "2023-07-25", year: 2023, month: 7, quarter: 3, product: "Ultra Monitor", category: "Electronics", region: "Asia", salesperson: "James Lee", quantity: 85, unitPrice: 450, totalSales: 38250, profit: 11475, customer: "Display Tech" },
  { id: "19", date: "2023-08-30", year: 2023, month: 8, quarter: 3, product: "Gaming Keyboard", category: "Electronics", region: "North America", salesperson: "Maria Garcia", quantity: 250, unitPrice: 120, totalSales: 30000, profit: 9000, customer: "Gaming Gear Co" },
  { id: "20", date: "2023-09-15", year: 2023, month: 9, quarter: 3, product: "Webcam HD", category: "Electronics", region: "Europe", salesperson: "Tom Anderson", quantity: 300, unitPrice: 90, totalSales: 27000, profit: 8100, customer: "Video Solutions" },
  
  // 2024 Data (Highest sales)
  { id: "21", date: "2024-01-05", year: 2024, month: 1, quarter: 1, product: "AI Laptop", category: "Electronics", region: "North America", salesperson: "John Smith", quantity: 60, unitPrice: 2000, totalSales: 120000, profit: 36000, customer: "TechCorp Inc" },
  { id: "22", date: "2024-01-20", year: 2024, month: 1, quarter: 1, product: "Smart Mouse", category: "Electronics", region: "Europe", salesperson: "Sarah Johnson", quantity: 350, unitPrice: 85, totalSales: 29750, profit: 8925, customer: "Office Solutions Ltd" },
  { id: "23", date: "2024-02-10", year: 2024, month: 2, quarter: 1, product: "AI-Powered Chair", category: "Furniture", region: "Asia", salesperson: "Mike Chen", quantity: 120, unitPrice: 500, totalSales: 60000, profit: 18000, customer: "Future Workspace" },
  { id: "24", date: "2024-03-15", year: 2024, month: 3, quarter: 1, product: "Foldable Phone", category: "Electronics", region: "Europe", salesperson: "David Wilson", quantity: 200, unitPrice: 1200, totalSales: 240000, profit: 72000, customer: "Mobile World" },
  { id: "25", date: "2024-04-20", year: 2024, month: 4, quarter: 2, product: "AR Tablet", category: "Electronics", region: "Asia", salesperson: "Lisa Wang", quantity: 150, unitPrice: 900, totalSales: 135000, profit: 40500, customer: "Digital Solutions" },
  { id: "26", date: "2024-05-25", year: 2024, month: 5, quarter: 2, product: "Holographic Display", category: "Electronics", region: "North America", salesperson: "Robert Brown", quantity: 30, unitPrice: 2500, totalSales: 75000, profit: 22500, customer: "Future Tech Inc" },
  { id: "27", date: "2024-06-30", year: 2024, month: 6, quarter: 2, product: "Spatial Audio Headphones", category: "Electronics", region: "Europe", salesperson: "Anna Martinez", quantity: 400, unitPrice: 300, totalSales: 120000, profit: 36000, customer: "Audio Plus" },
  { id: "28", date: "2024-07-15", year: 2024, month: 7, quarter: 3, product: "8K Monitor", category: "Electronics", region: "Asia", salesperson: "James Lee", quantity: 100, unitPrice: 800, totalSales: 80000, profit: 24000, customer: "Display Tech" },
  { id: "29", date: "2024-08-20", year: 2024, month: 8, quarter: 3, product: "Neural Interface Keyboard", category: "Electronics", region: "North America", salesperson: "Maria Garcia", quantity: 80, unitPrice: 500, totalSales: 40000, profit: 12000, customer: "Neural Tech Co" },
  { id: "30", date: "2024-09-25", year: 2024, month: 9, quarter: 3, product: "Quantum Processor", category: "Electronics", region: "Europe", salesperson: "Alex Thompson", quantity: 20, unitPrice: 5000, totalSales: 100000, profit: 30000, customer: "Quantum Computing Ltd" }
];

// Helper functions to aggregate data
export const getMonthlySales = (year?: number): MonthlySales[] => {
  const filteredData = year ? salesData.filter(record => record.year === year) : salesData;
  
  const monthlyAgg = filteredData.reduce((acc, record) => {
    const key = `${record.year}-${record.month}`;
    if (!acc[key]) {
      acc[key] = {
        month: new Date(record.year, record.month - 1).toLocaleString('default', { month: 'long' }),
        sales: 0,
        profit: 0,
        year: record.year
      };
    }
    acc[key].sales += record.totalSales;
    acc[key].profit += record.profit;
    return acc;
  }, {} as Record<string, MonthlySales>);
  
  return Object.values(monthlyAgg).sort((a, b) => a.year - b.year);
};

export const getQuarterlySales = (year?: number): QuarterlySales[] => {
  const filteredData = year ? salesData.filter(record => record.year === year) : salesData;
  
  const quarterlyAgg = filteredData.reduce((acc, record) => {
    const key = ${record.year}-Q;
    if (!acc[key]) {
      acc[key] = {
        quarter: Q,
        sales: 0,
        profit: 0,
        year: record.year
      };
    }
    acc[key].sales += record.totalSales;
    acc[key].profit += record.profit;
    return acc;
  }, {} as Record<string, QuarterlySales>);
  
  return Object.values(quarterlyAgg).sort((a, b) => a.year - b.year);
};

export const getCategorySales = (year?: number): CategorySales[] => {
  const filteredData = year ? salesData.filter(record => record.year === year) : salesData;
  
  const categoryAgg = filteredData.reduce((acc, record) => {
    const key = ${record.category}-;
    if (!acc[key]) {
      acc[key] = {
        category: record.category,
        sales: 0,
        profit: 0,
        year: record.year
      };
    }
    acc[key].sales += record.totalSales;
    acc[key].profit += record.profit;
    return acc;
  }, {} as Record<string, CategorySales>);
  
  return Object.values(categoryAgg);
};

export const getRegionSales = (year?: number): RegionSales[] => {
  const filteredData = year ? salesData.filter(record => record.year === year) : salesData;
  
  const regionAgg = filteredData.reduce((acc, record) => {
    const key = ${record.region}-;
    if (!acc[key]) {
      acc[key] = {
        region: record.region,
        sales: 0,
        profit: 0,
        year: record.year
      };
    }
    acc[key].sales += record.totalSales;
    acc[key].profit += record.profit;
    return acc;
  }, {} as Record<string, RegionSales>);
  
  return Object.values(regionAgg);
};

export const getYearlySales = () => {
  const yearlyAgg = salesData.reduce((acc, record) => {
    if (!acc[record.year]) {
      acc[record.year] = {
        year: record.year,
        sales: 0,
        profit: 0
      };
    }
    acc[record.year].sales += record.totalSales;
    acc[record.year].profit += record.profit;
    return acc;
  }, {} as Record<number, { year: number; sales: number; profit: number }>);
  
  return Object.values(yearlyAgg).sort((a, b) => a.year - b.year);
};
