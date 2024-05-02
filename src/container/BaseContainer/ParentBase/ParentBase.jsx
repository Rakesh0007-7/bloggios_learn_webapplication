import style from './ParentBase.module.scss'
import PropTypes from "prop-types";

const ParentBase = ({children}) => {
    return (
        <main className={style.parentMainContainer__main}>
            {children}
        </main>
    );
};

ParentBase.propTypes = {
    children: PropTypes.node,
}

export default ParentBase;