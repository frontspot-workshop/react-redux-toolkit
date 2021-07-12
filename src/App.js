import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addListItem, checkListItem, selector, setActiveOnly } from './store/slice';

const App = () => {
  const dispatch = useDispatch()
  const {isActiveOnly, list} = useSelector(selector)

  const handleOnAddItem = () => {
    const newValue = prompt('new')

    dispatch(addListItem(newValue))
  }

  const handleOnCheckItem = id => {
    dispatch(checkListItem(id))
  }

  const handleOnSetActiveOnly = () => {
    dispatch(setActiveOnly())
  }

  const isStrikeThrough = isTrue => isTrue ? ({
    textDecoration: 'line-through',
    fontStyle: 'italic'
  }) : null

  return (
    <div className="App">
      <header className="App-header">
        <button className="App-header-button" onClick={handleOnAddItem}>
          +
        </button>
        <div>
          <input
            type="checkbox"
            checked={isActiveOnly}
            onClick={handleOnSetActiveOnly}
          />
          <span>Active only</span>
        </div>
      </header>
      <main className="App-list">
        {list.map(({ id, value, isDone }) => (
          <div
            key={id}
            className="App-list-item"
            style={isStrikeThrough(isDone)}
            onClick={() => handleOnCheckItem(id)}
          >
            {value}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
