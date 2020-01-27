import React, { Component } from 'react';
import './createBoardStyle.css';
interface props {}

interface MyState {
  clicked: boolean;
}
export default class CreateBoardForm extends Component<props, MyState> {
  // submitForm: React.RefObject<HTMLInputElement> | null;

  constructor(props: any) {
    super(props);

    this.state = { clicked: false };
  }
  activateCreateProject = () => {
    this.setState({ clicked: true });
  };
  handleSubmit = () => {
    //주소이동
    //상단에 보드 이름 div?row 추가
    //createListForm이 생겨야함.
  };
  render() {
    let { clicked } = this.state;
    return (
      <div className="createBoard">
        {clicked === true ? (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input autoFocus type="text" placeholder="board name" />
              <input type="submit" value="생성" />
            </form>
          </div>
        ) : (
          <div>
            <button onClick={this.activateCreateProject}>
              create new board
            </button>
          </div>
        )}
      </div>
    );
  }
}
