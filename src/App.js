import './App.css';
import { Layout } from './layouts/Layout'
import { Home } from './pages/Home';
import { About } from './pages/AboutMe';
import { Skills } from './pages/Skills';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
    </Layout>
  );
}

export default App;
