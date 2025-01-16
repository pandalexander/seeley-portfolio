<script setup>
import { ref, onMounted } from "vue";
import Cube from "./Cube.vue";
import Card from "./Card.vue";

let success = ref(false);
let failure = ref(false);
let isFormWaiting = ref(false);

function formSuccess() {
  success.value = true;
  setTimeout(() => {
    success.value = false;
  }, 3000);
}

function formFailure() {
  failure.value = true;
  setTimeout(() => {
    failure.value = false;
  }, 3000);
}

function formWaiting() {
  isFormWaiting.value = true;
}

function formComplete() {
  isFormWaiting.value = false;
}

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "Hi_aJvsLw-gusIqCn",
  });
})();
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      formWaiting();
      emailjs.sendForm("port_service", "port_contact_form", this).then(
        () => {
          console.log("SUCCESS!");
          formSuccess();
          this.reset();
          formComplete();
        },
        (error) => {
          formFailure();
          formComplete();
          console.log("FAILED...", error);
        }
      );
      return false;
    });
};

const myScrollElement = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        console.log(entry.target.classList);
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const elements = document.querySelectorAll(".hide-then-show");

  elements.forEach((el) => observer.observe(el));
});
</script>

<template>
  <div
    class="h-screen flex justify-center items-center home-background animate-fade-in-bg"
  >
    <div class="flex flex-col">
      <div
        class="flex justify-center items-center opacity-0 animate-fade-in-late pt-24 m-8"
      >
        <Cube />
      </div>
    </div>
  </div>
  <div ref="myScrollElement" id="scrollArea" class="">
    <div id="about"></div>
    <header
      class="hide-then-show text-primary p-11 sticky top-0 left-0 right-0 opacity-0 z-40 pointer-events-none w-fit mx-auto"
    >
      <nav class="rounded-full">
        <ul
          class="flex justify-center items-center space-x-4 bg-primary rounded-full py-4 px-7 pointer-events-auto"
        >
          <li class="mb-0">
            <a
              href="#about"
              class="hover:text-white transition ease-in-out duration-300 text-fifth"
              >About</a
            >
          </li>
          <li class="mb-0">
            <a
              href="#projects"
              class="hover:text-white transition ease-in-out duration-300 text-fifth"
              >Projects</a
            >
          </li>
          <li class="mb-0">
            <a
              href="#skills"
              class="hover:text-white transition ease-in-out duration-300 text-fifth"
              >Skills</a
            >
          </li>

          <li class="mb-0">
            <a
              href="#contact"
              class="hover:text-white transition ease-in-out duration-300 text-fifth"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <main class="max-w-4xl mx-auto p-4">
      <section>
        <h1 class="hide-then-show text-center font-primary text-primary mb-12">
          Making the world a nicer place, one
          <span class="italic text-fourth font-mono">&gt;commit</span> at a
          time.
        </h1>
      </section>
      <div
        class="hide-then-show grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 p-6 bg-white shadow-lg rounded-xl"
      >
        <!-- Left column for the image -->
        <div class="flex justify-center items-center">
          <img
            src="../assets/me-face.png"
            alt=""
            class="w-auto h-auto max-w-52 rounded-full bg-gradient-to-br from-red-300 to-cyan-300 shadow-lg shadow-zinc-300"
          />
        </div>
        <!-- Right column for the text -->
        <div
          class="flex flex-col justify-center sm:items-center md:items-start"
        >
          <h2 class="text-third">Hi, I'm Alex!</h2>
          <p class="text-left text-third">
            I'm a passionate software engineer based in Colorado Springs. To be
            brief, I'm thrilled to create powerful software solutions across
            various technologies.
          </p>
        </div>
      </div>

      <div
        class="hide-then-show flex justify-start gap-6 items-center min-w-full p-6"
      >
        <a href="https://github.com/pandalexander" target="_blank">
          <img
            src="../assets/github-icon.svg"
            alt="Github Icon"
            class="max-h-12"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/alex-seeley-339792234/"
          target="_blank"
        >
          <img
            src="../assets/linkedin-icon.svg"
            alt="LinkedIn Icon"
            class="max-h-12"
          />
        </a>
      </div>

      <hr id="projects" class="border-secondary mt-12" />

      <div class="flex flex-col">
        <h1 class="hide-then-show text-5xl">Projects and Experience</h1>
        <hr
          class="hide-then-show border-primary min-w-full mb-20 mt-2"
          style="border: 0.25px solid black"
        />

        <h1 class="hide-then-show text-3xl">See It in Action</h1>
        <hr
          class="hide-then-show border-primary min-w-full mb-20 mt-2"
          style="border: 0.25px solid black"
        />

        <div class="rounded-lg px-12">
          <h2 class="hide-then-show">
            BTS Consulting - Web Design and Deployment
          </h2>
          <a href="https://bts-consulting.vercel.app/" target="_blank">
            <img
              src="../assets/bts-hero.png"
              alt=""
              class="hide-then-show border-2 border-white rounded-md shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-sky-400 hover:border-sky-600"
            />
          </a>
          <Card class="hide-then-show border-black mt-6 mb-6">
            <template #projectTitle>
              <h3>Read more...</h3>
            </template>
            <template #projectDescription>
              <p>
                I developed a modern, mobile-responsive landing page for a local
                Certified Public Accountant (CPA) using React and Tailwind CSS,
                deployed seamlessly on Vercel. The website features smooth,
                engaging animations that create an inviting user experience
                while showcasing the CPA's services in a professional yet
                approachable manner. This project solved a real-world business
                problem by establishing a strong online presence for the client,
                enabling them to attract and connect with more customers.
              </p>
            </template>
            <template #projectContent>
              <h3 class="mt-6">Highlights:</h3>
              <ul class="list-disc pl-4 py-3">
                <li>
                  Built with React and Tailwind CSS for speed and design
                  flexibility.
                </li>
                <li>
                  Deployed on Vercel, ensuring fast load times and reliability.
                </li>
                <li>Fully mobile-responsive design to cater to all devices.</li>
                <li>
                  Implemented smooth animations for a modern and dynamic user
                  experience.
                </li>
                <li>
                  Delivered a solution that met business needs and provided
                  tangible value.
                </li>
              </ul>
              <p>
                Technologies:
                <span class="text-fourth">
                  React ⚛️, Tailwind CSS 💨, Vercel🔺
                </span>
              </p>
              <p>
                This project showcases my ability to deliver real-world
                solutions using modern web technologies while focusing on
                performance, user experience, and responsiveness.
              </p>
            </template>
          </Card>
        </div>

        <h1 class="hide-then-show text-3xl mt-20">Behind the Scenes</h1>
        <hr
          class="hide-then-show border-primary min-w-full mb-20 mt-2"
          style="border: 0.25px solid black"
        />

        <h2 class="hide-then-show mb-0">
          My Work at
          <a
            class="text-secondary hover:text-fourth transition ease-in-out duration-300"
            href="https://www.springsit.com/"
            target="_blank"
            >Springs IT</a
          >
        </h2>
        <p class="hide-then-show m-0 p-0">(April 2024 - July 2024)</p>
        <Card class="hide-then-show mt-6 border-secondary">
          <template #projectTitle>
            <h3>Documentation App: Client Information Management</h3>
          </template>
          <template #projectDescription>
            <p>
              I played a key role in developing a Vue.js-based web application
              for structured documentation. This project aimed to create an
              in-house solution for managing critical client information,
              aligning with the company's need for efficient data organization.
            </p>
          </template>
          <template #projectContent>
            <h3 class="mt-6">Key Contributions:</h3>
            <ul class="list-disc pl-4 py-3">
              <li>
                Designed and implemented a search interface using Typesense to
                query a Redis database, enabling users to search for any word in
                document titles or bodies and displaying highlighted results.
              </li>
              <li>
                Aided the implementation of an intuitive tagging system with
                search functionality, improving document organization and
                retrieval.
              </li>
              <li>
                Utilized Pinia for state management, ensuring responsive UI
                updates that accurately reflected backend changes.
              </li>
              <li>
                Implemented key CRUD functionalities, including an integrated
                document creation process with rapid navigation to the editing
                interface.
              </li>
              <li>
                Developed real-time save status indicators and error handling to
                enhance user experience and data integrity.
              </li>
            </ul>
            <p>
              Technologies:
              <span class="text-fourth">
                Vue.js 💚, Tailwind CSS 💨, Pinia 🍍, RESTful APIs 🌐, Typesense
                🔎, Redis 🔴
              </span>
            </p>
            <p>
              This project showcased my ability to translate business needs into
              user-friendly interfaces, work effectively with APIs, and
              implement state management in a real-world application. It
              demonstrates my passion for creating products that users love and
              my skills in building intuitive, visually appealing, and
              performant front-end solutions, including advanced search
              functionalities.
            </p>
          </template>
        </Card>

        <Card class="hide-then-show mt-6 border-secondary">
          <template #projectTitle>
            <h3>Full-Stack Network Monitoring System</h3>
          </template>
          <template #projectDescription>
            <p>
              I contributed to developing a comprehensive network monitoring
              solution, showcasing my ability to work across the entire stack
              and collaborate on complex, real-world problems.
            </p>
          </template>
          <template #projectContent>
            <h3 class="mt-6">Key Contributions:</h3>
            <ul class="list-disc pl-4 py-3">
              <li>
                Developed Rust code for Raspberry Pi devices to extract and
                hardware information and unique hashed hardware IDs to send
                periodic network status updates via HTTP requests.
              </li>
              <li>
                Collaborated on creating a Java Spring API to handle incoming
                device data, interfacing with a Redis database for efficient
                data storage and retrieval.
              </li>
              <li>
                Implemented Redis sorted sets and hashes to store device
                check-in times and system information, enabling real-time
                monitoring capabilities.
              </li>
              <li>
                Designed RESTful endpoints for data ingestion (PUT) and status
                retrieval (GET), including a feature to identify offline devices
                based on check-in times.
              </li>
              <li>
                Containerized the Java Spring application using Docker, ensuring
                consistent deployment across different environments and
                facilitating easy scaling and management of the service.
              </li>
              <li>
                Built a Vue.js frontend to visualize the current status of all
                monitored hardware systems and networks, providing an intuitive
                user interface.
              </li>
            </ul>
            <p>
              Technologies:
              <span class="text-fourth">
                Rust 🦀, Java ☕, Spring Boot 🌱, Redis 🔴, Docker 🐳, Vue.js
                💚, Raspberry Pi 🥧
              </span>
            </p>
            <p>
              This project demonstrates my adaptability across different
              technologies, my understanding of full-stack development
              principles, and my ability to contribute to robust, scalable
              solutions. It showcases my experience in building real-time
              monitoring systems and working with both low-level hardware
              interactions and high-level web interfaces.
            </p>
          </template>
        </Card>

        <Card class="hide-then-show mt-6 border-secondary">
          <template #projectTitle>
            <h3>RAFT: Mobile App for Interactive Discipleship</h3>
          </template>
          <template #projectDescription>
            <p>
              I played a key role in developing a mobile application for my
              local church, now live on
              <a
                href="https://apps.apple.com/us/app/raft-a-discipleship-guide/id6469940868"
                target="_blank"
                class="text-secondary"
              >
                the App Store</a
              >
              and
              <a
                href="https://play.google.com/store/apps/details?id=org.harvestdowntown.raft&pcampaignid=web_share"
                target="_blank"
                class="text-secondary"
                >Google Play</a
              >. This project showcases my ability to create user-friendly,
              engaging interfaces for complex content delivery.
            </p>
          </template>
          <template #projectContent>
            <h3 class="mt-6">Key Contributions:</h3>
            <ul class="list-disc pl-4 py-3">
              <li>
                Contributed to the front-end using .NET MAUI and XAML in Visual
                Studio, resulting in a responsive and intuitive user interface
                across 10 curriculum pages.
              </li>
              <li>
                Designed and implemented interactive features including
                discussion prompts, memorization pop-ups, assessment sliders,
                and a curriculum completion tracker.
              </li>
              <li>
                Created custom UI elements such as the app logo, completion
                status buttons, and status bubbles, demonstrating both design
                and development skills.
              </li>
              <li>
                Managed the app bundling process and successfully published the
                app on the App Store and Google Play.
              </li>
              <li>
                Developed a
                <a
                  href="https://raftdmd.org/"
                  target="_blank"
                  class="text-secondary"
                  >Bootstrap-based privacy policy page</a
                >, addressing legal requirements for app publication.
              </li>
            </ul>
            <p>
              Technologies:
              <span class="text-fourth">
                .NET MAUI 🤖, XAML 📜, Visual Studio 💻, Bootstrap 💜
              </span>
            </p>
            <p>
              This project demonstrates my ability to translate complex
              requirements into a user-friendly mobile application, combining
              technical skills with an eye for design. It showcases my
              experience in the full mobile app development lifecycle, from
              UI/UX design to publication.
            </p>
          </template>
        </Card>

        <h2 class="hide-then-show mt-16 mb-0">
          My Work at
          <a
            class="text-secondary hover:text-fourth transition ease-in-out duration-300"
            href="https://sandalsdiscipleshipministries.com/"
            target="_blank"
            >Sandals Discipleship Ministries</a
          >
        </h2>
        <p class="hide-then-show m-0 p-0">(August 2024 - Today)</p>

        <Card class="hide-then-show mt-6 border-secondary">
          <template #projectTitle>
            <h3>Web Development and Content Support</h3>
          </template>
          <template #projectDescription>
            <p>
              As a paid intern, I contribute to the team's digital presence
              through website updates and user interface design. Additionally, I
              am poised to assist with the team's mobile app development using
              React Native, further expanding my skillset in cross-platform
              mobile technologies. My primary responsibilities include:
            </p>
          </template>
          <template #projectContent>
            <ul class="list-disc pl-4 py-3">
              <li>
                Supporting website updates using WordPress and Divi themes
              </li>
              <li>
                Compiling user stories for Azure based on team brainstorming
              </li>
              <li>Designing intuitive dashboard widgets with Vue.js</li>
              <li>
                Collaborating on the development of responsive web applications
              </li>
            </ul>
            <p>
              Technologies:
              <span class="text-fourth">
                Vue.js 💚, React Native⚛️📱, WordPress 📝
              </span>
            </p>
            <p>
              This role allows me to apply my technical knowledge in a dynamic
              environment, continuously learning and adapting to meet the
              evolving needs of our digital products.
            </p>
          </template>
        </Card>

        <h2 class="hide-then-show mt-16">
          My
          <a
            href="https://github.com/pandalexander"
            target="_blank"
            class="text-fourth hover:text-secondary transition ease-in-out duration-300"
            >Solo</a
          >
          Work
        </h2>

        <Card class="hide-then-show mt-6 border-fourth">
          <template #projectTitle>
            <h3>College Savings Calculator</h3>
          </template>
          <template #projectDescription>
            <p>
              I developed a sophisticated college savings calculator using
              Angular, showcasing my expertise in modern web development
              frameworks and complex financial computations. This application
              helps parents plan for their children's education by providing
              detailed savings projections and monthly contribution
              recommendations through an intuitive, responsive interface.
            </p>
          </template>
          <template #projectContent>
            <h3 class="mt-6">Key Features and Technologies:</h3>
            <ul class="list-disc pl-4 py-3">
              <li>
                Built with Angular, demonstrating proficiency in component-based
                architecture
              </li>
              <li>
                Implemented reactive forms for dynamic user input handling
              </li>
              <li>
                Utilized TypeScript for enhanced type safety and code
                reliability
              </li>
              <li>
                Created modular components for maintainable, scalable code
              </li>
              <li>
                Incorporated financial calculation algorithms for accurate
                projections
              </li>
            </ul>
            <h4 class="mt-6">Highlights:</h4>
            <ul class="list-disc pl-4 py-3">
              <li>
                Multi-child support calculating savings needs for up to 10
                children simultaneously
              </li>
              <li>Dynamic form controls that adapt based on user input</li>
              <li>
                Complex financial modeling incorporating inflation and
                investment returns
              </li>
              <li>
                Real-time calculations updating projections instantly as inputs
                change
              </li>
              <li>
                Monthly payment planning converting total goals into actionable
                targets
              </li>
            </ul>

            <p>
              Technologies:
              <span class="text-fourth">
                Angular 🛑, TypeScript 🔵, HTML 🟠, CSS 💅, Tailwind CSS
                💨</span
              >
            </p>
            <p>
              This project demonstrates my ability to create sophisticated
              financial planning tools while maintaining clean code
              architecture. It showcases my proficiency in Angular development,
              form handling, state management, and implementing complex business
              logic. The modular design and type-safe approach illustrate my
              understanding of enterprise-level application development
              practices.
            </p>
            <div class="w-full flex justify-evenly items-center gap-4">
              <a
                href="https://pandalexander.github.io/budget/"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/pandalexander/budget"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                The Code
              </a>
            </div>
          </template>
        </Card>

        <Card class="hide-then-show mt-6 border-fourth">
          <template #projectTitle>
            <h3>React Fake News Generator</h3>
          </template>
          <template #projectDescription>
            <p>
              I developed a dynamic, responsive web application using React and
              Tailwind CSS that allows users to create and preview custom "fake
              news" articles in real-time. This project showcases my proficiency
              in front-end development practices, state management, and
              responsive design.
            </p>
          </template>
          <template #projectContent>
            <h3 class="mt-6">Key Features and Technologies:</h3>
            <ul class="list-disc pl-4 py-3">
              <li>
                React for component-based architecture and efficient UI updates
              </li>
              <li>Tailwind CSS for responsive, utility-first styling</li>
              <li>React Hooks (useState) for state management</li>
              <li>Two-pane layout for simultaneous editing and preview</li>
            </ul>
            <h4 class="mt-6">Highlights:</h4>
            <ul class="list-disc pl-4 py-3">
              <li>Real-time preview updating as users input content</li>
              <li>
                Responsive design adapting seamlessly from mobile to desktop
              </li>
              <li>Efficient state management using React Hooks</li>
              <li>
                Modular component structure for maintainability and reusability
              </li>
            </ul>

            <p>
              Technologies:
              <span class="text-fourth">
                HTML 🟠, CSS 💅, Javascript 💛, React ⚛️, Tailwind CSS 💨,
                Vercel 🔺
              </span>
            </p>
            <p>
              This project demonstrates my ability to create interactive,
              user-friendly web applications using modern front-end
              technologies, and it makes me excited to continue creating
              polished, user-centric interfaces that provide engaging and
              efficient user experiences.
            </p>
            <div class="w-full flex justify-evenly items-center gap-4">
              <a
                href="https://news-generator-2.vercel.app/"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/pandalexander/news-generator/tree/main/news-generator"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                The Code
              </a>
            </div>
          </template>
        </Card>

        <Card class="hide-then-show mt-6 border-fourth">
          <template #projectTitle>
            <h3>Dynamic To-Do List</h3>
          </template>
          <template #projectDescription>
            <p>
              I developed a feature-rich, responsive to-do list application
              using vanilla JavaScript, HTML, and CSS, showcasing my proficiency
              in base-level front-end development and object-oriented
              programming principles.
            </p>
          </template>
          <template #projectContent>
            <h3 class="mt-6">Key Features and Technologies:</h3>
            <ul class="list-disc pl-4 py-3">
              <li>
                Implemented using pure JavaScript, demonstrating strong
                foundational programming skills
              </li>
              <li>
                Utilized Webpack for efficient module bundling and asset
                management
              </li>
              <li>
                Designed with raw CSS, showcasing ability to create polished UIs
                without frameworks
              </li>
              <li>
                Incorporated date handling with date-fns library for improved
                user experience
              </li>
              <li>
                Implemented local storage for data persistence across sessions
              </li>
            </ul>
            <h4 class="mt-6">Core Functionalities:</h4>
            <ul class="list-disc pl-4 py-3">
              <li>
                Project Management: Users can create, view, and delete multiple
                projects
              </li>
              <li>
                Task Management: Within each project, users can add, edit, view,
                and delete tasks
              </li>
              <li>
                Dynamic UI Updates: Real-time UI changes reflect data
                modifications without page reloads
              </li>
              <li>
                Priority System: Tasks can be assigned different priority levels
                with visual indicators
              </li>
              <li>
                Due Date Tracking: Implemented date selection and formatting for
                task deadlines
              </li>
              <li>
                Completion Status: Users can mark tasks as complete/incomplete
                with visual feedback
              </li>
            </ul>
            <h4 class="mt-6">Advanced Features:</h4>
            <ul class="list-disc pl-4 py-3">
              <li>
                Modal Popups: Created intuitive interfaces for adding/editing
                tasks and projects
              </li>
              <li>
                Interactive Icons: Utilized SVG icons for a clean, modern UI
                design
              </li>
            </ul>

            <p>
              Technologies:
              <span class="text-fourth">
                HTML 🟠, CSS 💅, Vanilla Javascript 💛, Webpack 📦
              </span>
            </p>
            <p>
              This project demonstrates my ability to create complex,
              interactive web applications from scratch. It showcases my skills
              in JavaScript, DOM manipulation, event handling, and creating
              intuitive user interfaces. The use of OOP principles with Project
              and Todo classes illustrates my understanding of software design
              patterns and code organization in larger applications.
            </p>
            <div class="w-full flex justify-evenly items-center gap-4">
              <a
                href="https://pandalexander.github.io/to-do-odin/"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/pandalexander/to-do-odin"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                The Code
              </a>
            </div>
          </template>
        </Card>

        <Card class="hide-then-show mt-6 border-amber-300">
          <template #projectTitle>
            <h3>The Projects That Really Matter</h3>
          </template>
          <template #projectDescription>
            <p>
              Throughout my coding journey, I've made many projects. They may
              not look that pretty or have all the features, but they certainly
              have a special place in my heart. This is because they were the
              projects I built to learn the basics! Nothing will ever beat that
              feeling of seeing your computer actually
              <span class="font-bold text-third">do</span> something that you
              told it to do, and I hope for the opportunity to chase that
              feeling for the rest of my career. I'll let you take a peek at my
              journey to see how I've progressed until now. I'll be more brief
              in these sections - I hope you enjoy. (P.S. Please spare me shame
              and open on a desktop - responsive design wasn't exactly the top
              priority yet...)
            </p>
          </template>
          <template #projectContent>
            <h3 class="mt-6">My First Github Repo</h3>
            <p>
              This humble little repo marks the beginning of my journey into the
              world of software development. This repository serves as a magical
              reminder of where it all began and symbolizes the excitement and
              curiosity that fueled my journey into coding.
            </p>
            <div class="w-full flex justify-center items-center">
              <a
                href="https://github.com/pandalexander/git_test"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                The Code
              </a>
            </div>

            <h3 class="mt-12">Learning Logic: Rock Paper Scissors</h3>
            <p>
              This simple yet engaging project was my first adventure into the
              world of logical thinking in code. Building this game allowed me
              to delve into basic decision-making algorithms. It’s a testament
              to the initial thrill I felt as I began mastering fundamental
              coding concepts.
            </p>
            <div class="w-full flex justify-evenly items-center gap-4">
              <a
                href="https://pandalexander.github.io/rock-paper-scissors/"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/pandalexander/rock-paper-scissors"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                The Code
              </a>
            </div>

            <h3 class="mt-12">Learning the DOM: Etch a Sketch</h3>
            <p>
              Building this toy was my introduction to the fascinating world of
              the Document Object Model (DOM). Manipulating elements in
              real-time on the screen was a jaw-dropping experience at the time,
              and it demonstrated to me the creative potential of web
              development. This project symbolizes the wonder and joy of
              bringing interactivity to my code.
            </p>
            <div class="w-full flex justify-evenly items-center gap-4">
              <a
                href="https://pandalexander.github.io/etch-a-sketch/"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/pandalexander/etch-a-sketch"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                The Code
              </a>
            </div>

            <h3 class="mt-12">Learning Layout: Admin Dashboard Mockup</h3>
            <p>
              This project is where the potential for beauty in front-end was
              really showcased. Designing this admin dashboard mockup was a
              memorable moment in my journey, as it introduced me to the
              complexities of layout and user experience. This project is just
              plain pretty, and it gave me the joy of creating visually
              appealing and functional interfaces.
            </p>
            <div class="w-full flex justify-evenly items-center gap-4">
              <a
                href="https://pandalexander.github.io/odin-admin-dashboard/"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/pandalexander/odin-admin-dashboard"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                The Code
              </a>
            </div>

            <h3 class="mt-12">A Personal Favorite: Tic Tac Toe</h3>
            <p>
              This project combines both logic and interactivity in a nostalgic
              game. Building Tic Tac Toe was not only fun but also a great
              exercise in creating a user-friendly interface and handling game
              logic. That's not why it's my favorite though - this one is my
              favorite because my little sister told me she uses it all the
              time.
            </p>
            <div class="w-full flex justify-evenly items-center gap-4">
              <a
                href="https://pandalexander.github.io/tic-tac-toe-odin/"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/pandalexander/tic-tac-toe-odin"
                target="_blank"
                class="bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-4 border border-secondary hover:border-transparent rounded flex-1 text-center flex justify-center items-center transition-colors duration-400 ease-in-out"
              >
                The Code
              </a>
            </div>

            <div class="mt-8"></div>

            <p>
              The past two years have been an exhilarating journey into the
              world of coding. Each project, whether big or small, has been a
              stepping stone in my growth as a developer. The challenges I've
              faced and overcome have only fueled my love for this field.
              Learning to code has opened up a world of possibilities I never
              could have imagined.
            </p>
            <p>
              It's not just about writing lines of code; it's about
              problem-solving, creativity, and continuous learning. The thrill
              of seeing an idea come to life through programming is
              unparalleled. As I look to the future, I'm filled with excitement
              and anticipation. The tech landscape is ever-evolving, and I'm
              eager to embrace new technologies, tackle more complex challenges,
              and contribute to brand new solutions.
            </p>
            <p>
              I'm just at the beginning of my coding journey, and the
              possibilities ahead are boundless. I'm grateful for every bug I've
              squashed, every feature I've implemented, and every 'ohhhh, I
              think I'm getting it' moment I've experienced. These experiences
              have not only made me a better developer but have also reinforced
              my commitment to this field. I can't wait to see what the next
              chapter in my coding journey will bring!
            </p>
          </template>
        </Card>
      </div>

      <a href="https://github.com/pandalexander" target="_blank">
        <div
          class="hide-then-show flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-xl mt-24"
        >
          <h2 class="m-0 mb-6">Current GitHub Contributions</h2>

          <div class="w-full overflow-x-auto relative z-0">
            <div class="relative h-48 sm:h-auto sm:max-h-96 min-w-max">
              <img
                class="h-full w-auto sm:w-full sm:h-auto object-cover"
                src="http://ghchart.rshah.org/pandalexander"
                alt="Alex's current Github chart"
              />
            </div>
          </div>
        </div>
      </a>

      <hr id="skills" class="border-secondary" />

      <div class="">
        <h1 class="hide-then-show text-5xl">Skills</h1>
        <hr
          class="hide-then-show border-primary min-w-full mb-20 mt-2"
          style="border: 0.25px solid black"
        />
        <div class="flex flex-col items-center justify-center">
          <h2 class="hide-then-show my-0">Go-To Toolkit</h2>
          <p class="hide-then-show px-4">
            I feel confident building with these and do so regularly.
          </p>
        </div>
        <div
          class="hide-then-show flex flex-wrap justify-center gap-4 p-4 pt-7 rounded-xl shadow-neumorphic bg-gradient-to-br from-red-200 to-cyan-200"
        >
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://www.postgresql.org/" target="_blank"
              ><img
                src="../assets/postgresql-icon.svg"
                alt=""
                class="h-14 filter-blur"
            /></a>
            <p class="p-0">PostgreSQL</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://git-scm.com/" target="_blank"
              ><img
                src="../assets/git-icon.svg"
                alt=""
                class="h-16 filter-blur"
            /></a>
            <p class="p-0">Git</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://www.javascript.com/" target="_blank">
              <img
                src="../assets/javascript.svg"
                alt=""
                class="h-14 filter-blur"
              />
            </a>
            <p class="p-0">Javascript</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://angular.dev/" target="_blank"
              ><img src="../assets/angular.png" alt="" class="h-14 filter-blur"
            /></a>
            <p class="p-0">Angular</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://vuejs.org/" target="_blank"
              ><img src="../assets/vue.svg" alt="" class="h-14 filter-blur"
            /></a>
            <p class="p-0">Vue.js</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://www.typescriptlang.org/" target="_blank"
              ><img src="../assets/ts.svg" alt="" class="h-14 filter-blur"
            /></a>
            <p class="p-0">Typescript</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              ><img src="../assets/html-5.svg" alt="" class="h-14 filter-blur"
            /></a>
            <p class="p-0">HTML</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              ><img
                src="../assets/css-purple.png"
                alt=""
                class="h-14 filter-blur"
            /></a>
            <p class="p-0">CSS</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://tailwindcss.com/" target="_blank">
              <img
                src="../assets/tailwindcss-icon.svg"
                alt=""
                class="h-12 filter-blur"
              />
            </a>
            <p class="p-0">Tailwind</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://vite.dev/" target="_blank"
              ><img src="../assets/vitejs.svg" alt="" class="h-14 filter-blur"
            /></a>
            <p class="p-0">Vite</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://code.visualstudio.com/" target="_blank">
              <img
                src="../assets/visual-studio-code.svg"
                alt=""
                class="h-14 filter-blur"
              />
            </a>
            <p class="p-0">VS&nbsp;Code</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://www.jetbrains.com/webstorm/" target="_blank"
              ><img
                src="../assets/webstorm.svg"
                alt=""
                class="h-14 filter-blur"
            /></a>
            <p class="p-0">Webstorm</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-16">
          <h2 class="hide-then-show my-0">Supporting Gear</h2>
          <p class="hide-then-show px-4">
            I understand enough to do the basics. Eager to grow.
          </p>
        </div>

        <div
          class="hide-then-show flex flex-wrap justify-center gap-4 p-4 pt-7 rounded-xl shadow-neumorphic bg-gradient-to-br from-fifth to-cyan-200"
        >
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://www.linux.org/" target="_blank">
              <img
                src="../assets/linux-tux.svg"
                alt=""
                class="h-14 filter-blur"
              />
            </a>
            <p class="p-0">Linux</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://pinia.vuejs.org/" target="_blank"
              ><img src="../assets/pinia.svg" alt="" class="h-14 filter-blur"
            /></a>
            <p class="p-0">Pinia</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://react.dev/" target="_blank"
              ><img src="../assets/react.svg" alt="" class="h-14 filter-blur"
            /></a>
            <p class="p-0">React</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://www.java.com/en/" target="_blank"
              ><img src="../assets/java.svg" alt="" class="h-16 filter-blur"
            /></a>
            <p class="p-0">Java</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://nodejs.org/en" target="_blank">
              <img
                src="../assets/nodejs-icon.svg"
                alt=""
                class="h-16 filter-blur"
              />
            </a>
            <p class="p-0">Node.js</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://www.rust-lang.org/" target="_blank"
              ><img src="../assets/rust.svg" alt="" class="h-16 filter-blur"
            /></a>
            <p class="p-0">Rust</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://redis.io/" target="_blank"
              ><img src="../assets/redis.svg" alt="" class="h-16 filter-blur"
            /></a>
            <p class="p-0">Redis</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://getbootstrap.com/" target="_blank">
              <img
                src="../assets/bootstrap.svg"
                alt=""
                class="h-14 filter-blur"
              />
            </a>
            <p class="p-0">Bootstrap</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://www.raspberrypi.com/" target="_blank">
              <img
                src="../assets/raspberry-pi.svg"
                alt=""
                class="h-16 filter-blur"
              />
            </a>
            <p class="p-0">Raspberry&nbsp;Pi</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a
              href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/?view=netdesktop-8.0"
              target="_blank"
              ><img src="../assets/xaml.svg" alt="" class="h-16 filter-blur"
            /></a>
            <p class="p-0">XAML</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-12">
          <h2 class="hide-then-show my-0">The Sandbox</h2>
          <p class="hide-then-show px-4">
            I have been exposed to these tools, most of them in a team setting.
            Still have a lot to learn.
          </p>
        </div>

        <div
          class="hide-then-show flex flex-wrap justify-center gap-4 p-4 pt-7 rounded-xl shadow-neumorphic bg-gradient-to-br from-red-200 to-fifth"
        >
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://spring.io/projects/spring-boot" target="_blank">
              <img
                src="../assets/spring-icon.svg"
                alt=""
                class="h-16 filter-blur"
              />
            </a>
            <p class="p-0">Spring</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://www.python.org/" target="_blank"
              ><img src="../assets/python.svg" alt="" class="h-14 filter-blur"
            /></a>
            <p class="p-0">Python</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://www.docker.com/" target="_blank">
              <img
                src="../assets/docker-icon.svg"
                alt=""
                class="h-16 filter-blur"
              />
            </a>
            <p class="p-0">Docker</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://reactnative.dev/" target="_blank"
              ><img src="../assets/react.svg" alt="" class="h-16 filter-blur"
            /></a>
            <p class="p-0">React&nbsp;Native</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <a href="https://webpack.js.org/" target="_blank"
              ><img src="../assets/webpack.svg" alt="" class="h-16 filter-blur"
            /></a>
            <p class="p-0">Webpack</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a
              href="https://dotnet.microsoft.com/en-us/apps/maui"
              target="_blank"
            >
              <img
                src="../assets/dotnet_bot.svg"
                alt=""
                class="h-16 filter-blur"
              />
            </a>
            <p class="p-0">.NET&nbsp;MAUI</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <a href="https://typesense.org/" target="_blank">
              <img
                src="../assets/typesense-icon.svg"
                alt=""
                class="h-14 filter-blur"
              />
            </a>
            <p class="p-0">Typesense</p>
          </div>
        </div>
      </div>

      <hr id="contact" class="border-secondary" />

      <h1 class="hide-then-show text-center mb-9 text-5xl">Contact Me</h1>

      <form
        id="contact-form"
        class="hide-then-show flex flex-col gap-4 sm:w-full lg:w-2/3 ml-auto mr-auto"
      >
        <label class="hidden">Name</label>
        <input
          type="text"
          name="user_name"
          class="hide-then-show bg-white text-primary"
          placeholder="Name"
          required
        />
        <label class="hidden">Email</label>
        <input
          type="email"
          name="user_email"
          class="hide-then-show bg-white focus:border-blue"
          placeholder="Email"
          required
        />
        <label class="hidden">Message</label>
        <textarea
          name="message"
          class="hide-then-show bg-white text-primary h-40"
          placeholder="Message..."
        ></textarea>
        <div class="h-6 flex justify-center items-center">
          <Transition>
            <span v-show="success" class="text-primary"
              >Thank you for your submission! I'll reply soon.</span
            >
          </Transition>
          <Transition>
            <span v-show="failure" class="text-fourth"
              >Sorry, something went wrong. So sorry!</span
            >
          </Transition>
        </div>
        <button
          type="submit"
          class="hide-then-show bg-secondary text-primary col-span-2 hover:cursor-pointer p-4 rounded-md hover:bg-fourth transition-colors duration-400 ease-in-out"
        >
          <div
            v-show="isFormWaiting"
            class="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-fifth"
          >
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
            >
          </div>
          <span v-show="!isFormWaiting" class="text-fifth">Send</span>
        </button>
      </form>
      <div class="p-11"></div>
    </main>
  </div>
</template>

<style scoped>
input,
textarea {
  border: solid 1px white;
  padding: 8px;
  border-radius: 6px;
}

input:focus,
textarea:focus {
  outline: none;
  border: solid 1px;
  background-color: #fefefe;
  border-color: #5da7ae;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
