export type IFilters = {
  searchValue: string;
};

export type IProductQueryParams = Omit<IFilters, 'list'>;
