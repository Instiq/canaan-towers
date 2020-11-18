<template>
    <div class="d-flex justify-content-between header">
        <div class="left-div">
            {{ data.title }}
        </div>
        <div class="right-div">hi admin!</div>
    </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
    .left-div {
        text-transform: capitalize;
        font-size: 2rem;
        font-weight: bold;
        color: #ACACAC
    }

    .right-div {
        color: $main-orange;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 1.4rem;
    }

    .header {
        margin-bottom: 4rem;
    }
</style>
