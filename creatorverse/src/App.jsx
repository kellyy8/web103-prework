import './App.css';
import { useRoutes, Link, Outlet } from 'react-router-dom';
import AddCreatorPage from './pages/AddCreator';
import EditCreatorPage from './pages/EditCreator';
import ShowCreatorPage from './pages/ShowCreators';
import ViewCreatorPage from './pages/ViewCreator';

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
  {/**
   * TODO: Polish
   * 1. Defining the paths and elements for the main page, edit page, new page, and view page.
   * 2. Inserting the element into the App container.
   */}
  
  const element = useRoutes([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {index: true, element: <ShowCreatorPage />},  // Main page
        {path: "add", element: <AddCreatorPage />},
        {path: "view/:id", element: <ViewCreatorPage />}, // TODO: Check if this works
        {path: "edit/:id", element: <EditCreatorPage />}, // TODO: Check if this works
      ]
    }
  ]);

  return element;
}

export default App;
