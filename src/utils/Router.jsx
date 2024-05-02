import {Route, Routes} from "react-router-dom";
import LandingPage from "../container/LandingContainer/LandingPage.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path={"/"} element={<LandingPage />} />
        </Routes>
    );
};

export default Router;