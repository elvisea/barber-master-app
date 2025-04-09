type Value = number | string | undefined;

export function formatInputValue(value: Value): string {
  if (value === undefined) {
    return "";
  }
  return String(value);
}
