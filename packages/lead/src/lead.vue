<template>
    <div class="r-lead">
      <span v-if="$slots.default" ><slot></slot></span>
    </div>
</template>

<script>
    export default {
        name: "RLead"
    }
</script>

<style scoped>

</style>
