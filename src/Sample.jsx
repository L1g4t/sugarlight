import React from 'react';
import styles from './Sample.module.css';
import {useState,useEffect} from 'react';

function useIsSmallScreen(breakpoint = 600) {
  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmall;
}
const Sample = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [activeGroup, setActiveGroup] = useState("photos");
    const isSmallScreen = useIsSmallScreen(600);
    return (
        <section className={styles.sample}>
            <h1 className={styles.sample_title}>Sample</h1>

            <div className={styles.navigator_container}>
                <div className={styles.navigator}>
                    <div className={`${styles.button_1 } ${activeGroup === "photos" ? styles.selected : ""}`} onClick={() => {setActiveGroup("photos");setActiveTab("tab1");}}>Photos</div>
                    <div className={`${styles.button_2 } ${activeGroup === "videos" ? styles.selected : ""}`} onClick={()=>{setActiveGroup("videos");setActiveTab("tab1");}}>Videos</div>
                </div>
                <div className={styles.navigator_slash}></div>
                <div className={styles.navigator} style={{ alignSelf: !isSmallScreen ? 'flex-end' : '' }}>
                    {activeGroup === "photos" && (
                        <>
                        <div className={`${styles.button_3 } ${activeTab === "tab1" ? styles.selected : ""}`} onClick={()=>setActiveTab("tab1")}>Cosplay</div>
                        <div className={`${styles.button_4 } ${activeTab === "tab2" ? styles.selected : ""}`} onClick={()=>setActiveTab('tab2')}>Đời thường</div>
                        <div className={`${styles.button_5 } ${activeTab === "tab3" ? styles.selected : ""}`} onClick={()=>setActiveTab('tab3')}>Studio</div>
                        </>
                    )}
                    {activeGroup === "videos" && (
                        <>
                        <div className={`${styles.button_3 } ${activeTab === "tab1" ? styles.selected : ""}`} onClick={()=>setActiveTab("tab1")}>Cosplay</div>
                        <div className={`${styles.button_4 } ${activeTab === "tab2" ? styles.selected : ""}`} onClick={()=>setActiveTab('tab2')}>Đời thường</div>
                        <div className={`${styles.button_5 } ${activeTab === "tab3" ? styles.selected : ""}`} onClick={()=>setActiveTab('tab3')}>Khác</div>
                        </>
                    )}
                </div>
            </div>
            {/* photos section */}
            {activeGroup === "photos" && (
                <>
                {/* Cosplay galary */}
                {activeTab === "tab1" && (
                <div className={styles.galary}>
                    <div className={styles.galary_1}>
                        <img src='\image\DSC00102-Edit.jpg' alt='Sample 1' />
                        <img src='\image\DSC00323-Edit.jpg' alt='Sample 4' />
                        <img src='\image\DSC00081-Edit.jpg' alt='Sample 7' />
                    </div>
                    <div className={styles.galary_2}>
                        <img src='\image\DSC00145-Edit.jpg' alt='Sample 2' />
                        <img src='\image\DSC09435-Edit.jpg' alt='Sample 5' />
                        <img src='\image\1_1.jpg' alt='Sample 8' />
                    </div>
                    <div className={styles.galary_1}>
                        <img src='\image\DSC00243-Edit.jpg' alt='Sample 3' />
                        <img src='\image\4_5.jpg' alt='Sample 6' />
                        <img src='\image\DSC00268-Edit.jpg' alt='Sample 9' />
                    </div>
                </div>
                )}
                {/* Đời thường galary */}
                {activeTab === "tab2" && (
                <div className={styles.galary}>
                    <div className={styles.notfound}>
                        Mình chưa có ảnh đời thường
                    </div>
                </div>
                )}
                {/* Studio galary */}
                {activeTab === "tab3" && (
                <div className={styles.galary}>
                    <div className={styles.notfound}>
                        Mình chưa có ảnh studio
                    </div>
                </div>
                )}
                </>
            )}

            {/* video section */}
            {activeGroup === "videos" && (
                <>
                {/* Cosplay galary */}
                {activeTab === "tab1" && (
                <div className={styles.galary}>
                    <div className={styles.galary_3}>
                        <iframe
                        className={styles.youtube_video}
                        src="https://youtube.com/embed/RKifQON1uOw"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        ></iframe>
                    </div>                   
                </div>
                )}
                {/* đời thường galary */}
                {activeTab === "tab2" && (
                <div className={styles.galary}>
                    <div className={styles.notfound}>
                        Mình chưa có video đời thường
                    </div>
                </div>
                )}
                {/* Khác galary */}
                {activeTab === "tab3" && (
                <div className={styles.galary}>
                    <div className={styles.notfound}>
                        Mình chưa có video khác
                    </div>
                </div>
                )}
                </>
            )}
        </section>
    );
};

export default Sample;