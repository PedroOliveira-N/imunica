import styles from "./styles.module.css";
import { Button, Card, Image, Text } from "@chakra-ui/react";

export default function EducativaPage() {
  return (
    <div>
      <Card.Root maxW="sm" overflow="hidden">
        <Image
          className={styles.img}
          src="blob:https://translate.google.com.br/f2948010-f269-4349-9a63-4c2706b924ae"
          alt=""
        />
        <Card.Body gap="2">
          <Card.Title>Living room Sofa</Card.Title>
          <Card.Description>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces.
          </Card.Description>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            $450
          </Text>
        </Card.Body>
        <Card.Footer gap="2">
          <Button variant="solid">Buy now</Button>
          <Button variant="ghost">Add to cart</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
