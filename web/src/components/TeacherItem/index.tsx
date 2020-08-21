import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/34777956?s=460&v=4" alt=""/>
                        <div>
                            <strong>AAAAAAAAAAAAAAAAA</strong>
                            <span>AAAAAAA</span>
                        </div>
                    </header>

                    <p>
                        Ffasjfpijaspfjsapffjspaifjpwkodkopawkdpowfkop
                        <br/><br/>
                        sjdipajsipfjsapijdpwkowqjjwokposdkaopwjfi
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;