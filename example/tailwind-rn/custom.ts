import { create } from "tailwind-rn";
import styles from "../styles.json";

const { tailwind, getColor } = create(styles);

type Selectors = Partial<{
  focus: boolean;
  disabled: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  [selector: string]: boolean;
}>;

const mapFromStyles = (styles: string, selectors: Selectors) => {
  const classes = styles.split(" ");
  const usedClasses = classes
    .filter((c) => {
      if (!c.includes(":")) return true;

      const pseudos = c.split(":").slice(0, -1) as Array<keyof Selectors>;
      return (
        pseudos.map((p) => selectors[p]).filter((v) => v).length >=
        pseudos.length
      );
    })
    .sort((a, b) => {
      // the more matched selectors, the more exact match, make it last so it overides the previous options
      return a.split(":").length - 1 - (b.split(":").length - 1);
    })
    .map((c) => c.split(":").pop())
    .join(" ");

  return tailwind(usedClasses);
};

// This builds the custom tailwind function, taking into account the pseudo-classes
const t = (styles: string, selectors?: Selectors) => {
  const cleanStyles = styles.replace(/\s\s+/g, " ").trim();
  return {
    ...(selectors
      ? mapFromStyles(cleanStyles, selectors)
      : tailwind(cleanStyles)),
  };
};

export { t as tailwind, t, getColor, mapFromStyles };
