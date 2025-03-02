import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepoList from "./components/RepoList";
import RepoDetails from "./components/RepoDetails";
import { ThemeProvider } from "./components/Theme/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RepoList />} />
          <Route path="/repo/:name" element={<RepoDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
