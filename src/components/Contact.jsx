import styles from "../styles/Contact.module.css";
import { TextField } from "@material-ui/core";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: t("contact.success"),
            showConfirmButton: false,
            timer: 2500,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: t("contact.error"),
            showConfirmButton: false,
            timer: 2500,
          });
        }
      );
  };
  const { t } = useTranslation();
  return (
    <div>
      <main className={styles.main}>
        <Sidebar />
        <div className={styles.container}>
          <Fade right>
            <div className={styles.formwrapper}>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <input
                  required
                  label="Name"
                  type="text"
                  name="name"
                  placeholder={t("contact.name")}
                  className={styles.formfield}
                />
                <input
                  required
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="on"
                  placeholder={t("contact.email")}
                  className={styles.formfield}
                />
                <textarea
                  required
                  label="Message"
                  name="message"
                  autoComplete="on"
                  placeholder={t("contact.message")}
                  className={styles.formfield}
                  rows="5"
                />
                {/* <button type="submit" value="Send" className={styles.submitBtn}>
                  <span component="span">{t("contact.send")}</span>
                </button> */}
                <button className={styles.submitBtn_pushable}>
                  <span className={styles.submitBtn_shadow}></span>
                  <span className={styles.submitBtn_edge}></span>
                  <span className={styles.submitBtn_front}>
                    {t("contact.send")}
                  </span>
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </main>
    </div>
  );
}
export default Contact;
