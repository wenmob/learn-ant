export default {
  path: "/components",
  name: "components",
  redirect: "/components/codeShowPage",
  component: () => import("@/views/components"),
  icon: "deployment-unit",
  children: [
    {
      path: "/components/codeShowPage",
      name: "codeShowPage",
      component: () => import("@/views/components/codeShowPage"),
    },
  ],
};
