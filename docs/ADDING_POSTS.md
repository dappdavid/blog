# Adding New Posts

Publishing a new article is as simple as committing a new `.md` file.

1.  **Create a new file:** Add a Markdown file in `_articles/` or any subdirectory (e.g., `_articles/tech/my-new-post.md`).

2.  **Add Front Matter:** At the top of the file, include the following YAML block:

    ```yaml
    ---
    title: "Your Post Title"
    date: YYYY-MM-DD
    description: "A short description of your post."
    tags: [tag1, tag2]
    draft: false
    author: "Your Name"
    ---
    ```

3.  **Write Content:** Write your article using Markdown below the front matter.

4.  **Commit and Push:**
    ```bash
    git add _articles/your-post.md
    git commit -m "feat: add new post about topic"
    git push origin main
    ```

The new article will automatically appear on the home page and in the archive.
