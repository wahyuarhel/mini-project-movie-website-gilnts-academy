import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DetailMoviePage from './Pages/DetailMoviePage';
import UserProfilePage from './Pages/UserProfilePage';
import UserSettingPage from './Pages/UserSettingPage';
import Search from "./Pages/MovieSearch";
import OtherMoviePage from './Pages/OtherMovie';
import OtherMovieDetail from './Pages/OtherMovieDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/detail-movie/:id' component={DetailMoviePage}/>
        <Route exact path='/user-profile-page' component={UserProfilePage}/>
        <Route exact path='/user-setting-page' component={UserSettingPage}/>
        <Route exact path='/search-page' component={Search}/>
        <Route exact path='/other-movie' component={OtherMoviePage}/>
        <Route exact path='/other-movie/:id' component={OtherMovieDetail}/>
      </Switch>   
      <Footer />
    </Router>
  );
}

export default App;
