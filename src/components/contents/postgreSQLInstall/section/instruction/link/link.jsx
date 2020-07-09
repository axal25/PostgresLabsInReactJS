import React, {Component} from "react";

class Link extends Component {
    state = {
        downloadableExtensions: ["sql"]
    };

    render() {
        return this.getLinkIfLink(this.props.link)
    }

    getLinkIfLink(link) {
        return link
            ? Array.isArray(link) ? link.map((singleLink, singleLinkIndex) => {
                    return <React.Fragment key={singleLinkIndex}>
                        {singleLinkIndex !== 0 ? this.getSingleText("or", 1) : null}
                        {this.getSingleLink(singleLink)}
                    </React.Fragment>
                })
                : this.getSingleLink(link)
            : null;
    }

    getSingleLink(link) {
        const linkExtension = link
            ? link.substring(
                link.lastIndexOf("."),
                link.length
            )
            : undefined;
        const isDownload = linkExtension
            ? this.state.downloadableExtensions
                .filter(downloadable => downloadable === linkExtension)
            : false;
        return link
            ? <span className={this.props.classNames.badges.parents.smallText}>
                <a
                    href={link}
                    className={this.props.classNames.spans.primaryPill}
                    download={isDownload}>
                    {link}
                </a>
            </span>
            : null;
    }
}

export default Link;