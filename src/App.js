import './App.css';

const initialData = [
  { id: 1, value: 'Buy milk', isDone: false },
  { id: 2, value: 'Walking a turtle', isDone: false },
  { id: 3, value: 'Read an interesting book', isDone: false },
  { id: 4, value: 'Go to pool', isDone: true },
]

const App = () => {
  const isStrikeThrough = isTrue => isTrue ? ({
    textDecoration: 'line-through',
    fontStyle: 'italic'
  }) : null

  return (
    <div className="App">
      <header className="App-header">
        <button className="App-header-button">
          +
        </button>
        <div>
          <input
            type="checkbox"
            checked={false}/>
          <span>Active only</span>
        </div>
      </header>
      <main className="App-list">
        {initialData.map(({ id, value, isDone }) => (
          <div
            key={id}
            className="App-list-item"
            style={isStrikeThrough(isDone)}
          >
            {value}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
