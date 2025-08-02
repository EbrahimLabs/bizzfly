import { cn } from "@/lib/utils";

const ShinyBorder = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={
        {
          "--border-width": "0.125rem",
          "--border-radius": "1.25rem",
          "--border-color": "hsl(var(--primary) / 0.4)",
          "--bg-color": "hsl(var(--card))",
          "--shiny-gradient":
            "conic-gradient(from -160deg at 50% 50%, transparent 0deg, hsl(var(--primary)) 320deg, transparent 360deg)",
        } as React.CSSProperties
      }
      className={cn(
        "relative w-full rounded-[--border-radius] bg-[--bg-color] p-[--border-width]",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 rounded-[--border-radius] bg-[--border-color]"></div>
      <div className="absolute inset-0 -z-20 rounded-[--border-radius] bg-[--shiny-gradient] [animation:shiny-spin_5s_linear_infinite]"></div>

      {children}
    </div>
  );
};

export default ShinyBorder;
