fetch("blog-data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("blog-grid");

    data.forEach(post => {
      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerHTML = `
        <h2>${post.title}</h2>
        <p class="category">${post.category}</p>
        <p>${post.intro}</p>
        <a href="${post.slug}.html" class="read-more">Read More →</a>
      `;
      container.appendChild(card);
    });
  });

