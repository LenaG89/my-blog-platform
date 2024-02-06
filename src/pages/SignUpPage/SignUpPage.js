import SignUpForm from "../../components/SignUpForm/SignUpForm";
import stl from './SignUpPage.module.scss'

const SignUpPage = () => {
  return (
    <div className={stl.wrapper}>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
