import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  }

  const removeCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash});
  }

  return (
    <div className='app'>
      <div className='inner'>
        <div className='cash'>On store now: {cash}$</div>

        <br/>

        <button onClick={() => addCash(Number(prompt()) || 0)}>Add to Stor</button>
        <br/>
        <button onClick={() => removeCash(Number(prompt()) || 0)}>Remove from Stor</button>
      </div>
    </div>
  );
}

export default App;
