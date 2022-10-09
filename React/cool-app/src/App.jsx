import ReactLogo from './components/Logos/ReactLogo';
import ViteLogo from './components/Logos/ViteLogo';
import Card from './components/Card';
import Header from "./components/Header";
import './App.css'

function App() {
    return (
        <div className="App">
            <Header/>
            <div>
                <ReactLogo/>
                <ViteLogo/>
            </div>
            <Card/>
        </div>
    );
}

export default App
