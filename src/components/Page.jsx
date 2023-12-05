import { capitalize } from "../functions/functions"

export default function Section({title,data}){

  const newData = data.map( object => Object.keys(object).map( key => <div className="information__row" key={key}><span className="information__span">{capitalize(key)}:</span><p key={key}>{object[key]}</p></div> ) )

  return(
    <div className="information__section">
      { data.length > 0 && <h2 className="title">{title}</h2> }
      { data.length > 0 &&  newData.map(el => <div className="information" key={el}>{el}</div>) }
    </div>
  )
}