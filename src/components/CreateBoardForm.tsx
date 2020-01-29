import React, { Component } from 'react';
import './createBoardStyle.css';
interface props {}

interface MyState {
  clicked: boolean;
  title: string;
}
export default class CreateBoardForm extends Component<props, MyState> {
  // submitForm: React.RefObject<HTMLInputElement> | null;

  constructor(props: any) {
    super(props);
    this.state = { clicked: false, title: '' };
  }
  activateCreateProject = () => {
    this.setState({ clicked: true });
  };
  changeInnerText = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({ ...this.state, title: e.target.value });
  };
  handleSubmit = (e: React.FormEvent<EventTarget>) => {
    // e.preventDefault(); //근데 이러면 text창 비우는거 따로해줘야함. ref이용
    // 기존 board 배열에 push

    const boardJSON = localStorage.getItem('board');
    let board;
    if (boardJSON) {
      board = JSON.parse(boardJSON);
    } else {
      board = [];
    }
    board.push(this.state.title);
    localStorage.setItem('board', JSON.stringify(board));
  };
  render() {
    let { clicked } = this.state;
    return (
      <div className="createBoard">
        {clicked === true ? (
          <div>
            <form
              onSubmit={e => {
                this.handleSubmit(e);
              }}
            >
              <input
                autoFocus
                type="text"
                placeholder="board name"
                onChange={this.changeInnerText}
              />
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
