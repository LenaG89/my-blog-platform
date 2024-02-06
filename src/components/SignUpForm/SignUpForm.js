import MyButton from "../MyButton/MyButton";
import { Input, Checkbox } from "antd";
import { Link } from "react-router-dom";
import stl from "./SignUpForm.module.scss";

const SignUpForm = () => {
  return (
    <div className={stl.wrapper}>
      <h1>Create new account</h1>
      <form className={stl.form}>
        <label className={stl.label}>
          Username
          <Input placeholder="Username" size="large" type="text" className={stl.input}/>
        </label>
        <label className={stl.label}>
          Email address
          <Input placeholder="Email address" size="large" type="email" className={stl.input} />
        </label>
        <label className={stl.label}>
          Password
          <Input placeholder="Password" size="large" type="password" className={stl.input} />
        </label>
        <label className={stl.label}>
          Repeat Password
          <Input placeholder="Repeat Password" size="large" type="password" className={stl.input}/>
        </label>
        <hr className={stl.hr} />
        <Checkbox defaultChecked={true} className={stl.checkbox}>
          I agree to the processing of my personal information
        </Checkbox>

        <MyButton
          type="primary"
          children="Create"
          color="#1890FF"
          htmlType="submit"
        />
        <div className={stl.span} >Already have an account? <Link  className={stl.link}>Sign In.</Link ></div>
      </form>
    </div>
  );
};
export default SignUpForm;
