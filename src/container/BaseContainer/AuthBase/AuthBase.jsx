import ImageWrapper from "../../../Components/ImageWrapper/ImageWrapper.jsx";
import styles from './AuthBase.module.scss';
import PropTypes from "prop-types";

const AuthBase = ({
    children
                  }) => {
    return (
        <main>
            <nav className={styles.authbase__mainNavbar__nav}>
                <ImageWrapper size={45} />
            </nav>
            {children}
        </main>
    );
};

AuthBase.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthBase;