import Taro from '@tarojs/taro'

function getStorage(key) {
  return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

function updateStorage(data = {}) {
  return Promise.all([
    Taro.setStorage({ key: 'tkn', data: data['tkn'] || '' }),
    Taro.setStorage({ key: 'uid', data: data['uid'] || ''})
  ])
}


export default async function fetch(options) {
  const { url, payload, method = 'GET' } = options
  const token = await getStorage('tkn')
  console.log('token', token)
  const header = token ? { Authorization: 'Bearer ' + token } : {}
  if (method === 'POST') {
    header['content-type'] = 'application/json'
  }
  return Taro.request({
    url,
    method,
    data: payload,
    header
  }).then( async(res) => {
    if(res.data.sessionToken){
      await updateStorage({ tkn: res.data.sessionToken, uid: res.data.userID })
    }
    return Promise.resolve(res.data)
  }).catch((err) => {
    updateStorage({ tkn: undefined, uid: undefined })
    Taro.navigateTo({
      url: '/pages/login/login'
    })
    return Promise.reject({ message: defaultMsg, ...err })
  })
}
