import React, { ReactElement } from 'react';
import './BoardListItem.css';
import { Link } from 'react-router-dom';
interface Props {
  title: string;
  deleteItem: any;
}

export default function BoardListItem({
  title,
  deleteItem
}: Props): ReactElement {
  return (
    <Link to={`/board/${title}`}>
      <div className="BoardListItemDiv">
        <button name={title} onClick={deleteItem}>
          삭제
        </button>
        {title}
      </div>
    </Link>
  );
}
