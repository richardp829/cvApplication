import { toCamelCase } from "../functions/functions";
// import  { FormField }  from './AddInfoSection';

export default function InformationForm({title,inputs,handleClick,icon}){

  let formData = {};
  let formInputs = {};

  inputs.forEach( input => {
    formInputs[toCamelCase(input.split(":")[0])] = ""
    formData[toCamelCase(input.split(":")[0])] = ""
  });
  
  function updateFormData(target,title){
    const key = toCamelCase(title)
    formInputs[key] = target
    formData[key] = target.value
  }

  function logger(){
    Object.keys(formInputs).forEach(key => {
      formInputs[key].value = ""});

    handleClick(formData)
  }

  return (
    <div className="form">
      <h2 className="form__title">{icon}{title}</h2>
      { inputs.map(input => { 
        const [title,type] = input.split(":") 
        return (
          <FormField
            title={title}
            type={type}
            key={title}
            handleChange={updateFormData}
          />
        )
        }) 
      }
    <button  
      className="button" 
      type="submit"
      onClick={()=> logger()}
      >Save</button>
    </div>
  )
}

function FormField({title,type,handleChange}){
  
  
  return (
    <>
      <label htmlFor="">{title}</label>
      <input 
        onChange={(e)=>{ handleChange(e.target,title) }}
        type={type}
      />
    </>
  )
}