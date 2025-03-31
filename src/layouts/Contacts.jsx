import { Button } from "react-scroll"



function Contacts() {

  const handleSubmit =()=>{}

  return (
    <>
      <main className="my-20">
        <form action="POST" className="form-contacts" id="form-id">
          <div className="bg-white flex justify-center items-center text-center gap-4 w-full p-4">
            <h2 className="subtitle">Contattami!</h2>
          </div>
          <div className="p-6">
            <h3 className="subtitle-secondary">Inserisci nome e email</h3>
            <div className="flex flex-col items-center text-white gap-4 p-6">
              <label htmlFor="name" className="mt-5">Inserisci il tuo nome </label>
              <input type="text" name="name" placeholder="inserisci il tuo nome" className="form-input"  required />
              
              <label htmlFor="email">Inserisci la tua email </label>
              <input type="email" name="email" placeholder="inserisci la tua email" className="form-input" required />
            </div>
          </div>
          <p className="paragraph">I tuoi dati verranno trattati secondo le norme della privacy</p>
          <div className="flex flex-col justify-center items-center gap-4 p-4">
            <div className="flex gap-3">
              <input type="checkbox" name="checkbox"  required />
              <h4>Accetta la nostra privacy</h4>
            </div>
            <Button type="submit" 
              className="custom-button"
              onSubmit={handleSubmit}
              > 
              Contattami!
            </Button>
          </div>
        </form>
      
        
      </main>     
    
    </>
  )
}

export default Contacts