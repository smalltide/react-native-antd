import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

import {
  NoticeBar,
  WhiteSpace,
  WingBlank,
  Toast,
  SearchBar,
  TabBar,
  Button,
  ActionSheet,
  Card
} from 'antd-mobile';

export default class antd extends Component {
  state = {
    selectedTab: 'A',
    actionSheet: ''
  };

  render() {


    return this.useCard();
    //return this.useActionSheet();
    //return this.useTabBar();
    //return this.useSearchBar();
    //return this.useNoticeBar();
  }

  useCard() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title="这是 title"
            thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
            thumbStyle={{ width: 30, height: 30 }}
            extra={'this is extra'}
          />
          <Card.Body>
            <Text>这是卡片内容</Text>
          </Card.Body>
          <Card.Footer content={'这是卡尾'} extra={'这是尾部介绍'} />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    );
  }

  useActionSheet() {
    const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
    return (
      <Button
        onClick={
          () => {
            ActionSheet.showActionSheetWithOptions({
              options: BUTTONS,
              cancelButtonIndex: BUTTONS.length - 1,
              destructiveButtonIndex: BUTTONS.length - 2,
              // title: '标题',
              message: '我是描述我是描述',
              maskClosable: true,
              'data-seed': 'logId',
            },
              (buttonIndex) => {
                this.setState({ actionSheet: BUTTONS[buttonIndex] });
              });
          }
        }
        >
        ShowActionSheet
       </Button>
    );
  }

  useTabBar() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        >
        <TabBar.Item
          title="A"
          key="A"
          selected={this.state.selectedTab === 'A'}
          onPress={() => {
            this.setState({
              selectedTab: 'A',
            });
          } }
          >
          <Button>A</Button>
        </TabBar.Item>
        <TabBar.Item
          title="B"
          key="B"
          badge={3}
          selected={this.state.selectedTab === 'B'}
          onPress={() => {
            this.setState({
              selectedTab: 'B',
            });
          } }
          >
          <Button>B</Button>
        </TabBar.Item>
        <TabBar.Item
          title="C"
          key="C"
          selected={this.state.selectedTab === 'C'}
          onPress={() => {
            this.setState({
              selectedTab: 'C',
            });
          } }
          >
          <Button>C</Button>
        </TabBar.Item>
        <TabBar.Item
          title="D"
          key="D"
          selected={this.state.selectedTab === 'D'}
          onPress={() => {
            this.setState({
              selectedTab: 'D',
            });
          } }
          >
          <Button>D</Button>
        </TabBar.Item>
      </TabBar>
    );
  }

  useSearchBar() {
    return (
      <SearchBar placeholder="搜索" />
    );
  }

  useNoticeBar() {
    return (
      <View>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" onClick={this.onClick}>
          国庆期间余额宝收益和转出到账时间1
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar type="info" mode="closable">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />

        <WhiteSpace size="lg" />
        <NoticeBar mode="link" onClick={() => Toast.show('click')} data-seed="logId">
          国庆期间余额宝收益和转出到账时间
        </NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" type="info">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />

        <WhiteSpace size="lg" />
        <NoticeBar type="info" onClick={() => Toast.show('click')}>国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar type="warn">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="closable" type="success">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar type="error">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
        <NoticeBar mode="link" type="question">国庆期间余额宝收益和转出到账时间</NoticeBar>
        <WhiteSpace size="lg" />
      </View>
    );
  }

}

AppRegistry.registerComponent('antd', () => antd);
