import { useState } from "react"

function App()
{
  const[x,un1]=useState("")
  const[y,pw1]=useState("")
  const[i,input_un]=useState("")
  const[j,input_pw]=useState("")
  function input_usser_name(a)
  {
      input_un(a.target.value)
  }
  function input_pass_word(b)
  {
      input_pw(b.target.value)
  }
  function check()
  {
    if(i=="" && j=="")
    {
      un1("Please enter the UserName")
      pw1("Please enter the PassWord")
    }
    else if(i!="" && j=="")
    {
      pw1("Please enter the PassWord")
      un1("")
    }
    else if(i=="" && j!="")
    {
      un1("Please enter the UserName")
      pw1("")
    }
    else if(i!="" && j!="")
    {
      un1("")
      pw1("")
      alert("Login Successfull!!")
    }
    
  }
  return(
    <div id="context">
      <div>
        <input type="text" placeholder="UserName" id="un" onChange={input_usser_name}></input><br></br>
        <p id="in_p">{x}</p><br/>
        <input type="password" placeholder="Password" id="pw" onChange={input_pass_word}></input><br/>
        <p id="in_p">{y}</p><br/>
        <button onClick={check}>Submit</button>
      </div>
    </div>
  )
}
export default App