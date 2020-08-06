import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/img/icons/whatsapp.svg';


function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/42950800?s=460&u=9b418c156833b1427bcf6795ec3dbbda4911f7c7&v=4"
          alt="Raphael Renato"
        />
        <div>
          <strong>Raphael Renato</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /> <br />
            Apaixonado por explodir coisas em laboratório e por mudar
            a vida das pessoas através de experiências. Mais de 200.000
            pessoas já passaram por uma das minhas explosões.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong> R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );

}

export default TeacherItem;