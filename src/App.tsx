import { useRoutes } from 'react-router-dom';
import routes from './router';
import './App.css';

function App() {
  const route = useRoutes(routes);

  return <>{route}</>;
}

export default App;
