<script setup>
    import { useInputBase } from '../composables/input';

    const props = defineProps({
        ...useInputBase().baseProps,
        
        checked: {
            type: Boolean,
            default: false,
            required: false,
        },

        label: {
            type: String,
            defaut: null,
            required: true,
        },
    });
</script>

<template>
    <div class="x-input-checkbox">
        <input 
            type="checkbox"
            :id="id"
            :checked="checked"
        />
        <label v-if="label" :for="id">{{ label }}</label>
    </div>
</template>

<style scoped>
    .x-input-checkbox {
        display: flex;
        align-items: center;
    }

    .x-input-checkbox input {
        margin-right: 0.5rem;
    }
</style>
