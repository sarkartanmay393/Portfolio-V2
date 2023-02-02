import './FunFactCard.css';

function FunfactSection() {

    // const wordsToHighlight = [];
    const funFacts = [
        "I like winter more than summer",
        "I often bike with my friends",
        "I like pizza and pasta",
        "I was in Egypt, Poland and Turkey",
        "I’m still studing in school",
        "My favorite movie is The Green Mile",
        "I don’t have any siblings",
    ];

    // funFacts.forEach((value) => {
    //     if (value) {}
    // });


    return (
        <section id='funfact-section'>
            <header>
                <h3><span id='hash'>#</span>my-fun-facts</h3>
            </header>
            <main>
                {funFacts.map((value, index) => {
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