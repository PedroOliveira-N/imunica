import { useState } from "react";
import styles from './styles.module.css'
import { Button, Clipboard, Field, Heading, Textarea } from "@chakra-ui/react";

export default function AnalisadorPage () {
    const [texto , setTexto] = useState("");
    const [resultado , setResultado] = useState(null);

    function analisar () {
        let riscos = 0;
        let motivos = [];

        const textoLower = texto.toLowerCase()

        const compartilhamento = ["compartilhe", "envie", "poste"];
        const urgentismo = ["urgente", "!!!", "faça"];

        if (!texto.trim()) return;

        if (compartilhamento.some(t => textoLower.includes(t))) {
            riscos += 1
            motivos.push("Incentivo ao compartilhamento em massa.")
        }

        if (urgentismo.some(t => textoLower.includes(t))) {
            riscos += 1
            motivos.push("Linguagem urgente.")
        }

        if (!textoLower.includes("http")) {
            riscos += 1
            motivos.push("Falta de fontes")
        }
      
        setResultado({
          riscos,
          motivos
        })
      }

    return(
        <div className={styles.body}>
          <h1 className={styles.header}>Analisador</h1>

          <p className={styles.paragraph}>O analisador vai descobrir quais as chances de uma mensagem ser falsa. <br/>Cole uma mensagem e teste agora!</p>

          <div className={styles.analisador}>
            <Clipboard.Root value={texto}>
              <Clipboard.Trigger asChild>
                <Button variant="surface" size="sm" className={styles.copyButton}>
                <Clipboard.Indicator />
                <Clipboard.CopyText />
                </Button>
              </Clipboard.Trigger>
            </Clipboard.Root>

            <textarea
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Cole aqui a mensagem..."
              className={styles.textarea}
            />

            <Button 
              onClick={analisar}
              disabled={!texto.trim()}
              className={styles.analyzeButton}>
              Analisar
            </Button>
          </div>

            {resultado && (
              <div>
                <p>Riscos: {resultado.riscos}</p>

                <ul>
                  {resultado.motivos.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
    )}