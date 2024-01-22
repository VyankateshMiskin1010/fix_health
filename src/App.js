import "./App.css";
import ConsultationForm from "./components/ConsultationForm";
import Hero from "./components/Hero";
import Doctors from "./components/Doctors";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <ConsultationForm />
      <Doctors />
      <Testimonals />
      <Footer />
    </div>
  );
}

export default App;
