# Sales Dashboard - Next.js Analytics Platform

A comprehensive sales analytics dashboard built with Next.js 15, TypeScript, Tailwind CSS, and Recharts. This application provides interactive data visualization for sales data from 2022-2024 with advanced filtering capabilities and multiple chart types.

##  Features

### Core Functionality
- **Interactive Charts**: Switch between bar charts, line charts, and pie charts
- **Advanced Filtering**: Filter data by year (2022, 2023, 2024, or all years)
- **Sales Threshold Filter**: Set custom sales thresholds with a slider control
- **Real-time Calculations**: Instant updates of total sales, profit, and transaction counts
- **Responsive Design**: Fully responsive layout that works on all devices

### Data Visualization
- **Yearly Sales Trends**: Track sales performance across years
- **Monthly Breakdown**: Detailed monthly sales analysis
- **Category Performance**: Sales distribution by product categories
- **Regional Analysis**: Geographic sales performance comparison

### Technical Features
- **Atomic Design Structure**: Components organized using atomic design principles
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Performance Optimized**: Efficient data processing and rendering

##  Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

##  Project Structure

`
src/
 app/                    # Next.js App Router

    dashboard/         # Dashboard page
    globals.css        # Global styles
    layout.tsx         # Root layout
    page.tsx          # Home page
 components/            # Atomic Design Components
    atoms/            # Basic building blocks
       Button.tsx    # Reusable button component
       Card.tsx      # Card components
    molecules/        # Component combinations
       BarChart.tsx  # Bar chart component
       LineChart.tsx # Line chart component
       PieChart.tsx  # Pie chart component
       FilterControls.tsx # Filter controls
    organisms/        # Complex components
       SalesDashboard.tsx # Main dashboard
    templates/        # Page layouts (future use)
 data/                 # Data layer
    salesData.ts      # Mock sales data and utilities
 lib/                  # Utility functions
     utils.ts          # Helper functions
`

##  What I Built

### 1. Atomic Design Architecture
Implemented a scalable component architecture following atomic design principles:
- **Atoms**: Basic UI elements (Button, Card components)
- **Molecules**: Functional components (Charts, Filter controls)
- **Organisms**: Complex sections (Complete dashboard)

### 2. Mock Sales Data
Created realistic sales data based on Kaggle dataset patterns:
- 30 sales records across 2022-2024
- Multiple product categories (Electronics, Furniture)
- Geographic regions (North America, Europe, Asia)
- Progressive sales growth year over year

### 3. Interactive Chart Components
Built three chart types using Recharts:
- **Bar Charts**: For categorical comparisons
- **Line Charts**: For trend analysis
- **Pie Charts**: For distribution visualization

### 4. Advanced Filtering System
Implemented multiple filter types:
- **Year Filter**: View data for specific years or all years
- **Chart Type Switcher**: Toggle between visualization types
- **Sales Threshold**: Dynamic slider to filter by minimum sales amount

### 5. Dashboard Analytics
Real-time calculations and insights:
- Total sales with currency formatting
- Profit margins and percentages
- Transaction counts above threshold
- Performance metrics by category and region

##  Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   `ash
   git clone <repository-url>
   cd sales-dashboard
   `

2. **Install dependencies**
   `ash
   npm install
   # or
   yarn install
   # or
   pnpm install
   `

3. **Run the development server**
   `ash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   `

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

`ash
npm run build
npm start
`

##  Data Structure

The application uses TypeScript interfaces for type safety:

`	ypescript
interface SalesRecord {
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
`

##  Design Decisions

### 1. Atomic Design
Chose atomic design for scalability and maintainability. This structure allows for:
- Easy component reuse
- Consistent design system
- Clear separation of concerns
- Future extensibility

### 2. TypeScript Integration
Full TypeScript implementation provides:
- Compile-time error checking
- Better IDE support
- Self-documenting code
- Reduced runtime errors

### 3. Recharts for Visualization
Selected Recharts because:
- React-native integration
- Responsive by default
- Extensive customization options
- Active community support

### 4. Tailwind CSS Styling
Utilized Tailwind for:
- Rapid development
- Consistent design tokens
- Responsive design utilities
- Small bundle size

##  Future Enhancements

### Planned Features
- **API Integration**: Connect to real data sources
- **Export Functionality**: Download charts as images/PDFs
- **Advanced Analytics**: Forecasting and trend predictions
- **User Authentication**: Personal dashboards
- **Real-time Updates**: WebSocket integration
- **Mobile App**: React Native version

### Potential Improvements
- **Database Integration**: PostgreSQL or MongoDB
- **Caching**: Redis for performance
- **Testing**: Jest and React Testing Library
- **CI/CD**: GitHub Actions deployment
- **Monitoring**: Error tracking and analytics

##  Scripts

- 
pm run dev - Start development server
- 
pm run build - Build for production
- 
pm run start - Start production server
- 
pm run lint - Run ESLint
- 
pm run type-check - Run TypeScript compiler

##  Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Acknowledgments

- Sales data patterns inspired by Kaggle datasets
- Chart components built with Recharts
- UI components styled with Tailwind CSS
- Icons provided by Lucide React

---

**Built with  using Next.js 15, TypeScript, and modern web technologies**
