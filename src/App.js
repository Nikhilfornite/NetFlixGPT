import './App.css';
// import Login from './components/Login';
// import Browse from './components/Browse';
import Body from './components/Body';
import {Provider} from 'react-redux'
import appStore from './utils/appStore';
function App() {
  

  return (   // giving our store to root of the project
    <Provider store={appStore}>  
      <Body/>
    </Provider>
  );
}

export default App;
