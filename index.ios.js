import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ScrollView
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
  Card,
  Drawer,
  List
} from 'antd-mobile';

export default class antd extends Component {
  state = {
    selectedTab: 'A',
    actionSheet: ''
  };

  render() {
    return this.useList();
    //return this.useDrawer();

    //return this.useCard();
    //return this.useActionSheet();
    //return this.useTabBar();
    //return this.useSearchBar();
    //return this.useNoticeBar();
  }

  useList() {
    const Item = List.Item;
    const Brief = Item.Brief;

    return (
      <ScrollView>
      <List
        renderHeader={() => '我是华丽丽的列表头部'}
        renderFooter={() => '我是列表尾部'}
      >
        <Item style={{ flex: 0 }} thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png" data-seed="logId">标题文字点击无反馈，文字超长则隐藏</Item>
        <Item style={{ flex: 0 }} wrap>文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行</Item>
        <Item style={{ flex: 0 }} onClick={() => Toast.info('点击触发onClick事件')}>内容内容 Click Me</Item>
        <Item style={{ flex: 0 }} extra="箭头向右" arrow="horizontal">标题文字</Item>
        <Item style={{ flex: 0 }} extra="箭头向下" arrow="down">标题文字</Item>
        <Item style={{ flex: 0 }} extra="箭头向上" arrow="up">标题文字</Item>
        <Item style={{ flex: 0 }} extra="没有箭头" arrow="empty">标题文字</Item>

        <Item style={{ flex: 0 }} extra={<View>内容内容<Brief style={{ alignSelf: 'flex-end' }}>辅助文字内容</Brief></View>} multipleLine>垂直居中对齐</Item>
        <Item style={{ flex: 0 }} extra={<View>内容内容<Brief style={{ alignSelf: 'flex-end' }}>辅助文字内容</Brief></View>} multipleLine align="top">顶部对齐</Item>

        <Item style={{ flex: 0 }} extra="内容内容" multipleLine>
          垂直居中对齐 <Brief>辅助文字内容</Brief>
        </Item>
        <Item style={{ flex: 0 }} extra="内容内容" multipleLine align="top" arrow="horizontal">
          顶部对齐
          <Brief>辅助文字内容</Brief>
          <Brief>辅助文字内容</Brief>
        </Item>

        <Item style={{ flex: 0 }} thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png" data-seed="logId">标题文字点击无反馈，文字超长则隐藏</Item>
        <Item style={{ flex: 0 }} wrap>文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行</Item>
        <Item style={{ flex: 0 }} onClick={() => Toast.info('点击触发onClick事件')}>内容内容 Click Me</Item>
        <Item style={{ flex: 0 }} extra="箭头向右" arrow="horizontal">标题文字</Item>
        <Item style={{ flex: 0 }} extra="箭头向下" arrow="down">标题文字</Item>
        <Item style={{ flex: 0 }} extra="箭头向上" arrow="up">标题文字</Item>
        <Item style={{ flex: 0 }} extra="没有箭头" arrow="empty">标题文字</Item>

      </List>
      </ScrollView>
    );
  }

  useDrawer() {
    return (
      <Drawer
        sidebar={<Button onClick={() => this.refs.drawer.drawer.closeDrawer()}>Close Sidebar</Button>}
        position='left'
        ref='drawer'
      >
      <Button onClick={() => this.refs.drawer.drawer.openDrawer()}>Open Drawer</Button>
      </Drawer>
    );
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
          }}
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
          }}
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
          }}
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
          }}
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
