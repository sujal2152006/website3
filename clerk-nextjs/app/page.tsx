'use client';

import { useUser, useClerk } from '@clerk/nextjs';

export default function Home() {
  const { user } = useUser();
  const clerk = useClerk();

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete your account?')) {
      try {
        const res = await fetch('/api/delete-account', { method: 'POST' });
        if (res.ok) {
          clerk.signOut();
        } else {
          alert('Failed to delete account');
        }
      } catch (err) {
        alert('Error deleting account');
      }
    }
  };

  return (
    <main>
      <h1>Welcome to Clerk Next.js App</h1>
      {user ? (
        <div>
          <p>Hello, {user.firstName || user.primaryEmailAddress?.emailAddress}!</p>
          <button onClick={handleDelete}>Delete Account</button>
        </div>
      ) : (
        <p>Use the buttons in the header to sign in or sign up.</p>
      )}
    </main>
  );
}
