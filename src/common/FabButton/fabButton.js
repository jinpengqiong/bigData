import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtFab, AtDrawer } from 'taro-ui'
import Picker from '../Picker/picker'
import './fabButton.less'


@inject('counterStore')
@observer
export default class FabButton extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      isDisplay:false
    }
  }

  onButtonClick = () => {
    this.setState({
      isDisplay:true
    })
  }

  handleItemClick = index => {
    console.log(index)
  }

  render () {
    return (
      <View className='container'>
        <AtFab
        size='small'
        onClick={this.onButtonClick}>
          <Text className='at-fab__icon at-icon at-icon-menu'></Text>
        </AtFab>
        <AtDrawer
          show={this.state.isDisplay}
          onClose={this.onClose}
        >
          <Picker />
        </AtDrawer>
      </View>
    )
  }
}

