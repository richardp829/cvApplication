import FormSection from './components/AddInfoSection'
import Section from './components/CvPage'
import DropDown from './components/NewDropDownMenu'
import './App.css'

import { useState } from 'react'

function App() {

  const [personalInfo, setPersonalInfo] = useState({})
  const [educationInfo, setEducationInfo] = useState({})
  const [experienceInfo, setExperienceInfo] = useState({})

  function updatePersonalInfo(data){
    setPersonalInfo(data)
  }

  function updateEducationalInfo(data){
    setEducationInfo(data)
  }

  function updateExperienceInfo(data){
    setExperienceInfo(data)
  }

  function showInfo(data){
    console.log(data)
  }

  return(
    <>
        <div className='leftSection'>
          <h2>Personal Information</h2>
          <FormSection 
            title={"Personal Information"}
            inputs={
            [
            'Full Name:text',
            'Email:email',
            'Phone Number:tel',
            'Adress:text'
            ]}
            handleClick={showInfo}
            data={personalInfo}
            handleChange={updatePersonalInfo}
          />
          <DropDown
          title={"Education"}>
            <FormSection 
              title={"Education"}
              inputs={
              ['School:text',
                'Degree:text',
                'Start Date:text',
                'End Date:text',
                'Location:text']
              }
              handleClick={showInfo}
              data={educationInfo}
              handleChange={updateEducationalInfo}
            />
          </DropDown>
          <DropDown
          title={"Experience"}>
            <FormSection 
              title={"Experience"}
              inputs={
              ['Company Name:text',
                'Position Title:email',
                'Start Date:text',
                'End Date:text',
                'Location:text',
                'Description:text']
              }
              handleClick={showInfo}
              data={experienceInfo}
              handleChange={updateExperienceInfo}
            />
          </DropDown>
        </div>
        <div className='rightSection'>
          <div className="left">
            <Section 
              title={"Education"}
              leftSide={educationInfo}
            />
            <Section 
              title={"Experience"}
              leftSide={experienceInfo}
            />
          </div>
          <div className="right">
            <Section
              title={"Personal Info"}
              formData={personalInfo}
            /> 
          </div>
        </div>
    </>
    
  )
}

export default App


