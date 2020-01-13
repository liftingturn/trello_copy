import React, { Component } from 'react'
interface props {

}

interface MyState {
  clicked: boolean
}
export default class CreateBoardForm extends Component<props,MyState> {
  constructor(props:any){
    super(props);
    this.state = {clicked : false};
  }
  activateCreateProject=()=>{
    this.setState({clicked:true})
  }
  render() {
    let {clicked} = this.state;
    return (
      <div>
        {clicked===true? <div>
        <input type="text" placeholder='프로젝트 이름'/>
        <input type="submit" value="생성" /></div>:
        <div>
          <button onClick={this.activateCreateProject}>프로젝트 생성</button>
        </div>}
      
      </div>
    )
  }
}

