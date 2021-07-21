import Main from './views/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import SingleProduct from './components/SingleProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <SingleProduct path="/products/:_id" />
        <EditProduct path="/products/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
