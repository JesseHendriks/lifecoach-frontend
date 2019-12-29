<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: 'logout',
        created() {
            this.$store.dispatch('auth/destroyToken').then(response => {
                // eslint-disable-next-line
                console.log('destroy');
                this.$router.push({name: 'login'})
            });
        }
    }
</script>
