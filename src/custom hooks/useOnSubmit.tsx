import emailjs from '@emailjs/browser';
import { ContactFormData } from '../types/generalTypes';

export function useOnSubmit(reset: () => void) {
  const onSubmit = async (data: ContactFormData) => {
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(() => {
      console.log("email inviata con successo!");
      reset();
    })
    .catch((err) => console.error("errore nell'invio della mail", err));
  };

  return onSubmit;
}