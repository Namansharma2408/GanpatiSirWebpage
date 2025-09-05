const LoadingBackground = () => (
  <div className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden">
    {/* Primary gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-blue-400/30 dark:via-muted/40 dark:to-blue-400/20"></div>

    {/* Secondary accent gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/25 via-transparent to-cyan-400/35 dark:from-blue-400/15 dark:to-cyan-400/25"></div>

    {/* Geometric shapes for visual interest */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/25 dark:bg-blue-400/15 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/28 dark:bg-cyan-400/18 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/30 dark:bg-purple-400/20 rounded-full blur-xl"></div>

    {/* Subtle pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.15] dark:opacity-[0.12]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '24px 24px',
        color: 'hsl(var(--foreground))',
      }}
    ></div>

    {/* Animated floating elements */}
    <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/50 dark:bg-blue-400/40 rounded-full animate-pulse"></div>
    <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400/60 dark:bg-cyan-400/50 rounded-full animate-ping"></div>
    <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400/55 dark:bg-purple-400/45 rounded-full animate-pulse delay-1000"></div>
    <div className="absolute top-60 right-1/3 w-1 h-1 bg-blue-400/45 dark:bg-blue-400/35 rounded-full animate-ping delay-500"></div>
  </div>
);

export default LoadingBackground;