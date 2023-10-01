import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { IconAllChains } from "../svg-icons";
import { Button } from "@mui/material";

import theme from "../theme-settings";

const paramsBtn = {
  bgcolor: "#FFFFFF",
  borderRadius: "10px",
  boxShadow: 1,
  width: "48%",
  gap: "12px",
  p: "13px 10px",
};

const btnArray = [
  {
    name: "Sales",
    icon: <ShoppingCartIcon />,
    moreIcon: <ExpandMoreIcon />,
  },
  {
    name: "All Chains",
    icon: <IconAllChains />,
    moreIcon: <ExpandMoreIcon />,
  },
];

function BtnActivity() {
  return btnArray.map((el) => {
    return (
      <>
        <Button
          onClick={() => alert("функционал в разработке")}
          theme={theme}
          color="primary"
          sx={paramsBtn}
        >
          {el.icon}
          {el.name}
          {el.moreIcon}
        </Button>
      </>
    );
  });
}
export default BtnActivity;
