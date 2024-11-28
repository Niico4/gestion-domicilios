export interface User {
  id: string;
  rol?: Rol;
  firstName: string;
  lastName: string;
  numberContact?: string;
  email: string;
  password?: string;
}

export enum Rol {
  ADMIN = 'Administrador',
  DEALER = 'Repartidor',
  ORDER_MANAGER = 'Gestor de Domicilios',
  CUSTOMER = 'Cliente',
}
