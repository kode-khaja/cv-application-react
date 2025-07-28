import { Component } from "react";
import "../styles/work-info.css"

function WorkExp({ formData, onChange}) {
    return (
        <div className="section-3">
        <h3>Work Experience</h3>
        
        <label>Company Name</label>
        <input type="text" name="workCompany" value={formData.workCompany} onChange={onChange}/>

        <label>Position At Company</label>
        <input type="text" name="workPosition" value={formData.workPosition} onChange={onChange}/>

        <label>Responsibilities At Position</label>
        <textarea placeholder="Daily rundown etc" name="resp