import { AiOutlineStar as StartIconEmpty } from "react-icons/ai";
import { AiFillStar as StartIconFull } from "react-icons/ai";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Rate() {
  const [star, setStar] = useState([
    { id: 1, hover: false, clicked: false },
    { id: 2, hover: false, clicked: false },
    { id: 3, hover: false, clicked: false },
    { id: 4, hover: false, clicked: false },
    { id: 5, hover: false, clicked: false },
  ]);
const [starPrev, setStarPrev] = useState(star)




const hoverHandler = (id) => {
    let hoverData = star.map((item) => {
      return item.id <= id
        ? { ...item, hover: true }
        : { ...item, hover: false };
    });
    setStar(hoverData);
  };

  const blurHandler = () => {
    const blurData = star.map((item) => {
      return { ...item, hover: false };
    });
    setStar(blurData);
  };

  const submitRateHandler = (id) => {
let submitData=star.map((item) => {
  return item.id <= id
    ? { ...item, clicked: true }
    : { ...item, clicked: false };
});
setStar(submitData)
let payload= star?.find((item)=>  item?.id===id)
    fetch(`http://127.0.0.1:8000/posts/`,{method:"PATCH",body:payload}).then((response)=>response.json()).then((data)=>{
       if (data.status==="success") {
        setStarPrev(submitData)
        return toast.success(data.message,{position:"top-left"})
      }else if(data.status==="error"){

  stepBackward(starPrev)
return toast.error(data.message,{position:"top-left"})

      }
    })  
   
  };

  const stepBackward = (rate) => {
    setStar(rate)

    // Your code ...
  };

  return (
    <>
      <div className="rate-box">
        <h1>Rate : </h1>
        <div className="rate-container">
          {star.map((item) => (
            <div
              className="rate"
              key={item.id}
              onMouseEnter={() => hoverHandler(item.id)}
              onMouseLeave={blurHandler}
              onClick={() => submitRateHandler(item.id)}
            >
              {item.clicked || item.hover ? (
                <StartIconFull />
              ) : (
                <StartIconEmpty />
              )}
            </div>
          ))}
        </div>
      </div>
      <hr />
      <ToastContainer />
    </>
  );
}

export default Rate;
