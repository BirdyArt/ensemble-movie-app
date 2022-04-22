import { Routes, Route } from "react-router-dom";
import { routes } from './routes/Routes';
import Layout from './components/Layout';

const App = () => {
  return (
		<Routes>
      {routes.map((route) => (
        <Route 
          exact={route.exact} 
          path={route.path} 
          key={route.path} 
          element={<Layout>{route.component}</Layout>} 
        />  
      ))}
		</Routes>
  )
}

export default App;