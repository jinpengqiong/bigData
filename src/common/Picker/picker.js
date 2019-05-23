import Taro, { Component, Config } from '@tarojs/taro'
import { Picker, View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'
import './picker.less'


@inject('counterStore')
@observer
export default class MyPicker extends Component {
  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange = e => {
    console.log('e', e.detail.value)
  }

  render () {
    return (
      <View className='container'>
        <Picker mode='selector' range={['当天', '一周内', '一月内', '自定义']} onChange={this.onChange}>
          <View className='picker1'>
            <AtButton type='primary' size='small'>时间范围</AtButton>
          </View>
        </Picker>
        <Picker mode='selector' range={['成都小故事', '中原故事', '东莞电台FM104', '快乐魔方']} onChange={this.onChange}>
          <View className='picker2'>
            <AtButton type='primary' size='small'>所有直播间</AtButton>
          </View>
        </Picker>
      </View>
    )
  }
}

