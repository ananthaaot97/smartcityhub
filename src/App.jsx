import React, { createContext, useContext, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation
} from "react-router-dom";
import "./index.css";

/* ---------- CONTEXT ---------- */
const AppContext = createContext(null);
const useAppContext = () => useContext(AppContext);

/* ---------- INITIAL DATA ---------- */
const initialServices = [
  {
    id: 1,
    name: "24x7 Water Supply",
    dept: "Water Board",
    area: "Central Zone",
    status: "active",
    category: "Public Service"
  },
  {
    id: 2,
    name: "Metro Line – Phase 2",
    dept: "Transport",
    area: "East Corridor",
    status: "planned",
    category: "Infrastructure"
  },
  {
    id: 3,
    name: "Smart Street Lighting",
    dept: "Electrical",
    area: "North Zone",
    status: "active",
    category: "Infrastructure"
  },
  {
    id: 4,
    name: "City e-Clinic",
    dept: "Health",
    area: "West Zone",
    status: "down",
    category: "Public Service"
  }
];

const initialIssues = [
  {
    id: 1,
    title: "Broken street light near Sector 7",
    area: "North Zone",
    status: "Open",
    priority: "Medium",
    createdBy: "Resident",
    timeAgo: "2 hrs ago",
    adminNote: "Work order raised with electrical team.",
    eta: "Expected fix: tonight 9 PM"
  },
  {
    id: 2,
    title: "Water supply disruption in Block B",
    area: "Central Zone",
    status: "Investigating",
    priority: "High",
    createdBy: "Resident",
    timeAgo: "5 hrs ago",
    adminNote: "Leak located, repair in progress.",
    eta: "Water restored by 6 PM"
  },
  {
    id: 3,
    title: "Overflowing garbage bins at Park Road",
    area: "South Zone",
    status: "Resolved",
    priority: "Low",
    createdBy: "Citizen App",
    timeAgo: "1 day ago",
    adminNote: "Extra pickup arranged, bins cleaned.",
    eta: "Completed"
  }
];

const initialFeedback = [
  {
    id: 1,
    title: "New park in Central Zone is well maintained",
    amenity: "Park & Recreation",
    rating: 5,
    user: "Family Resident",
    timeAgo: "3 days ago"
  },
  {
    id: 2,
    title: "Metro timing information is useful but needs accuracy",
    amenity: "Transport",
    rating: 4,
    user: "Student",
    timeAgo: "1 week ago"
  },
  {
    id: 3,
    title: "Public Wi-Fi disconnects frequently in tech hub",
    amenity: "Digital Services",
    rating: 3,
    user: "Remote worker",
    timeAgo: "5 days ago"
  }
];

/* =========================================================
   NEW LANDING / INTRO PAGE (GitHub marketing-style)
   ========================================================= */
