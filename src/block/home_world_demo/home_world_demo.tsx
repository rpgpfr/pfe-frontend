import Image from "next/image";
import styles from '@/block/home_world_demo/home_world_demo.module.css';

const HomeWorldDemo = () => {
  return (
    <section className={styles.title}>
      <h1 className={styles.title}>Construisez votre monde</h1>

      <div className={styles.grid_section_two}>
        <div className={styles.card_section_two}>

          <div className={styles.image_container}>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Création de personnage"
              width={600}
              height={600}
              className={styles.image}
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
              className={styles.image}
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
    </section>
  );
};

export default HomeWorldDemo;