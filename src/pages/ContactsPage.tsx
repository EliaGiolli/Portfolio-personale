//Components
import FormComponent from "../layouts/FormComponent";
//Internal imports
import { useThemeStore } from "../store/store";
//External libs
import { useTranslation } from "react-i18next";

function ContactsPage() {

  const initialTheme = useThemeStore(state => state.initialTheme);
  const { t } = useTranslation('common');

  return (
    <section className="my-[20px] flex flex-col justify-center items-center text-center">
      <div className="p-6">
        <h1 className={`text-3xl md:text-4xl font-extrabold leading-tight p-3
          ${initialTheme === 'dark' ? 'text-cyan-300' : 'text-blue-600'} `}>
          {t("contactpage.title")}
        </h1>
        <p className={`text-lg md:text-xl w-full sm:max-w-3xl my-5 
          ${initialTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
          {t("contactpage.paragraph")}
        </p>
      </div>
      <FormComponent />
    </section>
  )
}

export default ContactsPage