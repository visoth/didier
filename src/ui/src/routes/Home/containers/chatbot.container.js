import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '/routes/Home/modules/home.creators'
import ChatBot from '../../../components/chatbot'

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
  conversation: state.home.conversation
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatBot)
