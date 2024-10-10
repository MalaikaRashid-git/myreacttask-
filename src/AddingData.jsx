// import { useState } from "react";
// function AddingData() {
//     const [input, setInput] = useState("")
//     const [list, setList] = useState([])

//     const inputHandler = (e) => {
//         setInput(e.target.value)
//     }

//     const clickHandler = () => {
//         const obj = {
//             name: input

//         }
  
//         setList([obj, ...list]);

//         console.log(list);
//     }
//     return (
//         <div>

//             <input  type='text' value={input} name=''
//             className='border border-black bg-slate-200'  onChange={inputHandler} />
         

   
//             <button
//                 onClick={clickHandler}
//                 className='border border-black bg-slate-300 ml-7 w-24 rounded-lg'>Add</button>
//             <ul>
//                 <div className='flex flex-wrap'>

//                 {
//                       list.map((item)=><li key = {item}>{item.name}</li>)
//                     }
//                 </div>
//             </ul>
//         </div>
//     )
// }
  
//   export default AddingData;
  