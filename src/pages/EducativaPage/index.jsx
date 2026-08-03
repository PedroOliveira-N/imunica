import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, Card, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function EducativaPage() {

  return (
    <div>
      <div className={styles.centerfied}>
        <h1 className={styles.h1}>Área Educativa</h1>
        <p>
          Nesta página você encontrará o catálogo de ferramentas educativas
          pensadas para desenvolver uma espécie de "imunidade" sobre a
          desinformação.
        </p>
        <p className={styles.alerta}>
          Os cookies e termos de uso de sites externos são de responsabilidade de seus respectivos proprietários.
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

                <Link to="/area-educativa/catalogo-jogos">
                  <Button className={styles.linkButton}>
                    Lista de Jogos
                  </Button>
                </Link>

              </Card.Body>
            </div>
          </Card.Root>

          <Card.Root className={styles.cardHorizontal} mb='1'>
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
              <Link to="/area-educativa/catalogo-leitura">
                  <Button className={styles.linkButton}>
                    Lista de Leitura
                  </Button>
                </Link>
            </Card.Body>
            </div>
          </Card.Root>
        </SimpleGrid>
      </div>
    </div>
  );
}
