export default function Page(){
  return(
    <>  
    <div className="left">
      <Section 
        title={"Education"}
      />
      <Section 
        title={"Experience"}
      />
    </div>
    <div className="right">
      <Section
        title={"Personal Info"}
      /> 
    </div>
    </>
  )
}

function Section({title,formData}){
  // const dataToDisplay = formData.map( data => <p key={data}>{data}</p> )
  return(
    <>
    <div>
      <article>
        <h3>{title}</h3>
        <div>
          <p id="date">19/19/2001 – 19/19/218</p>
          <p id="institution">el corazon del santuario</p>
          <p id="location">Barranquilla - Atlantico</p>
          <p id="degree">secundaria</p>
        </div>
      </article>
    </div>
    </>
  )
}