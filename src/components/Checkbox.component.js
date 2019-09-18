import React from 'react'
import classnames from 'classnames'

// checkbox status mapping
const status = {
  enabled: false,
  disabled: true,
}


export default ({item, itemSelect}) => {

 const style = classnames(
    'custom-checkbox',
    {'inactive': item.status === 'disabled'} // when item.status = disabled
  );

  return (
    <label htmlFor={item.id} className='container'>{item.name}
      <input type="checkbox" id={item.id}
      checked={item.selected} onChange={itemSelect} disabled={status[item.status]} />
      <span className={style}></span>
    </label>
)}
