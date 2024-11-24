import { useState, useMemo } from 'react';

function usePagination<T>(data: T[], rowsPerPage: number = 15) {
  const [page, setPage] = useState(1);

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [data, page, rowsPerPage]);

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= pages) {
      setPage(newPage);
    }
  };

  return {
    page,
    pages,
    items,
    goToPage,
  };
}

export default usePagination;
