
import ActiveCards from "../activity-cards";
import s from "./styles.module.css";



function ActivityBar() {

  return (
    <>
      <div className={s.active_container}>
        <ActiveCards/>
      </div>
    </>
  );
}
export default ActivityBar;
