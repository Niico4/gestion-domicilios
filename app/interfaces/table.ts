export interface Column<T> {
  id: string;
  label: string;
  cell?: (
    data: T,
    handleEdit: (item: T) => void,
    handleDelete: (id: string) => void,
  ) => JSX.Element;
}

export type TableDataProps<T> = {
  data: T[];
  columns: Column<T>[];
  headerComponent: () => JSX.Element;
  handleEdit: (item: T) => void;
  handleDelete: (id: string) => void;
};
