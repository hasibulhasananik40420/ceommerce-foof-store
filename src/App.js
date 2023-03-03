import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import { useEffect } from 'react';


function App() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  return (
    <div>

      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
