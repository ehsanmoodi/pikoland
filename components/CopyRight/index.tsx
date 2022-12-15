import { useTranslation } from "next-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

const CopyRight: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="section__copy-right">
      <LanguageSwitcher />
      <span>{t("copyright")}</span>
    </div>
  );
};

export default CopyRight;
