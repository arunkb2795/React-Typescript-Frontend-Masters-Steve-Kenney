type NameBadgeProps = {
  name: string;
  greeting?: string;
};

export default function NameBadge({
  name,
  greeting,
}: NameBadgeProps): JSX.Element {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{greeting}</h1>
        <p>My name is...</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
      <footer className="badge-footer"></footer>
    </section>
  );
}
