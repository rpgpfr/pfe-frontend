import Image from "next/image"
import styles from '@/block/home_campaign_demo/home_campaign_demo.module.css';

const HomeCampaignDemo  = () =>{
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Créez votre campagne</h1>

      <div className={styles.grid_section_one}>
        <div className={styles.image_container}>
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Image de campagne"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.text_lg}>
        <p><span className={styles.list_word}>Plongez dans l&apos;aventure </span> en commençant par créer votre propre campagne :</p>

          <ul className={styles.list_section_one}>
            <li className={styles.list_item}>
              <span className={styles.list_item_icon}>•</span>
              <span><span className={styles.list_word}>Définissez </span> l&apos;histoire de votre campagne</span>
            </li>
            <li className={styles.list_item}>
              <span className={styles.list_item_icon}>•</span>
              <span><span className={styles.list_word}>Choisissez </span>le type et l&apos;ambiance du monde</span>
            </li>
            <li className={styles.list_item}>
              <span className={styles.list_item_icon}>•</span>
              <span><span className={styles.list_word}>Écrivez </span> la quête principale de la campagne ou choisissez en une parmi notre sélection</span>
            </li>
            <li className={styles.list_item}>
              <span className={styles.list_item_icon}>•</span>
              <span><span className={styles.list_word}>Attribuez </span> une carte et des personnages et le tour est joué !</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default HomeCampaignDemo;
