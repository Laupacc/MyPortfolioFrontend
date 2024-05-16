import styles from "../styles/Contact.module.css";
import { TextField } from "@material-ui/core";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
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
        {/* <div className={styles.container}> */}
        <div className={styles.fadeMobile}>
          <Fade bottom>
            <div className={styles.formwrapper}>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <input
                  required
                  label="name"
                  type="text"
                  placeholder={t("contact.name")}
                  className={styles.formfield}
                  name="name"
                />
                <input
                  required
                  label="email"
                  type="email"
                  autoComplete="on"
                  placeholder={t("contact.email")}
                  className={styles.formfield}
                  name="email"
                />
                <textarea
                  required
                  label="message"
                  autoComplete="on"
                  placeholder={t("contact.message")}
                  className={styles.formfield}
                  rows="5"
                  name="message"
                />
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

        <div className={styles.fadeDesktop}>
          <Fade right>
            <div className={styles.formwrapper}>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <input
                  required
                  label="name"
                  type="text"
                  placeholder={t("contact.name")}
                  className={styles.formfield}
                  name="name"
                />
                <input
                  required
                  label="email"
                  type="email"
                  autoComplete="on"
                  placeholder={t("contact.email")}
                  className={styles.formfield}
                  name="email"
                />
                <textarea
                  required
                  label="message"
                  autoComplete="on"
                  placeholder={t("contact.message")}
                  className={styles.formfield}
                  rows="5"
                  name="message"
                />
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
        {/* </div> */}
      </main>
    </div>
  );
}
export default Contact;
