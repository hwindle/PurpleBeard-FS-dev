import CustomerInformation from './CustomerInformation';
import './App.css';

function App() {
  const customer = {
    firstName: 'Bob',
    lastName: 'Dylan',
  };

  return (
    <div className="App">
      <CustomerInformation info={customer} />
    </div>
  );
}

export default App;
