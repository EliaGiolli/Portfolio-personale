//Components
import Button from "../components/Button"
import InputField from "../components/InputField"
//Internal imports
import { useThemeStore } from "../store/store"
import { useOnSubmit } from "../custom hooks/useOnSubmit"
//External libraries
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
//Types
import { ContactFormData } from "../types/generalTypes"

function Contacts() {

  const initialTheme = useThemeStore(state => state.initialTheme);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = useOnSubmit(reset);
 
  return (
    <>
      <section className="mt-20 pb-10">
        <form 
          action="POST" 
          onSubmit={handleSubmit(onSubmit)} 
          className={`bg-inherit w-full max-w-3xl mx-auto p-6 
            ${initialTheme ==='dark'?'text-white':'text-gray-800'}`} 
            id="form-id"
        >
          <div className="flex justify-center items-center text-center gap-4 w-full p-4">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center break-words border-b-1 
              ${initialTheme==='dark'?'text-cyan-300 border-b-white':'text-blue-600 border-b-blue-600'}`}>
              {t("contact.h2", "Contattami!")}
            </h2>
          </div>
          <div className="p-6">
            <h3 className="text-xl sm:text-2xl text-center">{t("contact.h3", "Inserisci nome e email")}</h3>
            <div className="flex flex-col items-center gap-4 p-6">
              <label htmlFor="name" className="mt-5">{t("contact.name.label", "Inserisci il tuo nome")}</label>
              <InputField 
                type="text"
                {...register("nome",
                  {required: t("contact.name.required", "il campo è obbligatorio"),
                    minLength: {value: 3, message: t("contact.name.short", "nome utente troppo corto")},
                    maxLength: 10
                })} 
                placeholder={t("contact.name.placeholder", "inserisci il tuo nome")} 
                className={`w-full transition-all mr-0 sm:mr-6 p-3 my-5 md:my-0 
                  ${initialTheme ==='dark'?'bg-gray-700 text-white rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-800 ':'bg-white text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-200'}`}
              />
              {errors.nome && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.nome.message}</p>}
              <label htmlFor="email">{t("contact.email.label", "Inserisci la tua email")}</label>
              <InputField
                {...register("email",
                  {required: t("contact.email.required", "il campo è obbligatorio"),
                    minLength:3,
                    pattern:{
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: t("contact.email.invalid", "Inserisci un'email valida")
                    }
                  })} 
                placeholder={t("contact.email.placeholder", "inserisci la tua email")} 
                className={`w-full transition-all mr-0 sm:mr-6 p-3 my-5 md:my-0 
                  ${initialTheme ==='dark'?'bg-gray-700 text-white rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-800 ':'bg-white text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-gray-200'}`}
              />
              {errors.email && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.email.message}</p>}
            </div>
          </div>
          <p className="text-center text-lg sm:text-2xl p-3">{t("contact.privacy.p", "I tuoi dati verranno trattati secondo le norme della privacy")}</p>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex gap-3">
              <InputField type="checkbox" {...register("privacy", { required: t("contact.privacy.label", "Devi accettare la privacy") })} />
              <label>{t("contact.privacy.label", "Accetta la nostra privacy")}</label>
            </div>
            {errors.privacy && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.privacy.message}</p>}
            <Button
              disabled={isSubmitting}
              type="submit" 
              className="custom-button"
            > 
              {t("contact.btn", "Contattami!")}
            </Button>
          </div>
        </form>
      </section>     
    </>
  )
}

export default Contacts