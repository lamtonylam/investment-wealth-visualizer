interface HeaderProps {
  title?: string;
}

export function Header({
  title = 'Sijoitusvarallisuus ikäluokittain visualisoituna',
}: HeaderProps) {
  return <h2 style={{ marginTop: 0 }}>{title}</h2>;
}
