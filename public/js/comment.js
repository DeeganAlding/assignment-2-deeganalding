$("#comments").submit(function(event) {
    event.preventDefault()
    const date = document.lastModified;
    const name = $('#comment-name').val();
    const comment = $('#comment-message').val();

    $('#comment-data').append(`<div class="each-comment">
                                <p class="name">Name: ${name}</p>
                                <br>
                                <p class="text">Comment: ${comment}</p>
                                <br>
                                <p class="date">Posted at: ${date}</p>
                            </div>
                            <br>`)
})