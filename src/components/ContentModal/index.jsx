import { Button } from '@chakra-ui/react';
import styles from './styles.module.css'

export default function ContentModal({
  isOpen,
  title,
  items,
  onClose
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>{title}</h2>

        {items.map((item) => (
          <Button
            key={item.nome}
            onClick={item.onClick}
          >
            {item.nome}
          </Button>
        ))}

        <Button onClick={onClose}>
          Fechar
        </Button>
      </div>
    </div>
  );
}