import { toCamelCase } from "../functions/functions";

export default function InformationForm({inputs,data,handleChange,title}){
  
  function updateFormData(value,title){
    const key = toCamelCase(title)
    const updatedData = {...data, [key]: value}
    data = updatedData;
    handleChange(data)
  }

  return (
      <div className="form">
        <h2 className="form__title">{title}</h2>
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
      </div>
  )
}

export function FormField({title,type,handleChange}){
  
  return (
    <>
      <label htmlFor="">{title}</label>
      <input 
        onChange={(e)=>{ handleChange(e.target.value,title) }}
        type={type}
      />
    </>
  )
}