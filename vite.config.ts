const Resume = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Resume</h1>
        <p className="mt-2 text-muted-foreground">我的个人简历。</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground border-b border-border/50 pb-2">教育背景</h2>
        <div>
          <p className="font-medium text-foreground">某大学 · 计算机科学</p>
          <p className="text-sm text-muted-foreground">2020 – 2024</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground border-b border-border/50 pb-2">技能</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "UI/UX Design"].map((skill) => (
            <span key={skill} className="rounded-lg bg-muted px-3 py-1 text-sm text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground border-b border-border/50 pb-2">工作经历</h2>
        <div>
          <p className="font-medium text-foreground">前端开发实习生 · 某科技公司</p>
          <p className="text-sm text-muted-foreground">2024.06 – 2024.12</p>
          <p className="mt-1 text-sm text-muted-foreground">参与公司核心产品的前端开发与优化。</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;
