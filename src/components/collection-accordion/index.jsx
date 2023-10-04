import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconVerify, IconBid } from "../svg-icons";

import s from "./styles.module.css";
import { accordionParams } from "../theme-settings-mui";

export default function AccordionMui({ main }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary sx={accordionParams}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={s.about_left}>
            <img src="/images/pic_activity.png" alt="" />
            <div className={s.name_container}>
              <h2>NeuVey</h2>
              <p>
                JenifferS
                <IconVerify fz="0.9rem" />
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
            <hr />
            <div className={s.description}>
              <div className={s.price}>
                <h2>$19K</h2>
                <p>USD Price</p>
              </div>
              <div className={s.quantity}>
                <h2>14.9K</h2>
                <p>Quantity</p>
              </div>
              <div className={s.floor_price}>
                <h2>
                  <IconBid />
                  16,4
                </h2>
                <p>floor price</p>
              </div>
              <div className={s.traded}>
                <h2>
                  <IconBid />
                  26,4
                </h2>
                <p>traded</p>
              </div>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
