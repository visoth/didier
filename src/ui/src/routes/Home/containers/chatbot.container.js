import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '/routes/Home/modules/home.creators'
import chatbot from '/components/chatbox'

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

const mapStateToProps = (state) => ({
  conversation: state.conversation
})

export default connect(mapStateToProps, mapDispatchToProps)(chatbot)
