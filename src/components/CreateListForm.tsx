import React, { Component } from 'react';

interface Props {}
interface State {}

export default class CreateListForm extends Component<Props, State> {
  state = {};
  handleSubmit = (e: React.FormEvent<EventTarget>) => {};
  changeInnerText = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    this.setState({ ...this.state, title: e.target.value });
  };
  render() {
    return (
      <div>
        <div>list 제목</div>
        <div id="ListContainer">
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
      </div>
    );
  }
}
