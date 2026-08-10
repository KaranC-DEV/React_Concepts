  import React, { Component, createRef } from 'react';

  export default class UncontrolledForm extends Component {
    constructor(){
    super()
    this.state=null
    this.userRef = createRef()
    this.emailRef= createRef()
    this.maleRef = createRef()
    this.femaleRef = createRef()
    this.othersRef = createRef()
    this.readingRef = createRef()
    this.playingRef = createRef()
    this.singingRef = createRef()
    
    }
    
    handleSubmit = (e)=>{
      e.preventDefault()
      console.log("username:",this.userRef.current.value)
      console.log("email:",this.emailRef.current.value)
      let gender=""
      if(this.maleRef.current.checked){
        gender="Male"
      }else if(this.femaleRef.current.checked){
        gender="Female"
      }else if(this.othersRef.current.checked){
        gender="Others"
      }
      console.log("gender:",gender)
      let hobbies=[]
      if(this.readingRef.current.checked ){
        hobbies.push(this.readingRef.current.value)
      }
      if(this.playingRef.current.checked){
        hobbies.push(this.playingRef.current.value)
      }
      if(this.singingRef.current.checked){
        hobbies.push(this.singingRef.current.value)
      }
      console.log("hobbies:",hobbies.join(""))
      this.setState({
        username:this.userRef.current.value,
        email:this.emailRef.current.value,
        gender1:gender,
        hobbies1:hobbies
      })
    }

    render(){
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter your username:-</label>  
        <input type="text" name="Username" id="username" ref={this.userRef} /><br></br>
        <label htmlFor="email">Enter your email:-</label>
        <input type="email" name="Email" id="email" ref={this.emailRef} /><br></br>
          <label>Select your gender:-</label><br />
          <input type="radio" name="gender" id="male" ref={this.maleRef} value="Male"/>Male<br></br>
          <input type="radio" name="gender" id="female" ref={this.femaleRef} value="Female"/>Female<br></br>
          <input type="radio" name="gender" id="others" ref={this.othersRef} value="Others"/>Others<br></br>
          <label>Select your hobbies:-</label>
          <input type="checkbox" name="hobbies" id="reading" ref={this.readingRef} value="Reading"/>Reading<br></br>
          <input type="checkbox" name="hobbies" id="playing" ref={this.playingRef} value="Playing"/>Playing<br></br>
          <input type="checkbox" name="hobbies" id="singing" ref={this.singingRef} value="Singing"/>Singing<br></br>
          <button>Submit</button>
      </form>

      {this.state && <div><h1>username:{this.state.username}</h1><h2>email:{this.state.email}</h2> <h2>gender:{this.state.gender}</h2></div>}
    </> 
    )

  }
  }

