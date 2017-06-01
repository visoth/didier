// @flow
import React, { Component } from 'react'

function asyncComponent (getComponent: any) {
  return class AsyncComponent extends Component {
    static component = null
    state = { component: AsyncComponent.component }

    componentWillMount () {
      if (!this.state.component) {
        getComponent().then(component => {
          AsyncComponent.component = component
          this.setState({ component })
        })
      }
    }
    render () {
      const { component: Component } = this.state
      return Component && <Component {...this.props} />
    }
  }
}

export default asyncComponent
