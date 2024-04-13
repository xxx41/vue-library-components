export const levels = {
    INFO: 'INFO',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
};

const Log = {
    info: (context, message) => console.log(`[${context}] ${message}`),
    error: (context, message) => console.error(`[${context}] ${message}`),
    warn: (context, message) => console.warn(`[${context}] ${message}`),
}

export const logger = (level, context, message) => {
    switch (level) {
        case levels.INFO:
            Log.info(context, message);
            break;
        case levels.ERROR:
            Log.error(context, message);
            break;
        case levels.WARNING:
            Log.warn(context, message);
            break;
        default:
            break;
    }
}