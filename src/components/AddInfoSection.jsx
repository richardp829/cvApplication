export default function InformationForm({title,inputs}){
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
          />
        )
        }) 
      }
      <button>Save</button>
      
    </>
  )
}

function FormField({title,type}){
  
  
  return (
    <>
      <label htmlFor="">{title}</label>
      <input type={type} />
    </>
  )
}