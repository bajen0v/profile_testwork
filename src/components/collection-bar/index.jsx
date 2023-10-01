
import CollectionCards from "../collection-cards";
import s from "./styles.module.css";



function CollectionBar() {

  return (
    <>
      <div className={s.active_container}>
        <CollectionCards/>
      </div>
    </>
  );
}
export default CollectionBar;
