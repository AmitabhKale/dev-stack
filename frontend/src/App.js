import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify';
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen";
import PrivateRoute from "./components/PrivateRoute";
import NewTicketScreen from "./screens/NewTicketScreen";


function App() {
  return (
    <>
    <Router>
      <Header />
      <Container >
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/new-ticket' element={<PrivateRoute />} >
                <Route path="/new-ticket" element={<NewTicketScreen />} />
            </Route>
          </Routes>
      </Container>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
