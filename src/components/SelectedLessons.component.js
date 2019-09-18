import React, { Component } from 'react';
import CheckboxList from './CheckboxList.component'
import { connect } from 'react-redux'
import moize from 'moize'
import { updateSelectedLessons } from './updateSelectedLessons.action'

// Add code in this file to create a component for the main view:
// You may want to connect component to store props & dispatch 

class SelectedLessonsComponent extends Component {

}



const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const SelectedLessons = connect(
  mapStateToProps, 
  mapDispatchToProps
)(SelectedLessonsComponent)

export default SelectedLessons