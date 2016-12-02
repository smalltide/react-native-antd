import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

import {
  WhiteSpace,
  WingBlank,
  Flex,
  NoticeBar,
  Toast,
  SearchBar,
  TabBar,
  Button,
  ActionSheet,
  Card,
  Drawer,
  List,
  ListView,
  Modal,
  Popover,
  Popup,
  ActivityIndicator,
  Badge,
  Carousel
} from 'antd-mobile';

export default class antd extends Component {
  state = {
    selectedTab: 'A',
    actionSheet: '',
    listViewDataSource: null,
    listViewIsLoading: false,
    modalVisible1: false,
    modalVisible2: false,
    popoverSelected: ''
  };

  componentWillMount() {
    //this.initListViewDataSource();
  }

  render() {

    return this.useCarousel();

    //return this.useBadge();
    //return this.useButton();
    //return this.useActivityIndicator();

    //return this.usePopup();
    //return this.usePopover();
    //return this.useModal();

    //Very bad style (open initListViewDataSource in componentWillMount)
    //return this.useListView();

    //return this.useList();
    //return this.useDrawer();

    //return this.useCard();
    //return this.useActionSheet();
    //return this.useTabBar();
    //return this.useSearchBar();
    //return this.useNoticeBar();
  }

  useCarousel() {
    const styles = {
      wrapper: {
        backgroundColor: '#fff',
      },
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      },
      text: {
        color: '#fff',
        fontSize: 36,
        flex: 1
      }
    };

