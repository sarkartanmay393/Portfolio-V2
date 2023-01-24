<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <a href="https://github.com/sarkartanmay393/RoomReservation-WebApp">
    <img src="static/readme/logo.png" alt="Logo" width="125" height="125">
  </a>

<h3 align="center">Yatra Sahayak</h3>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
   Check room availability in desired dates, make reservation and get your
reservation summary in Email. Technically a Golang based Web Application with
Database Interaction.
   <br />
   <a href="https://github.com/sarkartanmay393/
RoomReservation-WebApp"><strong>Explore Code »</strong></a>
   <br />
   <br />
   <a href="http://192.46.213.243/" target="_blank" rel="noopener noreferrer" >View Demo</a>
   ·
   <a href="https://github.com/sarkartanmay393/RoomReservation-WebApp/
issues">Report Bug</a>
   ·
   <a href="https://github.com/sarkartanmay393/RoomReservation-WebApp/
issues">Request Feature</a>
 </p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
      <ul>
        <li><a href="#things-i-learned">Things I Learned</a></li>
      </ul>
      <ul>
        <li><a href="#packages-i-used">Packages I Used</a></li>
      </ul>
      <ul>
        <li><a href=“#screenshots">Screenshots</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#steps-to-run">Steps to run</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Built With

* [![Go][Go.dev]][Go-url]
* [![Docker][Docker.com]][Docker-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![PostgreSQL][PostgreSQL.com]][PostgreSQL-url]

### Things I Learned

1. Everything of Basic Web App.
2. Using [**nosurf**](https://github.com/justinas/nosurf) Middleware.
3. Using [**scs**](https://github.com/alexedwards/scs) Session Management.
4. HTML, CSS, JS, Bootstrap etc.
5. Server side validation using Golang.
6. Writing Test Functions in Golang.
7. Interacting with Database using Go.
8. DB Migration using Soda CLI.
9. Setting up Mail server using Go.
10. Sending mail as per user's requirement.

### Packages I Used

1. "net/http"
2. "path/filepath"
3. "text/template"
4. "bytes"
5. "[github.com/go-chi/chi](https://github.com/go-chi/chi)"
6. "[github.com/justinas/nosurf](https://github.com/justinas/nosurf)"
7. "[github.com/alexedwards/scs/v2](https://github.com/alexedwards/scs/v2)"
8. "[notie](https://github.com/jaredreich/notie)" (JavaScript)
9. "[datepicker](https://github.com/mymth/vanillajs-datepicker)"  (JavaScript)
10. "[github.com/asaskevich/govalidator](https://github.com/asaskevich/govalidator)"
11. "[github.com/xhit/go-simple-mail/v2](https://github.com/xhit/go-simple-mail/v2)"
12. “[soda cli tool](https://gobuffalo.io/documentation/database/soda/)”

### Screenshots

<details>
   <summary><strong>Show</strong> </summary>

<div style="text-align: center;"> <strong><i>Highland Room Outlook</i></strong></div>

![Hinghland Rooms](static/screenshots/highend-room-page.png "Highend Room Page")

<div style="text-align: center;"> <strong><i>Reservation Form Page</i></strong></div>

![](static/screenshots/reservation-form-page.png "Reservation Form Page")

<div style="text-align: center;"> <strong><i>Reservation Summary Page</i></strong></div>

![](static/screenshots/reservation-summary-page.png "Reservation Summary Page")

<div style="text-align: center;"> <strong><i>Reservation Email Outlook</i></strong></div>

![](web/email-template/email-outlook.png "Reservation Email Outlook")

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Running a development environment for this project will be the easiest thing in you day.

### Prerequisites

* [**Go**](https://go.dev/dl/)
* [**Docker**](https://www.docker.com)

### Steps to run

* Clone the repository

  ```zsh
  git clone https://github.com/sarkartanmay393/RoomReservation-WebApp.git
  ```

* Run the following command to start everything using Docker

  ```zsh
  docker compose up
  ```

* Execute `web` container on terminal

  ```zsh
  docker exec -it web bash
  ```

* Command you need to pass inside running the container

  ```bash
  soda migrate up
  ```

<br />

> If any issue occured while running the server, just delete the roomreservation image from docker and start the compose again.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

* [x] Web Application
* [x] Styling w/ Bootstrap
* [x] Database
* [x] Email Service
* [ ] New Responsive UI
* [ ] Real Project Transformation

See the [open issues](https://github.com/sarkartanmay393/RoomReservation-WebApp/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -s -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
6. Wait for review

<!-- CONTACT -->
## Contact

Your Name - Tanmay Sarkar [@sarkartanmay393](https://twitter.com/sarkartanmay393) - [hello@tanmaysarkar.tech](mailto:hello@tanmaysarkar.tech)

Project Link: [https://github.com/sarkartanmay393/RoomReservation-WebApp](https://github.com/sarkartanmay393/RoomReservation-WebApp)

**Thanks for visiting my project. If you like it, please give it a star. It will help me a lot. Thanks again!**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/sarkartanmay393/RoomReservation-WebApp.svg?style=for-the-badge
[contributors-url]: https://github.com/sarkartanmay393/RoomReservation-WebApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sarkartanmay393/RoomReservation-WebApp.svg?style=for-the-badge
[forks-url]: https://github.com/sarkartanmay393/RoomReservation-WebApp/network/members
[stars-shield]: https://img.shields.io/github/stars/sarkartanmay393/RoomReservation-WebApp.svg?style=for-the-badge
[stars-url]: https://github.com/sarkartanmay393/RoomReservation-WebApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/sarkartanmay393/RoomReservation-WebApp.svg?style=for-the-badge
[issues-url]: https://github.com/sarkartanmay393/RoomReservation-WebApp/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/tanmaysrkr
[Go.dev]: https://img.shields.io/badge/Go-027d9c?style=for-the-badge&logo=go&logoColor=white
[Go-url]: https://go.dev/
[Docker.com]: https://img.shields.io/badge/Docker-2496ed?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[PostgreSQL.com]: https://img.shields.io/badge/PostgreSQL-4169e1?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
