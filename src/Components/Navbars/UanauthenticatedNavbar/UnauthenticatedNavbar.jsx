import styles from './UnauthenticatedNavbar.module.scss';
import ImageWrapper from "../../ImageWrapper/ImageWrapper.jsx";

const UnauthenticatedNavbar = () => {
    return (
        <nav className={styles.navbar__mainContainer__nav}>
            <ImageWrapper
                size={55}
            />

            <div className={styles.navbar__rightInfo__div}>
                <button>Login</button>
                <button>Join for Free</button>
            </div>
        </nav>
    );
};

export default UnauthenticatedNavbar;