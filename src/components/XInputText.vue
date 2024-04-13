<script setup>
    import { onMounted } from 'vue';
    import { usePropsValidator, VALIDATORS } from '../composables/props-validator';
    import { useInputBase } from '../composables/input';
    import { defineProps } from 'vue';

    const props = defineProps({
        ...useInputBase().baseProps,

        label: {
            type: String,
            defaut: null,
            required: false,
        },

        maxLength: {
            type: Number,
            default: null,
            required: false,
            validator: (value) => value === null || value >= 0,
        },

        minLength: {
            type: Number,
            default: null,
            required: false,
            validator: (value) => value === null || value >= 0,
        },

        placeholder: {
            type: String,
            default: '',
            required: false,
        },

        readonly: {
            type: Boolean,
            default: false,
            required: false,
        },
    });

    onMounted(() => {
        usePropsValidator(props, [
            VALIDATORS.MAX_LENGTH_GRATER_THAN_OR_EQUAL_MIN_LENGTH,
            VALIDATORS.ID_REQUIRED_WHEN_LABEL_SET,
        ]);
    });
</script>

<template>
    <div class="x-input-text">
        <label v-if="label" :for="id" class="x-input-text__label">{{ label }}</label>
        <input 
            type="text"
            :id="id"
            :max-length="maxLength"
            :min-length="minLength"
            :placeholder="placeholder"
            :readonly="readonly"
            :class="class"
            class="x-input-text__input"
        />
    </div>
</template>

<style scoped>
    .x-input-text {
        display: flex;
        flex-direction: column;
    }

    .x-input-text__label {
        margin-bottom: 5px;
        color: #333;
        font-weight: bold;
    }

    .x-input-text__input {
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 5px;
        font-size: 1rem;
    }

    .x-input-text__input:focus {
        border-color: #007bff;
    }
</style>