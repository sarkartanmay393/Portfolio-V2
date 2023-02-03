import './BlogCard.css';

function BlogSection() {
    const viewAll = `View All ⇢`;

    // eslint-disable-next-line no-unused-vars
    const blogs = [
        {
            link: `https://blog.tanmaysarkar.tech/build-sudoku-solver-engine-using-go`,
            colorCode: "lightgreen",
            views: "281",
            title: "Build Sudoku Solver Engine using Go",
            subtitle: `Solve your unsolved Sudoku patterns just in command. It takes a your pattern, solves it and writes in to a file.`,
            published_on: `Nov 9, 2022`,
            time: `7min read`,
            image: `https://cdn.hashnode.com/res/hashnode/image/upload/v1667654155553/H-nukWZ2r.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`,
        },
        {
            link: `https://blog.tanmaysarkar.tech/deploy-your-containerized-go-web-application`,
            colorCode: "lightpurple",
            views: "134",
            title: "Deploy your containerized Go Web Application",
            subtitle: `Today I am back with a new article on Go, but this is slightly in production side. Today we are going to deploy a simple containerized Go web app on Heroku.`,
            published_on: `Oct 27, 2022`,
            time: `6min read`,
            image: `https://cdn.hashnode.com/res/hashnode/image/upload/v1666810316079/8b-KW6oLp.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`,
        },
        {
            link: `https://blog.tanmaysarkar.tech/building-a-imdb-web-scraper-using-go`,
            colorCode: "yellow",
            views: "438",
            title: "Building a IMDB Web Scraper using Go",
            subtitle: `I thought about let's build a simple cli tool which will take birthday as input and crawl a tiny part of the website IMDB to look for celebrities who born on that date and stores various data into a file outputs/mm-dd.json inside output directory.`,
            published_on: `Oct 21, 2022`,
            time: `9min read`,
            image: `https://cdn.hashnode.com/res/hashnode/image/upload/v1666263676327/ouczJNN0b.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp`,
        },
    ];


    return (
        <section id='blogs'>
            <header>
                <h2><span>#</span>blogs</h2>
                <a id="view-all-a" href='https://blog.tanmaysarkar.tech/' rel="noreferrer" target='_blank'><button id='view-all-btn'>{viewAll}</button></a>
            </header>
            <main>
                {blogs.map((value, index) => {
                    return (
                        <section className='blog-card' onClick={() => { window.open(value.link) }} key={`0-${index}-blog`}>
                            <section id='blog-card-main'>
                                <a href={value.link}><h2>{value.title}</h2></a>
                                <div className='blog-card-row'>
                                    <p id='published-on'>{value.published_on}</p>
                                    <p id='read-time'>{value.time}</p>
                                    <p id='views'>{value.views} views</p>
                                </div>
                                <p id='blog-card-main-subtitle'>{
                                    value.subtitle.length <= 130 ?
                                        value.subtitle :
                                        value.subtitle.slice(0, 125).trim().concat('...')}
                                </p>
                            </section>
                            <section id='blog-card-aside'>
                                <img src={value.image} alt={value.title} />
                            </section>
                        </section>
                    );
                })}
            </main>
        </section>
    );

}

export default BlogSection;