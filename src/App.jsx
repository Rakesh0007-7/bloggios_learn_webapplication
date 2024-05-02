import './App.scss';
import Router from "./utils/Router.jsx";
import ParentBase from "./container/BaseContainer/ParentBase/ParentBase.jsx";

const App = () => {
    return (
        <ParentBase>
            <Router />
        </ParentBase>
    );
};

export default App;