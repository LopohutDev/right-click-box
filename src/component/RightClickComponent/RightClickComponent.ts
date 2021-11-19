import { createUseStyles } from "react-jss";

export const useStylesFromThemeFunction = createUseStyles({
  container: {
    width: "100%",
    height: "100vh",
    background: "lightblue",
  },
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    background: "lightGreen",
    position: "absolute",
  },
});
