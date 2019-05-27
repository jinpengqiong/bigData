import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtFab } from 'taro-ui'
import TabBar from '../../common/AtTabBar/AtTabBar'
import FabButton from '../../common/FabButton/fabButton'
import WebViewRN from '../../common/webviewForRn/webviewForRn'
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
    Taro.getStorage({ key: 'tkn' }).then(
      res => {
        this.props.counterStore.getCurrent(0)
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
          <iframe src='http://datav.aliyuncs.com/share/d081065571c55c57a5916b1efe181579'></iframe>
        }
        {
          process.env.TARO_ENV === 'weapp'
            &&
          <web-view src='http://datav.aliyuncs.com/share/d081065571c55c57a5916b1efe181579'></web-view>
        }
        {
          process.env.TARO_ENV === 'rn'
            &&
          <WebViewRN src='http://datav.aliyuncs.com/share/d081065571c55c57a5916b1efe181579' />
        }
        <FabButton />
        <TabBar />
      </View>
    )
  }
}


