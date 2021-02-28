import React from "react";
const Input = (props) => {
    const {f,d,l,n,t, oc, v, } = props;
    return(
        <div className="rowz">
        <div className="input-field col s10 
        offset-s1 m6 l6 offset-l3" >
        <input value={v} name={n} id={d} type={t} 
        className="validate" onChange={oc}/>
        <label htmlFor={f} className="active">{l}</label>
        </div>
        </div>
    )
}
export default Input;