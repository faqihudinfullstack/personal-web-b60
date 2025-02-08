let blogs = [
  //tidak ada isinya
  // {
  //     title: 'test',
  //     content: 'Our peer-review process is efficient and streamlined, and we ensure that all accepted articles are published on the 10th of every month. By publishing with us, you will gain visibility and have your work accessible online to anyone with an internet connection. Our professional formatting and review process meet the highest standards expected by authors and the worldwide research community.',
  //     image: 'image.png'
  // },
  // {
  //     title: 'test',
  //     content: 'Our peer-review process is efficient and streamlined, and we ensure that all accepted articles are published on the 10th of every month. By publishing with us, you will gain visibility and have your work accessible online to anyone with an internet connection. Our professional formatting and review process meet the highest standards expected by authors and the worldwide research community.',
  //     image: 'image.png'
  // },
  // {
  //     title: 'test',
  //     content: 'Our peer-review process is efficient and streamlined, and we ensure that all accepted articles are published on the 10th of every month. By publishing with us, you will gain visibility and have your work accessible online to anyone with an internet connection. Our professional formatting and review process meet the highest standards expected by authors and the worldwide research community.',
  //     image: 'image.png'
  // },
];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("image");

  let imageFileName = URL.createObjectURL(image.files[0]);

  let newblog = {
    title: title,
    content: content,
    image: imageFileName,
    author: "M Abdurrahman Faqihudn",
    postedAt: new Date(),
  };

  blogs.push(newblog);

  console.log(blogs);

  renderBlog();
}

function renderBlog() {
  let blogListElement = document.getElementById("blogList");

  blogListElement.innerHTML = firstBlogContent();

  for (let index = 0; index < blogs.length; index++) {
    console.log(blogs[index]);

    blogListElement.innerHTML += `
        <article class="blog-item">
        <div class="blog-item-img">
            <img src="${blogs[index].image}" alt="">
        </div>
        <div class="blog-item-text">
            <div class="blog-item-buttons">
                <button class="blog-edit-button">Edit Blog</button>
                <button class="blog-post-button">Post Blog</button>
            </div>
             <a href="blog-detail.html" style="text-decoration: none">
            <h1 class="blog-item-title">
                ${blogs[index].title}
            </h1>
            
           </a>
            <p>${formatDateToWIB(blogs(index).postedAt)}| ${
      blogs[index].author
    }</p>
            
            <p>${blogs[index].content}</p>
            <p class="blog-item-relative-time">${getRelativeTime(
              blogs(index).postedAt
            )}</p>
        </div>
    </article>
        `;
  }
}

function firstBlogContent() {
  return `
        <article class="blog-item">
        <div class="blog-item-img">
            <img src="Assets/img/logo dumbways.jpg" alt="">
        </div>
        <div class="blog-item-text">
            <div class="blog-item-buttons">
                <button class="blog-edit-button">Edit Blog</button>
                <button class="blog-post-button">Post Blog</button>
            </div>
             <a href="blog-detail.html" style="text-decoration: none">
            <h1 class="blog-item-title">Pasar Coding di Indonesia</h1>
           </a>
            <p>31 Jan 2025 10:15 WIB | Alex Josua
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam nostrum assumenda, voluptates maiores sequi quisquam pariatur voluptatem non consequuntur dolor architecto, unde magni enim itaque. Nostrum quod veniam quaerat modi ducimus accusamus dolorem, repellat iusto, autem, ex in nesciunt eos mollitia quo numquam deserunt pariatur aut fugiat id maiores enim.</p>
            <p class="blog-item-relative-time">
            ${getRelativeTime(
              new Date(
                "Fri Juli 31 2024 10:15:30 GMT+0700 (Western Indonesia Time)"
              )
            )}</p>
        </div>
    </article>
    `;
}

function formatDateToWIB() {
  let date = new Date();
  // 01 Feb 2025 11:25 WIB
  let monthList = [
    "jan",
    "feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = monthList[date.getMonth()];
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${day} ${month} ${year} ${hours}:${minutes} WIB`;

  return formattedDate;
}

function getRelativeTime(postTime) {
  let now = new Date();
  console.log("WAKTU SEKARANG :", now);

  console.log("WAKTU user post :", postTime);

  let diffTime = now - postTime;
  console.log("selisih waktu :", diffTime);

  let diffInSeconds = Math.floor((now - postTime) / 1000);
  console.log("selisih detik", diffInSeconds);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  let diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  let diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  }

  let diffInMonth = Math.floor(diffInDays / 30);
  return `${diffInMonth} month${diffInMonth === 1 ? "s" : ""} ago`;
}
