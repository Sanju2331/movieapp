import { createTheme } from '@mui/material/styles'; 

const theme = createTheme({ 
  palette: { 
     // Sets the theme to dark mode 
   mode: 'dark',  
    primary: { 
      main: 'rgba(243, 26, 26, 0.9)', // Netflix-like red as the primary color //[pause]
    }, 
    background: { 
      default: 'rgba(65, 47, 62, 0.9)', // Background color for the whole app //[pause]
      paper: 'rgba(168, 76, 76, 0.9)', // Background color for components like cards //[pause]
    }, 
  }, 
  typography: { 
    fontFamily: [ 
      'Roboto', // Primary font 
      '"Helvetica Neue"', 
      'Arial', 
      'sans-serif', 
    ].join(','), // Joins the font array into a single string //[pause]
  }, 
}); 

export default theme; 