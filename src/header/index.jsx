import Button from '@mui/material/Button'
import { ThemeProvider } from '@mui/material/styles';
import { GoSearch } from 'react-icons/go';
import theme from '../components/theme-settings/index';
import { useState } from 'react';
import { IconLogo } from '../components/svg-icons';

import s from './styles.module.css';

const colorWhiteLogo = '#141416'

function Header() {
  const [connect, setConnect] = useState(false)
  const [value, setValue] = useState('')

  const onHandlerNav = (e) => {
  e.preventDefault()
  alert('установленный по умолчанию автоматический переход сброшен')
  }

  function handlerBtnConnect() {
    alert('work')
    setConnect(!connect)
  }

  const onEnterHandler = (e) => {
    if(e.code === 'Enter') {
      alert('нажат Enter отпрвляем в стейт и обнуляем Value')
      setValue('');
    }   
  }

  const onChangeHandler = (e) => {
  setValue(e.target.value)
  }
  return (
    <div className={s.nav_container}>
      <div className={s.left}>
        <div className='image'>
          <IconLogo fill={colorWhiteLogo}/>
        </div>
        <div className={s.nav_menu}>
            <a onClick={onHandlerNav} href='/'>DISCOVER</a>
            <a onClick={onHandlerNav} href='/'>CREATORS</a>
            <a onClick={onHandlerNav} href='/'>SELL</a>
            <a onClick={onHandlerNav} href='/'>STATS</a>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.nav_search}>
          <GoSearch fill='#9D9D9D'/>
          <input onKeyDown={onEnterHandler} value={value} onBlur={(e)=> setValue(e.target.value)} onChange={onChangeHandler}className={s.nav_input} type='text' placeholder='Search Art Work / Creator' />
        </div>
        <ThemeProvider theme={theme} >
        <Button  
        onClick={handlerBtnConnect}
         sx={{ pt:16.25,pb:16.25, width: 200,borderRadius:2.8, fontSize:16,fontWeight:600}} 
        color='primary' variant='contained'>{connect? 'Quit' : 'Connect Wallet'}</Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
