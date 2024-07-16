
import { createStore } from 'redux';


function App() {
  //STORE : IS a globalized state

  //ACTION
  const increment = () => {
    return {
      type:'INCREMENT'
    }
  };
  const decrement = () => {
    return {
      type:'DECREMENT'
    }
  }
  
  //REDUCER
  const counter = (state = 0,action) => {
    switch (action.type){
      case 'INCREMENT':
      return state+1;
      case 'DECREMENT':
      return state-1;
    }

  }
let store = createStore(counter);

store.subscribe(()=> console.log(store.getState()));

  //DISPATCH
  store.dispatch(increment());
  store.dispatch(decrement());


  return (
    <div className="App">
     <h1>Hello</h1>
    </div>
  );
}

export default App;
