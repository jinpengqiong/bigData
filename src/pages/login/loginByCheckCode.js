import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtForm, AtInput, AtButton,  } from 'taro-ui'
import fetch from '../../utils/request'
import { HOST } from '../../constants/constants'
import './loginByCheckCode.less'

export default class LoginByCheckCode extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      phone : '',
      checkCode:'',
      countDown:59,
      isDisabled:false
    }
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

  handleInputChange = (value,type) => {
    console.log(value)
    switch(type){
      case 'phone':
          this.setState({
            phone:value
          })
          break;
      case 'checkCode':
          this.setState({
            checkCode:value
          })
      default:
        break
    }
  }

  sendCheckCode = () => {
    const { countDown, phone } = this.state
    if(phone === ''){
      this.props.sendMessage('请先输入手机号','error')
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
    const url = `${HOST}/smsCode`
    const query = {
                  phone: this.state.phone,
                }
    fetch( {
      url: url,
      payload:query,
      method:'POST'}
      ).then(
        res => {
          console.log('code',res)

        }
      )
  }

  handleClick (type) {
    Taro.atMessage({
      'message': '消息通知',
      'type': type,
    })
  }

  render () {
    return (
      <View>
        <AtForm>
          <AtInput
            name='phone2'
            title='手机号码'
            type='phone'
            placeholder='手机号码'
            value={this.state.phone}
            onChange={ value => this.handleInputChange(value, 'phone')}
          />
          <AtInput
            clear
            title='验证码'
            type='checkCode'
            maxLength='6'
            placeholder='验证码'
            value={this.state.checkCode}
            onChange={ value => this.handleInputChange(value, 'checkCode') }
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
        <AtButton
          type='primary'
          size='normal'
          circle={true}
          className='confirm'
          onClick={this.handleSubmit}>
          确定
        </AtButton>
      </View>
    )
  }
}


