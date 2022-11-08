import {RouterProvider} from 'react-router-dom'
import router from './Router/Router'
import  {store}  from './Redux/Store'
import { Provider } from 'react-redux'
function App() {
 
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
