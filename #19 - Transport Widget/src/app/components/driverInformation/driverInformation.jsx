import Image from "next/image";
import styles from "./driverInformation.module.css";

import personPhoto from "../../../../public/personPhoto.svg";
import star from "../../../../public/star.svg";
import car from "../../../../public/car.svg";

export default function DriverInformation() {
  return (
    <div className={styles.container}>
      <div className={styles.iconsDriverCar}>
        <div className={styles.driverIcon}>
          <Image
            className={styles.personPhoto}
            src={personPhoto}
            alt="a icon of person photo"
            width={137}
            height={137}
          />
          <div className={styles.driverPhotoAndScore}>
            <div className={styles.driverScore}>
              <Image src={star} alt="star icon" width={16} height={16} />
              5.0
            </div>
          </div>
          <p className={styles.driverName}>Boris C.</p>
        </div>
        <Image
          className={styles.car}
          src={car}
          alt="icon of a car"
          width={286}
          height={111}
        />
      </div>
      <div className={styles.carInformations}>
        <h1 className={styles.carId}>BCD0D19</h1>
        <h5 className={styles.carType}>Honda Civic Roxo</h5>
      </div>
    </div>
  );
}
