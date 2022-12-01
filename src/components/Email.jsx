import React from 'react'
import emailjs from "emailjs-com";

import "./Email.css"

const Email = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmailMensage', 'template_gcvztph', e.target, 'YNPc3XqSwx7Xjv0Ow')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }

  return (
    <div>
    <div className="container">
    <h2>Infome seu nome e seu email</h2>
    <form onSubmit={sendEmail}>
            <div className="form">
                
                <div className="form-name">
                    <input type="text" autoFocus className="form-control" required placeholder="Nome" name="user_name"/>
                </div>
                <div className="form-email">
                    <input type="email" className="form-control" required placeholder="Seu email" name="user_email"/>
                </div>
                <div className="form-submit">
                    <input type="submit" className="form-button" value="Enviar mensagem"></input>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

export default Email