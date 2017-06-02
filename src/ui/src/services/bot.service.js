import config from './config.service'
import { post } from '../helpers/api.helpers'

export default {
  askQuestion: (question) => {
    return post(`${config.Conf.botApi}/question`, { question : question })
      .then(function (res) { console.log(res) })
      .catch(function (res) { console.log(res) })
  }
}
