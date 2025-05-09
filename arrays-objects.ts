let hobbies = ['Sports', 'Cooking'];
// hobbies.push(10);

// let users: string[];
// let users: (string | number)[];
let users: Array<string | number>;
users = ['XYZ', 1];
users = [2, 1];
users = ['A', 'B'];


// let possibleResults: [number, string];
let possibleResults: [number, number]; // [1, -1]
possibleResults = [1, -1];
// possibleResults = [1, -1, 2];

let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    };
} = {
    name: 'Odoo',
    age: 20,
    hobbies: ['A', 'B'],
    role: {
        description: 'Some text will go here',
        id: 1234,
    },
};

// Tricky: The "Must Not Be Null" Type
let val: {} = 'some text';

let data: Record<string, number|string>;

data = {
    entry1: 1,
    entry2: 'ABC',
};
