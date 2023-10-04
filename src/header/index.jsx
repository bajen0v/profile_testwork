import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { GoSearch } from "react-icons/go";
import { theme, btnHeaderParams } from "../components/theme-settings-mui/index";
import { useState } from "react";
import { IconLogo } from "../components/svg-icons";

import s from "./styles.module.css";
import { colorBlack } from "../components/constants";



function Header() {
  const [connect, setConnect] = useState(false);
  const [value, setValue] = useState("");
  const navigation = ["DISCOVER", "CREATORS", "SELL", "STATS"];
  
  const onHandlerNav = (e) => {
    e.preventDefault();
    alert("установленный по умолчанию автоматический переход сброшен");
  };

  const handlerBtnConnect = () => {
    alert("work");
    setConnect(!connect);
  }

  const onEnterHandler = (e) => {
    if (e.code === "Enter") {
      alert("нажат Enter отпрвляем в стейт и обнуляем Value");
      setValue("");
    }
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <header className={s.header_container}>
      <nav className={s.nav_menu}>
      <a onClick={onHandlerNav} href="/"> <IconLogo fill={colorBlack} /> </a>
          {navigation.map((el, index) => (
            <a key={index} onClick={onHandlerNav} href="/">
              {el}
            </a>
          ))}
      </nav>

      <div className={s.right_header}>
        <div className={s.nav_search}>
          <GoSearch fill="#9D9D9D" />
          <input
            onKeyDown={onEnterHandler}
            value={value}
            onBlur={(e) => setValue(e.target.value)}
            onChange={onChangeHandler}
            className={s.nav_input}
            type="text"
            placeholder="Search Art Work / Creator"
            />
        </div>
        <ThemeProvider theme={theme}>
          <Button
            onClick={handlerBtnConnect}
            sx={btnHeaderParams}
            color="primary"
            variant="contained"
            >
            {connect ? "Quit" : "Connect Wallet"}
          </Button>
        </ThemeProvider>
      </div>
    </header>
  );
}

export default Header;
