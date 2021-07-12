import './Top.css';
import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '你好'
    };
  }
  render() {
    return (
      <div className="top">
        <h1>欢迎使用后台管理系统</h1>
        <Button type="primary" onClick={this.loG()}>
          登录
        </Button>
      </div>
    );
  }
  loG() {}
}

export default Top;
