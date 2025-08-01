import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Sales Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Comprehensive sales analytics platform with interactive charts and real-time insights. 
          Explore sales data from 2022-2024 with advanced filtering and visualization capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Charts</h3>
            <p className="text-gray-600">Switch between bar, line, and pie charts for different data perspectives</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Filtering</h3>
            <p className="text-gray-600">Filter by year, sales threshold, and category for detailed analysis</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Insights</h3>
            <p className="text-gray-600">Get instant calculations and performance metrics</p>
          </div>
        </div>

        <Link href="/dashboard">
          <Button size="lg" className="text-lg px-8 py-4">
            View Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
