
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { Provider } from 'react-redux';
import theme from './styles/theme';
import Navbar from './component/NavBar';
import { store } from './redux/store';

// Pages
import Home from './pages/Home';

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Navbar />
          <Box sx={{ mt: 8 }}>
            <Home/>
          </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;