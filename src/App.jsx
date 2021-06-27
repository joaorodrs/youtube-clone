import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { indigo, red } from '@material-ui/core/colors';
import Home from 'Home';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: indigo['A700'],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
