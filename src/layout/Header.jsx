function Header() {
  return (
    <nav className="#00e676 green accent-3">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Dm1triyShaf/Movies-project-react">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
