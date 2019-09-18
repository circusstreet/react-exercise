import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moize from 'moize'
import {
  updateItems
} from '../actions'

import {
  getItems,
  getSelectedItemsId,
  getIsLoading
} from '../selectors'

import Item from './Item.component'
import Button from './Button.component'
import Label from './Label.component'

import helper from '../helpers'

class Items extends Component {
  state = {
    selectedItemIds:[]
  }

  handleSelect = (event) => {
    const {selectedItemIds} = this.state
    const id = event.target.id;

    if(selectedItemIds.includes(id)){
      const idsWithoutSelected = selectedItemIds.filter(item => item !== id)
      this.setState({selectedItemIds: idsWithoutSelected})
    }else {
      this.setState({selectedItemIds: [...selectedItemIds, id]})
    }
  }

  handleClick = (event) => {
    const {selectedItemIds} = this.state
    const {items} = this.props

    // dispatch action updateItems
    this.props.updateItems(selectedItemIds, items)
  }

  render(){

    const {
      items,
      isLoading,
    } = this.props

    return (
      <>
        <Label label="Lessons List:"/>
        <div className="items">
          {items.map(item =>
            <Item
              key={item.id}
              item={item}
              itemSelect={this.handleSelect}
            />)}
        </div>
        <Button disabled={isLoading} label="Submit" click={this.handleClick} />
      </>
    )
  }
}


const mapStateToProps = state => {
  return {
    items: getItems(state),
    selectedItemsId: getSelectedItemsId(state),
    isLoading: getIsLoading(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateItems: (selectedItemIds, items) => dispatch(updateItems(selectedItemIds, items)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
