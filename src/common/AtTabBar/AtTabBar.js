import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTabBar } from 'taro-ui'

import './AtTabBar.less'


@inject('counterStore')
@observer
export default class TabBar extends Component{

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = e => {
    console.log(e)
    switch(e){
      case 0 :
          Taro.redirectTo({
            url: '/pages/mainPage/mainPage'
          })
          break;
      case 1 :
          Taro.redirectTo({
            url: '/pages/interReact/interReact'
          })
          break;
      case 2 :
          Taro.redirectTo({
            url: '/pages/fansData/fansData'
          })
          break;
      default:
          break;
    }
  }

  render () {
    return (
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'bullet-list' },
            { title: '互动数据', iconType: 'camera' },
            { title: '粉丝数据', iconType: 'folder' }
          ]}
          onClick={e => this.handleClick(e)}
          current={this.props.counterStore.current }
        />
    )
  }
}

