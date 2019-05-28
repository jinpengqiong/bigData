
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import TabBar from '../../common/AtTabBar/AtTabBar'
import FabButton from '../../common/FabButton/fabButton'
import './fansData.less'
import WebViewRN from '../../common/webviewForRn/webviewForRn'

@inject('counterStore')
@observer
export default class FansData extends Component {

  config = {
    navigationBarTitleText: '粉丝数据'
  }


  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    Taro.getStorage({ key: 'tkn' }).then(
      res => {
        this.props.counterStore.getCurrent(2)
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
          <iframe className='myFrame' src='http://datav.aliyuncs.com/share/01e1c4f8db2235b28cc378c97557bd3b'></iframe>
        }
        {
          process.env.TARO_ENV === 'weapp'
            &&
          <web-view src='http://datav.aliyuncs.com/share/01e1c4f8db2235b28cc378c97557bd3b'></web-view>
        }
        {
          process.env.TARO_ENV === 'rn'
            &&
          <WebViewRN src='http://datav.aliyuncs.com/share/01e1c4f8db2235b28cc378c97557bd3b' />
        }
        <FabButton />
        <TabBar />
      </View>
    )
  }
}

