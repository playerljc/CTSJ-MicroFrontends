<template>
  <div>
    <div>
      <a-menu mode="horizontal">
        <a-menu-item key="11"
          ><router-link to="/vue_system/vue_statistics/total">汇总统计</router-link></a-menu-item
        >
        <a-menu-item key="22"
          ><router-link to="/vue_system/vue_statistics/person">人员统计</router-link></a-menu-item
        >
        <a-menu-item key="33"
          ><router-link to="/vue_system/vue_statistics/department"
            >部门统计</router-link
          ></a-menu-item
        >
      </a-menu>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {

};
</script>
