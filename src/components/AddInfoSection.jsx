import { toCamelCase } from "../functions/functions";

export default function InformationForm({title,inputs,data,handleClick,handleChange}){
  
  function updateFormData(value,title){
    const key = toCamelCase(title)
    const updatedData = {...data, [key]: value}
    data = updatedData;
    handleChange(data)
  }

  return (
    <>
    <h1>{title}</h1>
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
      onClick={()=> handleClick(data)}
      >Save</button>
    </>
  )
}

function FormField({title,type,handleChange}){
  
  
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