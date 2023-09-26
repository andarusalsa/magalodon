import React, { useState, useEffect, MouseEvent } from 'react'
import { MoreVertical } from 'react-feather'
import styles from './mb.module.css'

interface MoreButtonProps {
  options: string[]; 
}

export default function MoreButton({ options }: MoreButtonProps) {
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent<HTMLElement, globalThis.MouseEvent>) {
      if (!event.target || !(event.target instanceof Element)) {
        return;
      }

      if (!event.target.closest('.more')) {
        setOptionsVisible(false);
      }
    }

    // Use 'unknown' as the event type and then explicitly cast to 'EventListener'
    document.addEventListener('click', handleOutsideClick as unknown as EventListener);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('click', handleOutsideClick as unknown as EventListener);
    };
  }, []);

  function toggleOptions() {
    setOptionsVisible((prevState) => !prevState);
  }

  return (
    <div className="more">
      <button className={styles.moreButton} onClick={toggleOptions}>
        <MoreVertical className={styles.moreIcon}/>
      </button>
      {isOptionsVisible && (
        <div className={styles.moreOptions}>
          {options.map((option, index) => (
            <a key={index} href="#" className={styles.option}>
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
