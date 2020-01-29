import React, { Component } from 'react';
import CreateBoardForm from './CreateBoardForm';
import BoardListItem from './BoardListItem';
import './BoardContainer.css';

export default class BoardContainer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    let boardArrayJSON = localStorage.getItem('board');
    let parsedBoardArray: Array<Object> = boardArrayJSON
      ? JSON.parse(boardArrayJSON)
      : [];
    this.state = { boardArray: parsedBoardArray };
  }
  deleteItem = (e: React.MouseEvent<HTMLElement>) => {
    let boardArrayJSON = localStorage.getItem('board');
    let parsedBoardArray: Array<Object> = boardArrayJSON
      ? JSON.parse(boardArrayJSON)
      : [];
    const clickedItemTitle = e.currentTarget.getAttribute('name');
    if (clickedItemTitle) {
      console.log('삭제전', parsedBoardArray);
      parsedBoardArray.splice(parsedBoardArray.indexOf(clickedItemTitle), 1);
      console.log('삭제후', parsedBoardArray);
      //stoarge update & localStorage 기반 state update
      localStorage.setItem('board', JSON.stringify(parsedBoardArray));
      let boardArrayJSON = localStorage.getItem('board');
      parsedBoardArray = boardArrayJSON ? JSON.parse(boardArrayJSON) : [];
      this.setState({ boardArray: parsedBoardArray });
    }
    e.preventDefault();
  };
  render() {
    let { boardArray } = this.state;
    return (
      <div id="boardContainerDiv">
        {boardArray.map((title: string) => (
          <BoardListItem
            deleteItem={this.deleteItem}
            title={title}
            key={title}
          />
        ))}
        <CreateBoardForm />
      </div>
    );
  }
}
