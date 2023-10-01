import s from './styles.module.css';
import SocialIcon from '../components/social-icons/index';
import { IconLogo } from '../components/svg-icons';

const fill = 'white';
const height = '21';

function Footer() {

  const onHandlerNav = (e) => {
    e.preventDefault()
    alert('установленный по умолчанию автоматический переход сброшен')
    }

  return (
    <>
      <div className={s.footer}>
        <div className={s.container_top}>
          <div className={s.logo_container}>
            <IconLogo fill={fill}/>
            <h2>DiveSea</h2>
          </div>
          <div className={s.footer_menu}>
            <a onClick={onHandlerNav} href='/'>Privacy Policy</a>
            <a onClick={onHandlerNav} href='/'>Term & Conditions</a>
            <a onClick={onHandlerNav} href='/'>About</a>
            <a onClick={onHandlerNav} href='/'>Us Contact</a>
          </div>
  
        </div>
        <hr />
        <div className={s.container_bottom}>
            <div className={s.reserved}>© 2023 EATLY All Rights Reserved.</div>
            <div className={s.social}>
              <SocialIcon className={s.social} fill={fill} height={height} />
            </div>
          </div>
      </div>
    </>
  );
}

export default Footer;
