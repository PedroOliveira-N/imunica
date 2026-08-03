import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, Card, Image, SimpleGrid } from "@chakra-ui/react";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function CatalogoLeitura() {
  return (
    <div className={styles.catalogoPage}>
      <section className={styles.header}>
        <h1 className={styles.h1}>Lista de Materiais</h1>

        <Link to="/area-educativa" className={styles.backLink}>
        <Button className={styles.backButton}>
          <IoIosArrowRoundBack/>
        </Button>
        </Link>
      </section>  

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
              alt="jogos"
              objectFit="cover"
              src="/image.todamateria.png"
            />
            <Card.Body className={styles.cardContent} gap="2">
              <Card.Title>O Que São Fake News</Card.Title>
              <Card.Description>
                Entenda o que são fake news, como elas surgiram, exemplos de fake news, como elas funcionam e etc.
              </Card.Description>

              <Card.Description>
                <strong>Matéria Por:</strong> Toda Matéria
              </Card.Description>

              <Button
                as="a"
                href="http://todamateria.com.br/fake-news/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Acessar Matéria
              </Button>
            </Card.Body>
          </div>
        </Card.Root>

                <Card.Root className={styles.cardHorizontal}>
          <div className={styles.parteHorizontal}>
            <Image
              className={styles.img}
              alt="jogos"
              objectFit="cover"
              src="/image.jornaldausp.png"
            />
            <Card.Body className={styles.cardContent} gap="2">
              <Card.Title>Como Identificar e Combater as Fake News no Brasil</Card.Title>
              <Card.Description>
                Entenda como identificar e combater as fake news e deep fakes dentro da realidade brasileira.
              </Card.Description>

              <Card.Description>
                <strong>Matéria Por:</strong> Jornal da USP
              </Card.Description>

              <Button
                as="a"
                href="https://jornal.usp.br/atualidades/como-identificar-e-combater-as-fake-news-no-brasil/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                Acessar Matéria
              </Button>
            </Card.Body>
          </div>
        </Card.Root>
      </SimpleGrid>
    </div>
  );
}
