import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
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

export const btnHeaderParams = {
  pt: 16.25,
  pb: 16.25,
  borderRadius: 2.8,
  fontSize: 16,
  fontWeight: 600,
}


export const btnActivityParams = {
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 1,
  minWidth: '400px',
  gap: "12px",
  p: "13px 10px",
};

export const accordionParams = {
  mt: '15px',
  '& .MuiAccordionSummary-content': {
    // padding: '50px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px',
  }
}
