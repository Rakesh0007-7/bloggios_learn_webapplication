import styles from './FallbackLoaderPage.module.scss';
import BasicLoader from "../../../Components/Loaders/BasicLoader.jsx";

const FallbackLoaderPage = () => {
    return (
        <main className={styles.fallbackLoader__mainContainer__main}>
            <BasicLoader />
        </main>
    );
};

export default FallbackLoaderPage;