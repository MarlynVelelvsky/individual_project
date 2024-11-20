document.getElementById("add-comment").addEventListener("click", function() {
    const comment = document.getElementById("comment-box").value;
    if (comment) {
        const commentDiv = document.createElement("div");
        commentDiv.textContent = comment;
        document.getElementById("comments-section").appendChild(commentDiv);
        document.getElementById("comment-box").value = "";
    }
}

)