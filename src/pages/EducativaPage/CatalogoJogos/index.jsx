import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, Card, Image, SimpleGrid } from "@chakra-ui/react";

export default function CatalogoJogos() {
  return (
    <div>
      <h1 className={styles.header}>
        Lista de Jogos
      </h1>

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
                src="/image.datadefenders.png" 
            />
            <Card.Body className={styles.cardContent} gap="2">
              <Card.Title>Data Defenders</Card.Title>
              <Card.Description>
                Jogo educativo de Tower Defense voltado para literacia midiática, ensinando jovens a avaliar notícias e combater desinformação em cenários de crise e conflito. 
              </Card.Description>


                <Button 
                as="a"
                href="https://yo-media.itch.io/data-defenders"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                >
                    Acessar Jogo
                </Button>   
            </Card.Body>
          </div>
        </Card.Root>
      </SimpleGrid>
    </div>
  );
}
