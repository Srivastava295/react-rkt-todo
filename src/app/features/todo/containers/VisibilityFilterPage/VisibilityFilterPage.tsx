import React from 'react';
import VisibilityFilterButton from '../../components/VisibilityFilter/VisibilityFilterButton';
import { VisibilityFilter } from '../../redux/todoTypes';

const VisibilityFilterPage: React.FC = () => {
  return (
    <div>
      <span>Show:</span>
      <VisibilityFilterButton
        visibilityFilter={VisibilityFilter.SHOW_ALL_TODO}
        text={'All'}
      />
      <VisibilityFilterButton
        visibilityFilter={VisibilityFilter.SHOW_ACTIVE}
        text={'Active'}
      />
      <VisibilityFilterButton
        visibilityFilter={VisibilityFilter.SHOW_COMPLETED}
        text={'Completed'}
      />
    </div>
  );
};

export default VisibilityFilterPage;
