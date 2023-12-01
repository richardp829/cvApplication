import FormSection from './components/AddInfoSection'
import './App.css'

function App() {
  return(
    <>
      <FormSection 
      title={"Personal Information"}
      inputs={
        ['Personal Information:text',
          'Full Name:text',
          'Phone Number:tel',
          'Email:email',
          'Under age?:checkbox'
        ]
      }
      />
    </>
  )
}

export default App
