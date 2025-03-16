import Image from "next/image";
import styles from '@/block/home_use_case_demo/home_use_case_demo.module.css';
import { Aladin } from 'next/font/google';

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aladin',
});

const HomeUseCaseDemo = () => {
  return (
    <div className={styles.container_section_three}>
      <h1 className={`${styles.title_section_three} ${aladin.variable} ${aladin.className}`}>Simple d&apos;utilisation</h1>

      <div className={styles.grid_section_three}>
        <div className={styles.card_section_three}>
          <div className={styles.image_container}>
            <Image
              src="/image1.jpg"
              alt="Image 1"
              width={600}
              height={600}
              className="w-full h-full object-cover"
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
              className="w-full h-full object-cover"
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
              className="w-full h-full object-cover"
            />
          </div>
          <div className={styles.card_overlay}>
            <p className={styles.card_text}>
            Vous avez un doute sur la signification d’un terme ? Le glossaire est là pour vous !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeUseCaseDemo;