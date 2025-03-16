import Image from "next/image";
import styles from '@/block/section_two/section_two.module.css';
import { Aladin } from 'next/font/google';  

const aladin = Aladin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aladin',
});

const SectionTwo = () => {
  return (
    <div className={styles.container_section_two}>
      <h1 className={`${styles.title_section_two} ${aladin.variable} ${aladin.className}`}>Construisez votre monde</h1>

      <div className={styles.grid_section_two}>
        {/* Character Creation Section */}
        <div className={styles.card_section_two}>
          <div className={styles.image_container}>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Création de personnage"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={styles.card_overlay}>
            <p className={styles.card_text}>
              Créez vos personnages : Personnalisez son histoire, apparence et ses caractéristiques !
            </p>
          </div>
        </div>

        <div className={styles.card_section_two}>
          <div className={styles.image_container}>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Carte du monde"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className={styles.card_overlay}>
            <p className={styles.card_text}>
              Personnalisez la carte du monde : Importez votre carte ou choisissez parmi une sélection par défaut et
              ajoutez des marqueurs !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;