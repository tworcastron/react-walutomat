import styles from './Modal.module.css'

export default function Modal({ children, title, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      {/* maska */}
      <div className={styles.mask} />
      <div className={styles.modal}>
        {/* nagłówek */}
        <p className={styles.title}>{title}</p>
        <button
          type='button'
          className={`btn-close ${styles.close}`}
          onClick={onClose}
        />

        {/* treść */}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}