import styles from "./styles.module.css";
import { Button, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function EducativaPage() {
  const alerta = () => {
    alert("Esta Função Ainda em Desenvolvimento!");
  };

  return (
    <div>
      <div className={styles.centerfied}>
        <h1 className={styles.h1}>Área Educativa</h1>
        <p>
          Nesta página você encontrará o catálogo de ferramentas educativas
          pensadas para desenvolver uma espécie de "imunidade" sobre a
          desinformação.
        </p>
      </div>

      <div className={styles.cards}>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 1,
            md: 2,
          }}
          gap="12px"
          width="100%"
          justifyItems="center"
          mb={4}
        >
          <Card.Root className={styles.cardHorizontal}>
            <div className={styles.parteHorizontal}>
              <Image
                className={styles.img}
                src="/image.games.png"
                alt="jogos"
                objectFit="cover"
              />
              <Card.Body className={styles.cardContent} gap="2">
                <Card.Title>Jogos Educativos</Card.Title>
                <Card.Description>
                  Saiba mais sobre a desinformação digital através de jogos e
                  atividades interativas!
                </Card.Description>

                <Button className={styles.linkButton} onClick={alerta}>
                  Lista de Jogos
                </Button>
              </Card.Body>
            </div>
          </Card.Root>

          <Card.Root className={styles.cardHorizontal}>
            <div className={styles.parteHorizontal}>
            <Image
              className={styles.img}
              src="/image.reading.png"
              alt="leitura"
              objectFit="cover"
            />
            <Card.Body className={styles.cardContent} gap="2">
              <Card.Title>Material de Leitura</Card.Title>
              <Card.Description>
                Saiba mais sobre a desinformação digital através de conteúdo
                informativo!
              </Card.Description>
              <Button className={styles.linkButton} onClick={alerta}>
                  Lista de Jogos
              </Button>
            </Card.Body>
            </div>
          </Card.Root>
        </SimpleGrid>
      </div>
    </div>
  );
}
