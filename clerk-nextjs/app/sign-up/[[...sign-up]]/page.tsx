import { useSignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  const { signUp, setActive } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const result = await signUp.create({
        emailAddress: email,
        password,
      });
      if (result.status === 'complete') {
        setActive({ session: result.createdSessionId });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}