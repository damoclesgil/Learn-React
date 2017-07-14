import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStyles from 'react-styles-provider'

import { exampleActions } from '../state/actions'

@createStyles({
  container: {
    padding: 20,
    backgroundColor: 'whitesmoke',
  },
  item: {
    color: 'black',
  },
  button: {
    color: 'white',
    cursor: 'pointer',
    backgroundColor: '#004ecb',
    width: '3%',
    padding: '10px 20px',
    margin: '0 auto'
  },
})
@connect(
  state => ({
    items: state.example.todos,
  }),
  {
    addItem: exampleActions.add,
  },
)
export default class Example extends PureComponent {
  addItem = () => {
    const {addItem} = this.props

    // addItem(Math.random().toString())
    addItem('Pentakill');
  }

  renderItem = (item, i) => {
    const {styles} = this.props

    return (
      <div
        key={i}
        style={styles.item}
      >
        {item}
      </div>
    )
  }

  render() {
    const {items, styles} = this.props

    return (
      <div style={styles.container}>
        {items.map(this.renderItem)}
        <div
          style={styles.button}
          onClick={this.addItem}
        >
          Vrau
        </div>
      </div>
    )
  }
}
