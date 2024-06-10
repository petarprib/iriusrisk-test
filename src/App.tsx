import Providers from './providers';
import AppRouter from './routes/index.routes';

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};

export default App;
