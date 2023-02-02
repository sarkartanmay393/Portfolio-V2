import './FunFactCard.css';

function FunfactSection({ funfacts, funfact_highlights }) {
    return (
        <section id='funfact-section'>
            <header>
                <h3><span id='hash'>#</span>my-fun-facts</h3>
            </header>
            <main>
                {funfacts.map((value, index) => {
                    return (
                        <section key={`${index}-${value}`} className='funfact'>
                            <p className='funfact-text'>{value}</p>
                        </section>
                    );
                })}
            </main>
        </section>
    );
}

export default FunfactSection;