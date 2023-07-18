import React from "react";
import { StyleSignIn } from "./style";
import { Button, Divider, Form, Input } from "antd";
import { Link, useLocation } from "react-router-dom";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = React.useState<boolean>(true);
  const [form] = Form.useForm();
  const location = useLocation();
  React.useEffect(() => {
    setIsSignIn(location.pathname.split("/")?.[2] === "sign-in");
  }, [setIsSignIn, location]);

  const onSubmit = () => {};
  return (
    <StyleSignIn>
      <div className='sign-in'>
        <div className='left'>
          <img src='/images/sign-in-logo.jpg' alt='' />
        </div>
        <div className='right'>
          <div className='content'>
            <div className='title'>
              <h1>{isSignIn ? "Sign In" : "Create Account"}</h1>
            </div>
            <div className='sign-in-with'>
              <div className='sign-in-with-google'>
                <button>
                  <img src='/images/logo-google.png' alt='logo google' />
                  <p>Sign Up with Google</p>
                </button>
              </div>
              <div className='sign-in-with-facebook'>
                <button>
                  <img src='/images/logo-facebook.png' alt='logo google' />
                  <p>Sign Up with Facebook</p>
                </button>
              </div>
            </div>
            <p className='or'>-OR-</p>
            <Form
              form={form}
              className='form'
              onFinish={onSubmit}
              layout='vertical'
            >
              {!isSignIn && (
                <Form.Item name={"fullName"} label={"FullName"}>
                  <Input className='form__input' type='text' />
                </Form.Item>
              )}
              <Form.Item name={"email"} label={"E-mail Address"}>
                <Input className='form__input' type='email' />
              </Form.Item>
              <Form.Item name={"password"} label={"Password"}>
                <Input className='form__input' type='password' />
              </Form.Item>
              <Form.Item>
                <button className='button__sign-in'>
                  {isSignIn ? "Create Account" : "Sign In"}
                </button>
              </Form.Item>
            </Form>
            <p className='have-an-account'>
              {isSignIn ? "Don't" : "Already"} have an account ?
              <Link
                className='link'
                to={isSignIn ? "/auth/sign-up" : "/auth/sign-in"}
              >
                {isSignIn ? "Register" : "Log in"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </StyleSignIn>
  );
};

export default SignIn;
