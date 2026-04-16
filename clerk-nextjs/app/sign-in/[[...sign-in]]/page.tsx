import { useSignIn } from '@clerk/nextjs';

export default function SignInPage() {
  const { signIn, setActive } = useSignIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const result = await signIn.create({
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
      <button type="submit">Sign In</button>
    </form>
  );
}