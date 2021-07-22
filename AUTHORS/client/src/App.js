import AuthorList from './views/AuthorList';
import EditAuthor from './views/EditAuthor';
import AddAuthorForm from './views/AddAuthorForm';
import './App.css';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Authorsss!</h1>
      
      <Router>
        <AuthorList path="/"/>
        <EditAuthor path="/authors/edit/:_id" />
        <AddAuthorForm path="/createAuthor" />
      </Router>
      
    </div>
  );
}

export default App;
