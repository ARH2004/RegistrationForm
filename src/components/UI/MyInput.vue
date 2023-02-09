<template>
  <div class="wrapper">
    <p class="wrapper__text" :text="text">{{ text }}</p>
    <input for class="input" :placeholder="placeholder" />
  </div>
</template>
<script>
export default {
  name: "my-input",
  props: ["placeholder", 'text'],
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  &__text {
    position: absolute;
    top: 3px;
    left: 16px;
    bottom: 22px;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;

    color: rgba(64, 58, 75, 0.6);
  }
}
.input {
  width: 320px;
  height: 55px;
  background: #f8f1ff;
  border-radius: 7px;
  padding: 20px 0px 8px 15px;
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
