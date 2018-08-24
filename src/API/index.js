const API = {
    fetchBooks: ()=> (
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=65ff29bbf3be4e34816a6425e31547c0')
            .then(res => res.json())
            .then(resJson => resJson.results.books)
    )
};


export default API