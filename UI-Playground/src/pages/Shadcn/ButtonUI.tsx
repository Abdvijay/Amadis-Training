import { Button } from "@/components/ui/button";

function ButtonUI() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-slate-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Shadcn UI
      </h1>

      <Button className="px-8 py-6 transition hover:scale-150 hover:duration-900">Click Me</Button>
    </div>
  );
}

export default ButtonUI;