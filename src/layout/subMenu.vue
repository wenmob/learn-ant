<template functional>
  <a-sub-menu :key="props.menuInfo.key">
    <span slot="title">
      <a-icon :type="props.menuInfo.icon" v-if="props.menuInfo.icon" /><span>{{
        props.menuInfo.name
      }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item :key="item.key" v-if="!item.children && !item.hidden">
        <a-icon :type="item.icon" v-if="item.icon" />
        <span>{{ item.name }}</span>
      </a-menu-item>
      <sub-menu
        v-if="item.children && !item.hidden"
        :key="item.name"
        :menu-info="item"
      ></sub-menu>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "sub-menu",
  props: {
    menuInfo: {
      type: Object,
      default: () => {
        return {
          icon: "",
          name: "",
          children: [],
        };
      },
    },
  },
};
</script>
