import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { IconAllChains } from '../svg-icons';
import { IconButton } from '@mui/material';
import AccordionMui from '../collection-accordion';

import s from './styles.module.css';

function ActiveCards() {

  return (
    <>
      <div className={s.active_container}>
        <div className={s.btns_container}>
          <div className={s.btn}>
            <ShoppingCartIcon sx={{ width: '19px', height: '18px' }} />

            <span>Sales</span>
            <IconButton aria-label='add'>
              <ExpandMoreIcon />
            </IconButton>
          </div>
          <div className={s.btn}>
            <IconAllChains />

            <span>All Chains</span>
            <IconButton aria-label='add'>
              <ExpandMoreIcon width='20px' />
            </IconButton>
          </div>
        </div>
        <div className={s.active_bar}>
          <AccordionMui />
          <AccordionMui />
        </div>
      </div>
    </>
  );
}
export default ActiveCards;
