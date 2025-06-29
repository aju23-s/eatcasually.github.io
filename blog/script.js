 // Add your blog posts here
    const blogPosts = [
      {
        title: "Rethinking Carbs: Why Choosing the Right Carbs Can Help You Live Longer",
        description: "In today’s health-conscious world, carbs have developed a bad reputation. From keto diets to carb-cutting trends.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JbBC58mPTqnSU6748dyZGih8sa7gsA0aiQ&s",
        link: "Rethinking-carbs.html"
      },
      // Add more blog posts here...
    ];

    const container = document.getElementById("blog-list");

    blogPosts.forEach(post => {
      const card = document.createElement("div");
      card.className = "card";
      card.onclick = () => window.location.href = post.link;

      card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" />
        <div class="card-content">
          <div class="card-title">${post.title}</div>
          <div class="card-desc">${post.description}</div>
        </div>
      `;

      container.appendChild(card);
    });
