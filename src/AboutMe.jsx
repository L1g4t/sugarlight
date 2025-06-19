import React from 'react';
import './About.css';
import {useState,useEffect} from 'react';

function useIsSmallScreen(breakpoint = 1000) {
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

const AboutMe = () => {
  const isSmallScreen = useIsSmallScreen(1000);
    return (
        <section className="About">         
            <div className='script_about_me'>
              <div className='tilte_about_me'>ABOUT ME</div>
              <div className='tilte_about_me_slash'></div>
              {isSmallScreen&&<img src='image/490222666_1178828566969203_1218203551334888705_n.jpg' alt='About Me' className="about_me_image" />} 
              <div className='main_about_me'>Mình là một photographer
                kiêm videographer nghiệp dư. Với đam mê to lớn với nhiếp ảnh chân dung, 
                concept và sự kiện, mình mong muốn được học hỏi và phát triển kỹ năng 
                chuyên nghiệp hơn trong môi trường sáng tạo.
              </div>
              <div className='container_support_info'>
                <div className='support_info'>
                  <span class='highlight'>Thông tin khác:</span>
                  <ul>
                    <li>Mình 2k3</li>
                    <li>Có thể gọi mình là Lai (Light) hoặc Đường</li>
                  </ul>
                </div>
                <div className='support_info'>
                  <span class='highlight'>Thiết bị:</span>
                  <ul>
                    <li>Sony ZVE-10</li>
                    <li>Viltrox 56mm f1.7</li>
                    <li>Viltrox 20mm f2.8</li>
                  </ul>
                </div>
              </div>
            </div>
            {!isSmallScreen&&<img src='image/490222666_1178828566969203_1218203551334888705_n.jpg' alt='About Me' className="about_me_image" />}        
        </section>
    );
};

export default AboutMe;