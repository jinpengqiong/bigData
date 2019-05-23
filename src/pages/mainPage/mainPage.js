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


