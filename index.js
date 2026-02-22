const creatBtn = document.getElementById("creatBtn");
creatBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;
    const post = createPost(title, content, author);
    if (!checkIsEmpty(post)) {
        randerPost(post)
        clearInputs();
    }else {alert("Empty Values!");}
})
const checkIsEmpty = (post) => {
    if(post.postTitle === '' || post.postAuthor === '' || post.postContent === '') {
        return true;
    }
    return false;
}

const createPost = (title, content, author) => {
    const date = new Date();
    return {
        postTitle: title,
        postContent: content,
        postAuthor: author,
        postDate: date,
    }
}
const randerPost = (post) => {
    const outputs = document.querySelector(".outputs");
    const postFrame = document.createElement('div');
    const title = document.createElement('h1');
    title.innerHTML = post.postTitle;
    const content = document.createElement('p');
    content.innerHTML = post.postContent;
    const author = document.createElement('p');
    author.innerHTML = "Author: " + post.postAuthor;
    const date = document.createElement('p');
    date.innerHTML = "Date: " + post.postDate;
    outputs.appendChild(postFrame);
    postFrame.appendChild(title)
    postFrame.appendChild(content)
    postFrame.appendChild(author)
    postFrame.appendChild(date)
}
const clearInputs = () => {
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("author").value = "";
}