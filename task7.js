function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(userData => {
            console.log('User Data:', userData);
            return userData; 
        });
}


function fetchUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            console.log('Posts:', posts);
            return posts; 
        });
}


function fetchPostComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(comments => {
            console.log('Comments:', comments);
            return comments; 
        });
}


fetchUserData()
    .then(user => {
        return fetchUserPosts(user.id); 
    })
    .then(posts => {
        if (posts.length > 0) {
            return fetchPostComments(posts[0].id); 
        } else {
            return Promise.reject('No posts found for this user.');
        }
    })
    .then(comments => {
        document.getElementById('output').innerHTML = `
            <h2>Comments for Post:</h2>
            <pre>${JSON.stringify(comments, null, 2)}</pre>
        `;
    })
    .catch(error => {
        document.getElementById('output').innerHTML = `<h2>Error: ${error}</h2>`;
    });