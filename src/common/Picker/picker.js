import Taro, { Component, Config } from '@tarojs/taro'
import { Picker, View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'
import './picker.less'
import fetch from '../../utils/request'
import { HOST } from '../../constants/constants'

@inject('counterStore')
@observer
export default class MyPicker extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      chartRooms:[],
      rangeName:[],
      current:-1
    }
  }
  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () {
    this.getChartRooms()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange = e => {
    console.log('e', e.detail.value)
    this.setState({
      current:e.detail.value
    })
  }
  getChartRooms = () => {
    let userId
    Taro.getStorage({ key: 'uid' }).then(
      res => {
        console.log('uid', res.data)
        userId = res.data
        const url = `${HOST}/users/${userId}/ownedRooms`
        const query = {
                      limit: 100,
                      skip: 0,
                    }
        fetch( {
          url: url,
          payload:query,
          method:'GET'}
          ).then(
            res => {
              console.log('res11',res)
              let arr = res.data.map(
                item => {
                  return item.name
                }
              )
              this.setState({
                chartRooms: res.data,
                rangeName:arr
              })
            }
          )
      }).catch(() => {
        Taro.navigateTo({
          url: '/pages/login/login'
        })
      })
  }

  render () {
    return (
      <View className='container'>
        <Picker mode='selector' range={['当天', '一周内', '一月内', '自定义']} onChange={this.onChange}>
          <View className='picker1'>
            <AtButton type='primary' size='small'>时间范围</AtButton>
          </View>
        </Picker>
        <Picker mode='selector' range={this.state.rangeName} onChange={this.onChange}>
          <View className='picker2'>
            <AtButton type='primary' size='small'>
            {
              this.state.current === -1?
              '所有直播间'
              :
              this.state.rangeName[this.state.current]
            }
            </AtButton>
          </View>
        </Picker>
      </View>
    )
  }
}

