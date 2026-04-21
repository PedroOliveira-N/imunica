import { useState } from "react";
import styles from './styles.module.css'
import { Button, Field, Heading, Textarea } from "@chakra-ui/react";

export default function AnalisadorPage () {
    const [texto , setTexto] = useState("");
    const [resultado , setResultado] = useState(null);

    function analisar () {
        let riscos = 0;
        let motivos = [];

        const textoLower = texto.toLowerCase()

        const compartilhamento = ["compartilhe", "envie", "poste"];
        const urgentismo = ["urgente", "!!!", "faça"];

        if (compartilhamento.some(t => textoLower.includes(t))) {
            riscos += 2
            motivos.push("Incentivo ao compartilhamento em massa.")
        }

        if (urgentismo.some(t => textoLower.includes(t))) {
            riscos += 2
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
        <div>
          <h1 className={styles.header}>Analisador</h1>

          <p></p>

            <Textarea
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              placeholder="Cole aqui a mensagem..."
              className={styles.textarea}
            />

            <Button 
              onClick={analisar}
              className={styles.button}>
              Analisar</Button>

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