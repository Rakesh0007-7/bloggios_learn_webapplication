import AuthBase from "../../BaseContainer/AuthBase/AuthBase";
import styles from "./SignupPage.module.scss";
import OAuthSocialButtons from "../../../Components/Buttons/OAuthSocialButtons/OAuthSocialButtons";
const SignupPage = () => {
  return (
    <AuthBase>
      <div className={styles.signupPage__mainContainer__div}>
        <header>
          <h4 className={"app_h4"}>Lets make a change</h4>
          <h4 className={"app_h6"}>Signup to Bloggios</h4>
        </header>

        <main className={styles.singupPage__mainBody__main}>
          <OAuthSocialButtons />
        </main>
      </div>
    </AuthBase>
  );
};

export default SignupPage;
