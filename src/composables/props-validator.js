import { logger, levels } from '../utils/logger';

export const VALIDATORS = {
    'MAX_LENGTH_GRATER_THAN_OR_EQUAL_MIN_LENGTH': (props) => maxLengthGraterThanOrEqualMinLength(props),
    'ID_REQUIRED_WHEN_LABEL_SET': (props) => idRequiredWhenLabelSet(props),
}

export const usePropsValidator = (props, validators) => {
    for (const key in validators) {
        if (Object.prototype.hasOwnProperty.call(validators, key)) {
            const validator = validators[key];
            validator(props);
        }
    }
}

const maxLengthGraterThanOrEqualMinLength = (props) => {
    const hasViolation = null !== props.maxLength && null !== props.minLength && props.maxLength < props.minLength;
    validate(hasViolation, 'InputText', 'maxLength must be greater than or equal to minLength');
}

const idRequiredWhenLabelSet = (props) => {
    const hasViolation = null !== props.label && null === props.id;
    validate(hasViolation, 'InputText', 'id is required when label is set');
}

const validate = (hasViolation, context, message) => {
    if (hasViolation) {
        logger(levels.WARNING, context, message);
    }
}