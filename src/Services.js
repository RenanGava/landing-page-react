export default function Services(props){
    return(
    <>
        <section className="sessao1">
            <div className="texto__sessao1">
                <h2 className="texto">Desenvolvemos Sistemas únicos</h2>
                <p className="texto">Lorem ipsum dolor sit amet.</p>
                <ul>
                    <li className="texto">Sites</li>
                    <li className="texto">Lojas Virtuais</li>
                    <li className="texto">Sistemas</li>
                </ul>
                <div className="btn__texto">
                    <a href="#">
                        Entar em Contato
                    </a>
                </div>
            </div>
            <div className="device__sessao1">
                <img src={props.device}/>
            </div>
        </section>
        <section className='sessao2'>
            <div className='container'>
                <h2>Desenvolvidos De Pessoas Para Pessoas</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto unde 
                    minus dolorum repudiandae et beatae dolorem. Poss imus deserunt delectus 
                    cum, aspernatur ratio ne consequuntur ea culpa doloremque quasi obca ecati 
                    ab ducimus laboriosam eos. Sequi soluta quod fugiat ratione ea eveniet? 
                    Ipsum fugit rem al ias debitis veniam vero ratione corrupti magnam ipsam!
                </p>

                <img src={props.mockup}/>

            </div>
        </section>
    </>
    )
}