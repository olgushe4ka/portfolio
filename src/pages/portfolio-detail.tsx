import { useParams } from "react-router-dom";
import styles from "./portfolo-delail-styles.module.css";
import { portfolioInfo2 } from "../utils/data";

interface RouteParams {
  photoId: string;
}

interface RoomInfo {
  id: number;
  roomName: string;
  photos: string[];
}

function PortfolioDetailPage() {
  const { photoId } = useParams<RouteParams>();
  const photoIdAsNumber = parseInt(photoId, 10);

  const houseInfo = portfolioInfo2.find((item) => item.id === photoIdAsNumber);

  if (!houseInfo) {
    return <div>Информация не найдена</div>;
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.nameRoom}>Детальная информация: {houseInfo.title}</h2>

      {houseInfo.otherFotos.map((room, index) => (
        <div key={index}>
          <h3 className={styles.nameRoom}>{room.roomName}</h3>
          <div className={styles.portfolioImages}>
            {room.photos.map((photo, photoIndex) => (
              <div key={photoIndex} className={styles.portfolioImage}>
                <img src={photo} alt="фото" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioDetailPage;
