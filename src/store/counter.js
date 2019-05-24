import { observable } from 'mobx'

const counterStore = observable({
  current: 0,
  option:'',
  url1:'',
  url2:'',
  url3:'',
  chartRoomData:[],
  timeRange:'',
  roomRange:[],
  getCurrent(num) {
    this.current = num
  },
  setChartRoom(data){
    this.chartRoomData = data
  },
  setRoomRange(data){
    this.roomRange = data
  },
})
export default counterStore
