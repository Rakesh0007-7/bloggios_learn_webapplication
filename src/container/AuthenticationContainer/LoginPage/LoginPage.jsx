import AuthBase from "../../BaseContainer/AuthBase/AuthBase.jsx";
import styles from './LoginPage.module.scss';
import OAuthSocialButtons from "../../../Components/Buttons/OAuthSocialButtons/OAuthSocialButtons.jsx";

const LoginPage = () => {
    return (
        <AuthBase>
            <div className={styles.loginPage__mainContainer__div}>
                <header>
                    <h4 className={'app_h4'}>
                        Will it. Skill it
                    </h4>
                    <h4 className={'app_h6'}>
                        Login to your Bloggios Account
                    </h4>
                </header>

                <main className={styles.loginPage__mainBody__main}>
                    <OAuthSocialButtons />
                </main>
            </div>
        </AuthBase>
    );
};

export default LoginPage;