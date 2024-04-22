import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';

export default function Header() {
  return (
    <header>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <UserButton
          afterSignOutUrl={import.meta.env.VITE_CLERK_AFTER_SIGN_OUT_URL}
        />
      </SignedIn>
    </header>
  );
}
