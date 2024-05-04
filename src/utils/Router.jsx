import {Route, Routes} from "react-router-dom";
import FallbackLoaderPage from "../container/LoaderContainer/FallbackLoader/FallbackLoaderPage.jsx";
import {lazy, Suspense} from "react";
import {LOGIN_PAGE} from "./PathConstants.jsx";

const LandingPage = lazy(()=> import('../container/LandingContainer/LandingPage.jsx'));
const LoginPage = lazy(()=> import('../container/AuthenticationContainer/LoginPage/LoginPage.jsx'));

const Router = () => {
    return (
        <Suspense fallback={<FallbackLoaderPage />}>
            <Routes>
                <Route path={"/"} element={<LandingPage />} />
                <Route path={LOGIN_PAGE} element={<LoginPage />} />
            </Routes>
        </Suspense>
    );
};

export default Router;