import React, { PureComponent } from 'react'
export default class ShowTitle extends PureComponent {
  state = {
    ourselected: '请选择'
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps=', nextProps)
    this.setState({
      ourselected: nextProps.that.state.selected
    })
    nextProps.that.setState({
      title: `-${nextProps.that.state.selected}`
    })

  }
  render() {
    const { that } = this.props
    const { ourselected } = this.state
    return (<div>{ourselected}</div>)
  }
}