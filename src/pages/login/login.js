import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import './login.less'

// type PageStateProps = {
//   counterStore: {
//     counter: number,
//     increment: Function,
//     decrement: Function,
//     incrementAsync: Function
//   }
// }

// interface Index {
//   props: PageStateProps;
// }


@inject('counterStore')
@observer
export default class Login extends Component {
  state = {
    current: 0,
    phone : '',
    password:''

  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
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

  handleChange = () => {

  }

  render () {
    return (
      <View className='index'>
        <AtForm>
          <AtInput
            name='value6'
            border={false}
            title='手机号码'
            type='phone'
            placeholder='手机号码'
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <AtInput
            name='value3'
            title='密码'
            type='password'
            placeholder='密码不能少于10位数'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </AtForm>
        <AtButton type='primary' size='normal' onClick={this.redirect}>确定</AtButton>
      </View>
    )
  }
}


