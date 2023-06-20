
import './App.css';
import NavBar from './Componentes/NavBar.jsx';
import {Jumpbotrom, Card} from './Componentes/Main.jsx'
import Footer from './Componentes/Footer';

function App() {
  return (
    <>
      <header className='bg-dark'>
        <NavBar/>
      </header>
      <main className="container col-lg-8 mb-2 mt-2">
        <section>
          <Jumpbotrom/>
        </section>
        <section className='row mt-3 mb-3'>
          <Card
            img="https://auswidebadges.com.au/wp-content/uploads/2015/07/500x350.png" 
            title="Card Title 2" 
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." 
            buttonLink="#"
            buttonText="Find Out More!"
          />         
          <Card
            img="https://auswidebadges.com.au/wp-content/uploads/2015/07/500x350.png" 
            title="Card Title 2" 
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." 
            buttonLink="#"
            buttonText="Find Out More!"
          />
          <Card
            img="https://auswidebadges.com.au/wp-content/uploads/2015/07/500x350.png" 
            title="Card Title 3" 
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." 
            buttonLink="#"
            buttonText="Find Out More!"
          />
          <Card
            img="https://auswidebadges.com.au/wp-content/uploads/2015/07/500x350.png" 
            title="Card Title 4" 
            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." 
            buttonLink="#"
            buttonText="Find Out More!"
          />
        </section>
      </main>
      <footer className='bg-dark'>
        <Footer/>
      </footer>
    </>  
  );
}
export default App;

