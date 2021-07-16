<script>
    const portfolio = [
        {
            name: "The Snitch",
            period: "2019 - Present",
            image: "https://snitchbcc.com/content/barongothic.jpeg",
            list: [
                "Cofounder and co-Editor in Chief of the Snitch, a school satirical publication",
                "Writer, editor, tech/website team leader",
                `Maintain the website source code and perform sysadmin functions`
            ],
            links: [
                ["https://snitchbcc.com", "Website"],
                ["https://github.com/snitchbcc/snitchy2", "Website Source"]
            ]
        },
        {
            name: "Libraries Without Borders",
            period: "June 2021 - July 2021",
            image: "https://www.bibliosansfrontieres.org/wp-content/uploads/2016/06/Logo_LWB_blanc-sur-orange.jpg",
            list: [
                "Added new features to LWB's OLIP, OSS that provides access to information to impovrished communities without access to the internet",
                "Developed a new Svelte-powered frontend for OLIP to increase maintainability",
                `Worked hand-in-hand with PolNum, or digital content team, leaders and members`
            ],
            links: [
                ["https://www.librarieswithoutborders.org/", "Website"],
                ["https://github.com/SuperAuguste/olip-svelte", "Frontend Source"]
            ]
        },
        {
            name: "zls",
            period: "Apr - Jul 2020",
            image: "/showtime.png",
            list: [
                `Created and maintained a tool that drastically accelerates developer workflows`,
                `Used by thousands in the Zig Programming Language community daily`,
                `Explored and implemented Microsoft’s <a href="https://microsoft.github.io/language-server-protocol/">Language Server Protocol</a>`,
                `Established and directed a strong community and group of maintainers`,
                `Presented zls <a href="https://www.youtube.com/watch?v=r5fo7k-XIRI">to the Zig community</a>`
            ],
            links: [
                ["https://github.com/zigtools/zls", "Source Code"]
            ],
        },
        {
            name: "CoderDojo DC",
            period: "2019 - 2020",
            image: "https://coderdojodc.com/css/img/gaussian-dojo.jpg",
            list: [
                `Mentored at Rockville Memorial Library`,
                `Taught 6-7 year olds Scratch, Python, HTML/CSS/JavaScript`,
                `Accrued over 40 community service hours over months of fantastic and fulfilling work`
            ],
            links: [
                ["https://coderdojodc.com", "Website"]
            ]
        },
        {
            name: "Private Suite Magazine",
            period: "2019 - 2020",
            image: "/psm.png",
            list: [
                `Developed a custom CMS that fit the magazine's needs`,
                `Developed a corresponding frontend hand-in-hand with the design team lead`,
                `Wrote music reviews`,
                `Contributed to Issues 6 - 10`
            ],
            links: [
                ["https://github.com/privatesuite", "GitHub"],
                ["https://issuu.com/privatesuitemag", "Issuu"]
            ]
        },
        {
            name: "GeekExpress",
            period: "2017 - 2019",
            image: "/geekexpress.jpg",
            list: [
                "Mentored and taught 5-14 year olds twice a week throughout the year and full-time in July 2018",
                "Taught MIT App Inventor, Web Development HTML/CSS/JS, AR/VR"
            ],
            links: [
                ["https://geekexpress.com", "Website"],
                ["https://www.instagram.com/p/Bglfia-HASu", "Image Source"]
            ]
        },
        {
            name: "CryptoPHI",
            period: "2018 - 2019",
            image: "/cryptophi.jpg",
            list: [
                "Once a week throughout the year, full-time in June 2018",
                "Worked on end-to-end cryptographically secure storage solution",
                "Began implementing backend in NodeJS by reverse-engineered then-current PHP backend",
                "Wrote fully fledged CI tests using TestCafe"
            ],
            links: [
                ["https://gitlab.com/SuperAuguste/vona-api", "Backend"],
                ["https://gitlab.com/vonatech/vonadrive/web-frontend/webclient/-/tree/dev", "Tests"]
            ]
        },
        {
            name: "Innovo",
            period: "Apr 2018",
            image: "/soldering.jpg",
            list: [
                "Created a prototype circuit with just a 555-timer and an LED and rudimentary instructions",
                "Turned that prototype into a PCB using EAGLE and a CNC machine as well as manual soldering"
            ],
            links: [
                ["https://www.instagram.com/p/BhME4fKnAwV", "Image Source"]
            ]
        }
    ]
</script>

<h1>Portfolio</h1>

<div class="entries">
    {#each portfolio as entry}
        <div style="--background-image: url('{entry.image}');">
            <div>
                <h2>{entry.name}</h2>
                <h3>{entry.period}</h3>

                <ul>
                    {#each entry.list as listItem}
                        <li>{@html listItem}</li>
                    {/each}
                </ul>
            </div>

            <div class="links">
                {#each entry.links as link}
                    <a href="{link[0]}">{`${link[1]} ↝`}</a>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
    @use "../styles/theme";

    h1 {
        margin-bottom: 2rem;
    }

    .entries {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));

        &>* {
            position: relative;
            display: flex;

            flex-direction: column;
            justify-content: space-between;

            padding: 2rem;

            color: white;

            overflow: hidden;
            background-color: theme.$dark-gray;

            &>div {
                position: relative;
            }

            h2 {
                font-size: 3em;
                font-family: "Bebas Neue";
            }

            h3 {
                font-weight: 400;
                font-feature-settings: "ss01" 1;
            }

            &::before {
                position: absolute;
                content: "";

                top: 0;
                left: 0;

                width: 100%;
                height: 100%;

                background: var(--background-image);
                background-size: cover;
                background-position: center;

                filter: grayscale(1);
                opacity: 0.15;
            }
        }
    }

    .links {
        font-size: 1.25em;

        &>* {
            margin-right: 1rem;
        }
    }
</style>
