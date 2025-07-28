import { useState } from 'react'
import GeneralInfo from './components/general-info'
import EduInfo from './components/educational-info'
import WorkExp from './components/work-info'

import './App.css'

function App() {
  const [formData, setFormData] = useState( 
                                            { name: '', email: '', password: '', 
                                              schoolName: '', fieldOfStudy: '',
                                              gradDate: '', workCompany: '',
                                              workPosition: '', responsibilities: ''
                                            } 
                                          );

function handleInput(e) {
  const { name, value } = e.target
  setFormData((prev) => ({...prev, [name]: value}))
   }
                                          
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
   setSubmitted(true)
   if (submitted ===true) {
    setSubmitted(false)
   }
  }

  return (
    <>
    <div className="header">
    <p className="header-desc">Resume Build Previewer</p>
    </div>
   <form onSubmit={onSubmit}  style={{display: 'flex', flexDirection: submitted ? 'row'  : 'column', gap: submitted ? '8rem' : '1rem'}}>
     {submitted ? <>
      <section>
      <h3>Name </h3>
      <p>{formData.name}</p>
      <h3>Email </h3>
      <p>{formData.email}</p>
      </section>

      <section>
      <h3>School </h3>
      <p>{formData.schoolName}</p>
      <h3>Field Of Study </h3>
      <p>{formData.fieldOfStudy}</p>
      <h3>Graduation Date </h3>
      <p>{formData.gradDate}</p>
      </section>

      <section>
      <h3>Work Company </h3>
      <p>{formData.workCompany}</p>
      <h3>Position </h3>
      <p>{formData.workPosition}</p>
      <h3>Responsibilities </h3>
      <p>{formData.responsibilities}</p>
      </section>
      <button type="button" onClick={onSubmit}>edit </button>

 </>
   : 
   <>
    <section>
     <GeneralInfo 
     formData={formData}
     onChange={handleInput}
     />
    </section>

    <section>
     <EduInfo      
     formData={formData}
     onChange={handleInput}
     />
    </section>

    <section>
     <WorkExp 
     formData={formData}
     onChange={handleInput}
     />
    </section>

    <div className="buttons"> 
    <button type="submit" onClick={onSubmit}>submit </button>
    </div>



   </>}
   </form>


    </>
    );
  }
    
 
export default App;
