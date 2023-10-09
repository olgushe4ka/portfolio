import styles from "./pages-styles.module.css";

// import {
//   LIVE_ORDER_FEED_CONNECT,
//   LIVE_ORDER_FEED_DISCONNECT,
//   wsConnect,
//   wsDisconnect,
// } from "../services/actions/web-soket";
// import { baseWS } from "../utils/burger-api";
import { useEffect, useState } from "react";
import Modal from "../components/modal/modal";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "../utils/hooks";

import { Location } from "history";
import { TOrders } from "../types/ingredients";

function Feed() {
  const [modalOpen, setModalOpen] = useState<null | TOrders>(null);

  const dispatch = useDispatch();
  const history = useHistory();
  //const location = useLocation();
  const location = useLocation<{ background: Location }>();

  //const background = location.state?.background;
  const background = location.state && location.state.background;

  const allOrders = useSelector((state) => state.ws.table.orders);

  const numbers = useSelector((state) => state.ws.table);

  const onModalClose = () => {
    setModalOpen(null);
    history.goBack();
  };

  // //WS
  // useEffect(() => {
  //   dispatch(wsConnect(baseWS));
  //   return () => {
  //     dispatch(wsDisconnect());
  //   };
  // }, [dispatch]);

  const openOrderInfo = (data: TOrders) => {
    setModalOpen(data);
  };
  return (
    <>
      <div className={`${styles.feedMain} ml-15 mr-0 mb-0 mt-0`}>
        <div>Тест</div>
      </div>
    </>
  );
}

export default Feed;
