fetch('blog-data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('blog-container');
    data.reverse().forEach(post => {
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.innerHTML = `
        <a href="\${post.slug}.html">
          <h2>\${post.title}</h2>
          <p><strong>\${post.date}</strong> | \${post.category}</p>
          <p>\${post.intro}</p>
          <span style="color: blue;">Read more →</span>
        </a>
      `;
      container.appendChild(card);
    });
  });
