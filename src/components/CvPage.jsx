export default function Section({title,formData,leftSide}){

  function convertData(){
    
    let dataToShow = []
    for (const data in leftSide){
      dataToShow.push( <p> { `${data}: ${leftSide[data]}`} </p> )
    }
    return dataToShow
  }

  return(
    <>
    <div>
      <article>
          {formData && JSON.stringify(formData).length > 2 && (
            <>
            <h3>{title}</h3>
            <div>
              { formData?.fullName?.length > 0 && <p>Full Name: {formData.fullName}</p>}
              { formData?.phoneNumber?.length > 0 && <p>Phone Number: {formData.phoneNumber}</p>}
              { formData?.email?.length > 0 && <p>Email: {formData.email}</p>}
              { formData?.adress?.length > 0 && <p>Address: {formData.adress}</p>}
            </div>
            </>
           )}
      </article>
      <article>
          { leftSide && JSON.stringify(leftSide).length > 2 && (
            <>
            <h3>{title}</h3>
            <div>
             {convertData()}
            </div>
            </>
           )}
      </article>
    </div>
    </>
  )
}