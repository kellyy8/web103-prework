import './App.css';
import { useState, useEffect } from 'react';
import { useRoutes, Link, Outlet } from 'react-router-dom';
import AddCreatorPage from './pages/AddCreator';
import EditCreatorPage from './pages/EditCreator';
import ShowCreatorPage from './pages/ShowCreators';
import ViewCreatorPage from './pages/ViewCreator';
import { supabase } from './client.js';

const Layout = () => (
  <div>
    <nav>
      <Link to="/">View All Creators</Link>
      <br />
      <Link to="/add">Add a Creator</Link>
    </nav>
    <hr />
    <Outlet /> {/* Renders the child routes */}
  </div>
);

function App() {
  const [creators, setCreators] = useState([]);

  async function getAllCreators() {
    try {
      const { data: result, error } = await supabase.from('creators').select('*');
      if (error) {
        throw(error);
      }
      setCreators(result);
    }
    catch (error) {
      console.error('Error fetching all creators:', error.message)
    }
  }
  
  const element = useRoutes([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {index: true, element: <ShowCreatorPage data={creators}/>},  // Main page
        {path: "add", element: <AddCreatorPage getAllCreators={getAllCreators}/>},
        {path: "view/:id", element: <ViewCreatorPage />},
        {path: "edit/:id", element: <EditCreatorPage getAllCreators={getAllCreators}/>},
      ]
    }
  ]);

  useEffect(() => {
    getAllCreators();
  }, []);

  return element;
}

export default App;
