@import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 40 33% 96%;
    --foreground: 220 20% 15%;

    --card: 0 0% 100%;
    --card-foreground: 220 20% 15%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 20% 15%;

    --primary: 217 72% 53%;
    --primary-foreground: 0 0% 100%;

    --secondary: 220 14% 96%;
    --secondary-foreground: 220 20% 15%;

    --muted: 40 20% 92%;
    --muted-foreground: 220 10% 46%;

    --accent: 40 20% 92%;
    --accent-foreground: 220 20% 15%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 217 72% 53%;

    --radius: 0.75rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217 72% 53%;
  }

  .dark {
    --background: 220 20% 7%;
    --foreground: 40 20% 92%;

    --card: 220 20% 10%;
    --card-foreground: 40 20% 92%;

    --popover: 220 20% 10%;
    --popover-foreground: 40 20% 92%;

    --primary: 217 72% 53%;
    --primary-foreground: 0 0% 100%;

    --secondary: 220 14% 16%;
    --secondary-foreground: 40 20% 92%;

    --muted: 220 14% 16%;
    --muted-foreground: 220 10% 60%;

    --accent: 220 14% 16%;
    --accent-foreground: 40 20% 92%;

    --destructive: 0 62% 30%;
    --destructive-foreground: 0 0% 100%;

    --border: 220 14% 16%;
    --input: 220 14% 16%;
    --ring: 217 72% 53%;

    --sidebar-background: 220 20% 7%;
    --sidebar-foreground: 40 20% 92%;
    --sidebar-primary: 217 72% 53%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 220 14% 16%;
    --sidebar-accent-foreground: 40 20% 92%;
    --sidebar-border: 220 14% 16%;
    --sidebar-ring: 217 72% 53%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
  }
}
