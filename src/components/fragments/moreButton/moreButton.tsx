import React, { useState, useEffect, MouseEvent } from 'react'
import { MoreVertical } from 'react-feather'
import styles from './mb.module.css'
import Modal from 'react-modal'

interface MoreButtonProps {
  options: string[]
}

export default function MoreButton({ options }: MoreButtonProps) {
  const [isOptionsVisible, setOptionsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>('')


  function handleOptionClick(option: string) {
    if (option === 'Hapus' || option === 'Edit') {
      setSelectedOption(option);
      setIsModalOpen(true);
    }
  }

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
      <MoreVertical className={styles.moreIcon} />
    </button>
    {isOptionsVisible && (
      <div className={styles.moreOptions}>
        {options.map((option, index) => (
          <a
            key={index}
            href="#"
            className={styles.option}
            onClick={() => handleOptionClick(option)} // Panggil fungsi saat opsi diklik
          >
            {option}
          </a>
        ))}
      </div>
    )}
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      className={styles.ModalOverlay}
      overlayClassName={styles.ModalOverlay}
    >
      <div className={styles.ModalContent}>
        {selectedOption === 'Hapus' && (
          <>
            <h2>Konfirmasi Hapus</h2>
            <p>Yakin ingin menghapus ini?</p>
            <div className={styles.modalButtons}>
              <button onClick={() => setIsModalOpen(false)}>Tidak</button>
              <button onClick={() => setIsModalOpen(false)}>Ya</button>
            </div>
          </>
        )}

        {selectedOption === 'Edit' && (
          <>
            <h3>Edit Konten</h3>
            <p>Isi modal untuk opsi Edit di sini</p>
            <div className={styles.modalButtons}>
              <button onClick={() => setIsModalOpen(false)} className={styles.closeButton}>Tutup</button>
            </div>
          </>
        )}
      </div>
    </Modal>
  </div>
  );
}
