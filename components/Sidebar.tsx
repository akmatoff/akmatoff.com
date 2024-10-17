import Socials from "./Socials";

export default function Sidebar() {
  return (
    <div className="hidden md:block p-6 h-screen left-0 bottom-0 top-0">
      <div className="h-full flex flex-col pt-44">
        <Socials />
      </div>
    </div>
  );
}
