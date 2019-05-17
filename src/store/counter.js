import { observable } from 'mobx'

const counterStore = observable({
  current: 0,
  option:'',
  url1:'',
  url2:'',
  url3:'',
  getCurrent(num) {
    this.current = num
  }
})
export default counterStore
