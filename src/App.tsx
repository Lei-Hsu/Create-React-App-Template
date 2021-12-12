import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Router
import { routers } from "./routers/routers";

function App() {
  return (
    <Router>
      <Routes>
        {routers?.map((routeItem, index) => {
          return (
            <Route
              key={index}
              path={routeItem.path}
              element={<routeItem.component />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
