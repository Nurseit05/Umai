'use client'
import { useState } from 'react';
import styles from './Slider.module.css'; // Создайте файл стилей, например, Slider.module.css

interface SliderProps {
  items: React.ReactNode[];
}

const Slider: React.FC<SliderProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePaginationClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slideWrapper}>
                {items.map((item, index) => (
                    <div key={index} className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}>
                        <img src={item} alt="" />
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.paginationDot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => handlePaginationClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
