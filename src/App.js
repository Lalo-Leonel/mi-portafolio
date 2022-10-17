import './App.css';
import { Layout } from './layouts/Layout'
import { Home } from './pages/Home';
import { About } from './pages/AboutMe';

function App() {
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  );
}

export default App;
