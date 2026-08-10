// UncontrolledForm using text area tag instead of input tag

import React,{Component, createRef} from "react"

export default class UnControlTA extends Component{
  constructor(){
    super()
    this.state=null;
    this.userRef =createRef()
    this.emailRef= createRef()
    this.maleRef= createRef()
    this.femaleRef= createRef()
    this.othersRef= createRef()
    this.readingRef= createRef()
    this.playingRef= createRef()
    this.singingRef= createRef()

  }

  handleSubmit =(e)=>{
      e.preventDefault()
      console.log("username:",this.userRef.current.value)
      
      let gender = ""
      if(this.maleRef.current.value)
        gender= "Male"
      if(this.femaleRef.current.value)
        gender="Female"
      if(this.othersRef.current.value)
        gender="others"

      let hobbies=[]
      if(this.readingRef.current.value)
        hobbies.push(this.playingRef.current.value)
      if(this.readingRef.current.value)
        hobbies.push(this.readingRef.current.value)
      if(this.singingRef.current.value)
        hobbies.push(this.singingRef.current.value)
      this.setState({
        username:this.userRef.current.value,
        email:this.emailRef.current.value,
        gender1:this.gender,
        hobbies1:this.hobbies
      })
  }

  render(){
    return(
      <>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">Enter your username:-</label>
      <textarea name="Username" id="username" ref={this.userRef} rows={1}></textarea>
      <br />  <br />
      <label htmlFor="email">Enter Your EmailID:-</label>
      <textarea name="Email" id="email"ref={this.emailRef} rows={1}></textarea>
      <br /> <br />
      <label>Select your gender:-</label><br />
      <input type="radio" name="gender" id="male" ref={this.maleRef} value="Male"/>Male<br></br>
      <input type="radio" name="gender" id="female" ref={this.femaleRef} value="Female"/>Female<br></br>
      <input type="radio" name="gender" id="others" ref={this.othersRef}value="Others"/>Others<br></br>
      <label>Select your hobbies:-</label>
      <input type="checkbox" name="hobbies" id="reading" ref={this.readingRef}value="Reading"/>Reading<br></br>
      <input type="checkbox" name="hobbies" id="playing" ref={this.playingRef}value="Playing"/>Playing<br></br>
      <input type="checkbox" name="hobbies" id="singing" ref={this.singingRef}value="Singing"/>Singing<br></br>
      <button>Submit</button>
      </form>

      {
        this.state && <div><h1>username:-{this.state.username}</h1>
        <h2>Email:-{this.state.email}</h2>
        </div>
      }
      </>
    )
  }

}
