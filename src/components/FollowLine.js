import '../styles/FollowLine.css';

const GithubSVG = require('../assets/github.svg').default;
const TwitterSVG = require('../assets/twitter.svg').default;
const LinkedinSVG = require('../assets/linkedin.svg').default;

export default function FollowLine() {
    const socialLinks = (domain, handle) => {
        let baseUrl = 'https://www.';
        switch (domain) {
            default: {
                return;
            }
            case "github": {
                baseUrl += 'github.com/';
                break;
            }
            case "linkedin": {
                baseUrl += 'linkedin.com/';
                break;
            }
            case "twitter": {
                baseUrl += 'twitter.com/';
                break;
            }
        }
        return baseUrl + handle;
    }
    return (
        <section className='follow-line'>
            <hr />
            <a href={socialLinks("github", "sarkartanmay393")} rel='noreferrer' target='_blank'><img src={GithubSVG} alt='github-ref' /></a>
            <a href={socialLinks("twitter", "sarkartanmay393")} rel='noreferrer' target='_blank'><img src={TwitterSVG} alt='twitter-ref' /></a>
            <a href={socialLinks("linkedin", "in/tanmaysrkr")} rel='noreferrer' target='_blank'><img src={LinkedinSVG} alt='linkedin-ref' /></a>
        </section>
    );
}