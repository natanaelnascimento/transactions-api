import React, {useState, useEffect} from 'react';
import transactionsService from './services/transactions';
import periodHelper from './helpers/period';
import Header from './components/Header';
import TransactionsInfo from './components/TransactionsInfo';
import TransactionsList from './components/TransactionsList';
import ToolBar from './components/ToolBar';

export default function App() {

  const [periodTransactions, setPeriodTransactions] = useState([])
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [period, setPeriod] = useState(periodHelper.getCurrentPeriod().value);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await transactionsService.findByPeriod(period);
        setSearch('');
        setPeriodTransactions(response.data);
        setFilteredTransactions(response.data);
      } catch(e) {
          console.log(e);
      }
    }
    fetchData();
  }, [period])

  const handlePeriodChange = (period) => {
    setPeriod(period);
  }

  const handleSearchChange = (search) => {
    setSearch(search);
    const filteredTransactions = search.length > 0 ?
        periodTransactions.filter(t => t.description.toLowerCase().includes(search.toLowerCase()))
        : periodTransactions;
    setFilteredTransactions(filteredTransactions);
  }

  return (
    <div className="container">
      <div className="section">
        <Header/>
      </div>
      <div className="section">
        <ToolBar periodValue={period} onPeriodChange={handlePeriodChange}
          searchValue={search} onSearchChange={handleSearchChange} />
      </div>
      <div className="divider"/>
      <div className="section">
        <TransactionsInfo transactions={filteredTransactions}/>
      </div>
      <div className="section">
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    </div>
  );
}
