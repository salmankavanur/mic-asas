// src/components/home/Events.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaMapMarkerAlt, FaLongArrowAltRight } from "react-icons/fa";
import styles from "@/styles/components/Events.module.scss";

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
    title: "Fintech & Key Investment Conference",
    date: "17 Dec",
    time: "1:00 pm - 1:00 pm",
    location: "Kingster Grand Hall",
    featured: false,
  },
  {
    id: 2,
    title: "Sport Management Webinar",
    date: "04 Nov",
    time: "1:00 pm - 1:00 pm",
    location: "Kingster Grand Hall",
    featured: false,
  },
  {
    id: 3,
    title: "Planning and Facilitating Effective Meetings",
    date: "11 Sep",
    time: "8:00 am - 8:00 am",
    location: "Kingster Grand Hall",
    featured: false,
  },
];

const Events: React.FC = () => {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.container}>
        <div className={styles.gridWrapper}>
          {/* Donation Section */}
          <div className={styles.donationSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/hp-donation-400x212.jpg"
                alt="Donation helps us"
                width={400}
                height={212}
                className={styles.donationImage}
              />
            </div>
            <h3 className={styles.sectionTitle}>Donation helps us</h3>
            <p className={styles.description}>
              The Campaign for the Kingster University is the largest fundraising campaign in history. With a historic
              $1 billion goal, the campaign is expanding U of T’s global leadership capacity.
            </p>
            <Link href="/donate" className={styles.donateButton}>
              <span className={styles.heartIcon}>❤</span> Become a donor
            </Link>
          </div>

          {/* Upcoming Events Section */}
          <div className={styles.eventsListSection}>
            <h3 className={styles.sectionTitle}>Upcoming Events</h3>
            <div className={styles.sectionDivider}></div>
            <div className={styles.eventsList}>
              {eventsData.map((event) => (
                <div key={event.id} className={styles.eventItem}>
                  <div className={styles.eventDate}>
                    <span className={styles.day}>{event.date.split(" ")[0]}</span>
                    <span className={styles.month}>{event.date.split(" ")[1]}</span>
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
    </div>
  );
};

export default Events;