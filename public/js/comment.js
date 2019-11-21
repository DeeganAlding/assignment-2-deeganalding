const commentBtn = document.getElementById('comment-submit-btn')
const commentOutput = document.getElementById('comment-data')

$(".comment-submit-btn").click(function () {
        const date = document.lastModified;
        const name = document.getElementById('comment-name').value
        const comment = document.getElementById('comment-message').value

        commentOutput.innerHTML = `<div class="each-comment">
                                    <p class="name">Name: ${name}</p> 
                                    <br>
                                    <p class="text">Comment: ${comment}</p>
                                    <br>
                                    <p class="date">Posted at: ${date}</p>
                                </div>
                                <br>` + commentOutput.innerHTML

})

commentBtn.addEventListener('click', newComment)