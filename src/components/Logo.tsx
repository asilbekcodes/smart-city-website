import logo from "../assets/logo.png";


export function Logo({ className = "" }: { className?: string }) {
  return (
    <div>
      <img className={className} src={logo} alt="smart city logo" />
    </div>
  );
}
