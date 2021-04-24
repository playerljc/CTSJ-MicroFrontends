<template>
  <div class="Wrap">
    <div class="Fixed">
      <div class="Menu">
        <a-menu
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
        >
          <a-menu-item key="1" v-on:click="push('/vue_system/vue_menu')">
            <span>菜单管理</span>
          </a-menu-item>
          <a-menu-item key="2" v-on:click="push('/vue_system/vue_role')">
            <span>角色管理</span>
          </a-menu-item>
          <a-menu-item key="3" v-on:click="push('/vue_system/vue_department')">
            <span>部门管理</span>
          </a-menu-item>
          <a-sub-menu key="4">
            <span slot="title">
              <span>统计</span>
            </span>
            <a-menu-item key="11" v-on:click="push('/vue_system/vue_statistics/total')">汇总统计</a-menu-item>
            <a-menu-item key="22" v-on:click="push('/vue_system/vue_statistics/person')">人员统计</a-menu-item>
            <a-menu-item key="33" v-on:click="push('/vue_system/vue_statistics/department')">部门统计</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>
    <div class="Auto" ref="children"></div>
  </div>
</template>

<script>
export default {
  props: ['routerProps','config','refresh'],
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    push(path) {
      this.routerProps.history.push(path);
    }
  },
};
</script>

<style lang="less" scoped>
.Wrap {
  display: flex;
  width: 100%;
  height: 100%;

  > .Fixed {
    flex-shrink: 0;
    width: 200px;
    height: 100%;

    > .Menu {
      height: 100%;

      /deep/.ant-menu {
        height: 100%;
      }

    }
  }

  > .Auto {
    flex-grow: 1;
    min-width: 0;
    padding: 20px;
  }
}
</style>
