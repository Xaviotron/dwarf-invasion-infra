import { Component } from "solid-js";

interface ExternalItemProps {
    href: string;
    src: string;
    name: string;
}
const ExternalItem: Component<ExternalItemProps> = (props) => {
    return (
        <a href={props.href} class="btn btn-square" target="_blank">
            <img src={props.src} alt={props.name} />
        </a>
    );
};

export default ExternalItem;
