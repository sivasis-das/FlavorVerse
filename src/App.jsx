import Layout from "./Layout";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    {/* it can be done like this below or as done in the final-----------
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route to="" or index element={<Home />} />
            <Route to="recipes/:id" or index element={<RecipeDetails />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

    </>
  );
}

export default App;
