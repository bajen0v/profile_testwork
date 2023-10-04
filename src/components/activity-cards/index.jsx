import AccordionMui from "../collection-accordion";
import BtnActivity from "../activity-cards-buttons";

import s from "./styles.module.css";

function ActiveCards() {
  return (
    <>
      <div className={s.active_container}>
        <div className={s.btns_container}>
          <BtnActivity />
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
