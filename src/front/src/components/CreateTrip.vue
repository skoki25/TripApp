<template>
    <h1>Vytvorenie cestyg</h1>
    <Datepicker />
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';

    export default{
        name:'CreateTable',
        component:{
            Datepicker,
        }
    }
</script>