<script setup>
    import { defineProps } from 'vue';
    import { useComponent } from '../composables/component';

    const props = defineProps({
        ...useComponent().baseProps,

        type: {
            type: String,
            default: 'button',
            required: false,
            defineOptions: ['button', 'submit', 'reset'],
        },
        
        text: {
            type: String,
            default: 'Click me!',
            required: false,
        },

        fontSize: {
            type: String,
            default: '1rem',
            required: false,
        },
    });
</script>

<template>
    <input :type="type" class="x-button" :class="class" :value="text" />
</template>

<style scoped>
    .x-button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: v-bind(fontSize);
    }

    .x-button:hover {
        background-color: #0056b3;
    }

    .x-button:active {
        background-color: #004286;
        transform: scale(0.95);
    }
</style>