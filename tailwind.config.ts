import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("消息已发送！感谢你的留言。");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Get in touch</h1>
      <p className="text-muted-foreground">有任何想法或合作意向，欢迎联系我。</p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-4">
        <Input
          placeholder="你的名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-card"
        />
        <Input
          type="email"
          placeholder="邮箱地址"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-card"
        />
        <Textarea
          placeholder="写点什么..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="bg-card"
        />
        <Button type="submit">发送消息</Button>
      </form>
    </div>
  );
};

export default Contact;
