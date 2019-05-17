import Taro, { Component, Config } from '@tarojs/taro'
import { Picker, View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'


import './picker.less'
import { object } from 'prop-types';


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

  onChange = (e:{}) => {
    console.log('e', e.detail.value)
  }

  render () {
    return (
      <View className='container'>
        <Picker mode='selector' range={['美国', '中国', '巴西', '日本']} onChange={this.onChange}>
          <View className='picker'>
            选择
            <Text>所有直播间</Text>
          </View>
        </Picker>
      </View>
    )
  }
}

