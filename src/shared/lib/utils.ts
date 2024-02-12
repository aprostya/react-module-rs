import { IProductQueryParams } from './types';

export const getWordInRegularCase = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const getSelectedFiltersQueryString = (
  selectedFilters: IProductQueryParams['selectedFilters']
) => {
  const filtersQueryParams: Array<string> = [];
  selectedFilters.map((filter) => {
    const { groupCategory, filters } = filter;
    filters.map((filterValue) =>
      filtersQueryParams.push(`${groupCategory}=${filterValue}`)
    );
  });
  return filtersQueryParams.join('&');
};
