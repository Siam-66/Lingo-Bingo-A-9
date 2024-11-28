import React from "react";

const UserAgreement = () => {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-4xl font-bold text-sky-500 mb-4">User Agreement</h1>
      <p className="mb-4">
        Thank you for choosing <strong>Lingo Bingo</strong>, a Japanese vocabulary learning platform.
        This agreement governs your use of our services.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">1. Account Creation</h2>
      <p>
        Users must create an account with accurate information to access the application's full
        features.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">2. Fair Use Policy</h2>
      <p>
        Lingo Bingo is intended for personal learning. Any attempt to exploit, copy, or misuse
        content is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">3. Responsibility of Use</h2>
      <p>
        Users are responsible for keeping their login credentials safe. Lingo Bingo is not liable
        for unauthorized account access.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">4. Termination of Account</h2>
      <p>
        Lingo Bingo reserves the right to suspend or terminate accounts for violations of the terms
        outlined in this agreement.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">5. Amendments</h2>
      <p>
        This agreement may be updated periodically. Continued use of the app indicates acceptance of
        any changes.
      </p>
    </div>
  );
};

export default UserAgreement;
