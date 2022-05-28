
<template>
    <div>
        <p>我今年{{age}}岁</p>
        <button @click="age++">长大</button>
    </div>
</template>
<script>


export default ({
    data () {
        return {
                age:0
        }
    }
})
</script>

<style scoped>
p{
    font-size: 20px;
    color: aqua;
}
button{
    border: 0;
    background-color:aquamarine ;
}
</style>