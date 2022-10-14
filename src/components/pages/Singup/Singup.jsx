import { Button, Checkbox, Form, Input,Radio } from 'antd';
import React from 'react';
import'./Sigup.css'
import { useDispatch,useSelector } from 'react-redux';
import image from'../../../assets/logo.jpg'
import {   Navigate, useNavigate} from 'react-router-dom';
import { login } from '../../../redux/actions/Auth';

export default function Login(){
  const {isLoggedIn}=useSelector(state=>state.auth);
  const onFinish = (values) => {
    console.log('Success:',values);
  
    dispatch(login(values.Email,values.password))
    if (isLoggedIn) {
      navigate("/")
    }


  };
  const dispatch=useDispatch();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  let navigate=useNavigate();

  
  const auth=useSelector(state=>state.auth);
  console.log('state',auth);
console.log("isLoggedInisLoggedInisLoggedIn",isLoggedIn);
  // const onSubmit =() => {
  //     console.log('islog',isLoggedIn);
  //     dispatch(login(Email,password));
  // }


console.log("hello");

if (isLoggedIn) {
  console.log("logeeeediin",isLoggedIn);
  return <Navigate to="/"/>
}

  return (
    <div className='form' >
    

    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    
      autoComplete="on"
    >
               <img
            src={image}
            alt="profile-img"
            className="profile-img-card"
          />
      <Form.Item
        label="FullName"
        name="FullName"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      
      <Form.Item
        label=" password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="Gender">
          <Radio.Group>
            <Radio value="apple"> male </Radio>
            <Radio value="pear"> female </Radio>
          </Radio.Group>
        </Form.Item>
      

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
          
        }}>
        
        <Button type="primary" htmlType="submit" onClick={()=>(onFinish())} className='login-form-button'>
          Singup 
        </Button>
        Or <a href="/Login">Login!</a>

      </Form.Item>
      
    </Form>
    </div>

  );
};

        
        
        