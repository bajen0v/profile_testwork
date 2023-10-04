import {theme} from "../theme-settings-mui/index";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState } from "react";

import s from "./styles.module.css";

function CollectionCards() {
  const id = Math.random();
  const id2 = Math.random();
  const [state, setState] = useState({
    cards: [
      {
        id: id,
        name: "Name of jpg",
        date: "7h 09m 12s",
        currentBid: "Current bid",
        bid: "1,75",
        isBid: true,
      },
      {
        id: id2,
        name: "Name of picture",
        date: "7h 00m 12s",
        currentBid: "Current bid",
        bid: "1,90",
        isBid: false,
      },
      {
        id: Math.random(),
        name: "Name of jpg",
        date: "7h 09m 12s",
        currentBid: "Current bid",
        bid: "1,75",
        isBid: true,
      },
      {
        id: Math.random(),
        name: "Name of jpg",
        date: "7h 09m 12s",
        currentBid: "Current bid",
        bid: "1,75",
        isBid: true,
      },
      {
        id: Math.random(),
        name: "Name of jpg",
        date: "7h 09m 12s",
        currentBid: "Current bid",
        bid: "1,75",
        isBid: true,
      },
      {
        id: Math.random(),
        name: "Name of jpg",
        date: "7h 09m 12s",
        currentBid: "Current bid",
        bid: "1,75",
        isBid: true,
      },
    ],
  });

  const cards = state.cards.map((el) => {
    const handlerBtnBid = (e) => {
      let cardId = state.cards.find((el) => el.id === Number(e.target.id));
      cardId.isBid = !cardId.isBid;

      setState({ ...state });
    };

    return (
      <>
        <div key={el.id} id={el.id} className={s.card}>
          <div className={s.picture_container}>
            <img src="/images/pic_activity.png" alt="" />
            <div className={s.picture_date}>
              <p>{el.date}</p>
            </div>
          </div>
          <div className={s.about_picture}>
            <h2>{el.name}</h2>
            <div className={s.bid_container}>
              <div className={s.current_bid}>
                <p>{el.currentBid}</p>
                <img src="/images/bidIcon.svg" alt="" />
                <span>{el.bid}</span>
              </div>
              <ThemeProvider theme={theme}>
                <Button
                  id={el.id}
                  onClick={handlerBtnBid}
                  sx={{
                    pt: 11,
                    pb: 11,
                    pr: 17,
                    pl: 17,
                    fontSize: 10,
                    fontWeight: 600,
                    borderRadius: 2.8,
                  }}
                  color="primary"
                  variant="contained"
                >
                  {el.isBid ? "PLACE BID" : "BIDED"}
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className={s.active_container}>{cards}</div>
    </>
  );
}

export default CollectionCards;
