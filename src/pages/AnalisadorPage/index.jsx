import { useState } from "react";
import styles from './styles.module.css'
import { Button } from "@chakra-ui/react";

export default function AnalisadorPage () {
    const [texto , setTexto] = useState("");
    const [resultado , setResultado] = useState(null);

    function analisar () {
        let riscos = 0;
        let motivos = [];
        let nivel = "Baixo"

        const textoLower = texto.toLowerCase()

        const compartilhamento = ["compartilhe", "envie", "poste"];
        const urgentismo = ["urgente", "!!!", "faça"];

        if (!texto.trim()) return;

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

        if (riscos >= 4) {
          nivel = "Alto"
        } else if (riscos >= 2) {
          nivel = "Médio"
        }
      
        setResultado({
          riscos,
          motivos,
          nivel
        })
      }

    return(
        <div className={styles.body}>
          <h1 className={styles.header}>Analisador</h1>

          <p className={styles.paragraph}>O analisador vai descobrir quais as chances de uma mensagem ser falsa. <br/>Cole uma mensagem e teste agora!</p>

          <div className={styles.analisador}>

            <textarea
              id="mensagem"
              name="mensagem"
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
                <p style={{
                  color:
                    resultado.nivel === "Alto"
                      ? "red"
                    : resultado.nivel === "Médio"
                      ? "orange"
                      : "green"
                      }}>
                        Nível: {resultado.nivel}
                </p>

                <br/>

                <p>
                  {resultado.nivel === "Alto" && "Alto risco de desinformação."}
                  {resultado.nivel === "Médio" && "Possível desinformação. Verifique antes de compartilhar."}
                  {resultado.nivel === "Baixo" && "Poucos sinais de desinformação."}
                </p>

                <br/>

                <strong style={{ fontSize:"110%"}}>{resultado.riscos >= 1 && "Motivos:"}</strong>
                <ul>
                  {resultado.motivos.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
    )}