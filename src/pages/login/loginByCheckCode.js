import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import './loginByCheckCode.less'

export default class LoginByCheckCode extends Component {
  state = {
    phone : '',
    checkCode:'',
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

  handleInputChange = () => {

  }

  render () {
    return (
      <View>
        <AtForm>
          <AtInput
            name='phone1'
            title='手机号码'
            type='phone1'
            placeholder='手机号码'
            value={this.state.phone1}
            onChange={this.handleInputChange}
          />
          <AtInput
            clear
            title='验证码'
            type='text'
            maxLength='4'
            placeholder='验证码'
            value={this.state.checkCode}
            onChange={this.handleInputChange}
          >
            <AtButton type='primary' size='small' className="checkCode">验证码</AtButton>
          </AtInput>
        </AtForm>
        <AtButton type='primary' size='normal' circle={true} className='confirm' onClick={this.redirect}>确定</AtButton>
      </View>

    )
  }
}


