import FormSection from './components/AddInfoSection'
import Page from './components/CvPage'
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
          <Page />
        </div>
    </>
    
  )
}

export default App


