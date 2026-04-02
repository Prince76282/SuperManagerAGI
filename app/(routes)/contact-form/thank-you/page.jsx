export default function ThankYou() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          🎉 Message Sent!
        </h1>
        <p className="text-gray-600">
          Thanks! We will contact you soon.
        </p>
        <a
          href="/"
          className="inline-block mt-4 bg-[#625FD0] text-white px-6 py-2 rounded-lg"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}