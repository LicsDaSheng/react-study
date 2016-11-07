import React from 'react';
import { Form, Input, Button, Row, Col, notification} from 'antd';
import styles from './Login.less';

const Login=(localtion)=>{
  return (
    <div className={styles.normal}>

        <div className={styles.login}>
          <Row className="login-row" type="flex" justify="space-around" align="middle">
            <Col span="8">
              <Form horizontal className="login-form">
                <Form.Item
                  label='用户名：'
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                >
                 
                    <Input placeholder='admin' />
                  
                </Form.Item>
                <Form.Item
                  label='密码：'
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 14 }}
                >
                  
                    <Input type='password' placeholder='123456' />
                  
                </Form.Item>
                <Row>
                  <Col span='16' offset='4'>
                    <a href="#"><Button type='primary'  >确定</Button>  </a>       
                      &nbsp;&nbsp;&nbsp;
                    <Button type='primary' >重置</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

        </div>
        </div>

  );
};



export default Login;
