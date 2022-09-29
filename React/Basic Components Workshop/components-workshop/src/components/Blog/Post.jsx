export default function Post({
    title, thumbnail, introduction, authorProfilePicture, authorName, commentsCount, viewsCount
}) {
    return (
        <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
                <img className="img-fluid w-100" src={thumbnail} alt=""/>
                <div className="p-4">
                    <a className="h3 d-block mb-3" href="#">{title}</a>
                    <p className="m-0">{introduction}</p>
                </div>
                <div className="d-flex justify-content-between border-top p-4">
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle me-2" src={authorProfilePicture} width="25" height="25"
                             alt=""/>
                        <small>{authorName}</small>
                    </div>
                    <div className="d-flex align-items-center">
                        <small className="ms-3"><i
                            className="far fa-eye text-primary me-1"></i>{viewsCount}</small>
                        <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>{commentsCount}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}