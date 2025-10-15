
export type CategoryType = {
    id: number;
    title: string;
    subcategories: { id: number; title: string }[];
};

const categories: CategoryType[] = [
    {
        id: 1,
        title: "Seating",
        subcategories: [
            { id: 101, title: "Chairs" },
            { id: 102, title: "Loungers" },
            { id: 103, title: "Benches" },
            { id: 104, title: "Stools" },
        ],
    },
    {
        id: 2,
        title: "Tables",
        subcategories: [
            { id: 201, title: "Dining Tables" },
            { id: 202, title: "Coffee Tables" },
            { id: 203, title: "Study Tables" },
            { id: 204, title: "Side Tables" },
        ],
    },
    {
        id: 3,
        title: "Storage",
        subcategories: [
            { id: 301, title: "Consoles" },
            { id: 302, title: "Shelving Units" },
        ],
    },
];

export default categories;
