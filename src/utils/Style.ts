export const style = (...styles: (string | undefined)[]): string => {
  return styles.join(" ");
};
