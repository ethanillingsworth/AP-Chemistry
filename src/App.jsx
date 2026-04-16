import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import UnitPage from "./Pages/UnitPage";
function App() {
    return (
        <Router>
            <Sidebar></Sidebar>
            <div className="content">
                <Routes>
                    <Route path="/:unit" element={<UnitPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
