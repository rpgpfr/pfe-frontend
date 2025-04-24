import Image from 'next/image';

import styles from './ProfileBannner.module.css'

const ProfileBanner = () => {
    return (
        <div className={styles.bannerContainer}>
            <Image
                src="/placeholder.svg?height=1080&width=1080" alt="Background" fill className="object-cover"
            />
        </div>
    );
};

export default ProfileBanner;