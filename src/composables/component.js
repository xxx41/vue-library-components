export function useComponent() {

    const baseProps = {
        id: {
            type: String,
            default: null,
        },

        class: {
            type: String,
            default: null,
        }
    };

    return { baseProps };
}