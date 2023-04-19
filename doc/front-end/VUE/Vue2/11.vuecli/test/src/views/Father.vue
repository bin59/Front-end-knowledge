<template>
  <div>
    <h2>这是Father页面</h2>
    <route-link to="/father/son">显示son1组件</route-link>
    <route-link to="/father/otherson">显示son2组件</route-link>
    <div v-for="item in list" :key="item.id" @click="gotoDetail(item)">
      {{ item.name }}--{{ item.id }}
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "小黑",
        },
        {
          id: 2,
          name: "小红",
        },
        {
          id: 3,
          name: "小黄",
        },
      ],
    };
  },
  methods: {
    gotoDetail(item) {
      this.$router.push(`/father/herodetail/${item.id}`);
    },
  },
};
</script>

<style></style>
