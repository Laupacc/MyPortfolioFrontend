import styles from "../styles/LanguageSwitcher.module.css";
import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LanguageSwitcher = () => {
  const { t } = useTranslation();

  const toggleLanguage = (e) => {
    const newLanguage = e.target.value;
    i18next.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.languageSwitcher}>
      <select
        className={styles.toggle}
        onChange={toggleLanguage}
        value={i18next.language}
      >
        <option className={styles.option} value="en">
          🇬🇧
        </option>
        <option className={styles.option} value="fr">
          🇫🇷
        </option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
