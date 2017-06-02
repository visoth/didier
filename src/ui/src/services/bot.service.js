// import config from './config.service'
import { post } from '../helpers/api.helpers'

export default {
  askQuestion: (question) => {
    return post(`http://localhost:5000/question`, { question : question })
      // .then(function (res) { console.log(res) })
      .then(d => d.json())
      .catch(res => console.log(res))
  }
}
