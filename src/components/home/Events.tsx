// src/components/home/Events.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaMapMarkerAlt, FaLongArrowAltRight } from 'react-icons/fa';
import styles from '@/styles/components/Events.module.scss';

// Define TypeScript Interface for Events
interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  featured: boolean;
  image?: string;
}

// Event Data Array
const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Reunion Event: Kingster's Alumni Golf Tour",
    date: "07 Jan 2025",
    time: "7:00 am - 11:30 pm",
    location: "Kingster Grand Hall",
    featured: true,
    image: '/images/hp-donation-400x212.jpg'
  },
  {
    id: 2,
    title: "Kingster's Alumni Hot Air Balloon Trip in Turkey",
    date: "01 Jan 2025",
    time: "10:00 am - 4:30 pm",
    location: "Kingster Grand Hall",
    featured: false
  },
  {
    id: 3,
    title: "Fintech & Key Investment Conference",
    date: "17 Dec 2024",
    time: "1:00 pm - 5:00 pm",
    location: "Kingster Grand Hall",
    featured: false
  }
];

const Events: React.FC = () => {
  // Separate featured event from regular events
  const featuredEvent = eventsData.find(event => event.featured);
  const regularEvents = eventsData.filter(event => !event.featured);

  return (
    <div className={styles.eventsSection}>
      <div className={styles.container}>
        {/* Featured Event */}
        {featuredEvent && (
          <div className={styles.featuredEvent}>
            <div className={styles.imageWrapper}>
              <Image
                src={featuredEvent.image ?? '/images/default-event.jpg'}
                alt={featuredEvent.title}
                width={700}
                height={372}
                className={styles.eventImage}
              />
            </div>
            <h3 className={styles.title}>Donation helps us</h3>
            <p className={styles.description}>
              The Campaign for the Kingster University is the 
              <strong> largest fundraising campaign in history.</strong> With a historic $1 billion goal, 
              the campaign is expanding U of T's global leadership capacity.
            </p>
            <Link href="/donate" className={styles.donateButton}>
              <span className={styles.heartIcon}>❤</span> Become a donor
            </Link>
          </div>
        )}

        {/* Regular Events */}
        <div className={styles.eventsListSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Upcoming Events</h3>
            <div className={styles.sectionDivider}></div>
          </div>

          <div className={styles.eventsList}>
            {regularEvents.map((event) => (
              <div key={event.id} className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span className={styles.day}>{event.date.split(' ')[0]}</span>
                  <span className={styles.month}>{event.date.split(' ')[1]}</span>
                </div>
                <div className={styles.eventDetails}>
                  <h4 className={styles.eventTitle}>
                    <Link href={`/events/${event.id}`}>{event.title}</Link>
                  </h4>
                  <div className={styles.eventMeta}>
                    <span className={styles.eventTime}>
                      <FaClock className={styles.icon} /> {event.time}
                    </span>
                    <span className={styles.eventLocation}>
                      <FaMapMarkerAlt className={styles.icon} /> {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/events" className={styles.viewAllLink}>
            View All Events <FaLongArrowAltRight className={styles.arrowIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
