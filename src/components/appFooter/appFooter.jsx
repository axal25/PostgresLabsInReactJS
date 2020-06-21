import React, {Component} from "react";
import githubLogo from "../../logos/github_logo.png";
import reactLogo from "../../logos/logo.svg";
import aghLogo from "../../logos/agh_logo.png";
import youtubeLogo from "../../logos/youtube_logo.png";

class AppFooter extends Component {
    state = {};

    render() {
        return (
            <div className={this.props.classNames.divs.footer}>
                <table>
                    <tbody>
                    <tr>
                        <th>
                            <a href="https://github.com/axal25?tab=repositories">
                                <img
                                    src={githubLogo}
                                    className="Static-logo"
                                    alt="Static-logoAlt"
                                />
                            </a>
                        </th>
                        <th>
                            <a href="https://skos.agh.edu.pl/osoba/marcin-szpyrka-5059.html">
                                <img
                                    src={aghLogo}
                                    className="Static-logo"
                                    alt="Static-logoAlt"
                                />
                            </a>
                        </th>
                        <th>
                            <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0">
                                <img
                                    src={youtubeLogo}
                                    className="Static-logo"
                                    alt="Static-logoAlt"
                                />
                            </a>
                        </th>
                        <th>
                            <a href="https://reactjs.org/">
                                <img
                                    src={reactLogo}
                                    className="Spinning-logo"
                                    alt="Spinning-logoAlt"
                                />
                            </a>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p>
                                <a href="https://github.com/axal25?tab=repositories">
                                    Laboratories solutions, translation and website created by:
                                    <br/>Jacek Oleś
                                </a>
                            </p>
                        </th>
                        <th>
                            <a href="https://skos.agh.edu.pl/osoba/marcin-szpyrka-5059.html">
                                <p>
                                    PostgreSQL laboratories original source:<br/>
                                    AGH by prof. dr hab. Marcin Szpyrka
                                </p>
                            </a>
                        </th>
                        <th>
                            <p>
                                <a href="https://www.youtube.com/watch?v=Ke90Tje7VS0">
                                    React Tutorial - Learn React - React Crash Course [2019]<br/>
                                    by Programming with Mosh
                                </a>
                            </p>
                        </th>
                        <th>
                            <a href="https://reactjs.org/">
                                <p>Powered by React.js</p>
                            </a>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AppFooter;
