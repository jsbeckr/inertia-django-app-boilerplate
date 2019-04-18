<template>
  <div>
    <h1>{{page.props.shared.title}}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  inject: ["page"]
};
</script>
