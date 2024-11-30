export interface Column<T> {
  id: string;
  label: string;
  cell?: (
    data: T,
    handleUpdate: (item: T) => void,
    handleDelete: (id: string) => void,
  ) => JSX.Element;
}

export type TableDataProps<T> = {
  data: T[];
  isLoading: boolean;
  columns: Column<T>[];
  headerComponent: () => JSX.Element;
  handleUpdate: (item: T) => void;
  handleDelete: (id: string) => void;
};
