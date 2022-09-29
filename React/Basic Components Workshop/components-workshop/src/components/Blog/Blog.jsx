import Blog1 from '../../assets/img/blog-1.jpg';
import Blog2 from '../../assets/img/blog-2.jpg';
import Blog3 from '../../assets/img/blog-3.jpg';
import User from '../../assets/img/user.jpg';
import Post from "./Post";

export default function Blog() {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{'maxWidth': '500px'}}>
                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
                    <h1 className="display-4">Our Latest Medical Blog Posts</h1>
                </div>
                <div className="row g-5">
                    <Post
                        title='Dolor clita vero elitr sea stet dolor justo diam'
                        introduction='Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo'
                        authorName='John Doe'
                        thumbnail={Blog1}
                        authorProfilePicture={User}
                        commentsCount='123'
                        viewsCount='12345'
                    />
                    <Post
                        title='Dolor clita vero elitr sea stet dolor justo diam'
                        introduction='Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo'
                        authorName='John Doe'
                        thumbnail={Blog2}
                        authorProfilePicture={User}
                        commentsCount='123'
                        viewsCount='12345'
                    />
                    <Post
                        title='Dolor clita vero elitr sea stet dolor justo diam'
                        introduction='Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo'
                        authorName='John Doe'
                        thumbnail={Blog3}
                        authorProfilePicture={User}
                        commentsCount='123'
                        viewsCount='12345'
                    />
                </div>
            </div>
        </div>
    );
}