import React from 'react';
import { useState } from 'react';
import styles from'./Price.module.css';

const Price = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <section className={styles.price}>
            <h1 className={styles.price_title}>Price</h1>
            <div className={styles.navigator_container}>
                <div className={styles.navigator}>
                    <div className={`${styles.button_1 } ${activeTab === "tab1" ? styles.selected : ""}`} onClick={()=>setActiveTab("tab1")}>Cosplay</div>
                    <div className={`${styles.button_3 } ${activeTab === "tab2" ? styles.selected : ""}`} onClick={()=>setActiveTab("tab2")}>Đời thường</div>
                </div>
                <div className={styles.navigator_slash}></div>
            </div>
            {activeTab === "tab1" && (
                <div className={styles.price_content}>
                    <div className={styles.price_script}>
                        <h3>Đối với chụp:</h3>
                        <span>Fes:</span><br></br>
                        <span>Solo:</span> 119k ( 4 tấm retouch tự chọn + trả full raw hoặc jpeg)<br></br>
                        79k (trả full raw hoặc jpeg)<br></br>
                        <span>Couple:</span> chưa đủ sample nên free<br></br>
                        <br></br><span>Outdoor (Ngoại cảnh):</span><br></br>
                        chưa đủ sample nên free<br></br>
                        <br></br><span>Studio:</span><br></br>
                        chưa đủ sample nên free
                        <h3><br></br>Đối với quay:</h3>
                        chưa đủ sample nên free<br></br>
                        <br></br><span id={styles.caution}>*LƯU Ý:</span> bảng giá chưa bao gồm các chi phí phát sinh (phí studio, phụ phí của địa điểm chụp...).<br></br>
                        Mình chưa nhận chụp dàn ( do thiếu thiết bị).
                    </div>
                </div>
            )}
            {activeTab === "tab2" && (
                <div className={styles.price_content}>
                    <div className={styles.price_script}>
                        Chưa có sample nên free<br></br>
                        <br></br><span id={styles.caution}>*LƯU Ý:</span> bảng giá chưa bao gồm các chi phí phát sinh (phí studio, phụ phí của địa điểm chụp...).<br></br>
                        Mình chưa nhận chụp dàn ( do thiếu thiết bị).
                    </div>
                </div>
            )}
        </section>
    );
};

export default Price;