import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import fetch from '../../utils/request'
import { HOST } from '../../constants/constants'
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
    const url = `${HOST}/auth/loginv2`
    const query = {
                  account: this.state.phone,
                  password: this.state.password,
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
      case 'password':
          this.setState({
            password:value
          })
      default:
        break
    }
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
            onChange={value => this.handleInputChange(value, 'phone')}
          />
          <AtInput
            name='password'
            title='密码'
            type='password'
            placeholder='密码不能少于10位数'
            value={this.state.password}
            onChange={ value => this.handleInputChange(value, 'password') }
          />
        </AtForm>
        <AtButton type='primary' size='normal' circle={true} className='confirm' onClick={this.handleSubmit}>确定</AtButton>
      </View>
    )
  }
}


