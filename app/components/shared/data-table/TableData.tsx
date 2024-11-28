'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Pagination,
  Input,
} from '@nextui-org/react';
import React from 'react';
import { IconSearch } from '@tabler/icons-react';

import { TableDataProps } from '@/app/interfaces/table';
import usePagination from '@/app/hooks/usePagination';

const TableData = <T extends { id: string }>({
  data,
  columns,
  headerComponent: HeaderComponent,
  handleDelete,
  handleEdit,
}: TableDataProps<T>) => {
  const { page, items, goToPage, pages } = usePagination(data);

  return (
    <Card>
      <CardHeader className="justify-between">
        <Input
          type="text"
          placeholder="Buscar..."
          startContent={<IconSearch stroke={1.5} className="text-slate-500" />}
          className="w-[30%]"
        />
        <HeaderComponent />
      </CardHeader>
      <CardBody>
        <Table aria-label="table with orders content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.id}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody
            emptyContent={'No se encontraron resultados'}
            items={items}
          >
            {(item) => (
              <TableRow key={item.id}>
                {columns.map((column) => (
                  <TableCell key={column.id}>
                    {column.cell
                      ? column.cell(item, handleEdit, handleDelete)
                      : getKeyValue(item, column.id)}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <span className="text-default-400 text-md ms-5">
          {`${page} de ${pages}`}
        </span>
      </CardBody>
      <CardFooter className="justify-around">
        <Pagination
          showControls
          loop
          color="primary"
          page={page}
          total={pages}
          onChange={(page) => goToPage(page)}
          classNames={{
            cursor: 'bg-primary-gradient',
          }}
        />
      </CardFooter>
    </Card>
  );
};

export default TableData;
