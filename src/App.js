import Header from './components/Header';
import './App.css';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import NewTransaction from './components/NewTransaction';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <NewTransaction />
      </div>
    </>
  );
}

export default App;
