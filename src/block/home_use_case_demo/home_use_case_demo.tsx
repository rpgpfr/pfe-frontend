import Image from "next/image";
import styles from '@/block/home_use_case_demo/home_use_case_demo.module.css';

const HomeUseCaseDemo = () => {
  return (
    <section className={styles.container_section_three}>
      <h1 className={styles.title_section_three}>Simple d&apos;utilisation</h1>

      <div className={styles.grid_section_three}>
        <div className={styles.card_section_three}>
          <div className={styles.image_container}>
            <Image
              src="/image1.jpg"
              alt="Image 1"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
          <div className={styles.card_overlay}>
            <p className={styles.card_text}>
                Retrouvez des aides tout au long de la création !
            </p>
          </div>
        </div>

        <div className={styles.card_section_three}>
          <div className={styles.image_container}>
            <Image
              src="/image2.jpg"
              alt="Image 2"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
          <div className={styles.card_overlay}>
            <p className={styles.card_text}>
                Profitez d’une interface intuitive et facile à utiliser !
            </p>
          </div>
        </div>

        <div className={styles.card_section_three}>
          <div className={styles.image_container}>
            <Image
              src="/image3.jpg"
              alt="Image 3"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
          <div className={styles.card_overlay}>
            <p className={styles.card_text}>
            Vous avez un doute sur la signification d’un terme ? Le glossaire est là pour vous !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeUseCaseDemo;