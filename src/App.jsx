import { useState, useEffect }from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import FunFacts from './FunFacts';
import Music from './Music';
import Contact from './Contact';

function App() {

    const [darkMode, setDarkMode] = useState(parseInt(localStorage.getItem("darkMode")));

    const [openMenu, setOpenMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        }
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () =>  { window.removeEventListener("resize", () => setWidth(window.innerWidth)) }
    }, []);

    function changeMode() {
        document.body.classList.toggle("dark");
        setDarkMode(!darkMode);
        if (darkMode) localStorage.removeItem("darkMode");
        else localStorage.setItem("darkMode", "1");
    }

    return (
        <BrowserRouter>
            <main>
                <div className="app">
                    {width >= 600 ?
                    <nav className="desktop-nav">
                        <Link to="/" className="logo">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><path style={{ fill: "var(--color)" }} d="M255.999,380.408c-89.239,0-161.838-72.601-161.838-161.838v-82.491 c0-7.958,6.451-14.409,14.409-14.409s14.409,6.451,14.409,14.409v82.491c0,73.347,59.673,133.02,133.02,133.02 c33.132,0,64.876-12.253,89.384-34.505c5.89-5.349,15.004-4.909,20.353,0.983s4.909,15.004-0.983,20.353 C334.933,365.496,296.31,380.408,255.999,380.408z"/><path style={{ fill: "var(--link-color-hover)" }} d="M256.001,304.677L256.001,304.677c-47.557,0-86.108-38.551-86.108-86.108V100.517 c0-47.555,38.551-86.108,86.108-86.108l0,0c47.555,0,86.108,38.551,86.108,86.108v118.052 C342.107,266.124,303.556,304.677,256.001,304.677z"/><g><path style={{ fill: "var(--color)" }} d="M403.43,121.668h-46.914v-21.151C356.516,45.091,311.425,0,255.999,0 S155.483,45.091,155.483,100.517v118.052c0,55.425,45.091,100.517,100.517,100.517s100.517-45.091,100.517-100.517v-68.082h32.505 v68.082c0,7.958,6.451,14.409,14.409,14.409c7.958,0,14.409-6.451,14.409-14.409v-82.491 C417.839,128.12,411.388,121.668,403.43,121.668z M327.698,218.569c0,39.535-32.164,71.699-71.699,71.699 S184.3,258.104,184.3,218.569V100.517c0-39.535,32.164-71.699,71.699-71.699c39.534,0,71.699,32.164,71.699,71.699v21.151h-42.277 c-8.132-6.331-18.34-10.117-29.422-10.117c-26.462,0-47.992,21.528-47.992,47.992c0,26.462,21.528,47.992,47.992,47.992 c26.463,0,47.992-21.528,47.992-47.992c0-3.096-0.305-6.122-0.869-9.057h24.576V218.569z M275.173,159.543 c0,10.572-8.601,19.174-19.174,19.174c-10.573,0-19.174-8.601-19.174-19.174c0-10.573,8.601-19.174,19.174-19.174 C266.573,140.369,275.173,148.971,275.173,159.543z"/><path style={{ fill: "var(--color)" }} d="M337.908,483.182h-67.5V430.83c0-7.958-6.451-14.409-14.409-14.409s-14.409,6.451-14.409,14.409 v52.352h-67.5c-7.958,0-14.409,6.451-14.409,14.409c0,7.958,6.451,14.409,14.409,14.409h163.817 c7.958,0,14.409-6.451,14.409-14.409C352.316,489.633,345.866,483.182,337.908,483.182z"/></g></svg>
                            Soulvers3 Records
                        </Link>
                        <Link to="/facts">Fun Facts</Link>
                        <Link to="/music">Music</Link>
                        <Link to="/contact">Contact</Link>
                        <button className="mode-switch" onClick={changeMode}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d={!darkMode ? "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" : "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"} /></svg>
                        </button>
                    </nav>
                    : <nav className="mobile-nav">
                        <button
                            className={`hamburger ${openMenu ? "active" : ""}`}
                            onClick={() => setOpenMenu(!openMenu)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={`menu-panel ${openMenu ? "show" : ""}`}>
                            <Link to="/" onClick={() => setOpenMenu(false)}>About</Link>
                            <Link to="/facts" onClick={() => setOpenMenu(false)}>Fun Facts</Link>
                            <Link to="/music" onClick={() => setOpenMenu(false)}>Music</Link>
                            <Link to="/contact" onClick={() => setOpenMenu(false)}>Contact</Link>
                        </div>
                        <button className="mode-switch" onClick={changeMode}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d={!darkMode ? "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" : "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"} /></svg>
                        </button>
                    </nav>}
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/facts" element={<FunFacts />} />
                        <Route path="/music" element={<Music darkMode={darkMode} />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                    </Routes>
                </div>
            </main>
            <footer>© Soulvers3, 2023. Made by Soulvers3records & Andrew Aldor</footer>
        </BrowserRouter>
    )
}

export default App
