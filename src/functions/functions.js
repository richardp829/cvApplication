export function toCamelCase(text){

  const camelCaseText = text.split(" ").map( (word,index) => { 
    return index === 0 
    ? word.split("")[0].toLowerCase() + word.slice(1,word.length)
    : word.split("")[0].toUpperCase() + word.slice(1,word.length)
   }).join("")

  return camelCaseText;
}

// function showData(){
//   const data = [];
//   for(const info in formData){ 
//     data.push( <p key={info}>{ `${info}: ${formData[info]}` }</p> )
//    }
//   return data
// }