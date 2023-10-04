import s from "./styles.module.css";
import SocialIcon from "../components/social-icons/index";
import { IconLogo } from "../components/svg-icons";
import {
  colorWhite,
  heightSocialIconFooter,
  widthSocialIconFooter,
} from "../components/constants";

function Footer() {
  const navigation = [
    "Privacy Policy",
    "Term & Conditions",
    "About",
    "Us Contact",
  ];

  const onHandlerNav = (e) => {
    e.preventDefault();
    alert("установленный по умолчанию автоматический переход сброшен");
  };

  return (
    <>
      <footer className={s.footer}>
        <div className={s.container_top}>
          <div className={s.logo_container}>
            <IconLogo fill={colorWhite} />
            <h2>DiveSea</h2>
          </div>
          <div className={s.footer_menu}>
            {navigation.map((el, index) => (
              <a key={index} onClick={onHandlerNav} href="/">
                {el}
              </a>
            ))}
          </div>
        </div>
        <hr />
        <div className={s.container_bottom}>
          <p className={s.reserved}>© 2023 EATLY All Rights Reserved.</p>
          <div className={s.social}>
            <SocialIcon
              className={s.social}
              fill={colorWhite}
              width={widthSocialIconFooter}
              height={heightSocialIconFooter}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
