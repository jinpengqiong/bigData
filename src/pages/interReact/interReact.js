import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import TabBar from '../../common/AtTabBar/AtTabBar'
import FabButton from '../../common/FabButton/fabButton'
import './interReact.less'
import WebViewRN from '../../common/webviewForRn/webviewForRn'

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
    Taro.getStorage({ key: 'tkn' }).then(
      res => {
        this.props.counterStore.getCurrent(1)
      }).catch(() => {
        Taro.navigateTo({
          url: '/pages/login/login'
        })
      })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
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
        {
          process.env.TARO_ENV === 'rn'
            &&
          <WebViewRN src='http://datav.aliyuncs.com/share/79702443f27bacaf626d743b0de3638e' />
        }
        <FabButton />
        <TabBar />
      </View>
    )
  }
}

