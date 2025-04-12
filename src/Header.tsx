import Navbar from './components/Navbar';

export function Header({ className }: { className?: string }) {
  return (
    <header className={className}>
      <Navbar />
    </header>
  );
}
