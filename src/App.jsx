"use client"
import React ,{useState}from 'react'

function App() {
   var [title,settitle] =useState("");
   var [desc,setdesc] =useState("");
   const [task,setTask] =useState([]);
   const stop_load =(e)=>{
    e.preventDefault();
    setTask([...task,{title,desc}]);
    console.log(task);
    
    settitle("");
    setdesc("");
  
   }
   const deletTask = (i) => {
  
    let copya = [...task] ;
    copya.splice(i,1);
    setTask(copya)
  } 
  const comTask = () => {
  
  } 
   
  let status = <h2>no tasks</h2>;

 if(task.length>0){
  status = task.map((e,i) =>{
    return (<div key={i} className='showt'>
      <h4>{e.title} </h4>
    <h4>{e.desc}</h4>
    <h4><i className="ri-close-circle-line" onClick={()=>{
       deletTask(i)
    }}></i></h4>
    

    </div>)
    
  })

 }
  return (<>
   <div className='nav'>
    <h3>To do List</h3>
    <div className='nav2'>
      <h3>Home</h3>
      <h3>Check List</h3>
      <h3>Archive</h3>
    </div>
   </div>
   <hr></hr>
   <div className='content'>
     <div className='box' >
      <form onSubmit={stop_load}>
      <h2>To do list</h2>
      <input type='text' id="inp_t" placeholder='Enter Task No.' value={title} onChange={(e)=>{
      settitle(e.target.value);
      }}></input>
      <input type='text' id="inp_d" placeholder='Enter Task' value={desc} onChange={(e)=>{
       setdesc(e.target.value)
      }}></input>
      <button>Add Task</button>
      </form>
      <div className='sbox'>
        <h2> Your Tasks</h2>
        <ul>
          {status}
        </ul>
      </div>
     </div>
   </div>
  </>
  
  )
}

export default App



