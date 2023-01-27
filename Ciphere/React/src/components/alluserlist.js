import React,{useState} from "react";
import Userdetails from "./userdetails";
import Test from "../test";
// class Alluserlist extends React.Component{
//     state={
//         name:"Lav Kush"
//     };
//     alluser = [
//       { name: "Lav Kumar", email: "abc@email.com", phone: 1201214589 },
//       { name: "prashant Kumar", email: "hyijjkf@email.com", phone: 5252665230 },
//       { name: "Lav Kumar", email: "fghj@email.com", phone: 7896541230 },
//     ];
//     render(){
//         setTimeout(()=>{
//             this.setState({name:"Sonu Kumar"});
//         },5000);
//     return (
//     <div>
//         <h1> The name is {this.state.name}</h1>
//         {
//             this.alluser.map((user,index)=>(
//             <Userdetails key={index} user={user} />
//         ))}
//     </div>
//     );
// }
// }

// const Alluserlist=()=>{
//    const [state,setState]= useState("ramesh"); // xyz array contains state, and setter function
//    return(
//     <h1>Name is : {state}</h1>
//    )
// }

const Alluserlist=()=>{
    const [state, setState] = useState({
      name: "ramesh"
    });
    let alluser = [
      { name: "Lav Kumar", email: "abc@email.com", phone: 1201214589 },
      { name: "prashant Kumar", email: "hyijjkf@email.com", phone: 5252665230 },
      { name: "Lav Kumar", email: "fghj@email.com", phone: 7896541230 },
    ];
    let setStatename=(name)=>{
        setState({...state,name})
    }
    return (
    <div>
        <Test name={state.name} setName={setStatename} />
        {
            alluser.map((user,index)=>(
            <Userdetails key={index} user={user} />
        ))}
    </div>
    );
}
export default Alluserlist