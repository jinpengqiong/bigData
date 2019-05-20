import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtMessage } from 'taro-ui'

import './loginByCheckCode.less'
import { clearInterval } from 'timers';

export default class LoginByCheckCode extends Component {
  state = {
    phone : '',
    checkCode:'',
    countDown:59,
    isDisabled:false
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

  sendCheckCode = () => {
    const { countDown, phone } = this.state
    if(!phone){
      Taro.atMessage({
        'message': '请先输入手机号',
        'type': 'error',
      })
      return
    }
    this.setState({
      isDisabled:true
    })
    let count = 59
    let timer = setInterval(() => {
      count = count-1
      this.setState({
        countDown:count
      })
      if(countDown<=0){
        clearInterval(timer)
        this.setState({
          countDown:59,
          isDisabled:false
        })
      }
    }, 1000)

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
            <AtButton
            type='primary'
            size='small'
            className="checkCode"
            onClick={this.sendCheckCode}
            disabled={this.state.isDisabled}
            >
              {
                this.state.isDisabled?
                this.state.countDown
                :
                '验证码'
              }
            </AtButton>
          </AtInput>
        </AtForm>
        <AtButton type='primary' size='normal' circle={true} className='confirm' onClick={this.redirect}>确定</AtButton>
      </View>
    )
  }
}


