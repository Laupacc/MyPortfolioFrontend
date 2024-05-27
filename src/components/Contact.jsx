import styles from "../styles/Contact.module.css";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

function Contact() {
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Form Data: ", {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    });

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
          console.log(error.text);
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

  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      <main className={styles.main}>
        <div className={isDesktop ? styles.fadeDesktop : styles.fadeMobile}>
          <Fade {...(isDesktop ? { right: true } : { bottom: true })}>
            <div className={styles.formwrapper}>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <input
                  className={styles.formfield}
                  required
                  label="name"
                  type="text"
                  placeholder={t("contact.name")}
                  name="name"
                />
                <input
                  className={styles.formfield}
                  required
                  label="email"
                  type="email"
                  autoComplete="on"
                  placeholder={t("contact.email")}
                  name="email"
                />
                <textarea
                  className={styles.formfield}
                  required
                  label="message"
                  autoComplete="on"
                  placeholder={t("contact.message")}
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
      </main>
    </div>
  );
}
export default Contact;
