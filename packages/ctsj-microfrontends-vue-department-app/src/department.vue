<template>
  <div>
    <a-rate :default-value="3" />
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <a-rate :allow-clear="false" :default-value="3" />
    <span class="ant-rate-text">allowClear: false</span>
  </div>
</template>

<script>
export default {};
</script>
