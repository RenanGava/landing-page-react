export default function Team(props){
    var time = 2000,
    currentAutorIndex = 0,
    autor = document.querySelectorAll('.sobre__autor'),
    bullet = document.querySelectorAll('.wraper-bullets span'),
    indexOldAutor = 0,
    max = autor.length

    function nextImage(){

        if(autor[currentAutorIndex].classList != autor[currentAutorIndex].classList.contains('view')){
            bullet[indexOldAutor].classList.remove('selected')
            autor[indexOldAutor].classList.remove('view')
            bullet[currentAutorIndex].classList.add('selected')
            autor[currentAutorIndex].classList.add('view')
        }
        indexOldAutor = currentAutorIndex
        currentAutorIndex++
        if(currentAutorIndex == max){
            currentAutorIndex = 0
        }
    }

    function Start(){
        nextImage()
        setInterval(()=>{
            nextImage()
        }, time)
    }
    window.onload = Start()
    return(
        <section className='sessao3'>
            <div className='parte1'>
                <div className='wraper-parte1'>
                    <h2>Nosso Time</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic 
                        nostrum earum tempore enim quasi consequatur similique 
                        necessitatibus quia error et eos amet, commodi aliquid, 
                        atque assumenda! Cum doloremque at quasi!
                    </p>
                </div>
            </div>
            <div className='parte2'>
                <div className='sobre__autor'>
                    <div className='Title'>
                        <div className='nome'>
                            <h2>Renan D. Gava</h2>
                            <p>Co-Founder / Full-Stack Dev</p>
                        </div>
                        <div className='img-autor'>
                            <img src={props.actor}/>
                        </div>
                    </div>
                    <div className='texto-autor'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Beatae quisquam est suscipit, consectetur blanditiis ex 
                        culpa cupiditate aliquid neque voluptatem quasi dolore sunt.
                        </p>
                    </div>
                </div>
                <div className='sobre__autor'>
                    <div className='Title'>
                        <div className='nome'>
                            <h2>Laura A. Dezan</h2>
                            <p>Co-Founder / Back-end Dev</p>
                        </div>
                        <div className='img-autor'>
                            <img src={props.actor}/>
                        </div>
                    </div>
                    <div className='texto-autor'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Beatae quisquam est suscipit, consectetur blanditiis ex 
                        culpa cupiditate aliquid neque voluptatem quasi dolore sunt.
                        </p>
                    </div>
                </div>
                <div className='sobre__autor'>
                    <div className='Title'>
                        <div className='nome'>
                            <h2>Guilherme Grillo</h2>
                            <p>Co-Founder / Front-end Dev</p>
                        </div>
                        <div className='img-autor'>
                            <img src={props.actor}/>
                        </div>
                    </div>
                    <div className='texto-autor'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Beatae quisquam est suscipit, consectetur blanditiis ex 
                        culpa cupiditate aliquid neque voluptatem quasi dolore sunt.
                        </p>
                    </div>
                </div>
                <div className='wraper-bullets'>
                    <span className='selected'></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    )
}