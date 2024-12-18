import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Services } from './components/Services';
import About from './components/About';
import Solutions from './components/Solutions';
import Calendly from './components/Calendly';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0A192F]">
        <Header />
        <main className="overflow-hidden">
          <Routes>
            <Route path="/" element={
              <>
                <Services />
                <About />
                <Solutions />
              </>
            } />
            <Route path="/getstarted" element={<Calendly />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;