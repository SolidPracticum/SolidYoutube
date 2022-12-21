import axios from 'axios'

const API_KEY = 'AIzaSyBIUPtI41fZ5z1_am9WfAfuJnr-GTE5Bcs'

const http = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    part: 'contentDetails',
    maxResults: 5,
    key: API_KEY,
    mine: true,
  },
  headers: {}
})

const Api = {
  getList: () => http.get('/subscriptions'),
}

export default Api
