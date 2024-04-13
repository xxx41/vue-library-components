import { useComponent } from "./component";

export function useInputBase() {

    const baseProps = {
        ...useComponent().baseProps,
    };

    return { baseProps };
}