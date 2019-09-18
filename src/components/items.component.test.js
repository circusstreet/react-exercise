import SelectedLessons from './SelectedLessons.component'
import lessonItems from './all-lessons'

const props = {
  selectedLessons: {
    isLoading: false,
    data: []
  },
  allLessons: lessonItems
}

describe('<SelectedLessons /> component', () => {
  
  it('should render', () => {
    const component = shallow(<SelectedLessons {...props} />)
    expect(component).toBeTruthy()
  })

  it('should display the correct name for the first item', () => {
    // write test here
  })

  it('should display the right number of items', () => {{
    // write test here
  })

  it('should disable form if the data is being saved', () => {{
    // write test here
  })

  it('should disable the submit button if there are no lessons selected', () => {{
    // write test here
  })

  it('should enable the submit button if there are any lessons selected', () => {{
    // write test here
  })

})
