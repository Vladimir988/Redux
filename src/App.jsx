import {useDispatch, useSelector} from "react-redux";
import './App.css'
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./async/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  }

  const removeCash = (customer) => {
    dispatch({type: 'GET_CASH', payload: cash});
  }

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name
    };

    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  }

  return (
    <div className='app'>
      <div className='inner'>
        <div className='cash'>On store now: {cash}$</div>
        <br/>
        <button onClick={() => addCash(Number(prompt()) || 0)}>Add to Stor</button>
        <button onClick={() => removeCash(Number(prompt()) || 0)}>Remove from Stor</button>
        <br/>
        <br/>
        <button onClick={() => addCustomer(prompt())}>Add Customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Add Customers from DB</button>
        <br/>
        <br/>
        {customers.length > 0 ?
          <div className='customers'>
            {customers.map(customer =>
              <div className='customer' key={customer.id} onClick={() => removeCustomer(customer)}>Customer name: {customer.name}</div>
            )}
          </div>
          :
          <div className='customers'>
            No customers
          </div>
        }
      </div>
    </div>
  );
}

export default App;
