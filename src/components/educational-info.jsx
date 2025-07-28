import { Component } from "react";
import "../styles/educational-info.css"


function EduInfo({formData, onChange}) {
    return (
        <div className="section-2">
        <h3>School Experience</h3>
        <label>Educational Institution</label>
        <input type="text" name="schoolName" value={formData.schoolName} onChange={onChange}/>

        <label>Field Of Study</label>
        <input type="text" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={onChange}/>

        <label>Graduation Date</label>
        <input type="date" name="gradDate" value={formData.gradDate} onChange={onChange}/>
        
        
        </div>
    )
}

export default EduInfo;