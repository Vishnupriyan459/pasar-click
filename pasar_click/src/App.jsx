import './App.css';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import AdditionalInfo from './Component/AdditionalInfo';
import Home from './Component/home/Home';
function App() {
  
  return (
    <>
    <section>
      <router>
      <Navbar />

      {/* <Login /> */}
      <Home />
      {/* <SignUp /> */}
      {/* <AdditionalInfo/> */}

      <Footer />
      </router>

    </section>
   


    </>
  );
}

export default App;
