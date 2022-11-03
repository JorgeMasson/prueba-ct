import Main from './Pages/main';
import PlatformProvider from './Platform/chakra';

function App() {
  return (
    <PlatformProvider>
      <Main />
    </PlatformProvider>
  );
}

export default App;
