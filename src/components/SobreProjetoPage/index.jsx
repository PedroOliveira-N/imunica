import styles from "./styles.module.css"

import {
  ButtonGroup,
  Button,
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  FaShieldAlt,
  FaBrain,
  FaBookOpen,
  FaSearch,
} from "react-icons/fa";

export default function SobreProjetoPage () {
<div className={styles.projectSection}>
  <Heading className={styles.h1}>Sobre o Projeto</Heading>

  <div className={styles.sectionDivider}></div>

  <Text className={styles.introText}>
    O <strong>Imúnica</strong> é uma plataforma educacional e analítica
    desenvolvida para auxiliar crianças e adolescentes no combate à
    desinformação digital e às fake news.
  </Text>

  {/* CARDS */}
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 4 }}
    spacing={6}
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
      O problema da desinformação
    </Heading>

    <Text>
      Em um cenário onde informações falsas circulam rapidamente nas redes
      sociais e meios digitais, a Imúnica surge como uma ferramenta de
      conscientização e aprendizado.
    </Text>

    <Heading size="md" className={styles.subtitle}>
      Como a plataforma funciona
    </Heading>

    <Text>
      A plataforma conta com um analisador de textos capaz de avaliar
      conteúdos com base em critérios fixos relacionados à desinformação,
      indicando possíveis níveis de confiabilidade da informação.
    </Text>

    <Text>
      Além disso, possui uma área educativa composta por materiais de
      leitura, conteúdos explicativos e jogos educativos voltados ao
      desenvolvimento do pensamento crítico.
    </Text>

    <Heading size="md" className={styles.subtitle}>
      Objetivos da Imúnica
    </Heading>

    <ul>
      <li>Identificar possíveis fake news</li>
      <li>Reconhecer sinais de manipulação digital</li>
      <li>Desenvolver pensamento crítico</li>
      <li>Aprender práticas de verificação</li>
      <li>Navegar pela internet com mais segurança</li>
    </ul>

    <Heading size="md" className={styles.subtitle}>
      Impacto Educacional
    </Heading>

    <Text>
      A plataforma foi desenvolvida utilizando uma abordagem intuitiva,
      visual e interativa, permitindo que seu uso seja simples e acessível
      para crianças e adolescentes.
    </Text>

    <Text>
      Além do uso individual, a Imúnica também poderá ser utilizada em
      parceria com escolas e instituições educacionais.
    </Text>
  </div>
</div>
}