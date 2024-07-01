<template>
  <header class="text-primary p-11 sticky top-0">
    <nav
      class="flex flex-col justify-between items-center mx-auto gap-5 rounded-full"
    >
      <ul class="flex space-x-4 bg-gray-200 rounded-full py-4 px-7">
        <li>
          <a
            href="#about"
            class="hover:text-secondary transition ease-in-out duration-300"
            >About</a
          >
        </li>
        <li>
          <a
            href="#skills"
            class="hover:text-secondary transition ease-in-out duration-300"
            >Skills</a
          >
        </li>
        <li>
          <a
            href="#projects"
            class="hover:text-secondary transition ease-in-out duration-300"
            >Projects</a
          >
        </li>
        <!-- <li>
          <a
            href="#"
            class="hover:text-secondary transition ease-in-out duration-300"
            >Contact</a
          >
        </li> -->
      </ul>
    </nav>
  </header>
  <main class="max-w-2xl mx-auto p-4">
    <section id="about">
      <h1 class="">
        Making software better, one
        <span class="italic text-secondary">&gt;program</span> at a time.
      </h1>
    </section>

    <div class="my-12">
      <h3>Hi, I'm Alex!</h3>
      <p>
        I'm a dedicated software developer based in Colorado Springs. With two
        years of self-taught experience and a
        <span id="skills">recent</span> three-month internship in IT, I'm
        thrilled to create simple solutions across various platforms and
        technologies.
      </p>
      <h2 class="pt-6 pb-3">Skills</h2>
      <div class="flex items-center justify-between">
        <div class="flex-grow"><hr /></div>
        <h3 class="mx-4 text-secondary">Frontend</h3>
        <div class="flex-grow"><hr /></div>
      </div>
      <p class="text-center">
        JavaScript, HTML, CSS, Vue.js, Tailwind&nbsp;CSS, React
      </p>
      <div class="flex items-center justify-between mt-9">
        <div class="flex-grow"><hr /></div>
        <h3 class="mx-4 text-secondary">Mobile</h3>
        <div class="flex-grow"><hr /></div>
      </div>
      <p class="text-center">.NET MAUI, XAML</p>
      <div class="flex items-center justify-between mt-9">
        <div class="flex-grow"><hr /></div>
        <h3 class="mx-4 text-secondary">Backend</h3>
        <div class="flex-grow"><hr /></div>
      </div>
      <p class="text-center">Rust, Node.js</p>
      <div class="flex items-center justify-between mt-9">
        <div class="flex-grow"><hr /></div>
        <h3 id="projects" class="mx-4 text-secondary">Other</h3>
        <div class="flex-grow"><hr /></div>
      </div>
      <p class="text-center">Git, Webpack, Bootstrap, Raspberry&nbsp;Pi</p>
    </div>

    <div class="my-12">
      <h2>Projects & Experience</h2>

      <hr class="mt-6" />

      <h3 class="text-secondary">Vue-based Documentation App</h3>
      <p>
        During my internship, I collaborated on a markdown document application,
        contributing to several key features:
      </p>
      <ul class="list-disc pl-4 py-3">
        <li>Document creation, saving, and deletion</li>
        <li>Search functionality</li>
        <li>Document tagging system</li>
      </ul>

      <hr class="mt-6" />

      <h3 class="text-secondary">.NET MAUI Mobile Application</h3>
      <p>
        Collaborated on a front-end team to develop a .NET MAUI app, now
        available on the App Store. This experience broadened my skills in
        mobile development and cross-platform solutions.
      </p>
      <p>
        Designed and implemented a privacy policy landing page for an app using
        Bootstrap, demonstrating my ability to create professional, responsive
        web pages for business use.
      </p>

      <hr class="mt-6" />

      <h3 class="text-secondary">Raspberry Pi System Monitor</h3>
      <p>
        Set up a Raspberry Pi unit using Rust and Git to create a system that
        runs looped HTTP requests, updating the status of the stack. This
        project showcased my ability to work with embedded systems and backend
        technologies.
      </p>

      <hr class="mt-6" />

      <h3 class="text-secondary">React News Article Generator</h3>
      <p>
        Created a React app to practice state management. Users can fill out
        input fields to generate a customized, satire news article, showcasing
        my ability to work with React and manage application state.
      </p>

      <hr class="mt-6" />

      <h3 class="text-secondary">Photographer's Portfolio Website</h3>
      <p>
        Developed a photographer's website using Bootstrap for responsive
        design. Integrated EmailJS to create a functional contact form, allowing
        visitors to send messages directly to the photographer's inbox.
      </p>

      <hr class="mt-6" />

      <h3 class="text-secondary">Web Development Projects</h3>
      <ul class="list-disc pl-4 pt-3">
        <li>
          To-Do List App: Built with vanilla JavaScript, employing
          object-oriented programming and local storage.
        </li>
        <li>
          Tic-Tac-Toe Game and Etch-A-Sketch: Demonstrating proficiency in
          front-end web technologies.
        </li>
      </ul>
    </div>
  </main>
</template>
