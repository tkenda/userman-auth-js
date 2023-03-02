export const StringToItems = (src) => {
    return JSON.parse(src || '[]');
};
export const ItemsToString = (src) => {
    return JSON.stringify(src);
};
export const Value = (items, path) => {
    if (items !== null) {
        let cursor = items;
        let values;
        const chunks = path.split('/').filter((value) => value !== '');
        for (let i = 0; i < chunks.length - 1; i++) {
            const selected = cursor.find((el) => el.name === chunks[i]);
            if (selected) {
                cursor = selected.items;
                values = selected.values;
            }
            else {
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
                    }
                    else {
                        console.error('Invalid permissions value type: ' + path + '.');
                        return null;
                    }
                case 'float':
                    if (typeof selected.float === 'number') {
                        return selected.float;
                    }
                    else {
                        console.error('Invalid permissions value type: ' + path + '.');
                        return null;
                    }
                case 'number':
                    if (typeof selected.number === 'number') {
                        return selected.number;
                    }
                    else {
                        console.error('Invalid permissions value type: ' + path + '.');
                        return null;
                    }
                case 'boolean':
                    if (typeof selected.boolean === 'boolean') {
                        return selected.boolean;
                    }
                    else {
                        console.error('Invalid permissions value type: ' + path + '.');
                        return null;
                    }
                default:
                    return null;
            }
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }
};
export const String = (items, path) => {
    const value = Value(items, path);
    if (typeof value === 'string') {
        return value;
    }
    else {
        return null;
    }
};
export const Float = (items, path) => {
    const value = Value(items, path);
    if (typeof value === 'number') {
        return value;
    }
    else {
        return null;
    }
};
export const Number = (items, path) => {
    const value = Value(items, path);
    if (typeof value === 'number') {
        return value;
    }
    else {
        return null;
    }
};
export const Boolean = (items, path) => {
    const value = Value(items, path);
    if (typeof value === 'boolean') {
        return value;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQWtCLEVBQWdCLEVBQUU7SUFDaEUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQWlCLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBaUIsRUFBVSxFQUFFO0lBQ3pELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FDbkIsS0FBbUIsRUFDbkIsSUFBWSxFQUNzQixFQUFFO0lBQ3BDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtRQUNsQixJQUFJLE1BQU0sR0FBRyxLQUFlLENBQUM7UUFDN0IsSUFBSSxNQUFNLENBQUM7UUFFWCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELElBQUksUUFBUSxFQUFFO2dCQUNaLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUN4QixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0s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