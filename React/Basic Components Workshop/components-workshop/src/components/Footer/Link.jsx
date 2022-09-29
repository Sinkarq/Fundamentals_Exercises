export default function Link({
    children, href,
}) {
    return (
        <a className="text-light mb-2" href={href}><i className="fa fa-angle-right me-2"></i>{children}</a>
    );
}