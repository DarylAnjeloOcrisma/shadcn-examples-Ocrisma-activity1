import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="relative size-6">
        <Image
          className="dark:invert"
          src="/logo.png" // Use public folder path
          fill
          alt="shadcn examples logo"
          priority
        />
      </div>
      <span className="hidden font-medium md:inline">Daryl Anjelo Ocrisma</span>
    </div>
  );
}
