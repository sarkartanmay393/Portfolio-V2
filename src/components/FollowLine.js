import './FollowLine.css';

const GithubSVG = require('../assets/github.svg').default;
const TwitterSVG = require('../assets/twitter.svg').default;
const LinkedinSVG = require('../assets/linkedin.svg').default;

export default function FollowLine() {

    // const redirectTo = (domain, username) => {
    //     window.open(`https://${domain}.com/${username}`, '_blank');
    // };

    return (
        <section>
            <hr />
            <img src={GithubSVG} alt='github-ref' />
            <img src={TwitterSVG} alt='twitter-ref' />
            <img src={LinkedinSVG} alt='linkedin-ref' />
        </section>
    );
}