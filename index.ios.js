import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Button, Toast } from 'antd-mobile';

export default class antd extends Component {

  showToast() {
    Toast.info('这是一个 toast 提示!!!');
  }

  render() {
    return (
       <Button type="ghost" onClick={this.showToast}>纯文字 toast</Button>
    );
  }
}

AppRegistry.registerComponent('antd', () => antd);
