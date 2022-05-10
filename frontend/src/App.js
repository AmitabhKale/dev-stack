import Header from "./components/Header";
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify';
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen"


function App() {
  return (
    <>
    <Router>
      <Header />
      <Container >
          <Routes>
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
      </Container>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