function LoginPage() {
  const { signIn } = useAppContext();
  const navigate = useNavigate();

  // hero email (for sign up CTA)
  const [heroEmail, setHeroEmail] = useState("");
  // quick admin sign-in
  const [adminName, setAdminName] = useState("Admin Reviewer");

  const handleHeroSignUp = (e) => {
    e.preventDefault();
    // we don't actually use email, just send them to proper sign up flow
    navigate("/signup");
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    if (!adminName.trim()) return;
    // ADMIN CAN ENTER DIRECTLY
    signIn(adminName.trim(), "admin");
    navigate("/dashboard");
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background:
        "radial-gradient(circle at top, #1f2937 0, #020617 45%, #000 100%)",
      color: "#f9fafb",
      display: "flex",
      flexDirection: "column"
    },
    nav: {
      height: 64,
      padding: "0 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    navLeft: {
      display: "flex",
      alignItems: "center",
      gap: 10
    },
    logo: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "#f97316",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      color: "#020617"
    },
    brand: { fontWeight: 600, fontSize: 18 },
    navRight: {
      display: "flex",
      gap: 12
    },
    navGhost: {
      background: "transparent",
      borderRadius: 999,
      padding: "6px 14px",
      border: "1px solid rgba(148,163,184,0.4)",
      color: "#e5e7eb",
      fontSize: 13,
      cursor: "pointer"
    },
    navPrimary: {
      background: "#f97316",
      borderRadius: 999,
      padding: "6px 18px",
      border: "none",
      color: "#020617",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    },
    main: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr)",
      padding: "40px 56px 56px",
      gap: 40,
      alignItems: "center"
    },
    mainLeft: {
      maxWidth: 600
    },
    pill: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "4px 12px",
      borderRadius: 999,
      background: "rgba(15,23,42,0.9)",
      border: "1px solid rgba(148,163,184,0.4)",
      fontSize: 12,
      color: "#cbd5e1",
      marginBottom: 16
    },
    heroTitle: {
      fontSize: 46,
      lineHeight: 1.1,
      fontWeight: 800,
      marginBottom: 16
    },
    heroSub: {
      fontSize: 16,
      color: "#cbd5e1",
      marginBottom: 24,
      maxWidth: 520
    },
    heroForm: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      alignItems: "center"
    },
    heroInput: {
      flex: "1 1 220px",
      minWidth: 220,
      padding: "10px 12px",
      borderRadius: 999,
      border: "1px solid rgba(148,163,184,0.6)",
      background: "rgba(15,23,42,0.85)",
      color: "#e5e7eb",
      fontSize: 14
    },
    heroButton: {
      borderRadius: 999,
      padding: "10px 20px",
      border: "none",
      background: "#22c55e",
      color: "#022c22",
      fontWeight: 600,
      fontSize: 14,
      cursor: "pointer"
    },
    heroSecondary: {
      borderRadius: 999,
      padding: "10px 18px",
      border: "1px solid rgba(148,163,184,0.6)",
      background: "transparent",
      color: "#e5e7eb",
      fontSize: 14,
      cursor: "pointer"
    },
    mainRight: {
      maxWidth: 420,
      marginLeft: "auto"
    },
    adminCard: {
      background: "rgba(15,23,42,0.95)",
      borderRadius: 12,
      border: "1px solid rgba(51,65,85,1)",
      boxShadow: "0 18px 45px rgba(0,0,0,0.75)",
      padding: "20px 18px",
      fontSize: 14
    },
    adminTitle: {
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 4
    },
    adminSub: {
      fontSize: 13,
      color: "#9ca3af",
      marginBottom: 14
    },
    label: {
      fontSize: 13,
      color: "#e5e7eb",
      marginBottom: 4,
      display: "block"
    },
    input: {
      width: "100%",
      padding: "8px 10px",
      borderRadius: 8,
      border: "1px solid #334155",
      background: "#020617",
      color: "#e5e7eb",
      fontSize: 13,
      marginBottom: 12
    },
    adminBtn: {
      width: "100%",
      marginTop: 4
    },
    badgeRow: {
      marginTop: 10,
      fontSize: 11,
      color: "#9ca3af"
    }
  };

  return (
    <div style={styles.page}>
      {/* TOP NAV */}
      <header style={styles.nav}>
        <div style={styles.navLeft}>
          <div style={styles.logo}>SC</div>
          <span style={styles.brand}>SmartCityHub</span>
        </div>
        <div style={styles.navRight}>
          <button
            type="button"
            style={styles.navGhost}
            onClick={() => navigate("/signin")}
          >
            Sign in
          </button>
          <button
            type="button"
            style={styles.navPrimary}
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>
      </header>

      {/* MAIN HERO + ADMIN CARD */}
      <main style={styles.main}>
        {/* Left: marketing hero like GitHub home */}
        <section style={styles.mainLeft}>
          <div style={styles.pill}>
            <span>FEDF-PS21</span>
            <span>•</span>
            <span>Smart City Management Platform</span>
          </div>
          <h1 style={styles.heroTitle}>
            The future of managing smart cities happens together.
          </h1>
          <p style={styles.heroSub}>
            SmartCityHub brings officials and citizens onto one dashboard —
            register services, track infrastructure, resolve issues and measure
            satisfaction in real-time.
          </p>

          <form style={styles.heroForm} onSubmit={handleHeroSignUp}>
            <input
              style={styles.heroInput}
              placeholder="Enter your work email"
              value={heroEmail}
              onChange={(e) => setHeroEmail(e.target.value)}
            />
            <button type="submit" style={styles.heroButton}>
              Sign up for SmartCityHub
            </button>
            <button
              type="button"
              style={styles.heroSecondary}
              onClick={() => navigate("/signin")}
            >
              Try citizen portal demo
            </button>
          </form>
        </section>

        {/* Right: Quick admin sign-in card */}
        <section style={styles.mainRight}>
          <form style={styles.adminCard} onSubmit={handleAdminSubmit}>
            <h2 style={styles.adminTitle}>Quick admin sign-in</h2>
            <p style={styles.adminSub}>
              For reviewers: jump straight into the{" "}
              <strong>Admin dashboard</strong> without a full auth system.
            </p>
            <label htmlFor="admin-name" style={styles.label}>
              Admin name
            </label>
            <input
              id="admin-name"
              style={styles.input}
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
              placeholder="e.g., City Commissioner"
            />
            <button
              type="submit"
              className="btn-primary"
              style={styles.adminBtn}
            >
              Enter admin dashboard
            </button>
            <p style={styles.badgeRow}>
              Citizens must create an account first — this shortcut is only for
              the admin demo in the hackathon.
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   SIGN IN PAGE (GitHub sign-in layout) + ADMIN INFO
   ========================================================= */
function SignInPage() {
  const { signIn } = useAppContext();
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const styles = {
    root: {
      minHeight: "100vh",
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: "32px",
      paddingBottom: "24px"
    },
    container: {
      width: "100%",
      maxWidth: "360px",
      textAlign: "center"
    },
    logoWrapper: {
      marginBottom: "16px",
      display: "flex",
      justifyContent: "center"
    },
    logoCircleOverride: {
      width: "48px",
      height: "48px",
      fontSize: "18px"
    },
    title: {
      fontSize: "24px",
      fontWeight: 500,
      marginBottom: "24px"
    },
    card: {
      backgroundColor: "#161b22",
      border: "1px solid #30363d",
      borderRadius: "6px",
      padding: "16px",
      textAlign: "left",
      marginBottom: "16px"
    },
    label: {
      fontSize: "13px",
      fontWeight: 600,
      marginBottom: "4px",
      display: "block"
    },
    input: {
      marginTop: "4px",
      width: "100%",
      padding: "6px 8px",
      borderRadius: "6px",
      border: "1px solid #30363d",
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      fontSize: "14px"
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "8px",
      marginBottom: "4px"
    },
    smallLinkBtn: {
      border: "none",
      background: "none",
      padding: 0,
      fontSize: "12px",
      color: "#58a6ff",
      cursor: "pointer"
    },
    error: {
      color: "#ff7b72",
      fontSize: "13px",
      marginTop: "8px"
    },
    submit: {
      width: "100%",
      marginTop: "12px"
    },
    orRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "8px 0 12px"
    },
    line: {
      flex: 1,
      height: "1px",
      backgroundColor: "#30363d"
    },
    orText: {
      fontSize: "12px",
      color: "#8b949e"
    },
    providerBtn: {
      width: "100%",
      padding: "8px 12px",
      borderRadius: "6px",
      border: "1px solid #30363d",
      backgroundColor: "#21262d",
      color: "#c9d1d9",
      fontSize: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "8px",
      cursor: "pointer"
    },
    providerIcon: { fontWeight: 600 },
    bottomCard: {
      marginTop: "16px",
      padding: "12px 16px",
      borderRadius: "6px",
      border: "1px solid #30363d",
      fontSize: "14px",
      textAlign: "left"
    },
    link: {
      marginLeft: "4px",
      color: "#58a6ff",
      textDecoration: "none",
      cursor: "pointer"
    },
    adminInfo: {
      marginTop: "10px",
      fontSize: "12px",
      color: "#8b949e",
      lineHeight: 1.5
    },
    footer: {
      width: "100%",
      maxWidth: "900px",
      padding: "16px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "16px",
      fontSize: "12px",
      color: "#8b949e"
    },
    footerLink: {
      color: "#8b949e",
      textDecoration: "none",
      cursor: "pointer"
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setError("Username/email and password are required.");
      return;
    }

    // CITIZEN SIGN IN: will be blocked if not registered
    const ok = signIn(identifier.trim(), "user");
    if (ok) {
      navigate("/dashboard");
    } else {
      // signIn already showed alert; we just keep them here
    }
  };

  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <div style={styles.logoWrapper}>
          <div className="logo-icon" style={styles.logoCircleOverride}>
            SC
          </div>
        </div>
        <h1 style={styles.title}>Sign in to SmartCityHub</h1>

        <form style={styles.card} onSubmit={handleSubmit}>
          <label style={styles.label} htmlFor="signin-identifier">
            Username or email address
          </label>
          <input
            id="signin-identifier"
            style={styles.input}
            value={identifier}
            onChange={(e) => {
              setIdentifier(e.target.value);
              setError("");
            }}
          />

          <div style={styles.row}>
            <label style={styles.label} htmlFor="signin-password">
              Password
            </label>
            <button
              type="button"
              style={styles.smallLinkBtn}
              onClick={() =>
                alert("Forgot password demo – not implemented in hackathon build.")
              }
            >
              Forgot password?
            </button>
          </div>
          <input
            id="signin-password"
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {error && <div style={styles.error}>{error}</div>}

          <button type="submit" className="btn-primary" style={styles.submit}>
            Sign in
          </button>
        </form>

        <div style={styles.orRow}>
          <div style={styles.line} />
          <span style={styles.orText}>or</span>
          <div style={styles.line} />
        </div>

        <button
          type="button"
          style={styles.providerBtn}
          onClick={() =>
            alert("Google single sign-on demo – not implemented.")
          }
        >
          <span style={styles.providerIcon}>G</span> Continue with Google
        </button>
        <button
          type="button"
          style={styles.providerBtn}
          onClick={() =>
            alert("Apple single sign-on demo – not implemented.")
          }
        >
          <span style={styles.providerIcon}></span> Continue with Apple
        </button>

        <div style={styles.bottomCard}>
          <div>
            <span>New to SmartCityHub?</span>
            <span
              style={styles.link}
              onClick={() => navigate("/signup")}
            >
              Create an account
            </span>
          </div>

          {/* REVIEWER EXPLANATION FOR ADMIN PORTAL */}
          <div style={styles.adminInfo}>
            <strong>How to open the Admin portal (for reviewers):</strong>
            <br />
            • Use the <em>Quick admin sign-in</em> card on the home page
            (SmartCityHub landing).
            <br />
            • Enter any name (e.g. <code>Admin Reviewer</code>) and click{" "}
            <strong>“Enter admin dashboard”</strong>.
            <br />
            • Citizens must first <strong>Sign up</strong> here and then sign
            in to access the citizen portal.
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <span style={styles.footerLink}>SmartCityHub Help</span>
        <span style={styles.footerLink}>Privacy</span>
        <span style={styles.footerLink}>Terms</span>
      </footer>
    </div>
  );
}

