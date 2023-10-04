import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { theme, btnActivityParams } from "../theme-settings-mui/index";


import { IconAllChains } from "../svg-icons";

function BtnActivity() {

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

  return btnArray.map((el) => {
    return (
      <>
        <Button
          onClick={() => alert("функционал в разработке")}
          theme={theme}
          color="primary"
          sx={btnActivityParams}
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
