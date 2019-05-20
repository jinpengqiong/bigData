import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTag, AtButton, AtTabBar } from 'taro-ui'
import TabBar from '../../common/AtTabBar/AtTabBar'
import MyPicker from '../../common/Picker/picker'

import './interReact.less'

@inject('counterStore')
@observer
export default class InterAction extends Component {


  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText: '互动数据'
  }


  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    this.props.counterStore.getCurrent(1)
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
          <iframe src='http://datav.aliyuncs.com/share/79702443f27bacaf626d743b0de3638e'></iframe>
        }
        {
          process.env.TARO_ENV === 'weapp'
            &&
          <web-view src='http://datav.aliyuncs.com/share/79702443f27bacaf626d743b0de3638e'></web-view>
        }
        <TabBar />
      </View>
    )
  }
}

