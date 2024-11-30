import {
  FieldValues,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
  UseFormWatch,
  UseFormSetValue,
} from 'react-hook-form';

export interface FormNewItemFormProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  handleSubmit: UseFormHandleSubmit<T, undefined>;
  errors: FieldErrors<T>;
  watch: UseFormWatch<T>;
  setValue: UseFormSetValue<T>;
  onClose: () => void;
  onSubmit: (newItem: T) => void;
}
