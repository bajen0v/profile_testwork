import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconVerify, IconBid } from '../svg-icons';

import s from './styles.module.css';

export default function AccordionMui({ main }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: '1.2rem',
            },
            mt: '15px',
            '& .MuiAccordionSummary-content': {
              // padding: '50px',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            },
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <div className={s.about_left}>
            <img src='/images/pic_activity.png' alt='' />
            <div className={s.name_container}>
              <h2>NeuVey</h2>
              <p>
                JenifferS
                <span>
                  <IconVerify fz='0.9rem' />
                </span>
              </p>
            </div>
          </div>
          <div className={s.price_right}>
            <span className={s.sale}>Sale</span>
            <div className={s.bid_container}>
              <IconBid />
              <span>16,4</span>
            </div>

            <p className={s.date}>6 Minutes ago</p>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          <Typography>
            <hr />

            <div className={s.description}>
              <div className={s.price}>
                <p>USD Price</p>
                <h2>$19K</h2>
              </div>

              <div className={s.quantity}>
                <p>Quantity</p>
                <h2>14.9K</h2>
              </div>
              <div className={s.floor_price}>
                <p>floor price</p>
                <h2>
                  <span>
                    <IconBid />
                  </span>
                  16,4
                </h2>
              </div>
              <div className={s.traded}>
                <p>traded</p>
                <h2>
                  <span>
                    <IconBid />
                  </span>
                  26,4
                </h2>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
