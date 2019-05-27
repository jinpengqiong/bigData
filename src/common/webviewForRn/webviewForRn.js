// 原生 RN 页面，从 react-native 引入 WebView
import Taro, { Component } from '@tarojs/taro'
import { WebView } from 'react-native'

export default class WebViewRN extends Component {
  render() {
    return <WebView source={{ uri: this.props.src }} />
  }
}
