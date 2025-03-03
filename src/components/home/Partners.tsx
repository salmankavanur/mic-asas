// src/components/home/Partners.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Partners.module.scss";

const partnerLogos = [
  { src: '/images/banner-1.png', alt: 'Partner 1', url: '#' },
  { src: '/images/banner-2.png', alt: 'Partner 2', url: '#' },
  { src: '/images/banner-3.png', alt: 'Partner 3', url: '#' },
  { src: '/images/banner-4-1.png', alt: 'Partner 4', url: '#' },
  { src: '/images/banner-5.png', alt: 'Partner 5', url: '#' }
]
const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.partnersList}>
          {partnerLogos.map((logo, index) => (
            <div key={index} className={styles.partnerItem}>
              <Link href={logo.url} className={styles.partnerLink}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100} // Adjusted width for smaller logos
                  height={40} // Adjusted height for smaller logos
                  className={styles.partnerLogo}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;