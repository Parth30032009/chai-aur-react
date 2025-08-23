class AppError extends Error {
  constructor({ success, message, code }) {
    super(message);
    this.success = success;
    this.code = code;
  }
}

const createError = ({ success = false, message, code }) => {
  return new AppError({ success, message, code });
};

export { createError };
