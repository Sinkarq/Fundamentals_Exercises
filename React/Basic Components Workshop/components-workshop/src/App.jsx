import './assets/css/style.css'
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Appointment from "./components/Appointment/Appointment.jsx";
import PricingPlan from "./components/PricingPlan/PricingPlan.jsx";
import Team from "./components/Team/Team.jsx";
import Search from "./components/Search";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <Appointment/>
            <PricingPlan/>
            <Team/>
            <Search/>
            <Testimonial/>
            <Blog/>
            <Footer/>
        </>
    );
}

export default App
