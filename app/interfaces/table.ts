export interface Column<T> {
  id: string;
  label: string;
  cell?: (
    data: T,
    handleEdit: (orderId: string) => void,
    handleDelete: (orderId: string) => void,
  ) => JSX.Element;
}

export type TableDataProps<T> = {
  data: T[];
  columns: Column<T>[];
  headerComponent: () => JSX.Element;
};
