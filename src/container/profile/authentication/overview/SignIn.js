
import { Button, Col, Form, Input, Row } from 'antd';
import React, { useCallback, useState,useEffect  } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AuthFormWrap } from './style';
import {AlertWrap} from '../../../../components/alerts/Style';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { login } from '../../../../redux/authentication/actionCreator';
import actions from '../../../../redux/authentication/actions';
const { loginErr} = actions;
function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const isError = useSelector((state) => state.auth.error);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = useCallback(
    (values) => {
      dispatch(loginErr(null));
      dispatch(login(values, () => navigate('/admin')));
    },
    [navigate, dispatch],
    
  );

  const onChange = (checked) => {
    setState({ ...state, checked });
  };
 
  useEffect(() => {
    if(isError){
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
    clearTimeout(isError)
  }, [isError]);
  

  return (
    <>
    
    <Row justify="center">
      <Col xxl={6} xl={8} md={12} sm={18} xs={24}>
        <AuthFormWrap>
        {showAlert && (
        <AlertWrap type='error' message={isError} />
      )}
        
          <div className="ninjadash-authentication-top">
            <h2 className="ninjadash-authentication-top__title">Sign in Reagan Wireless</h2>
          </div>
          <div className="ninjadash-authentication-content">
            <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="email"
                rules={[{ message: 'Please input your username or Email!', required: true }]}
                label="Username"
              >
                <Input placeholder="name@example.com" />
              </Form.Item>
              <Form.Item name="password" initialValue="" label="Password">
                <Input.Password placeholder="Password" />
              </Form.Item>
              <div className="ninjadash-auth-extra-links">
                <Checkbox onChange={onChange} checked={state.checked}>
                  Keep me logged in
                </Checkbox>
              </div>
              <Form.Item>
                <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                  {isLoading ? 'Loading...' : 'Sign In'}
                </Button>
              </Form.Item>
            </Form>
          </div>
          
        </AuthFormWrap>
      </Col>
    </Row>
    </>
    
  );
}

export default SignIn;
