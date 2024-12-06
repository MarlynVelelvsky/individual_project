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

const toggleButton = document.getElementById("toggle-comments");
const commentSection = document.querySelector(".comment");

toggleButton.addEventListener("click", function(){
    if (commentSection.classList.contains("visible")) {
        commentSection.classList.remove("visible");
        toggleButton.textContent = "Comment";
    } else {
        commentSection.classList.add("visible");
        toggleButton.textContent = "Hide Comments";
    }
});