import PaintingsList from './Painting/PaintingsList';
import painting from './painting.json';
import { Container } from './App.styled.js';
import PageTitle from './EventBoard/PageTitle/PageTitle';

import events from './EventBoard/events.json';
import { ThemeProvider } from '@emotion/react';
import Dropdown from './Dropdown/Dropdown';
const theme = {
  colors: {
    white: '#ffffff',
    black: '#010101',
    green: '#4caf50',
    red: '#f44336',
    blue: '#2196f3',
    primaryText: '#212121',
    secondaryText: '#757575',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageTitle text="24th Core Worlds Coalition Conference" />
        <Dropdown events={events} />
        <PaintingsList items={painting} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
