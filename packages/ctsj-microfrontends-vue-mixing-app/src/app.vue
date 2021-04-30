<template>
  <div class="wrap">
    <div class="fixed">
      <a-menu mode="horizontal">
        <a-menu-item key="self1">
          <router-link :to="`/vue_mixing/self1/${new Date().getTime()}`">self1</router-link>
        </a-menu-item>

        <a-menu-item key="self2">
          <router-link :to="`/vue_mixing/self2/${new Date().getTime()}`">self2</router-link>
        </a-menu-item>

        <a-menu-item key="react_sub_mixing">
          <div @click="push('/vue_mixing/react_sub_mixing')">react_sub_mixing</div>
        </a-menu-item>

        <a-menu-item key="vue_mixing">
          <div @click="push('/vue_mixing/vue_sub_mixing')">vue_sub_mixing</div>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="auto" ref="selfRef">
      <router-view></router-view>
    </div>
    <div id="vue_mixing_children" class="auto" ref="outRef"></div>
  </div>
</template>

<script>
export default {
  props: ['routerProps', 'config', 'refresh'],
  methods: {
    push: function (path) {
      this.routerProps.history.push(path);
    },
  },
};
</script>

<style scoped>
  .wrap {
    display: flex;
    flex-direction: column;
  }

  .wrap > .fixed {
    flex-shrink: 0;
  }

  .wrap > .auto {
    flex-grow: 1;
    min-height: 0;
  }
</style>
