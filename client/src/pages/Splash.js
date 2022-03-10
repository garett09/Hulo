import { useState } from "react";

function Splash() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  CONST;
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </form>
    </div>
  );
}
