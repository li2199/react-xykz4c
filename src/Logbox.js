import './Logbox.css';
import React from 'react';
import { Input, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '你好'
    };
  }
  render() {
    return (
      <div className="log">
        <div className="put">
          <Input
            size="large"
            placeholder="admin"
            prefix={<UserOutlined />}
            className="putname"
          />
          <br />
          <br />
          <Space direction="vertical">
            <Input.Password placeholder=" password" />
          </Space>
          <Button type="primary" onClick={this.Log()} className="btn">
            登录
          </Button>
        </div>
      </div>
    );
  }
  Log() {
    axios
      .post('http://localhost:9000/loguser', {
        name: '',
        pass: ''
      })
      .then();
  }
}
export default Log;
