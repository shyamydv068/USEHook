import React from 'react'

function Fields({name,email,index}) {
  return (
    <div>
      {/* Data */}
      <div className="field">
        <div className="field_val">
          <h4>{name}</h4>
          <h4>{email}</h4>
          <h4>Remove</h4>
        </div>
      </div>
    </div>
  )
}

export default Fields;
