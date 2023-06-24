import React from "react";
import { StyleSignIn } from "./style";
import { Button, Divider, Form, Input } from "antd";

const SignIn = () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    console.log(123123);
  };
  return (
    <StyleSignIn>
      <>
        <div className='image'>
          <img src='/images/bg-sign-in.png' alt='sign-in' />
        </div>
        <div className='form'>
          <>
            <div className='title'>SIGN-IN</div>
            <div className='hr'>
              <Divider className='hr-text'>Lets get started</Divider>
            </div>
            <div className='login-gg-fb'>
              <div className='button'>
                <button>
                  <img src='/images/logo-google.png' alt='google' />
                  Google Account
                </button>
              </div>
              <div className='button'>
                <button>
                  <img src='/images/logos_facebook.png' alt='facebook' />
                  Facebook Account
                </button>
              </div>
            </div>
            <Form
              onFinish={onSubmit}
              form={form}
              className='form-input'
              layout='vertical'
            >
              <Form.Item label='Full Name' name='fullName' required>
                <Input
                  className='input'
                  placeholder='Enter your Full Name here'
                />
              </Form.Item>
              <Form.Item label='Mobile Phone ' name='numberPhone' required>
                <Input
                  className='input'
                  placeholder='Enter your phone number'
                />
              </Form.Item>
              <Form.Item label='Email ' name='email' required>
                <Input
                  className='input'
                  type='email'
                  placeholder='Please enter your email address'
                />
              </Form.Item>
              <Form.Item label='Password' name='password' required>
                <Input
                  className='input'
                  type='password'
                  placeholder='Please enter your password'
                />
              </Form.Item>
              <Form.Item label='' required className='button-sign-up'>
                <button type='submit'>Sign up</button>
              </Form.Item>
            </Form>
          </>
        </div>
      </>
    </StyleSignIn>
  );
};

export default SignIn;
