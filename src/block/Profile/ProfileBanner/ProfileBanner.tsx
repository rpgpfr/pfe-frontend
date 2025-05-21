import Image from 'next/image';

import styles from './ProfileBannner.module.css'

const ProfileBanner = () => {
    return (
        <div className={styles.bannerContainer}>
            <Image
                src="/images/profile.webp"
                alt=""
                fill
            />
        </div>
    );
};

export default ProfileBanner;