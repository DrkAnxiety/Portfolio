import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home'
import { About } from './pages/About' 

export const App = () => {
  return (
    <>
    <Header />

    <main className=''>
      <Home />
      <About />
    </main>
    
    <Footer />
    </>
  );
}