/* =========================================================
   SIGN UP PAGE (GitHub style) – AFTER SIGNUP → SIGNIN
   ========================================================= */
function SignUpPage() {
  const navigate = useNavigate();
  const { registerUser } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("India");
  const [error, setError] = useState("");

  const styles = {
    root: {
      minHeight: "100vh",
      display: "flex",
      backgroundColor: "#010409"
    },
    left: {
      flex: 1,
      backgroundColor: "#010409",
      color: "#f0f6fc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 32px"
    },
    leftContent: { maxWidth: "420px" },
    leftTitle: { fontSize: "40px", fontWeight: 700, marginBottom: "12px" },
    leftSubtitle: {
      fontSize: "16px",
      lineHeight: 1.5,
      marginBottom: "16px"
    },
    leftLink: {
      background: "none",
      border: "none",
      color: "#58a6ff",
      fontSize: "14px",
      padding: 0,
      cursor: "pointer"
    },
    right: {
      flex: 1.2,
      backgroundColor: "#f6f8fa",
      color: "#24292f",
      display: "flex",
      flexDirection: "column",
      padding: "24px 32px"
    },
    rightHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      marginBottom: "24px"
    },
    rightHeaderLeft: {
      display: "flex",
      alignItems: "center",
      gap: "8px"
    },
    brandText: { fontWeight: 600 },
    signInLink: {
      color: "#0969da",
      cursor: "pointer",
      whiteSpace: "nowrap"
    },
    rightMain: { maxWidth: "480px", margin: "0 auto" },
    rightTitle: { fontSize: "24px", marginBottom: "24px" },
    providerBtn: {
      width: "100%",
      padding: "8px 12px",
      borderRadius: "6px",
      border: "1px solid #d0d7de",
      backgroundColor: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      marginBottom: "8px",
      fontSize: "14px",
      cursor: "pointer"
    },
    providerIcon: { fontWeight: 600 },
    divider: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "16px 0"
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      backgroundColor: "#d0d7de"
    },
    dividerText: { fontSize: "12px", color: "#57606a" },
    form: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      border: "1px solid #d0d7de",
      padding: "16px"
    },
    field: { marginBottom: "12px" },
    label: {
      fontSize: "13px",
      fontWeight: 600,
      display: "block",
      marginBottom: "4px"
    },
    required: { color: "#cf222e", marginLeft: "2px" },
    input: {
      width: "100%",
      padding: "6px 8px",
      borderRadius: "6px",
      border: "1px solid #d0d7de",
      backgroundColor: "#f6f8fa",
      fontSize: "14px"
    },
    hint: { fontSize: "12px", color: "#57606a", marginTop: "4px" },
    error: { fontSize: "13px", color: "#cf222e", marginBottom: "8px" },
    submit: {
      width: "100%",
      padding: "8px 12px",
      borderRadius: "6px",
      border: "1px solid #1f883d",
      backgroundColor: "#1f883d",
      color: "#ffffff",
      fontWeight: 600,
      cursor: "pointer",
      marginTop: "4px"
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !username.trim()) {
      setError("Please fill all required fields.");
      return;
    }

    // store citizen registration (front-end only)
    registerUser(email.trim(), username.trim());

    alert("SmartCityHub account created. Please sign in to continue.");
    navigate("/signin");
  };

  return (
    <div style={styles.root}>
      <section style={styles.left}>
        <div style={styles.leftContent}>
          <h1 style={styles.leftTitle}>Create your SmartCityHub account</h1>
          <p style={styles.leftSubtitle}>
            Citizens can use this account to report issues, track resolutions
            and share feedback with the city.
          </p>
          <button
            type="button"
            style={styles.leftLink}
            onClick={() =>
              alert("Static marketing section – not required for demo.")
            }
          >
            See what&apos;s included ▾
          </button>
        </div>
      </section>

      <section style={styles.right}>
        <header style={styles.rightHeader}>
          <div style={styles.rightHeaderLeft}>
            <div className="logo-icon">SC</div>
            <span style={styles.brandText}>SmartCityHub</span>
          </div>
          <span>
            Already have an account?{" "}
            <span
              style={styles.signInLink}
              onClick={() => navigate("/signin")}
            >
              Sign in →
            </span>
          </span>
        </header>

        <main style={styles.rightMain}>
          <h2 style={styles.rightTitle}>Sign up for SmartCityHub</h2>

          <button
            type="button"
            style={styles.providerBtn}
            onClick={() =>
              alert("Google single sign-on demo – not implemented.")
            }
          >
            <span style={styles.providerIcon}>G</span> Continue with Google
          </button>
          <button
            type="button"
            style={styles.providerBtn}
            onClick={() =>
              alert("Apple single sign-on demo – not implemented.")
            }
          >
            <span style={styles.providerIcon}></span> Continue with Apple
          </button>

          <div style={styles.divider}>
            <div style={styles.dividerLine} />
            <span style={styles.dividerText}>or</span>
            <div style={styles.dividerLine} />
          </div>

          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.field}>
              <label style={styles.label} htmlFor="signup-email">
                Email<span style={styles.required}>*</span>
              </label>
              <input
                id="signup-email"
                type="email"
                style={styles.input}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label} htmlFor="signup-password">
                Password<span style={styles.required}>*</span>
              </label>
              <input
                id="signup-password"
                type="password"
                style={styles.input}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
              <p style={styles.hint}>
                At least 8 characters including a number and a lowercase
                letter.
              </p>
            </div>

            <div style={styles.field}>
              <label style={styles.label} htmlFor="signup-username">
                Username<span style={styles.required}>*</span>
              </label>
              <input
                id="signup-username"
                style={styles.input}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
              />
              <p style={styles.hint}>
                You can sign in later using this username or your email.
              </p>
            </div>

            <div style={styles.field}>
              <label style={styles.label} htmlFor="signup-country">
                Your Country/Region<span style={styles.required}>*</span>
              </label>
              <select
                id="signup-country"
                style={styles.input}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {error && <div style={styles.error}>{error}</div>}

            <button type="submit" style={styles.submit}>
              Create account
            </button>
          </form>
        </main>
      </section>
    </div>
  );
}

