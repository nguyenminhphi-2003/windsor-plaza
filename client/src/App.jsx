import Header from './user/components/Header';
import Footer from './user/components/Footer';
import HomePage from './user/pages/HomePage';

function App() {
  return (
    <>
      <Header />
      <div className='content'>
        <HomePage/>
      </div>
      <Footer />
    </>
  );
}

export default App;
