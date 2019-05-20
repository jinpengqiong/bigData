import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTag, AtButton, AtTabBar } from 'taro-ui'
import TabBar from '../../common/AtTabBar/AtTabBar'
import MyPicker from '../../common/Picker/picker'

import './mainPage.less'


@inject('counterStore')
@observer
export default class MainPage extends Component {


  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText: '首页'
  }


  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    this.props.counterStore.getCurrent(0)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <MyPicker />
        {
          process.env.TARO_ENV === 'h5'
            &&
          <iframe src='http://datav.aliyuncs.com/share/d081065571c55c57a5916b1efe181579'></iframe>
        }
        {
          process.env.TARO_ENV === 'weapp'
            &&
          <web-view src='http://datav.aliyuncs.com/share/d081065571c55c57a5916b1efe181579'></web-view>
        }
        <TabBar />
      </View>
    )
  }
}


