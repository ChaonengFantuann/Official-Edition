import moment from "moment";

export const submitFieldsAdaptor = (formValues) => {
  const result = formValues;
  Object.keys(formValues).forEach((key) => {
    if (moment.isMoment(formValues[key])) {
      result[key] = moment(formValues[key]).format();
    }
    if (Array.isArray(formValues[key])) {
      result[key] = formValues[key].map((innerValue) => {
        if (moment.isMoment(innerValue)) {
          return moment(innerValue).format();
        }
        return innerValue;
      });
    }
  });
  return result;
};