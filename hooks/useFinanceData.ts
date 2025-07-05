'use client';

import { useState, useEffect } from 'react';
import { Transaction, MonthlyData } from '@/types/transaction';

export const useFinanceData = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const savedTransactions = localStorage.getItem('finance-transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('finance-transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const updateTransaction = (updatedTransaction: Transaction) => {
    setTransactions(prev =>
      prev.map(transaction =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
  };

  const deleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(transaction => transaction.id !== id));
  };

  const getTotalExpenses = () => {
    return transactions
      .filter(t => t.type === 'expense')
      .reduce((total, t) => total + t.amount, 0);
  };

  const getTotalIncome = () => {
    return transactions
      .filter(t => t.type === 'income')
      .reduce((total, t) => total + t.amount, 0);
  };

  const getRecentTransactions = (count: number) => {
    return transactions
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, count);
  };

  const getMonthlyExpenses = (): MonthlyData[] => {
    const monthlyData: { [key: string]: { expenses: number; income: number } } = {};
    
    transactions.forEach(transaction => {
      const date = new Date(transaction.date);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
      const monthName = date.toLocaleString('default', { month: 'short', year: 'numeric' });
      
      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = { expenses: 0, income: 0 };
      }
      
      if (transaction.type === 'expense') {
        monthlyData[monthKey].expenses += transaction.amount;
      } else {
        monthlyData[monthKey].income += transaction.amount;
      }
    });

    // Convert to array and sort by date
    const sortedData = Object.entries(monthlyData)
      .map(([key, data]) => {
        const [year, month] = key.split('-');
        const date = new Date(parseInt(year), parseInt(month) - 1);
        return {
          month: date.toLocaleString('default', { month: 'short', year: 'numeric' }),
          expenses: data.expenses,
          income: data.income,
          sortKey: key
        };
      })
      .sort((a, b) => a.sortKey.localeCompare(b.sortKey));

    return sortedData;
  };

  return {
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    getTotalExpenses,
    getTotalIncome,
    getRecentTransactions,
    getMonthlyExpenses,
  };
};