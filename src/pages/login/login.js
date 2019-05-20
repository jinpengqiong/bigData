import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTabs, AtTabsPane } from 'taro-ui'
import LoginByAccount from './loginByAccount'
import LoginByCheckCode from './loginByCheckCode'
import './login.less'


@inject('counterStore')
@observer
export default class Login extends Component {
  state = {
    currentTab: 0
  }
  config = {
    navigationBarTitleText: '登录'
  }


  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  redirect = () => {
    Taro.navigateTo({
      url: '/pages/mainPage/mainPage'
    })
  }

  handleClick = e => {
    console.log('e',e)
    this.setState({
      currentTab:e
    })
  }

  handleInputChange = () => {

  }

  render () {
    const tabList = [{ title: '帐号登录' }, { title: '验证码登录' }]
    return (
      <View className='index'>
        <AtTabs
        className='tabs'
        current={this.state.currentTab}
        tabList={tabList}
        onClick={this.handleClick}>
        <AtTabsPane current={this.state.current} index={0} >
          <LoginByAccount />
        </AtTabsPane>

        <AtTabsPane current={this.state.currentTab} index={1}>
          <LoginByCheckCode />
        </AtTabsPane>
      </AtTabs>
    </View>
    )
  }
}