/* ---------- SIGN OUT CONFIRMATION PAGE ---------- */
/* ---------- SIGN OUT CONFIRMATION PAGE ---------- */
function SignOutPage() {
  const { signOut } = useAppContext();
  const navigate = useNavigate();

  const styles = {
    root: {
      minHeight: "100vh",
      backgroundColor: "#0d1117",
      color: "#c9d1d9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    card: {
      maxWidth: "360px",
      width: "100%",
      backgroundColor: "#161b22",
      borderRadius: "8px",
      border: "1px solid #30363d",
      padding: "20px"
    },
    logoRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "12px"
    },
    title: { fontSize: "20px", fontWeight: 600, marginBottom: "4px" },
    text: { fontSize: "14px", marginBottom: "16px", color: "#8b949e" },
    actions: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "8px"
    },
    ghost: {
      padding: "6px 12px",
      borderRadius: "6px",
      border: "1px solid #30363d",
      backgroundColor: "transparent",
      color: "#c9d1d9",
      cursor: "pointer",
      fontSize: "13px"
    }
  };

  const handleSignOut = () => {
    // clear session
    signOut();
    // ⬇️ AFTER SIGN OUT GO STRAIGHT TO HOME / LANDING PAGE
    navigate("/", { replace: true });
  };

  const handleCancel = () => {
    // keep them in the dashboard if they cancel
    navigate("/dashboard");
  };

  return (
    <div style={styles.root}>
      <div style={styles.card}>
        <div style={styles.logoRow}>
          <div className="logo-icon">SC</div>
          <span>SmartCityHub</span>
        </div>
        <h1 style={styles.title}>Sign out</h1>
        <p style={styles.text}>
          You are about to sign out from SmartCityHub. You can sign back in any
          time from the home page or sign-in page.
        </p>
        <div style={styles.actions}>
          <button type="button" style={styles.ghost} onClick={handleCancel}>
            Cancel
          </button>
          <button
            type="button"
            className="btn-primary"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- STATS ROW ---------- */
function StatsRow({ services, issues, feedback }) {
  const serviceCount = services.length;
  const openIssues = issues.filter(
    (i) => i.status === "Open" || i.status === "Investigating"
  ).length;
  const avgRating =
    feedback.reduce((sum, f) => sum + f.rating, 0) / feedback.length;

  return (
    <div className="stats-row">
      <div className="stat-card">
        <div className="stat-label">Public services</div>
        <div className="stat-value">{serviceCount}</div>
        <div className="stat-sub">Essential services registered</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Open issues</div>
        <div className="stat-value">{openIssues}</div>
        <div className="stat-sub">Citizen-reported problems</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Amenity rating</div>
        <div className="stat-value">{avgRating.toFixed(1)} ★</div>
        <div className="stat-sub">Average citizen feedback</div>
      </div>
    </div>
  );
}

/* ---------- SERVICES PANEL ---------- */
function ServicesPanel({ services, search, isAdmin, onAddService }) {
  const filtered = services.filter((s) => {
    const text = (s.name + s.dept + s.area + s.category).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    dept: "",
    area: "",
    category: "Public Service",
    status: "active"
  });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.dept || !form.area) return;
    onAddService(form);
    setForm({
      name: "",
      dept: "",
      area: "",
      category: "Public Service",
      status: "active"
    });
    setShowForm(false);
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Registered city services</div>
          <div className="panel-helper">
            {isAdmin
              ? "Admins can add or update services. Users can only view."
              : "View essential public services and infrastructure available in the city."}
          </div>
        </div>
        {isAdmin && (
          <button
            className="btn-primary"
            onClick={() => setShowForm((v) => !v)}
          >
            {showForm ? "Close form" : "+ Add service"}
          </button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>Service / Project</th>
            <th>Department</th>
            <th>Zone</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="5">
                <div className="empty-state">
                  No services match your search.
                </div>
              </td>
            </tr>
          ) : (
            filtered.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.dept}</td>
                <td>{s.area}</td>
                <td>{s.category}</td>
                <td>
                  <span
                    className={
                      "status-pill " +
                      (s.status === "active"
                        ? "status-active"
                        : s.status === "down"
                        ? "status-down"
                        : "status-planned")
                    }
                  >
                    {s.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isAdmin && showForm && (
        <form className="form" onSubmit={submit}>
          <div className="panel-helper" style={{ marginBottom: 8 }}>
            Quick add a new public service or infrastructure project.
          </div>

          <div className="form-row">
            <label>Service name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g., Smart Parking System"
              required
            />
          </div>
          <div className="form-row">
            <label>Department</label>
            <input
              value={form.dept}
              onChange={(e) => setForm({ ...form, dept: e.target.value })}
              placeholder="e.g., Transport"
              required
            />
          </div>
          <div className="form-row">
            <label>Zone / Area</label>
            <input
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              placeholder="e.g., Tech Corridor"
              required
            />
          </div>
          <div className="form-row">
            <label>Category & Status</label>
            <select
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            >
              <option>Public Service</option>
              <option>Infrastructure</option>
              <option>Digital Service</option>
            </select>
            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option value="active">Active</option>
              <option value="planned">Planned</option>
              <option value="down">Down</option>
            </select>
          </div>
          <div className="form-footer">
            <button className="btn-primary" type="submit">
              Save service
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

/* ---------- ISSUES PANEL ---------- */
function IssuesPanel({
  issues,
  search,
  canReport,
  isAdmin,
  onAddIssue,
  onUpdateIssue
}) {
  const filtered = issues.filter((i) => {
    const text = (
      i.title +
      i.area +
      i.status +
      i.priority +
      (i.adminNote || "") +
      (i.eta || "")
    ).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const [form, setForm] = useState({
    title: "",
    area: "",
    priority: "Medium",
    desc: ""
  });

  const [editingId, setEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState("Open");
  const [editNote, setEditNote] = useState("");
  const [editEta, setEditEta] = useState("");

  const submitUserIssue = (e) => {
    e.preventDefault();
    if (!form.title || !form.area) return;
    onAddIssue(form);
    setForm({ title: "", area: "", priority: "Medium", desc: "" });
  };

  const startEdit = (issue) => {
    setEditingId(issue.id);
    setEditStatus(issue.status);
    setEditNote(issue.adminNote || "");
    setEditEta(issue.eta || "");
  };

  const submitAdminUpdate = (e) => {
    e.preventDefault();
    if (!editingId) return;
    onUpdateIssue(editingId, {
      status: editStatus,
      adminNote: editNote,
      eta: editEta
    });
    setEditingId(null);
    setEditStatus("Open");
    setEditNote("");
    setEditEta("");
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Service issues reported by citizens</div>
          <div className="panel-helper">
            {canReport
              ? "Report problems with water, power, transport or other amenities."
              : "Admins can update status and share timeline back to citizens."}
          </div>
        </div>
      </div>

      <div className="list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            No issues found for the current filters.
          </div>
        ) : (
          filtered.map((i) => (
            <div className="list-item" key={i.id}>
              <div className="list-item-header">
                <div className="list-item-title">{i.title}</div>
                <div className="list-item-meta">
                  <span>{i.area}</span>
                  <span>{i.status}</span>
                  <span>{i.priority} priority</span>
                  <span>Updated {i.timeAgo}</span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginTop: 4,
                  gap: 8
                }}
              >
                <div style={{ fontSize: "12px", color: "#8b949e" }}>
                  <div>Reported via: {i.createdBy}</div>
                  {i.adminNote && <div>Admin note: {i.adminNote}</div>}
                  {i.eta && <div>ETA: {i.eta}</div>}
                </div>

                {isAdmin && (
                  <button
                    className="btn-ghost"
                    style={{ fontSize: "11px", padding: "2px 8px" }}
                    onClick={() => startEdit(i)}
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {canReport && (
        <form className="form" onSubmit={submitUserIssue}>
          <div className="panel-helper" style={{ marginBottom: 8 }}>
            Report a new issue with any public service.
          </div>
          <div className="form-row">
            <label>Issue title</label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g., No water supply in Sector 5"
              required
            />
          </div>
          <div className="form-row">
            <label>Zone / Area</label>
            <input
              value={form.area}
              onChange={(e) => setForm({ ...form, area: e.target.value })}
              placeholder="e.g., South Zone"
              required
            />
          </div>
          <div className="form-row">
            <label>Priority</label>
            <select
              value={form.priority}
              onChange={(e) =>
                setForm({ ...form, priority: e.target.value })
              }
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="form-row">
            <label>Details</label>
            <textarea
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              placeholder="Optional additional details…"
            />
          </div>
          <div className="form-footer">
            <button className="btn-primary" type="submit">
              Submit issue
            </button>
          </div>
        </form>
      )}

      {isAdmin && editingId && (
        <form className="form" onSubmit={submitAdminUpdate}>
          <div className="panel-helper" style={{ marginBottom: 8 }}>
            Update status and message for the selected issue so users can see
            progress.
          </div>
          <div className="form-row">
            <label>Status</label>
            <select
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
            >
              <option>Open</option>
              <option>Investigating</option>
              <option>Resolved</option>
              <option>Rejected</option>
            </select>
          </div>
          <div className="form-row">
            <label>Admin note</label>
            <textarea
              value={editNote}
              onChange={(e) => setEditNote(e.target.value)}
              placeholder="e.g., Team assigned, work scheduled for evening."
            />
          </div>
          <div className="form-row">
            <label>ETA (expected resolution)</label>
            <input
              value={editEta}
              onChange={(e) => setEditEta(e.target.value)}
              placeholder="e.g., Today 7 PM"
            />
          </div>
          <div className="form-footer">
            <button className="btn-primary" type="submit">
              Save update
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

/* ---------- FEEDBACK PANEL ---------- */
function FeedbackPanel({
  feedback,
  search,
  canGiveFeedback,
  onAddFeedback
}) {
  const filtered = feedback.filter((f) => {
    const text = (f.title + f.amenity + f.user).toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const [form, setForm] = useState({
    amenity: "",
    title: "",
    rating: "4"
  });

  const submit = (e) => {
    e.preventDefault();
    if (!form.amenity || !form.title) return;
    onAddFeedback(form);
    setForm({ amenity: "", title: "", rating: "4" });
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Citizen feedback on amenities</div>
          <div className="panel-helper">
            {canGiveFeedback
              ? "Share your experience with city services and amenities."
              : "Track satisfaction level of major amenities."}
          </div>
        </div>
      </div>

      <div className="list">
        {filtered.length === 0 ? (
          <div className="empty-state">
            No feedback found for the current filters.
          </div>
        ) : (
          filtered.map((f) => (
            <div className="list-item" key={f.id}>
              <div className="list-item-header">
                <div className="list-item-title">{f.title}</div>
                <div className="rating">
                  {"★".repeat(f.rating) + "☆".repeat(5 - f.rating)}
                </div>
              </div>
              <div className="list-item-meta">
                <span>{f.amenity}</span>
                <span>{f.user}</span>
                <span>{f.timeAgo}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {canGiveFeedback && (
        <form className="form" onSubmit={submit}>
          <div className="panel-helper" style={{ marginBottom: 8 }}>
            Provide feedback on any city amenity.
          </div>
          <div className="form-row">
            <label>Amenity</label>
            <input
              value={form.amenity}
              onChange={(e) =>
                setForm({ ...form, amenity: e.target.value })
              }
              placeholder="e.g., Smart Bus Stop"
              required
            />
          </div>
          <div className="form-row">
            <label>Your feedback</label>
            <textarea
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              placeholder="e.g., Display is clear but needs more shade."
              required
            />
          </div>
          <div className="form-row">
            <label>Rating</label>
            <select
              value={form.rating}
              onChange={(e) =>
                setForm({ ...form, rating: e.target.value })
              }
            >
              <option value="5">5 - Excellent</option>
              <option value="4">4 - Good</option>
              <option value="3">3 - Average</option>
              <option value="2">2 - Poor</option>
              <option value="1">1 - Very bad</option>
            </select>
          </div>
          <div className="form-footer">
            <button className="btn-primary" type="submit">
              Submit feedback
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

/* ---------- REPORT / EXPORT / SNAPSHOT PANELS ---------- */
function ReportsPanel({ services, issues, feedback }) {
  const serviceCount = services.length;
  const openIssues = issues.filter(
    (i) => i.status === "Open" || i.status === "Investigating"
  ).length;
  const avgRating =
    feedback.reduce((sum, f) => sum + f.rating, 0) / feedback.length;

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">City health report</div>
          <div className="panel-helper">
            High level view of services, issues and citizen satisfaction.
          </div>
        </div>
      </div>

      <div className="list">
        <div className="list-item">
          <div className="list-item-header">
            <div className="list-item-title">Service coverage</div>
          </div>
          <div className="list-item-meta">
            <span>{serviceCount} services configured</span>
            <span>water, transport, health, lighting…</span>
          </div>
        </div>

        <div className="list-item">
          <div className="list-item-header">
            <div className="list-item-title">Operational risk</div>
          </div>
          <div className="list-item-meta">
            <span>{openIssues} open issues</span>
            <span>prioritised by zone &amp; impact</span>
          </div>
        </div>

        <div className="list-item">
          <div className="list-item-header">
            <div className="list-item-title">Citizen happiness</div>
            <div className="rating">
              {avgRating.toFixed(1)}★ average rating
            </div>
          </div>
          <div className="list-item-meta">
            <span>Based on latest feedback entries</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExportPanel() {
  const handleCSV = () =>
    alert(
      "CSV export triggered. In production this would download a CSV with all services, issues and feedback."
    );
  const handleJSON = () =>
    alert(
      "JSON export triggered. In production this would return a JSON API response."
    );

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Export city data</div>
          <div className="panel-helper">
            Demonstration of export actions for hackathon.
          </div>
        </div>
      </div>

      <div className="form-row">
        <button className="btn-primary" onClick={handleCSV}>
          Download CSV
        </button>
        <button className="btn-ghost" onClick={handleJSON}>
          Download JSON
        </button>
      </div>
    </div>
  );
}

function SnapshotPanel() {
  const handleSnapshot = () =>
    alert(
      "PDF snapshot generated. In a real system this would create a branded PDF report of the dashboard."
    );

  return (
    <div className="panel">
      <div className="panel-header">
        <div>
          <div className="panel-title">Export snapshot</div>
          <div className="panel-helper">
            One-click PDF snapshot of the current dashboard state.
          </div>
        </div>
      </div>
      <button className="btn-primary" onClick={handleSnapshot}>
        Download PDF snapshot
      </button>
    </div>
  );
}

/* ---------- DASHBOARD NAVBAR ---------- */
function Navbar({ search, onSearchChange, userName, userRole }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  return (
    <header className="navbar">
      <div
        className="navbar-logo"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/dashboard/services")}
      >
        <div className="logo-icon">SC</div>
        <span>SmartCityHub</span>
      </div>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search services, issues, feedback..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <nav className="nav-links">
        <button
          type="button"
          onClick={() => navigate("/dashboard/services")}
          className={
            path === "services" || path === "dashboard" ? "active" : ""
          }
        >
          Dashboard
        </button>
        <button
          type="button"
          onClick={() => navigate("/dashboard/reports")}
          className={path === "reports" ? "active" : ""}
        >
          Reports
        </button>
      </nav>

      <div className="nav-auth">
        <span style={{ fontSize: 13 }}>
          {userName || (userRole === "admin" ? "Admin" : "Citizen")}
        </span>
        <div className="nav-avatar">
          {userName ? userName.charAt(0).toUpperCase() : "S"}
        </div>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => navigate("/signout")}
        >
          Sign out
        </button>
      </div>
    </header>
  );
}

/* ---------- DASHBOARD SIDEBAR ---------- */
/* ---------- DASHBOARD SIDEBAR ---------- */
function Sidebar({ userRole }) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/").pop();

  const isAdmin = userRole === "admin";
  const isUser = userRole === "user";

  return (
    <aside className="sidebar">
      {/* MODE BLOCK – show only the active mode */}
      <div className="side-block">
        <div className="side-section-title">Mode</div>
        <div className="side-nav">
          {isAdmin && (
            <button className="active">
              Admin
              <span className="pill role-pill-admin">manage city</span>
            </button>
          )}

          {isUser && (
            <button className="active">
              User
              <span className="pill role-pill-user">citizen portal</span>
            </button>
          )}
        </div>
      </div>

      {/* SECTIONS */}
      <div className="side-block">
        <div className="side-section-title">Sections</div>
        <div className="side-chip-group">
          <button
            type="button"
            onClick={() => navigate("/dashboard/services")}
            className={
              "side-chip" +
              (path === "services" || path === "dashboard" ? " active" : "")
            }
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/issues")}
            className={"side-chip" + (path === "issues" ? " active" : "")}
          >
            Issues
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/feedback")}
            className={"side-chip" + (path === "feedback" ? " active" : "")}
          >
            Feedback
          </button>
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="side-block">
        <div className="side-section-title">Quick Stats</div>
        <div style={{ fontSize: "12px", color: "#8b949e", lineHeight: 1.5 }}>
          •City : <span style={{ color: "#c9d1d9" }}>Vijayawada</span>
          <br />
          • Population: <span style={{ color: "#c9d1d9" }}>3.2M</span>
          <br />
          • Zones: <span style={{ color: "#c9d1d9" }}>5</span>
          <br />
          • Smart sensors: <span style={{ color: "#c9d1d9" }}>2,430</span>
        </div>
      </div>
    </aside>
  );
}


/* ---------- DASHBOARD LAYOUT ---------- */
function Dashboard() {
  const {
    services,
    issues,
    feedback,
    searchTerm,
    setSearchTerm,
    userName,
    userRole,
    addService,
    addIssue,
    addFeedback,
    updateIssue
  } = useAppContext();

  const navigate = useNavigate();
  const location = useLocation();
  let current = location.pathname.split("/").pop();

  const valid = [
    "services",
    "issues",
    "feedback",
    "reports",
    "export",
    "snapshot",
    "dashboard"
  ];
  if (!valid.includes(current)) {
    current = "services";
  }
  if (current === "dashboard") current = "services";

  const isAdmin = userRole === "admin";
  const isUser = userRole === "user";

  const roleLabel =
    userRole === "admin"
      ? "Mode: Admin – manage city info, services & infrastructure."
      : "Mode: User – explore city, report issues & give feedback.";

  return (
    <>
      <Navbar
        search={searchTerm}
        onSearchChange={setSearchTerm}
        userName={userName}
        userRole={userRole}
      />

      <main className="main">
        <Sidebar userRole={userRole} />

        <section className="content">
          <div className="content-header">
            <div className="content-title-block">
              <div className="city-title">
                NeoVille Smart City
                <span className="badge">
                  FEDF-PS21 • Smart City Application
                </span>
              </div>
              <div>
                <span className="role-badge">
                  <span
                    className={
                      "role-dot " +
                      (userRole === "admin"
                        ? "role-admin-dot"
                        : "role-user-dot")
                    }
                  />
                  {roleLabel}
                </span>
              </div>
            </div>

            <div className="header-actions">
              <button
                className="btn-ghost"
                onClick={() => navigate("/dashboard/snapshot")}
              >
                Export snapshot
              </button>
              <button
                className="btn-primary"
                onClick={() => navigate("/dashboard/reports")}
              >
                Generate report
              </button>
            </div>
          </div>

          <StatsRow
            services={services}
            issues={issues}
            feedback={feedback}
          />

          <div className="tabs">
            <div
              className={"tab" + (current === "services" ? " active" : "")}
              onClick={() => navigate("/dashboard/services")}
            >
              Services
            </div>
            <div
              className={"tab" + (current === "issues" ? " active" : "")}
              onClick={() => navigate("/dashboard/issues")}
            >
              Issues
            </div>
            <div
              className={"tab" + (current === "feedback" ? " active" : "")}
              onClick={() => navigate("/dashboard/feedback")}
            >
              Feedback
            </div>
            <div
              className={"tab" + (current === "reports" ? " active" : "")}
              onClick={() => navigate("/dashboard/reports")}
            >
              Reports
            </div>
          </div>

          {current === "services" && (
            <ServicesPanel
              services={services}
              search={searchTerm}
              isAdmin={isAdmin}
              onAddService={addService}
            />
          )}

          {current === "issues" && (
            <IssuesPanel
              issues={issues}
              search={searchTerm}
              canReport={isUser}
              isAdmin={isAdmin}
              onAddIssue={addIssue}
              onUpdateIssue={updateIssue}
            />
          )}

          {current === "feedback" && (
            <FeedbackPanel
              feedback={feedback}
              search={searchTerm}
              canGiveFeedback={isUser}
              onAddFeedback={addFeedback}
            />
          )}

          {current === "reports" && (
            <ReportsPanel
              services={services}
              issues={issues}
              feedback={feedback}
            />
          )}

          {current === "export" && <ExportPanel />}

          {current === "snapshot" && <SnapshotPanel />}
        </section>
      </main>
    </>
  );
}

/* ---------- ROOT APP ---------- */
export default function App() {
  const [services, setServices] = useState(initialServices);
  const [issues, setIssues] = useState(initialIssues);
  const [feedback, setFeedback] = useState(initialFeedback);

  const [searchTerm, setSearchTerm] = useState("");

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("user"); // admin | user

  // simple in-memory "registered users" list for citizens
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const registerUser = (email, username) => {
    setRegisteredUsers((prev) => [
      ...prev,
      {
        email,
        username
      }
    ]);
  };

  const signIn = (identifier, role) => {
    // CITIZEN MUST SIGN UP FIRST
    if (role === "user") {
      const normalized = identifier.trim().toLowerCase();
      const exists = registeredUsers.some(
        (u) =>
          u.email.toLowerCase() === normalized ||
          u.username.toLowerCase() === normalized
      );
      if (!exists) {
        alert(
          "Citizen access: please sign up once on SmartCityHub before signing in."
        );
        return false;
      }
    }

    setIsSignedIn(true);
    setUserName(identifier);
    setUserRole(role);
    return true;
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUserName("");
    setUserRole("user");
  };

  const addService = (data) => {
    setServices((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...data
      }
    ]);
  };

  const addIssue = (data) => {
    setIssues((prev) => [
      {
        id: prev.length + 1,
        title: data.title,
        area: data.area,
        status: "Open",
        priority: data.priority,
        createdBy: isSignedIn ? userName || "Citizen" : "Guest",
        timeAgo: "just now",
        adminNote: "",
        eta: ""
      },
      ...prev
    ]);
  };

  const updateIssue = (id, updates) => {
    setIssues((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              ...updates,
              timeAgo: "just now"
            }
          : i
      )
    );
  };

  const addFeedback = (data) => {
    setFeedback((prev) => [
      {
        id: prev.length + 1,
        title: data.title,
        amenity: data.amenity,
        rating: parseInt(data.rating, 10),
        user: isSignedIn ? userName || "Citizen" : "Guest",
        timeAgo: "just now"
      },
      ...prev
    ]);
  };

  const ctxValue = {
    services,
    issues,
    feedback,
    searchTerm,
    setSearchTerm,
    userName,
    userRole,
    signIn,
    signOut,
    addService,
    addIssue,
    addFeedback,
    updateIssue,
    registerUser
  };

  return (
    <AppContext.Provider value={ctxValue}>
      <Routes>
        {/* Landing / marketing page */}
        <Route path="/" element={<LoginPage />} />

        {/* Auth pages */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signout" element={<SignOutPage />} />

        {/* Dashboard and all its subpaths */}
        <Route
          path="/dashboard/*"
          element={
            isSignedIn ? <Dashboard /> : <Navigate to="/signin" replace />
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <Navigate
              to={isSignedIn ? "/dashboard" : "/"}
              replace
            />
          }
        />
      </Routes>
    </AppContext.Provider>
  );
}
