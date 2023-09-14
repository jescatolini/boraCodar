import Image from "next/image";
import styles from "./GenerateTicket.module.css";
import fetchGitHubData from "../../service/github";

import githubIcon from "../../../../public/githubIcon.svg";
import success from "../../../../public/success.svg";
import { useEffect, useState } from "react";

export default function GenerateTicket({ setTicketData }) {
  const [username, setUsername] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);
  const [ticketGenerated, setTicketGenerated] = useState(false);

  const onFetchData = async (username) => {
    try {
      const data = await fetchGitHubData(username);
      if (data.message === "Not Found") {
        setInvalidUser(true);
      } else {
        setTicketGenerated(true);
      }
      setTicketData(data);
    } catch (error) {
      setTicketData(null);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleGenerateTicket = () => {
    onFetchData(username);
  };

  useEffect(() => {
    if (ticketGenerated || invalidUser) {
      const timer = setTimeout(() => {
        setTicketGenerated(false);
        setInvalidUser(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [ticketGenerated, invalidUser]);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        gere seu ticket e compartilhe com o mundo
      </h1>
      <h6 className={styles.subtitle}>Digite seu usuário do GitHub</h6>
      {ticketGenerated && (
        <div className={styles.userSuccess}>
          <Image
            className={styles.checkedUser}
            src={success}
            alt=""
            layout="responsive"
          />
          <h6>Ticket gerado com sucesso</h6>
        </div>
      )}

      <div className={styles.inputContainer}>
        <label className={styles.labelGithubInput} htmlFor="githubUser">
          <Image src={githubIcon} alt="github icon" width={20} height={20} />
        </label>
        <input
          className={styles.inputGithubUser}
          type="text"
          name="githubUser"
          id="githubUser"
          placeholder="Nome de usuário"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      {invalidUser && (
        <h4 className={styles.checkedFailedUser}>
          Usuário inválido. Verifique e tente novamente.
        </h4>
      )}
      <button
        className={styles.buttonTicket}
        onClick={handleGenerateTicket}
        type="submit"
      >
        Gerar meu ticket
      </button>
    </main>
  );
}