    return (
      <View style={{ marginTop: 30, flex: 1 }}>

        <Carousel
          style={styles.wrapper}
          autoplayTimeout={2}
          selectedIndex={2}
          autoplay
          infinite
          afterChange={this.onselectedIndexChange}
          >

          <View style={[styles.container, { backgroundColor: 'red' }]}>
            <Text style={styles.text}>Carousel 1</Text>
          </View>
          <View style={[styles.container, , { backgroundColor: 'blue' }]}>
            <Text style={styles.text}>Carousel 2</Text>
          </View>
          <View style={[styles.container, { backgroundColor: 'yellow' }]}>
            <Text style={styles.text}>Carousel 3</Text>
          </View>
          <View style={[styles.container, { backgroundColor: 'black' }]}>
            <Text style={styles.text}>Carousel 4</Text>
          </View>
          <View style={[styles.container, { backgroundColor: '#ccc' }]}>
            <Text style={styles.text}>Carousel 5</Text>
          </View>

        </Carousel>

        <View style={{ flex: 2 }} />
      </View>
    );
  }

  useBadge() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        >
        <View style={{ padding: 20 }}>
          <Badge text={9}>
            <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
          </Badge>

          <WhiteSpace />
          <WhiteSpace />

          <Badge text={109} overflowCount={100}>
            <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
          </Badge>

          <WhiteSpace />
          <WhiteSpace />

          <Badge text={109}>
            <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
          </Badge>

          <WhiteSpace />
          <WhiteSpace />

          <Badge text="new">
            <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
          </Badge>

          <WhiteSpace />
          <WhiteSpace />

          <Badge text={109} dot>
            <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
          </Badge>

          <WhiteSpace />
          <WhiteSpace />

          <Badge text={33} corner>
            <View style={{ width: 52, height: 52, backgroundColor: 'rgba(255, 140, 101, 0.15)' }} />
          </Badge>

        </View>
      </ScrollView>
    );
  }

  useButton() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank>
          <Button
            onClick={() => {
              Alert.alert('Button', 'button clicked');
            } }
            >default button</Button>
          <WhiteSpace />
          <Button type="primary">primary button</Button>
          <WhiteSpace />
          <Button type="warning">warning button</Button>
          <WhiteSpace />
          <Button disabled>disable button</Button>
          <WhiteSpace />
          <Button activeStyle={false}>无点击反馈</Button>
          <WhiteSpace />
          <Button activeStyle={{ backgroundColor: 'red' }}>自定义点击反馈 style</Button>
        </WingBlank>

        <WingBlank
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
          <Text>小按钮</Text>
          <Button type="ghost" size="small">ghost small button</Button>
        </WingBlank>

        <List style={{ margin: 10, backgroundColor: 'white' }}>

          <List.Item
            style={{ flex: 0 }}
            extra={<Button type="ghost" size="small" inline>small</Button>}
            multipleLine
            >
            区域经理
            <List.Item.Brief>
              可进行收款、退款、折扣管理、查看数据等操作
            </List.Item.Brief>
          </List.Item>

          <List.Item
            style={{ flex: 0 }}
            extra={<Button size="small" inline>small</Button>}
            multipleLine
            >
            区域经理
          <List.Item.Brief>
              可进行收款、退款、折扣管理、查看数据等操作
          </List.Item.Brief>
          </List.Item>

        </List>

      </View>
    );
  }

  useActivityIndicator() {
    const styles = {
      demo: {
        marginTop: 20,
      },
      darkBg: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 89,
        height: 89,
        backgroundColor: '#2B2F42',
      },
      gray: {
        backgroundColor: '#CCC',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
      },
    };

    return (
      <View style={styles.demo}>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon无文案</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator />
            </Flex.Item>
          </Flex>
        </WingBlank>

        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />

        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon带文案</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator text="正在加载..." />
            </Flex.Item>
          </Flex>
        </WingBlank>

        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />

        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>深色背景</Text>
            </Flex.Item>
            <Flex.Item>
              <View style={[styles.darkBg]}>
                <ActivityIndicator color="#fff" />
              </View>
            </Flex.Item>
          </Flex>
        </WingBlank>

        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />

        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>大号icon</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator size="large" />
            </Flex.Item>
          </Flex>
        </WingBlank>

        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />


        <ActivityIndicator
          animating={this.state.animating}
          toast
          size="large"
          text="Toast style..."
          />
      </View>
    );
  }

  usePopup() {
    const genPopupContent = (num) => (
      <View>
        <List
          renderHeader={() => '委托买入'}
          >

          <List.Item style={{ flex: 0 }}>股票名称</List.Item>
          <List.Item style={{ flex: 0 }}>股票代码</List.Item>
          <List.Item style={{ flex: 0 }}>买入价格</List.Item>
          <List.Item style={{ flex: 0 }}>买入数量</List.Item>

        </List>
        <View style={{ padding: 10 }}>
          <Text style={{ color: 'gray' }}>投资说明投资说明...</Text>
          <Text style={{ color: 'gray' }}>交易金额以实际成交为准</Text>
        </View>
        <View style={{ padding: 6 }}>
          <Button type="primary" onClick={() => { Popup.hide(); } }>{`买入${num}`}</Button>
        </View>
      </View>
    );

    return (
      <View style={{ margin: 8 }}>
        <WhiteSpace />
        <Button
          type="ghost"
          onClick={() => {
            Popup.show(genPopupContent(0), { maskClosable: true });
          } }
          >
          Dropdown 效果
        </Button>
        <WhiteSpace />
        <Button
          type="ghost"
          onClick={() => {
            Popup.show(genPopupContent(1), { maskClosable: true, animationType: 'slide-up' });
          } }
          >
          向上弹出效果
        </Button>
      </View>
    );
  }

  usePopover() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Popover.Item key={index} value={`option ${i}`}><Text>option {i}</Text></Popover.Item>
    ));
    overlay = overlay.concat([
      <Popover.Item key="4" value="disabled" disabled><Text>disabled opt</Text></Popover.Item>,
      <Popover.Item key="6" value="button ct"><Text>关闭</Text></Popover.Item>,
    ]);

    const styles = {
      contextStyle: {
        flex: 1,
      },
      menuContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 400,
        paddingHorizontal: 5,
        paddingVertical: 10,
      },
      triggerStyle: {
        flexDirection: 'column',
        left: 5,
      },
      overlayStyle: {
        left: 5,
        marginTop: 20,
      },
    };

    return (
      <View>
        <View>
          <Text style={{ marginTop: 30, marginLeft: 5 }}>选择了：{this.state.popoverSelected}</Text>
        </View>

        <View style={styles.menuContainer}>
          <Popover
            ref="mc" name="m"
            overlay={overlay}
            overlayStyle={styles.overlayStyle}
            triggerStyle={styles.triggerStyle}
            onSelect={(value) => this.setState({
              popoverSelected: value
            })}
            >
            <Text>菜单</Text>
          </Popover>
        </View>

      </View>
    );
  }

  useModal() {
    return (
      <View style={{ paddingTop: 30, marginTop: 64 }}>
        <WingBlank>
          <Button
            type="ghost" onClick={() => {
              this.setState({
                modalVisible1: true,
              });
            } }
            >
            显示对话框
          </Button>
        </WingBlank>
        <WhiteSpace />
        <WingBlank>
          <Button
            type="ghost" onClick={() => {
              this.setState({
                modalVisible2: true,
              });
            } }
            >
            显示全屏对话框
          </Button>
        </WingBlank>

        <Modal
          title="测试"
          transparent
          onClose={this.onClose}
          visible={this.state.modalVisible1}
          style={{ height: 200 }}
          >
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
          </View>
          <Button
            type="primary" inline onClick={() => {
              this.setState({
                modalVisible1: false,
              });
            } }
            >close modal</Button>
        </Modal>

        <Modal
          transparent={false}
          visible={this.state.modalVisible2}
          style={{ flex: 1 }}
          animationType="slide-up"
          >
          <View style={{ paddingVertical: 220 }}>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
          </View>
          <Button
            type="primary" inline onClick={() => {
              this.setState({
                modalVisible2: false,
              });
            } }
            >close modal</Button>
        </Modal>

      </View>
    );
  }

  useListView() {
    const data = [
      {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: '相约酒店',
        des: '不是所有的兼职汪都需要风吹日晒',
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: '麦当劳邀您过周末',
        des: '不是所有的兼职汪都需要风吹日晒',
      },
      {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: '食惠周',
        des: '不是所有的兼职汪都需要风吹日晒',
      },
    ];
    let index = data.length - 1;

    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];

      return (
        <View key={rowID}>
          <Text style={{ padding: 2, marginBottom: 8 }}>
            {obj.title}
          </Text>

          <View>
            <Image style={{ height: 64, width: 64, marginRight: 8 }} source={{ uri: obj.img }} />
            <View>
              <Text>{obj.des}</Text>
              <Text>{rowID}元/任务</Text>
            </View>
          </View>

        </View>
      );
    };

    return (
      <ListView
        dataSource={this.state.listViewDataSource}
        renderHeader={() => <Text>Header</Text>}
        renderFooter={() => <View>{this.state.listViewIsLoading ? <Text>加载中...</Text> : <Text>加载完毕</Text>}</View>}
        renderRow={row}
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onScroll={() => { console.log('scroll'); } }
        useBodyScroll
        onEndReachedThreshold={10}
        />
    );
  }

  initListViewDataSource() {
    const NUM_ROWS = 20;
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.genData = (pIndex = 0) => {
      const dataBlob = {};
      for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
      }
      return dataBlob;
    };
    this.rData = this.genData();

    this.setState({
      listViewDataSource: dataSource.cloneWithRows(this.rData),
      listViewIsLoading: false
    });
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
