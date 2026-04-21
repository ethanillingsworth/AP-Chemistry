import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import UnitPage from "./Pages/UnitPage";
import LessonPage from "./Pages/LessonPage";
import HomePage from "./Pages/HomePage";

function App() {
    return (
        <Router>
            <Sidebar></Sidebar>
            <div className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/:unit" element={<UnitPage />} />
                    <Route path="/:unit/:lesson" element={<LessonPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
