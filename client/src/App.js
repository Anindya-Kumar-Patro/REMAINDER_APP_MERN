import './App.css';
import TodoApp from './components/TodoApp/TodoApp'
import EditTask from './components/EditTask/EditTask'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import {Route, BroswerRouter, Switch, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact="true" path='/'>
            
            <TodoApp/>
          </Route>
          <Route path='/tasks/:id'>
            <EditTask/>
          </Route>
        </Switch>
        {/* <TodoApp /> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;