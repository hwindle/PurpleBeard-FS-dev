import './App.css';

function App() {
  const animals = [
    'Horse',
    'Turtle',
    'Elephant',
    'Monkey',
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { animals.map((animal, index) => {
              return <li key={index}>{animal}</li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
