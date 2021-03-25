
<template>
    <div id="test">
        <div class="center">
            <p>{{text}}</p>
            <img :src="imgUrl" alt="">
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            imgUrl: require("../src/assets/images/lsp.jpg"),
            text: "完成"
        }
    }
}
</script>

<style>
    #test {
        color: #0a791c;
    }
</style>