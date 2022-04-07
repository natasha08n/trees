export const tree = {
  id: 1,
  name: "Lorem",
  children: [
    {
      id: 2,
      name: "Ipsum",
      parentId: 1,
    },
    {
      id: 3,
      name: "Dolor",
      children: [
        {
          id: 4,
          name: "Orci",
          children: [
            {
              id: 5,
              name: "Quis",
              children: [
                {
                  id: 6,
                  name: "Odio",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sit",
      children: [
        {
          name: "Amet",
        },
        { name: "Consectetur" },
      ],
    },
    {
      name: "Adipiscing",
      children: [
        {
          name: "Elit",
          children: [
            {
              name: "Vestibulum",
            },
            { name: "Vitae" },
          ],
        },
      ],
    },
  ],
};

export const flatTree = [
  { id: 1, text: "Lorem", parentId: 0 },
  { id: 2, text: "Ipsum", parentId: 1 },
  { id: 3, text: "Dolor", parentId: 1 },
  { id: 4, text: "Orci", parentId: 3 },
  { id: 5, text: "Quis", parentId: 4 },
  { id: 6, text: "Odio", parentId: 5 },
  { id: 7, text: "Sit", parentId: 1 },
  { id: 8, text: "Amet", parentId: 7 },
  { id: 9, text: "Consectetur", parentId: 7 },
  { id: 10, text: "Adipiscing", parentId: 1 },
  { id: 11, text: "Elit", parentId: 10 },
  { id: 12, text: "Vestibulum", parentId: 11 },
  { id: 13, text: "Vitae", parentId: 12 },
];
