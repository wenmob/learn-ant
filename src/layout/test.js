export const list = [
  {
    key: "1",
    icon: "pie-chart",
    name: "Option 1",
    path: "/s1",
    hidden: true,
  },
  {
    key: "2",
    icon: "desktop",
    name: "Option 2",
    path: "/s2",
    authority: "",
  },
  {
    key: "3",
    icon: "inbox",
    name: "Option 3",
    path: "/s3",
  },
  {
    key: "sub1",
    icon: "mail",
    name: "ONavigation One",
    children: [
      {
        key: "4",
        name: "Option 5",
        path: "/s4",
      },
      {
        key: "5",
        name: "Option 6",
        path: "/s5",
      },
      {
        key: "6",
        name: "Option 7",
        path: "/s6",
      },
      {
        key: "7",
        name: "Option 8",
        path: "/s7",
      },
    ],
  },
  {
    key: "sub2",
    icon: "desktop",
    name: "Navigation Two",
    children: [
      {
        key: "8",
        name: "Option 9",
        path: "/s8",
      },
      {
        key: "9",
        name: "Option 10",
        path: "/s9",
      },
      {
        key: "sub3",
        name: "Submenu",
        children: [
          {
            key: "10",
            name: "Option 11",
            path: "/s10",
          },
          {
            key: "11",
            name: "Option 12",
            path: "/s11",
          },
        ],
      },
    ],
  },
];
