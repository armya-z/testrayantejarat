import Comment from "../components/Comment";
import { dataComments } from "../data/data";
function Comments({ setName, refElement ,setIsReply}) {


  function scrollToTop(){
    document.getElementsByClassName("ac-wrapper")[0].scrollIntoView()
  }
  
  
  return (
    <div className="wrapper" >
      {dataComments.map(({ id, name, message, children }) => (
        <Comment
          key={id}
          id={id}
          name={name}
          message={message}
          children={children}
          setName={setName}
          handleClick={(ev)=>{ setName(ev.target.name) 
            setIsReply(true)
            scrollToTop({ behavior: 'smooth',})
                    }}
          />
      ))}
    </div>
  );
}

export default Comments;
