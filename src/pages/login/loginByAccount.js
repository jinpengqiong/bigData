import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'

import './loginByAccount.less'

export default class LoginByAccount extends Component {
  state = {
    phone : '',
    password:'',
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleSubmit = () => {

    const url = `${HOST}/auth/smsLogin`
    const query = {
                  phone: this.state.phone,
                  code: this.state.checkCode,
                }
    fetch( {
      url: url,
      payload:query,
      method:'POST'}
      ).then(
        res => {
          console.log('res',res)
          Taro.navigateTo({
            url: '/pages/mainPage/mainPage'
          })
        }
      )
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
            type='phone'
            placeholder='手机号码'
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
          <AtInput
            name='password'
            title='密码'
            type='password'
            placeholder='密码不能少于10位数'
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </AtForm>
        <AtButton type='primary' size='normal' circle={true} className='confirm' onClick={this.redirect}>确定</AtButton>
      </View>
    )
  }
}


