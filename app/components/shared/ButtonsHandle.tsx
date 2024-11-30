import React from 'react';
import { Button, Tooltip } from '@nextui-org/react';
import { IconEdit, IconTrash } from '@tabler/icons-react';

interface ButtonsHandleProps<T extends { id: string }> {
  item: T;
  label: string;
  handleEdit: (item: T) => void;
  handleDelete: (itemId: string) => void;
}

const ButtonsHandle = <T extends { id: string }>({
  item,
  label,
  handleEdit,
  handleDelete,
}: ButtonsHandleProps<T>) => {
  return (
    <div className="flex items-center gap-4">
      <Tooltip
        content={`Editar ${label || 'NADA'}`}
        showArrow
        color="secondary"
      >
        <Button
          color="secondary"
          isIconOnly
          startContent={<IconEdit stroke={1.5} />}
          size="sm"
          variant="flat"
          onClick={() => handleEdit(item)}
        />
      </Tooltip>
      <Tooltip content={`Eliminar ${label}`} showArrow color="danger">
        <Button
          color="danger"
          isIconOnly
          startContent={<IconTrash stroke={1.5} />}
          size="sm"
          variant="flat"
          onClick={() => handleDelete(item.id)}
        />
      </Tooltip>
    </div>
  );
};

export default ButtonsHandle;
