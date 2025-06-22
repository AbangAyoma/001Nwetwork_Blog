

# 📝 001Network Blog

A professional, full-featured blog application built with **Node.js**, **Express.js**, and **EJS templating engine**. Designed to deliver a seamless and fast blogging experience with dynamic content rendering, clean UI, and maintainable code architecture.

---

## 🚀 Features

- 🗒️ Create, read, update, and delete blog posts
- ✨ EJS-based templating for dynamic HTML rendering
- 📁 RESTful routes for clean URL structure
- 🌐 SEO-friendly pages
- 🖼️ Image and media support
- 🔒 Basic authentication (optional)
- 💬 Comment system (optional)
- 📦 Modular folder structure for scalability

---

## 📸 Demo

Live demo: [001Network_blog](https://your-deployment-url.com)

![Blog Homepage Screenshot](screenshots/homepage.png)
![Blog Post Screenshot](screenshots/post.png)

---

## 📁 Project Structure

```

001Network\_Blog/
│
├── public/              # Static assets (CSS, JS, images)
├── routes/              # Express route handlers
├── views/               # EJS templates
│   ├── partials/        # Header, footer, etc.
│   ├── posts/           # Post-specific pages
│   └── index.ejs        # Homepage
├── models/              # Mongoose schemas or custom models
├── controllers/         # Route logic handlers
├── .env                 # Environment variables
├── .gitignore
├── app.js               # Main Express app
└── package.json

````
---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, EJS (Embedded JavaScript Templates)
- **Database**: MongoDB 
- **Tools**: Git, Nodemon, Dotenv, Body-parser, etc.

---

## ⚙️ Installation

1. **Clone the repo**

```bash
git clone https://github.com/AbangAyoma/001Network_Blog.git
cd 001Network_Blog
````

2. **Install dependencies**

```bash
npm i
```

3. **Create a `.env` file**

```
PORT=3000
DB_URI=your_mongodb_uri
```

4. **Run the development server**

```bash
npm run dev
```

> Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📌 Scripts

| Command       | Description            |
| ------------- | ---------------------- |
| `npm start`   | Start app (production) |
| `npm run dev` | Start app with nodemon |
| `npm install` | Install dependencies   |

---

## ✅ Future Festures

* [ ] Add user authentication (JWT or sessions)
* [ ] Rich text editor for post creation
* [ ] Categories and tags
* [ ] Pagination
* [ ] Admin dashboard

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/yourFeature`)
3. Commit your changes (`git commit -m 'Add your message'`)
4. Push to the branch (`git push origin feature/yourFeature`)
5. Open a pull request

---

## 🧑‍💻 Author

**Abang Ayoma**
[GitHub](https://github.com/AbangAyoma) | [LinkedIn](/https://linkedin.com/in/abang-ayoma)

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

