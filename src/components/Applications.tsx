const Applications = () => {
  return (
    <section className="bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-semibold mb-6">Applications</h2>
      <div className="flex flex-col items-start space-y-6">
        <div>
          <h3 className="text-xl font-medium">
            <a
              href="https://github.com/oozan/TrafiAuth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium transition-colors hover:text-gray-100"
            >
              TrafiAuth
            </a>
          </h3>
          <p className="text-gray-300 mb-4">Reverse proxy with Traefik</p>
          <p className="mb-4">
            Secure Microservices with Traefik Gateway and Go Authentication
            Service. This project showcases the implementation of an
            authentication system using Go, Docker, and Docker Compose.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium">
            <a
              href="https://github.com/oozan/news-feed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium transition-colors hover:text-gray-100"
            >
              News-feed
            </a>
          </h3>
          <p className="text-gray-300 mb-4">Simple news reading/updating app</p>
          <p className="mb-4">
            News-feed is a straightforward app designed for reading and updating
            news. Users can browse the latest updates or add new articles. This
            application aims to keep users informed with up-to-date news and
            announcements. Additionally, it can be utilized by companies to
            efficiently share news and updates with their employees.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium">
            <a
              href="https://github.com/oozan/myvet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium transition-colors hover:text-gray-100"
            >
              MyVet
            </a>
          </h3>
          <p className="text-gray-300 mb-4">Veterinarian Clinic App</p>
          <p className="mb-4">
            MyVet is a veterinary clinic app designed for clinicians to
            efficiently manage and record animal appointments, immunizations,
            vaccines, and drug tests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Applications;
