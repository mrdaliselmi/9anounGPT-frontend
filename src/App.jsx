import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing';
import { ThemeProvider } from '@/utils/hooks/ThemeProvider';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routing />
        <Toaster />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
