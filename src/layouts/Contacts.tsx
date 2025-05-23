import Button from "../components/Button"
import InputField from "../components/InputField"

import { useTheme } from "../contexts/ThemeContext"
import { ContactFormData } from "../types/generalTypes"
import { useOnSubmit } from "../custom hooks/useOnSubmit"

//External libraries
import {Element} from 'react-scroll'
import { useForm } from "react-hook-form"


function Contacts() {

  //tema
  const {themeMode} = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = useOnSubmit(reset);
 
  return (
    <>
      <Element name="contacts" className="mt-20 pb-10">
        <form 
          action="POST" 
          onSubmit={handleSubmit(onSubmit)} 
          className={`bg-inherit w-full max-w-3xl mx-auto p-6 ${themeMode ==='dark'?'text-primary':'text-gray-900'}`} id="form-id"
          >
          <div className="flex justify-center items-center text-center gap-4 w-full p-4">
            <h2 className={`subtitle border-b-1 ${themeMode==='dark'?'text-tertiary border-b-white':'text-blue-400 border-b-blue-500'}`}>Contattami!</h2>
          </div>
          <div className="p-6">
            <h3 className="subtitle-secondary">Inserisci nome e email</h3>
            <div className="flex flex-col items-center gap-4 p-6">
              <label htmlFor="name" className="mt-5">Inserisci il tuo nome </label>
              <InputField 
                type="text"
                {...register("nome",
                  {required:"il campo è obbligatorio",
                    minLength: {value: 3, message:"nome utente troppo corto"},
                    maxLength: 10
                })} 
                placeholder="inserisci il tuo nome" 
                className={`w-full transition-all mr-0 sm:mr-6 p-3 my-5 md:my-0 ${themeMode ==='dark'?'bg-secondary text-primary rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-800 ':'bg-white text-gray-900 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 '}`}
              />
              {errors.nome && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.nome.message}</p>}
              <label htmlFor="email">Inserisci la tua email </label>
              <InputField
                {...register("email",
                  {required:"il campo è obbligatorio",
                    minLength:3,
                    pattern:{
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Inserisci un'email valida"
                    }
                  })} 
                placeholder="inserisci la tua email" 
                className={`w-full transition-all mr-0 sm:mr-6 p-3 my-5 md:my-0 ${themeMode ==='dark'?'bg-secondary text-primary rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-800 ':'bg-white text-gray-900 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 '}`}
                />
                {errors.email && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.email.message}</p>}
            </div>
          </div>
          <p className="paragraph">I tuoi dati verranno trattati secondo le norme della privacy</p>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex gap-3">
              <InputField type="checkbox" {...register("privacy", { required: "Devi accettare la privacy" })} />
              <label>Accetta la nostra privacy</label>
            </div>
            {errors.privacy && <p className="bg-red-100 text-red-600 text-2xl p-2">{errors.privacy.message}</p>}
            <Button
              disable={isSubmitting}
              type="submit" 
              className="custom-button"
              > 
              Contattami!
            </Button>
          </div>
        </form>
      </Element>     
    
    </>
  )
}

export default Contacts