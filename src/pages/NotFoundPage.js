import '../styles/NotFoundPage.css';


function NotFoundPage() {
    return (
        <section className='notfound-page'>
            <main className='notfound-page-main'>
                <h1>404: Page not found!</h1>
                <p>Go back to <a href='/'>Homepage</a></p>
            </main>
        </section>
    );

}

export default NotFoundPage;