import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        main: "#141416",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                backgroundColor: '#141416',
                color: '#fff',
              }),
          }),
        },
      },
    },
    spacing: (value) => value * 1,
  });

export default theme