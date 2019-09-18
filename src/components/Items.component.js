import React, { Component } from 'react'
import { connect } from 'react-redux'
import moize from 'moize'
import {
  updateItems,
  updateSelectedItemsLIst
} from '../actions'

import {
  getItems,
  getSelectedItemsId,
  getIsLoading
} from '../selectors'

import Item from './Item.component'
import Button from './Button.component'
import Label from './Label.component'

class Items extends Component {
  handleSelect = (event) => {
    const {selectedItemsId} = this.props
    const id = event.target.id;

    if(selectedItemsId.includes(id)){
      const idsWithoutTheSelected = selectedItemsId.filter(item => item !== id)
      //dispatch updte the selected itms list
      this.props.updateSelectedItemsLIst(idsWithoutTheSelected)
    }else {
      //dispatch updte the selected itms list
      this.props.updateSelectedItemsLIst([...selectedItemsId, id])
    }
  }

  handleClick = (event) => {
    const {items, selectedItemsId} = this.props

    // dispatch action updateItems
    this.props.updateItems(selectedItemsId, items)
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
    updateItems: (selectedItemsId, items) => dispatch(updateItems(selectedItemsId, items)),
    updateSelectedItemsLIst: (list) => dispatch(updateSelectedItemsLIst(list))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
