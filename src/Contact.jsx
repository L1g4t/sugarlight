import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact_tilte}>Contact</div>
            <div className={styles.contact_tilte_slash}></div>
            
            <div className={styles.contact_socialmedia}>
                <a href="https://www.facebook.com/SugerLight">
                    <img src="\icon\icons8-facebook-48.png" alt="Facebook" />
                    Đường Hôm Qua
                </a>
                <a href="https://www.tiktok.com/@light_lai?_r=1&_d=secCgYIASAHKAESPgo8t%2BLxk9%2BVIad144ij5QmMLazGHIysHeMs5wtVHXgDu2r8zOHf452%2FEJC0fGJu7qziV6E23MTIsomQy7x9GgA%3D&_svg=1&checksum=d68194e6dfc4d1e72c3aec14c971fec3831bf28a0519fdf01f39fca741613741&sec_uid=MS4wLjABAAAAprzPeWCtvASAdnrYW1X-AkzuVXbfjTdMaUlRnMK-Kx5ejaAeynqdKSM3Jmv621F3&sec_user_id=MS4wLjABAAAAprzPeWCtvASAdnrYW1X-AkzuVXbfjTdMaUlRnMK-Kx5ejaAeynqdKSM3Jmv621F3&share_app_id=1180&share_author_id=7178025040737469466&share_link_id=22B440A1-D268-4AAE-918F-0C588D50F484&share_scene=1&sharer_language=en&social_share_type=4&source=h5_t&timestamp=1750313457&tt_from=copy&u_code=e5cc6fa42bg3g4&ug_btm=b8727%2Cb0&user_id=7178025040737469466&utm_campaign=client_share&utm_medium=ios&utm_source=copy">
                    <img src="\icon\icons8-tiktok-50.png" alt="TikTok" />
                    SugarLight
                </a>
                <a href="tel:0354157112">
                    <img src="\icon\icons8-phone-50.png" alt="Phone" />
                    0354157112
                </a>
            </div>
        </section>
    );
};

export default Contact;