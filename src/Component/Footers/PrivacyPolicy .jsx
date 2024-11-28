import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-4xl font-bold text-sky-500 mb-4">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Lingo Bingo</strong>, we value your privacy and are committed to protecting your
        personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">1. Data Collection</h2>
      <p>
        We collect only the necessary information to provide a seamless experience, such as your
        email address and login credentials.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">2. Use of Data</h2>
      <p>
        Your data is used to improve your experience with Lingo Bingo, such as tracking progress,
        customizing vocabulary lists, and enhancing app features.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">3. Sharing of Data</h2>
      <p>
        We do not share your personal information with third parties without your consent, except
        where required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">4. Data Security</h2>
      <p>
        Your data is securely stored using Firebase authentication services. We use industry
        standards to ensure data protection.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">5. User Rights</h2>
      <p>
        You have the right to request access, modification, or deletion of your personal data at any
        time.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
