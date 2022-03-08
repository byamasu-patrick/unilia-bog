import HomePage from './pages/HomePage';
import { 
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import './App.css';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import AboutPage from './pages/AboutPage';
import Navbar from './Navbar';

function App() {
  return (    
      <Router>
        <div className="App">
          <Navbar />
          <div id='page-body'>
            <Routes>
              <Route exact path='/' element={ <HomePage /> }/>
              <Route path='/article/:name' element={ <ArticlePage /> }/>
              <Route path='/articles-list' element={ <ArticlesListPage /> }/>
              <Route path='/about' element={ <AboutPage /> }/>
            </Routes>
          </div>       
        </div>
      </Router>
  );
}

export default App;
