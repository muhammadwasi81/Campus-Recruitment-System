import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
export default function Department(props) {
  const {text, v, oc, n, id, f } = props
  return (<div className="row">
            <div className="col s10 offset-s2 m6 l5 offset-l4">
            <InputLabel htmlFor={f}> { text } &nbsp; </InputLabel>
          <Select
            value= {v}
            onChange={oc}
            inputProps={{
              name: n,
              id: id,
            }}
          >
            <MenuItem value="Software Engineering">Software Engineering</MenuItem>
            <MenuItem value="Civil Engineering">Civil Engineering</MenuItem>
            <MenuItem value="Mass communication">Mass communication</MenuItem>
            <MenuItem value="Computer Engineering">Computer Engineering</MenuItem>
            <MenuItem value="Accounting and Finance">Accounting and Finance</MenuItem>
            <MenuItem value="Information Technology">Information Technology</MenuItem>
            <MenuItem value="Computer Science">Computer Science</MenuItem>
            <MenuItem value="Chemical Engineering">Chemical Engineering</MenuItem>
            <MenuItem value="Telecommunication">Telecommunication</MenuItem>
          </Select>
          </div>
          </div>
  )
}
