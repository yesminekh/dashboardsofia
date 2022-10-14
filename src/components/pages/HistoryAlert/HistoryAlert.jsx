import React, { useState } from 'react';
import AuthService from '../../../service/Auth.service';
import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
Alert} from 'antd';
const { TextArea } = Input;

const FormDisabledDemo = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const onFormLayoutChange = ({ disabled }) => {
    setComponentDisabled(disabled);
  };
  var email = AuthService.getCurrentUser()  
  var Name = AuthService.getCurrentUserName()  

  return (
    <>
     
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={!componentDisabled}>
        

        <Form.Item label="Full Name">
          <Input  placeholder={Name}/>
        </Form.Item>
        <Form.Item label="Email">
          <Input  placeholder ={email}/>
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password />
            </Form.Item>
        <Form.Item label="Gender">
          <Radio.Group>
            <Radio value="male"> male </Radio>
            <Radio value="female"> female </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        
        <Button type="primary" >
          Edit
        </Button>
      </Form.Item>
    
      </Form>
      
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}>
        want to edit your profile
        </Checkbox>
    </>
  );
};

export default () => <FormDisabledDemo />;