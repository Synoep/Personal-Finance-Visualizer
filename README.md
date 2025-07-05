# Personal Finance Tracker

A modern, responsive web application for tracking personal finances built with Next.js, React, and TypeScript. Features beautiful UI components, interactive charts, and comprehensive transaction management.

![Personal Finance Tracker](https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop)

## ✨ Features

### 📊 Dashboard Overview
- **Financial Summary Cards**: Total income, expenses, net income, and transaction count
- **Monthly Chart**: Interactive bar chart showing income vs expenses over time
- **Recent Transactions**: Quick view of your latest financial activities

### 💰 Transaction Management
- **Add Transactions**: Easy-to-use form with validation
- **Edit & Delete**: Full CRUD operations for all transactions
- **Categories**: Predefined categories including Food & Dining, Transportation, Shopping, and more
- **Transaction Types**: Support for both income and expense tracking

### 🔍 Advanced Filtering & Search
- **Search Functionality**: Find transactions by description or category
- **Type Filtering**: Filter by income, expense, or view all
- **Sorting Options**: Sort by date or amount
- **Real-time Updates**: Instant filtering and search results

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Modern UI**: Clean, professional interface with hover effects and animations
- **Accessibility**: Built with accessibility best practices

## 🚀 Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Storage**: Local Storage (client-side persistence)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-finance-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main dashboard page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── MonthlyChart.tsx     # Interactive monthly chart component
│   ├── TransactionForm.tsx  # Add/Edit transaction form
│   └── TransactionList.tsx  # Transaction list with filtering
├── hooks/
│   └── useFinanceData.ts    # Custom hook for data management
├── types/
│   └── transaction.ts       # TypeScript type definitions
└── lib/
    └── utils.ts             # Utility functions
```

## 🎯 Key Components

### `useFinanceData` Hook
Custom React hook that manages all financial data operations:
- Transaction CRUD operations
- Local storage persistence
- Data calculations (totals, monthly aggregations)
- Recent transaction filtering

### `TransactionForm` Component
Modal form component with:
- Form validation
- Support for both add and edit modes
- Category selection
- Date picker
- Amount input with proper formatting

### `MonthlyChart` Component
Interactive chart displaying:
- Monthly income vs expenses
- Responsive design
- Custom tooltips
- Empty state handling

### `TransactionList` Component
Comprehensive transaction management:
- Search and filtering capabilities
- Sorting options
- Inline edit and delete actions
- Responsive grid layout

## 💾 Data Management

The application uses browser Local Storage for data persistence:
- **Key**: `finance-transactions`
- **Format**: JSON array of transaction objects
- **Auto-save**: Data is automatically saved on every change
- **Auto-load**: Data is restored when the application starts

### Transaction Data Structure
```typescript
interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  type: 'income' | 'expense';
  category: string;
}
```

## 🎨 Design Features

- **Modern Gradient Backgrounds**: Subtle gradients for visual appeal
- **Card-based Layout**: Clean, organized information presentation
- **Hover Effects**: Interactive elements with smooth transitions
- **Color-coded Types**: Green for income, red for expenses
- **Responsive Grid**: Adapts to different screen sizes
- **Loading States**: Proper handling of empty states

## 🔧 Customization

### Adding New Categories
Edit the `categories` array in `components/TransactionForm.tsx`:
```typescript
const categories = [
  'Food & Dining',
  'Transportation',
  // Add your custom categories here
  'Your Custom Category'
];
```

### Modifying Chart Colors
Update colors in `components/MonthlyChart.tsx`:
```typescript
<Bar dataKey="expenses" fill="#ef4444" />  // Red for expenses
<Bar dataKey="income" fill="#22c55e" />    // Green for income
```

## 📊 Features Roadmap

- [ ] **Export Data**: CSV/PDF export functionality
- [ ] **Budget Tracking**: Set and monitor monthly budgets
- [ ] **Category Analytics**: Detailed spending analysis by category
- [ ] **Recurring Transactions**: Support for recurring income/expenses
- [ ] **Multi-currency Support**: Handle different currencies
- [ ] **Data Backup**: Cloud storage integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Recharts](https://recharts.org/) for the charting library
- [Lucide](https://lucide.dev/) for the icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---
