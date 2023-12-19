class ArraySchema {
  constructor() {
    this.validators = [((arr) => Array.isArray(arr))];
  }

  custom(func) {
    this.validators.push((arr) => arr.every((item) => func(item)));
    return this;
  }

  allIntegers() {
    this.validators.push((arr) => arr.every((item) => Number.isInteger(item)));
    return this;
  }

  isValid(arr) {
    return this.validators.every((validate) => validate(arr) === true);
  }
}

export default ArraySchema;
