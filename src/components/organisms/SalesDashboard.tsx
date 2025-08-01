'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/Card';
import { BarChart } from '@/components/molecules/BarChart';
import { FilterControls } from '@/components/molecules/FilterControls';
import { LineChart } from '@/components/molecules/LineChart';
import { PieChart } from '@/components/molecules/PieChart';
import {
  getCategorySales,
  getMonthlySales,
  getRegionSales,
  getYearlySales,
  salesData,
} from '@/data/salesData';
import { formatCurrency } from '@/lib/utils';
import React, { useMemo, useState } from 'react';

export const SalesDashboard: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedChartType, setSelectedChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [salesThreshold, setSalesThreshold] = useState<number>(0);

  // Filter data based on sales threshold
  const filteredData = useMemo(() => {
    return salesData.filter(record => record.totalSales >= salesThreshold);
  }, [salesThreshold]);

  // Get aggregated data
  const yearlyData = useMemo(() => getYearlySales(), []);
  const monthlyData = useMemo(() => getMonthlySales(selectedYear), [selectedYear]);
  const categoryData = useMemo(() => getCategorySales(selectedYear), [selectedYear]);
  const regionData = useMemo(() => getRegionSales(selectedYear), [selectedYear]);

  // Calculate summary statistics
  const totalSales = useMemo(() => {
    const data = selectedYear 
      ? filteredData.filter(record => record.year === selectedYear)
      : filteredData;
    return data.reduce((sum, record) => sum + record.totalSales, 0);
  }, [filteredData, selectedYear]);

  const totalProfit = useMemo(() => {
    const data = selectedYear 
      ? filteredData.filter(record => record.year === selectedYear)
      : filteredData;
    return data.reduce((sum, record) => sum + record.profit, 0);
  }, [filteredData, selectedYear]);

  const totalTransactions = useMemo(() => {
    const data = selectedYear 
      ? filteredData.filter(record => record.year === selectedYear)
      : filteredData;
    return data.length;
  }, [filteredData, selectedYear]);

  const renderChart = (data: any[], xKey: string, yKey: string, title: string) => {
    const chartProps = {
      data,
      xKey,
      yKey,
      title,
      height: 350,
    };

    switch (selectedChartType) {
      case 'line':
        return <LineChart {...chartProps} />;
      case 'pie':
        return <PieChart data={data} dataKey={yKey} nameKey={xKey} title={title} height={350} />;
      default:
        return <BarChart {...chartProps} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Sales Dashboard</h1>
        <p className="text-lg text-gray-600">
          Comprehensive sales analytics for {selectedYear || 'all years'}
        </p>
      </div>

      {/* Filter Controls */}
      <FilterControls
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        selectedChartType={selectedChartType}
        onChartTypeChange={setSelectedChartType}
        salesThreshold={salesThreshold}
        onSalesThresholdChange={setSalesThreshold}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">
              {formatCurrency(totalSales)}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {selectedYear ? Year  : 'All Years'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {formatCurrency(totalProfit)}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {((totalProfit / totalSales) * 100).toFixed(1)}% margin
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">
              {totalTransactions}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Above  threshold
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Yearly Sales Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Yearly Sales Trend</CardTitle>
          </CardHeader>
          <CardContent>
            {renderChart(yearlyData, 'year', 'sales', 'Sales by Year')}
          </CardContent>
        </Card>

        {/* Monthly Sales */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            {renderChart(monthlyData, 'month', 'sales', 'Monthly Sales Performance')}
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            {renderChart(categoryData, 'category', 'sales', 'Category Performance')}
          </CardContent>
        </Card>

        {/* Regional Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Sales by Region</CardTitle>
          </CardHeader>
          <CardContent>
            {renderChart(regionData, 'region', 'sales', 'Regional Performance')}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
