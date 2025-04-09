const translateError = (
  t: (key: string) => string,
  errorKey?: string,
): string => {
  return errorKey ? t(errorKey) : "";
};

export { translateError };
