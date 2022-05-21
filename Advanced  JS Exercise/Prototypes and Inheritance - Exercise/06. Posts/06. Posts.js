function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let output = ``;
            output += `\nPost: ${this.title}`;
            output += `\nContent: ${this.content}`;

            return output;
        }
    }

    class SocialMediaPost extends Post {
        #comments = [];

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
        }

        addComment(comment) {
            this.#comments.push(comment);
        }

        toString() {
            let output = super.toString();
            output += `\nRating: ${this.likes - this.dislikes}`;
            output += `\nComments:`;
            if (this.#comments.length != 0) {
                this.#comments.forEach(x => {
                    output += `\n * ${x}`;
                });
            };

            return output;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views+=1;
            return this;
        }

        toString() {
            let output = super.toString();
            output += `\nViews: ${this.views}`;

            return output;
        }
    }

    return {
        Post: Post,
        SocialMediaPost: SocialMediaPost,
        BlogPost: BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let bp = new classes.BlogPost(`TestTitle`, `TestContent`, 15);
let nz = bp.view();
console.log(nz());
console.log(bp.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
