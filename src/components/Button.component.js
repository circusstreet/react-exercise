import React from 'react'
import classnames from 'classnames'

export default ({disabled, label, click}) => {
 const style = classnames(
  'submit',
  {'inactive': disabled} // when item.status = disabled
 );

return <button className={style} onClick={click} disabled={disabled} >{label}</button>
}
