<template>
  <div class="h-screen flex justify-center items-center">
    <div class="flex flex-col">
      <h1
        class="font-secondary font-extrabold text-center text-7xl opacity-0 animate-fade-in"
      >
        Alex Seeley
      </h1>
      <h3 class="text-center mt-3 opacity-0 animate-fade-in-late">
        Software Developer
      </h3>
      <div class="flex justify-center opacity-0 animate-fade-in-super-late">
        <img
          src="../assets/arrow-down.svg"
          alt=""
          class="h-6 mt-6 animate-bounce"
        />
      </div>
    </div>
  </div>
  <header class="text-primary p-11 sticky top-0 opacity-0 animate-fade-in-fast">
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
  <div id="about"></div>
  <main class="max-w-2xl mx-auto p-4">
    <section>
      <h1>
        Making software better, one
        <span class="italic text-secondary">&gt;program</span> at a time.
      </h1>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-4 pt-4">
      <!-- Left column for the image -->
      <div class="flex justify-center items-center">
        <img
          src="../assets/main.png"
          alt=""
          class="w-4/5 sm:w-2/3 md:w-full lg:w-full xl:w-full h-auto max-w-full"
        />
      </div>

      <!-- Right column for the text -->
      <div>
        <h3>Hi, I'm Alex!</h3>
        <p>
          I'm a dedicated software developer based in Colorado Springs. With two
          years of self-taught experience and a recent three-month internship in
          IT, I'm thrilled to create simple solutions across various platforms
          and <span id="skills">technologies</span>.
        </p>
      </div>
    </div>

    <!-- <img
      src="../assets/main.png"
      alt=""
      class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 h-auto max-w-full"
    /> -->

    <div class="my-12">
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

<style scoped></style>

<script setup>
console.log("hello script setup");
</script>
