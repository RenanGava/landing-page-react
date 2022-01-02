export default function Header(){

    const actionMobile = ()=>{
        document.querySelector('.menuMobile__Header')
        .classList.toggle('view')
    }

    return(
        <header>
            <div className='container'>
                <div className='section__Header'>
                    <div className='logo__Marca'>
                        <div className='logo'></div>
                    </div>
                    <div className='menuDesktop__Header'>
                        <a href='#'>Home</a>
                        <a href='#'>Serviços</a>
                        <a href='#'>Sobre</a>
                        <a href='#'>Contato</a>
                    </div>
                    <div className="float__menuBar"  onClick={()=>{actionMobile()}}></div>
                    <div className='menuMobile__Header'>
                        <a href='#'>Home</a>
                        <a href='#'>Serviços</a>
                        <a href='#'>Sobre</a>
                        <a href='#'>Contato</a>
                    </div>
                </div>
                <div className="chamada1">
                    <div>
                        <h2>
                            Sistemas Prórpios
                            <br/>
                            para empresas Autênticas
                        </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Iste, dolorum placeat, fugit illum exercitationem natus .
                        </p>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </header>
        /*  'section__Header'>*/
    )
}