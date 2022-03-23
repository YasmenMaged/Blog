const posts = [
  {
    title: 'Post #1',
    date: 'March 17, 2022 by',
    author: 'Ahmad',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #2',
    date: 'March 16, 2022 by',
    author: 'Yasser',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: 'Post #3',
    date: 'March 15, 2022 by',
    author: 'Andrew',
    contents:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];


document.getElementById('blog-post-title').innerText = posts[0].title;
document.getElementById('blog-post-meta').innerText = posts[0].date ;
document.getElementById('blog-post-author').innerText = posts[0].author;
document.getElementById('blog-post-content').innerText = posts[0].contents;


document.getElementById('another-blog-title').innerText = posts[1].title;
document.getElementById('another-blog-meta').innerText = posts[1].date ;
document.getElementById('another-blog-author').innerText= posts[1].author;
document.getElementById('another-blog-content').innerText = posts[1].contents;


document.getElementById('new-feature-title').innerText = posts[2].title;
document.getElementById('new-feature-meta').innerText = posts[2].date ;
document.getElementById('new-feature-author').innerText = posts[2].author;
document.getElementById('new-feature-content').innerText = posts[2].contents;

