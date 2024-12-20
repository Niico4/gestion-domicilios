import { v4 as uuid } from 'uuid';

export const generateOrderID = (prefix: string = 'O-') => {
  const numberPart = parseInt(uuid().replace(/-/g, '').slice(0, 3), 16);

  return `${prefix}${numberPart}`;
};

export const generateClientID = (prefix: string = 'C-') => {
  const numberPart = parseInt(uuid().replace(/-/g, '').slice(0, 3), 16);

  return `${prefix}${numberPart}`;
};

export const generateProductID = (prefix: string = 'P-') => {
  const numberPart = parseInt(uuid().replace(/-/g, '').slice(0, 3), 16);

  return `${prefix}${numberPart}`;
};

export const generateDealerID = (prefix: string = 'R-') => {
  const numberPart = parseInt(uuid().replace(/-/g, '').slice(0, 3), 16);

  return `${prefix}${numberPart}`;
};

export const generateDomicilieID = (prefix: string = 'D-') => {
  const numberPart = parseInt(uuid().replace(/-/g, '').slice(0, 3), 16);

  return `${prefix}${numberPart}`;
};
