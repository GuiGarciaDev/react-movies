import './Newsletter.scss'

export default function Newsletter() {

    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className="Newsletter">
            <div className="Newsletter-leftC">
                <img src='newsletter.svg'/>
            </div>
            <div className="Newsletter-rightC">
                <span>Join our newsletter</span>
                <p>Subscribe for stay tuned about all releases</p>
                <form onSubmit={handleSubmit}>
                    <input type={'email'} placeholder='Email...' required/>
                    <button type='submit'>Join</button>
                </form>
            </div>
        </div>
    )
}