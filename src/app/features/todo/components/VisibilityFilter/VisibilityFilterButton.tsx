import React from 'react';
import { VisibilityFilter } from '../../redux/todoTypes';
import { useDispatch, useSelector } from 'react-redux';
import { visibilitySelector } from '../../redux/todoSelector';
import { visibilityFilterActions } from '../../redux/todoSlice';

interface IVisibilityFilterProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

const VisibilityFilterButton: React.FC<IVisibilityFilterProps> = props => {
  const dispatch = useDispatch();

  const currentVisibilityFilter = useSelector(visibilitySelector);

  return (
    <button
      disabled={currentVisibilityFilter === props.visibilityFilter}
      onClick={() =>
        dispatch(
          visibilityFilterActions.setVisibilityFilter(props.visibilityFilter),
        )
      }
    >
      {props.text}
    </button>
  );
};

export default VisibilityFilterButton;
