'use client';

import { Button } from '@/components/atoms/Button';
import React from 'react';

interface FilterControlsProps {
  selectedYear: number | null;
  onYearChange: (year: number | null) => void;
  selectedChartType: 'bar' | 'line' | 'pie';
  onChartTypeChange: (type: 'bar' | 'line' | 'pie') => void;
  salesThreshold: number;
  onSalesThresholdChange: (threshold: number) => void;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  selectedYear,
  onYearChange,
  selectedChartType,
  onChartTypeChange,
  salesThreshold,
  onSalesThresholdChange,
}) => {
  const years = [2022, 2023, 2024];
  const chartTypes = [
    { value: 'bar' as const, label: 'Bar Chart' },
    { value: 'line' as const, label: 'Line Chart' },
    { value: 'pie' as const, label: 'Pie Chart' },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg mb-6">
      {/* Year Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Year Filter</label>
        <div className="flex gap-2">
          <Button
            variant={selectedYear === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => onYearChange(null)}
          >
            All Years
          </Button>
          {years.map((year) => (
            <Button
              key={year}
              variant={selectedYear === year ? 'default' : 'outline'}
              size="sm"
              onClick={() => onYearChange(year)}
            >
              {year}
            </Button>
          ))}
        </div>
      </div>

      {/* Chart Type Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Chart Type</label>
        <div className="flex gap-2">
          {chartTypes.map((type) => (
            <Button
              key={type.value}
              variant={selectedChartType === type.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChartTypeChange(type.value)}
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Sales Threshold Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
          Sales Threshold: 
        </label>
        <input
          type="range"
          min="0"
          max="100000"
          step="5000"
          value={salesThreshold}
          onChange={(e) => onSalesThresholdChange(Number(e.target.value))}
          className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
