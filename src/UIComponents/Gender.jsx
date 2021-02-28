import React from 'react'

function Gender(props) {
  const { oc, v,} = props;
  return (
    <div className="row">
      <div className="col l8 s10 offset-l3 offset-s1">
        <div className="input-field">
          <span className="grey-text">Gender</span>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
    <span>
            <label><input value="Female" onChange={oc} className="with-gap" name="Gender" checked={v === "Female"} type="radio" /><span>Female</span></label>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
    <label><input value="Male" onChange={oc} className="with-gap" name="Gender" type="radio" checked={v === "Male"} /><span>Male</span></label>
           </span>
        </div>
      </div>
    </div>
  )
}

export default Gender;
