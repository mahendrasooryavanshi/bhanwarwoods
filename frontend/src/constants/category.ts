// categories.ts
export type CategoryType = {
    id: number;
    name: string;
    subcategories: { id: number; name: string }[];
};

const categories: CategoryType[] = [
    {
        id: 1,
        name: "Seating",
        subcategories: [
            { id: 101, name: "Chairs" },
            { id: 102, name: "Loungers" },
            { id: 103, name: "Benches" },
            { id: 104, name: "Stools" },
        ],
    },
    {
        id: 2,
        name: "Tables",
        subcategories: [
            { id: 201, name: "Dining Tables" },
            { id: 202, name: "Coffee Tables" },
            { id: 203, name: "Study Tables" },
            { id: 204, name: "Side Tables" },
        ],
    },
    {
        id: 3,
        name: "Storage",
        subcategories: [
            { id: 301, name: "Consoles" },
            { id: 302, name: "Shelving Units" },
        ],
    },
];

export default categories;
