<script>
    let closed = true;
</script>

<nav>
    <div class="control">
        <div>
            <span style="display: inline-block; transform: rotate(90deg);" on:click={() => {closed = !closed}}>{closed ? "Ⅲ" : "✗"}</span>
        </div>
        <div>
            <img src="/brand.svg" alt="" />
        </div>
        <div>
            <a href="https://github.com/SuperAuguste/augustera.me/blob/dev/LICENSE.md" title="Copyright (c) 2021 Auguste Rame; click for full license">©</a>
        </div>
    </div>

    <div class="page-selector" class:closed={closed}>
        <a href="/">
            <span>Home</span>

            <video autoplay muted loop id="myVideo">
                <source
                    src="https://www.w3schools.com/howto/rain.mp4"
                    type="video/mp4"
                />
            </video>
        </a>
        <a href="/blog">
            <span>Blog</span>

            <video autoplay muted loop id="myVideo">
                <source
                    src="https://storage.coverr.co/videos/38vGyA29Rd6WwGbpaxF4jJB2EGjovWoW?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI2MzU3NzMyfQ.mXGQ-WINB3NwYVubze5d3mcsSBDQyzfJipQTiwH8xK0"
                    type="video/mp4"
                />
            </video>
        </a>
        <a href="/about">
            <span>About</span>

            <video autoplay muted loop id="myVideo">
                <source
                    src="https://storage.coverr.co/videos/OabtBRow1hUanYIrwpQNvpC3bb6UROSr?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI2MzU5MTYxfQ.wnedt7tJJxN8tHdcEnozzDwTLYXk5tksJ6379cxEVnM"
                    type="video/mp4"
                />
            </video>
        </a>
        <a href="/portfolio">
            <span>Portfolio</span>

            <video autoplay muted loop id="myVideo">
                <source
                    src="https://storage.coverr.co/videos/MrjWIRTN9wx83lRLvd6OIqZypPWyYDu3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI2MzYxMDA4fQ.VA00ksYsOr_7vAVFGGcQtn-W_uAxDuCgLejZnnDNTEI"
                    type="video/mp4"
                />
            </video>
        </a>
        <a href="/source">
            <span>Source</span>

            <video autoplay muted loop id="myVideo">
                <source
                    src="https://storage.coverr.co/videos/01Co2jZZXkTavF2dFIGRhaZhT157mUrLv?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI2MzYxMjE4fQ.oJ7_HXnURDWlMCn_NBw7vNvNhVtKjTMospEvWT2i8O0"
                    type="video/mp4"
                />
            </video>
        </a>
    </div>
</nav>

<style lang="scss">
    @use "../styles/theme";

    nav {
        position: fixed;
        display: flex;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        z-index: 10;
        pointer-events: none;

        & > .control {
            display: flex;

            align-items: center;
            flex-direction: column;
            justify-content: space-between;

            padding: 1rem;

            width: 4rem;

            pointer-events: all;
            box-sizing: border-box;
            background-color: white;

            span, a {
                color: black;
                font-size: 2rem;

                cursor: pointer;
                user-select: none;
            }

            a {
                text-decoration: underline;
            }

            img {
                width: 100%;
            }

            &:hover ~ .page-selector.closed {
                width: 0;
                opacity: 1;
                pointer-events: all;
            }
        }

        & > .page-selector {
            width: calc(100% - 4rem);
        }
    }

    .page-selector {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));

        height: 100vh;

        font-family: "Bebas Neue";

        pointer-events: all;
        z-index: 3;
        transition: 0.2s width linear, 0.2s opacity ease-in-out;

        &.closed {
            width: 0;
            opacity: 0;
            pointer-events: none;
        }

        &:hover {
            opacity: 1;
            pointer-events: all;
        }

        & > * {
            display: flex;
            position: relative;

            justify-content: center;
            align-items: center;

            height: 100%;

            color: white;
            text-decoration: none;

            overflow: hidden;
            transition: 0.2s background-color linear;
            background-color: black;

            & > span {
                font-size: 3em;

                z-index: 3;
            }

            & > video {
                position: absolute;

                top: 0;
                left: 0;

                min-width: 100%;
                min-height: 100%;

                filter: grayscale(1);
                z-index: 1;
                opacity: 0.15;
                transition: 0.2s opacity linear;
            }

            &:hover {
                background-color: theme.$blue;

                & > video {
                    opacity: 0.5;
                }
            }
        }
    }
</style>
