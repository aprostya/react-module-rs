import { useSelector } from 'react-redux';
import './Filter.scss';
import { getWordInRegularCase } from '../../../shared/lib/utils';
import { nanoid } from 'nanoid';
import { RootState, useAppDispatch } from '../../../app/appStore';
import { changeSelectedFilter } from '../model/slice';
import classNames from 'classnames';
import { FilterType } from '../../../shared/lib/enums';

interface IFilterItem {
  name: FilterType;
  filters: string[] | null;
}

export const Filter: React.FC<IFilterItem> = (props) => {
  const { name, filters } = props;
  const dispatch = useAppDispatch();
  const { selectedFilters } = useSelector((state: RootState) => state.filters);
  const getBtnClassname = (name: FilterType, filter: string) => {
    const btnClass = 'pure-button pure-button-secondary filter-button';
    const isActive = selectedFilters.some(
      (item) => item.groupCategory === name && item.filters.includes(filter)
    );
    return classNames(btnClass, {
      [`filter-button--${filter}`]: isActive && name === FilterType.COLOR,
      ['filter-button--active']: isActive,
      [btnClass]: isActive,
    });
  };

  return (
    <section className="filter-container">
      <h2 className="filter-container__title">{getWordInRegularCase(name)}</h2>
      <ul className="filters-list">
        {filters?.map((filter) => (
          <li className="filters-list__item" key={nanoid()}>
            <button
              className={getBtnClassname(name, filter)}
              onClick={() => dispatch(changeSelectedFilter({ name, filter }))}
            >
              {getWordInRegularCase(filter)}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
