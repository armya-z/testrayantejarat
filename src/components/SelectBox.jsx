/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
function SelectBox({isReply}) {

const [inpuValue, setinpuValue] = useState("")
const [serverRes, setServerRes] = useState([])
const [isOpen, setIsOpen] = useState(false)


  const closeStyle =()=> {
   if (!isReply&&isOpen) {
    return { 
      padding: 0,
      overflow: "hidden"
    }
   }else{return{ padding: 0,
    height: 0,
    overflow: "hidden",}}
  };
function handleChange(ev){
setinpuValue(ev.target.value)
setIsOpen(true)
}

async function apiCall(query){
const results=await fetch(`http://127.0.0.1:8000/?search=${query}`).then((res)=>{return res}).catch((err)=>console.log(err))
const response = await results.json()

setServerRes(response.data.matchedTechs)
}


useEffect(() => {
if (!isReply) {
  apiCall(inpuValue)
}
}, [inpuValue]);



const body = document.querySelector("body");

function closeDropDown(){
  setIsOpen(false)
}

body.addEventListener("click",closeDropDown)

  return (
    <div className="c-box" >
      <input className="tpc" placeholder="topic" type="text" onChange={handleChange} value={inpuValue}/>
      <div className="c-selectbox" style={closeStyle()}>
{serverRes.map((item)=>
{return <div  className="item" key={item.id} onClick={()=>{setinpuValue(item.name)
setIsOpen(false)
}}>
<label htmlFor={item.id}>{item.name}</label>
<input type="radio"  name="" id={item.id} />
</div>}
)}


     </div>
    </div>
  );
}

export default SelectBox;
