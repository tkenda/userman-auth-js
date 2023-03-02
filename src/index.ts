export interface DataOptions {
  minValue: any;
  maxValue: any;
}

export interface Value {
  name: string;
  string?: string;
  float?: number;
  number?: number;
  boolean?: boolean;
  options?: DataOptions;
}

export type Items = Item[];

export interface Item {
  name: string;
  values?: Value[];
  items?: Items;
}

export const StringToItems = (src: string | null): Items | null => {
  return JSON.parse(src || '[]') as Items | null;
};

export const ItemsToString = (src: Items | null): string => {
  return JSON.stringify(src);
};

export const Value = (
  items: Items | null,
  path: string
): string | number | boolean | null => {
  if (items !== null) {
    let cursor = items as Item[];
    let values;

    const chunks = path.split('/').filter((value) => value !== '');
  
    for (let i = 0; i < chunks.length - 1; i++) {
      const selected = cursor.find((el) => el.name === chunks[i]);
      if (selected) {
        cursor = selected.items;
        values = selected.values;
      } else {
        console.error('Invalid permissions path: ' + path + '.');
        return null;
      }
    }

    const chunk = chunks[chunks.length - 1].split('.');

    const valueName = chunk[0];
    const valueType = chunk[1];

    if (values) {
      const selected = values.find((el) => el.name === valueName);

      if (!selected) {
        console.error('Invalid permissions value: ' + path + '.');
        return null;
      }

      switch (valueType) {
        case 'string':
          if (typeof selected.string === 'string') {
            return selected.string;
          } else {
            console.error('Invalid permissions value type: ' + path + '.');
            return null;
          }
        case 'float':
          if (typeof selected.float === 'number') {
            return selected.float;
          } else {
            console.error('Invalid permissions value type: ' + path + '.');
            return null;
          }
        case 'number':
          if (typeof selected.number === 'number') {
            return selected.number;
          } else {
            console.error('Invalid permissions value type: ' + path + '.');
            return null;
          }
        case 'boolean':
          if (typeof selected.boolean === 'boolean') {
            return selected.boolean;
          } else {
            console.error('Invalid permissions value type: ' + path + '.');
            return null;
          }
        default:
          return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export const String = (items: Items | null, path: string): string | null => {
  const value = Value(items, path);

  if (typeof value === 'string') {
    return value;
  } else {
    return null;
  }
};

export const Float = (items: Items | null, path: string): number | null => {
  const value = Value(items, path);

  if (typeof value === 'number') {
    return value;
  } else {
    return null;
  }
};

export const Number = (items: Items | null, path: string): number | null => {
  const value = Value(items, path);

  if (typeof value === 'number') {
    return value;
  } else {
    return null;
  }
};

export const Boolean = (items: Items | null, path: string): boolean => {
  const value = Value(items, path);

  if (typeof value === 'boolean') {
    return value;
  } else {
    return false;
  }
};
