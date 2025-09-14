export default function Header({ children }) {
  return (
    <html lang="en">
      <aside className="sidebar">
        <div className="brand">
          <span className="logo" />
          <strong>UX PILOT</strong>
          <span className="ms-auto small text-secondary">todo</span>
        </div>

        <div className="p-3">
          <nav className="nav flex-column gap-1">
            <a className="nav-link active" href="#">
              All Tasks{" "}
              <span className="badge bg-light text-dark ms-auto">24</span>
            </a>
            <a className="nav-link" href="#">
              Today
            </a>
            <a className="nav-link" href="#">
              Upcoming{" "}
              <span className="badge bg-light text-dark ms-auto">12</span>
            </a>
            <a className="nav-link" href="#">
              Completed{" "}
              <span className="badge bg-light text-dark ms-auto">4</span>
            </a>
            <a className="nav-link" href="#">
              Tags
            </a>
            <a className="nav-link" href="#">
              Priority
            </a>
            <a className="nav-link" href="#">
              Settings
            </a>
          </nav>
        </div>

        <div className="mt-auto upgrade">
          <div className="fw-semibold">Upgrade to Pro</div>
          <div className="text-secondary small mb-2">
            Unlimited tasks &amp; advanced features
          </div>
          <button className="btn btn-primary w-100 btn-sm rounded-pill">
            Upgrade
          </button>
        </div>
      </aside>
    </html>
  );
}
