import { Component } from "react";
import "../styles/general-info.css"

function GeneralInfo({onChange, formData}) {
    return (
        <div className="section-1">
            <h3>General Information</h3>
        
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={onChange}/>
        

        <label>Email</label>
        <input type="email"  name="email" value={formData.email} onChange={onChange}/>


        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={onChange}/>

       
        
        </div>
    )
}

export default GeneralInfo;

