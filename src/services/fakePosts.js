const posts = [
    {
        id: 1,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        like: 20,
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 2,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 3,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        like: 15,
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 4,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 5,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 6,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 7,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 8,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 9,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 10,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        like: 8,
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 11,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 12,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 13,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    },
    {
        id: 14,
        postTitle: "least news",
        postDate: "4 july 2019",
        postTags: "test",
        postImageUrl: "https://via.placeholder.com/800x600",
        like: 100,
        postContent:
            "Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur."
    }
];

const getPosts = () => {
    return [...posts];
};
export default getPosts;
