const posts = [
  { date: "2026-03-28", title: "开始记录我的生活", excerpt: "今天我搭建了这个个人博客，希望能坚持记录生活中的点滴。" },
  { date: "2026-03-27", title: "关于极简主义", excerpt: "少即是多。在设计和生活中，去除不必要的装饰。" },
  { date: "2026-03-25", title: "读书笔记：原子习惯", excerpt: "每天进步1%，一年后你会变得强大37倍。" },
  { date: "2026-03-20", title: "春天来了", excerpt: "窗外的樱花开了，提醒我要走出去看看这个世界。" },
];

const Blog = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Blog</h1>
      <p className="text-muted-foreground">我的学习日记与生活随笔。</p>

      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <article key={post.date} className="group cursor-pointer border-b border-border/50 pb-6 last:border-0">
            <time className="text-xs text-muted-foreground">{post.date}</time>
            <h2 className="mt-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
