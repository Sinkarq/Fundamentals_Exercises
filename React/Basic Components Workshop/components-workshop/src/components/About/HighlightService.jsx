export default function HighlightService({
    iconClass, children
}) {
    const [firstText, secondText] = children.split(' ');
    return (
        <div className="col-sm-3 col-6">
            <div className="bg-light text-center rounded-circle py-4">
                <i className={"fa fa-3x text-primary mb-3 " + iconClass}></i>
                <h6 className="mb-0">{firstText}<small
                    className="d-block text-primary">{secondText}</small></h6>
            </div>
        </div>
    );
};