import Taro, { Component, Config } from '@tarojs/taro'
import { Picker, View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton, AtNavBar } from 'taro-ui'
import './picker.less'
import fetch from '../../utils/request'
import { HOST } from '../../constants/constants'

@inject('counterStore')
@observer
export default class MyPicker extends Component {
  constructor(){
    super(...arguments)
    this.state = {
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
              this.props.counterStore.setChartRoom(res.data)
              this.props.counterStore.setRoomRange(arr)
            }
          )
      }).catch(() => {
        Taro.navigateTo({
          url: '/pages/login/login'
        })
      })
  }

  logout = () => {
    Taro.clearStorage()
    Taro.navigateTo({
      url: '/pages/login/login'
    })
  }

  render () {
    return (
      <View className='container'>
        <View>
            <AtNavBar
              color='#000'
              leftIconType='chevron-left'
              title='退出登录'
              onClickLeftIcon={this.logout}
            />
          </View>
        <Picker mode='selector' range={['当天', '一周内', '一月内', '自定义']} onChange={this.onChange}>
          <View>
            <AtNavBar
              color='#000'
              title='时间范围'
              rightSecondIconType='bullet-list'
            />
          </View>
        </Picker>
        <Picker mode='selector' range={this.props.counterStore.roomRange} onChange={this.onChange}>
          <View>
            <AtNavBar
              color='#000'
              title= {
                this.state.current === -1?
                '所有直播间'
                :
                this.props.counterStore.roomRange[this.state.current]
              }
              rightSecondIconType='bullet-list'
            />
          </View>
        </Picker>
      </View>
    )
  }
}

