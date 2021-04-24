<template>
  <div>
    <a-textarea placeholder="Autosize height based on content lines" auto-size />
    <div style="margin: 24px 0" />
    <a-textarea
      placeholder="Autosize height with minimum and maximum number of lines"
      :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    <div style="margin: 24px 0" />
    <a-textarea
      v-model="value"
      placeholder="Controlled autosize"
      :auto-size="{ minRows: 3, maxRows: 5 }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>
