import { Provider } from 'react-redux';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import store from './Store';


function App() {
  return (
      <Provider store={store}>
           <Header />
           <HomePage />
      </Provider>

  );
}

export default App;
