import styles from "./styles.module.css";

import {
  ButtonGroup,
  Button,
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaShieldAlt, FaBrain, FaBookOpen, FaSearch } from "react-icons/fa";

export default function SobreProjetoPage() {
  return (
    <div>
      <h1 className={styles.h1}>Sobre o Projeto</h1>

      <Text className={styles.introText}>
        O <strong>Imúnica</strong> é uma plataforma educacional e analítica
        desenvolvida para auxiliar crianças e adolescentes no combate à
        desinformação digital e às fake news.
      </Text>

      {/* CARDS */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        spacing={6}
        gap={6}
        mt="35px"
        mb="35px"
      >
        <Box className={styles.infoCard}>
          <FaShieldAlt className={styles.cardIcon} />
          <Heading size="md">Fake News</Heading>

          <Text>
            Identificação de sinais de desinformação e manipulação digital.
          </Text>
        </Box>

        <Box className={styles.infoCard}>
          <FaBrain className={styles.cardIcon} />
          <Heading size="md">Pensamento Crítico</Heading>

          <Text>
            Desenvolvimento de análise crítica e consumo consciente de
            informações.
          </Text>
        </Box>

        <Box className={styles.infoCard}>
          <FaBookOpen className={styles.cardIcon} />
          <Heading size="md">Educação</Heading>

          <Text>
            Conteúdos educativos e materiais interativos voltados ao público
            jovem.
          </Text>
        </Box>

        <Box className={styles.infoCard}>
          <FaSearch className={styles.cardIcon} />
          <Heading size="md">Análise</Heading>

          <Text>
            Sistema de análise textual baseado em critérios de confiabilidade.
          </Text>
        </Box>
      </SimpleGrid>

      {/* TEXTO */}
      <div className={styles.paragraphs}>
        <Heading size="md" className={styles.subtitle}>
          O problema abordado
        </Heading>

        <Text>
          A desinformação digital e a circulação de fake news se tornaram
          problemas cada vez mais presentes no cotidiano de crianças e
          adolescentes, principalmente através das redes sociais e plataformas
          digitais.
        </Text>

        <Text>
          Muitas informações falsas são compartilhadas rapidamente, dificultando
          a identificação de conteúdos confiáveis e aumentando os riscos de
          manipulação, desinformação e disseminação de notícias enganosas.
        </Text>

        <Text>
          Pensando nesse cenário, a Imúnica foi desenvolvida como uma plataforma
          educacional voltada ao incentivo do pensamento crítico e da
          conscientização digital.
        </Text>

        <Heading size="md" className={styles.subtitle}>
          Como a Imúnica funciona
        </Heading>

        <Text>
          A plataforma possui um sistema de análise textual capaz de avaliar
          conteúdos com base em critérios relacionados à desinformação digital,
          identificando possíveis sinais de fake news e indicando níveis de
          confiabilidade da informação analisada.
        </Text>

        <Text>
          Além do analisador, a Imúnica também conta com uma área educativa
          composta por conteúdos explicativos, materiais de leitura e jogos
          educativos voltados ao desenvolvimento do pensamento crítico e da
          verificação de informações.
        </Text>

        <Heading size="md" className={styles.subtitle}>
          Objetivos da plataforma
        </Heading>

        <ul>
          <li>Auxiliar no combate à desinformação digital</li>
          <li>Incentivar o pensamento crítico</li>
          <li>Ensinar práticas de verificação de informações</li>
          <li>Identificar sinais de manipulação digital</li>
          <li>Promover educação e conscientização digital</li>
          <li>Estimular o uso consciente da internet</li>
        </ul>

        <Heading size="md" className={styles.subtitle}>
          Impacto educacional e social
        </Heading>

        <Text>
          A Imúnica foi desenvolvida utilizando uma abordagem intuitiva, visual
          e interativa, buscando tornar o aprendizado mais acessível para
          crianças e adolescentes.
        </Text>

        <Text>
          O projeto também possui potencial de utilização em escolas e
          instituições educacionais, funcionando como uma ferramenta
          complementar de ensino sobre cidadania digital, educação midiática e
          consumo consciente de informações.
        </Text>

        <Heading size="md" className={styles.subtitle}>
          Continuação e desenvolvimento futuro
        </Heading>

        <Text>
          O projeto continua em desenvolvimento e possui como objetivo expandir
          futuramente suas funcionalidades educativas, sistemas de análise e
          recursos interativos.
        </Text>

        <Text mb={4}>
          Entre as melhorias planejadas estão a ampliação dos critérios de
          análise textual, melhorias na experiência do usuário, expansão dos
          conteúdos educativos, adição de novos jogos educativos e
          aprimoramentos na responsividade, organização e desempenho da
          plataforma.
        </Text>
      </div>
    </div>
  );
}
