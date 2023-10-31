/* eslint-disable react/prop-types */
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import UilStar from '@iconscout/react-unicons/icons/uil-star';
import UilTrashAlt from '@iconscout/react-unicons/icons/uil-trash-alt';
import UilExpandArrows from '@iconscout/react-unicons/icons/uil-expand-arrows';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './style';
import { Cards } from '../cards/frame/cards-frame';
import { Dropdown } from '../dropdown/dropdown';

function NoteCard({ data, listeners }) {
  const { title, description, stared, label } = data;

  return (
    <Card className={label}>
      <Cards headless>
        <h4>
          <span>
            {title}
            <span className={`status-bullet ${label}`} />
          </span>
          <div {...listeners}>
            <UilExpandArrows />
          </div>
        </h4>
        <p>{description}</p>
        <div className="actions">
          <span>
            <Link className={stared ? 'star active' : 'star'} to="#">
              <UilStar />
            </Link>
            <Link to="#">
              <UilTrashAlt />
            </Link>
          </span>
          <Dropdown>
            <Link to="#">
              <UilEllipsisV />
            </Link>
          </Dropdown>
        </div>
      </Cards>
    </Card>
  );
}

NoteCard.propTypes = {
  data: PropTypes.object,
};
export default NoteCard;
