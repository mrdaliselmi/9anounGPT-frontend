import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import { ThemeProvider } from '@/utils/hooks/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
