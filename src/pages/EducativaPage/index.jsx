import styles from "./styles.module.css";
import { Button, Card, Image, Text } from "@chakra-ui/react";

export default function EducativaPage() {
  const alerta = () => {
    alert("Esta Função Ainda em Desenvolvimento!");
  }

  return (
    <div>
      <div className={styles.centerfied}>
        <h1 className={styles.h1}>Área Educativa</h1>
        <p>Nesta página você encontrará o catálogo de ferramentas educativas pensadas para desenvolver uma espécie de "imunidade" sobre a desinformação.</p>
      </div>

      <div className={styles.cards}>
        <Card.Root maxW="50%" overflow="hidden">
          <Image
            minW="100%"
            maxH="60%"
            className={styles.img}
            src="/image.games.png"
            alt="jogos"
          />
          <Card.Body gap="2">
            <Card.Title>Jogos Educativos</Card.Title>
            <Card.Description>
              Saiba mais sobre a desinformação digital através de jogos e
              atividades interativas!
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button className={styles.linkButton} onClick={alerta}>
              Ver Lista de Jogos
            </Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root maxW="50%" overflow="hidden">
          <Image
            className={styles.img}
            src="/image.reading.png"
            alt="leitura"
          />
          <Card.Body gap="2">
            <Card.Title>Material de Leitura</Card.Title>
            <Card.Description>
              Saiba mais sobre a desinformação digital através de conteúdo
              informativo!
            </Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button className={styles.linkButton} onClick={alerta}>
              Ver Lista de Conteúdos
            </Button>
          </Card.Footer>
        </Card.Root>
      </div>
    </div>
  );
}
