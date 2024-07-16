<script setup>
import { ref } from "vue";
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
  <div id="scrollArea" class="">
    <div id="about"></div>
    <header
      class="text-primary p-11 sticky top-0 opacity-0 animate-fade-in-fast"
    >
      <nav
        class="flex flex-col justify-between items-center mx-auto gap-5 rounded-full"
      >
        <ul class="flex space-x-4 bg-primary rounded-full py-4 px-7">
          <li>
            <a
              href="#about"
              class="hover:text-white transition ease-in-out duration-300 text-fifth"
              >About</a
            >
          </li>
          <li>
            <a
              href="#skills"
              class="hover:text-white transition ease-in-out duration-300 text-fifth"
              >Skills</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="hover:text-white transition ease-in-out duration-300 text-fifth"
              >Projects</a
            >
          </li>
          <li>
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
        <h1 class="text-center font-primary text-primary mb-12">
          Making the world a nicer place, one
          <span class="italic text-fourth font-mono">&gt;error</span> at a time.
        </h1>
      </section>
      <div
        class="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-6 p-6 bg-white shadow-lg rounded-xl"
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
            I'm a front-end software developer based in Colorado Springs. To be
            brief, I'm thrilled to create simple & beautiful user experiences
            across various technologies.
          </p>
        </div>
      </div>

      <hr id="skills" class="border-secondary" />

      <div class="">
        <h1 class="text-5xl">Skills</h1>
        <hr
          class="border-primary min-w-full mb-20 mt-2"
          style="border: 0.25px solid black"
        />
        <div class="flex flex-col items-center justify-center">
          <h2 class="my-0">Go-To Toolkit</h2>
          <p class="px-4">
            I feel confident building with these and do so regularly.
          </p>
        </div>
        <div
          class="flex flex-wrap justify-center gap-4 p-4 pt-7 rounded-xl shadow-neumorphic bg-gradient-to-br from-red-200 to-cyan-200"
        >
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/html-5.svg" alt="" class="h-14" />
            <p class="p-0">HTML</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/css-3.svg" alt="" class="h-14" />
            <p class="p-0">CSS</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/javascript.svg" alt="" class="h-14" />
            <p class="p-0">Javascript</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/vue.svg" alt="" class="h-14" />
            <p class="p-0">Vue.js</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/pinia.svg" alt="" class="h-14" />
            <p class="p-0">Pinia</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/tailwindcss-icon.svg" alt="" class="h-12" />
            <p class="p-0">Tailwind</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/vitejs.svg" alt="" class="h-14" />
            <p class="p-0">Vite</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/visual-studio-code.svg" alt="" class="h-14" />
            <p class="p-0">VS&nbsp;Code</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/webstorm.svg" alt="" class="h-14" />
            <p class="p-0">Webstorm</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/git-icon.svg" alt="" class="h-16" />
            <p class="p-0">Git</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-16">
          <h2 class="my-0">Supporting Gear</h2>
          <p class="px-4">
            I understand enough to do the basics. Eager to grow.
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center gap-4 p-4 pt-7 rounded-xl shadow-neumorphic bg-gradient-to-br from-fifth to-cyan-200"
        >
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/react.svg" alt="" class="h-14" />
            <p class="p-0">React</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/nodejs-icon.svg" alt="" class="h-16" />
            <p class="p-0">Node.js</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/bootstrap.svg" alt="" class="h-14" />
            <p class="p-0">Bootstrap</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/rust.svg" alt="" class="h-16" />
            <p class="p-0">Rust</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/redis.svg" alt="" class="h-16" />
            <p class="p-0">Redis</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/linux-tux.svg" alt="" class="h-14" />
            <p class="p-0">Linux</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/raspberry-pi.svg" alt="" class="h-16" />
            <p class="p-0">Raspberry&nbsp;Pi</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/xaml.svg" alt="" class="h-16" />
            <p class="p-0">XAML</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center mt-12">
          <h2 class="my-0">The Sandbox</h2>
          <p class="px-4">
            I have been exposed to these tools, most of them in a team setting.
            Still have a lot to learn.
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center gap-4 p-4 pt-7 rounded-xl shadow-neumorphic bg-gradient-to-br from-red-200 to-fifth"
        >
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/dotnet_bot.svg" alt="" class="h-16" />
            <p class="p-0">.NET&nbsp;MAUI</p>
          </div>

          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/typesense-icon.svg" alt="" class="h-14" />
            <p class="p-0">Typesense</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/webpack.svg" alt="" class="h-16" />
            <p class="p-0">Webpack</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/docker-icon.svg" alt="" class="h-16" />
            <p class="p-0">Docker</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/java.svg" alt="" class="h-16" />
            <p class="p-0">Java</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/spring-icon.svg" alt="" class="h-16" />
            <p class="p-0">Spring</p>
          </div>
        </div>
      </div>

      <hr id="projects" class="border-secondary mt-12" />

      <div>
        <h1 class="text-5xl">Projects and Experience</h1>
        <hr
          class="border-primary min-w-full mb-20 mt-2"
          style="border: 0.25px solid black"
        />

        <h2>
          My Work at
          <a
            class="text-secondary hover:text-fourth transition ease-in-out duration-300"
            href="https://www.springsit.com/"
            target="_blank"
            >Springs IT</a
          >
        </h2>

        <Card class="mt-6 border-secondary">
          <template #projectTitle>
            <h3>Vue-based Documentation App</h3>
          </template>
          <template #projectDescription>
            <p>
              During my internship, I collaborated on a markdown document
              application, contributing to several key features:
            </p>
          </template>
          <template #projectContent>
            <ul class="list-disc pl-4 py-3">
              <li>Document creation, saving, and deletion</li>
              <li>Search functionality</li>
              <li>Document tagging system</li>
            </ul>
          </template>
        </Card>

        <Card class="mt-6 border-secondary">
          <template #projectTitle>
            <h3>.NET MAUI Mobile Application</h3>
          </template>
          <template #projectDescription>
            <p class="text-left">
              During my internship, I collaborated on a markdown document
              application, contributing to several key features:
            </p>
          </template>
          <template #projectContent>
            <p>
              Collaborated on a front-end team to develop a .NET MAUI app, now
              available on the App Store. This experience broadened my skills in
              mobile development and cross-platform solutions.
            </p>
            <p>
              Designed and implemented a privacy policy landing page for an app
              using Bootstrap, demonstrating my ability to create professional,
              responsive web pages for business use.
            </p>
          </template>
        </Card>

        <Card class="mt-6 border-secondary">
          <template #projectTitle>
            <h3>Raspberry Pi System Monitor</h3>
          </template>
          <template #projectDescription>
            <p class="text-left">
              During my internship, I collaborated on a markdown document
              application, contributing to several key features:
            </p>
          </template>
          <template #projectContent>
            <p>
              Set up a Raspberry Pi unit using Rust and Git to create a system
              that runs looped HTTP requests, updating the status of the stack.
              This project showcased my ability to work with embedded systems
              and backend technologies.
            </p>
          </template>
        </Card>

        <h2 class="mt-8">
          My
          <a
            href="https://github.com/pandalexander"
            class="text-fourth hover:text-secondary transition ease-in-out duration-300"
            >Solo</a
          >
          Work
        </h2>

        <Card class="mt-6 border-fourth">
          <template #projectTitle>
            <h3>React News Article Generator</h3>
          </template>
          <template #projectDescription>
            <p>
              During my internship, I collaborated on a markdown document
              application, contributing to several key features:
            </p>
          </template>
          <template #projectContent>
            <p>
              Created a React app to practice state management. Users can fill
              out input fields to generate a customized, satire news article,
              showcasing my ability to work with React and manage application
              state.
            </p>
          </template>
        </Card>

        <Card class="mt-6 border-fourth">
          <template #projectTitle>
            <h3>Photographer's Portfolio Website</h3>
          </template>
          <template #projectDescription>
            <p class="text-left">
              During my internship, I collaborated on a markdown document
              application, contributing to several key features:
            </p>
          </template>
          <template #projectContent>
            <p>
              Developed a photographer's website using Bootstrap for responsive
              design. Integrated EmailJS to create a functional contact form,
              allowing visitors to send messages directly to the photographer's
              inbox.
            </p>
          </template>
        </Card>

        <Card class="mt-6 border-fourth">
          <template #projectTitle>
            <h3>To-Do List App</h3>
          </template>
          <template #projectDescription>
            <p>
              Built with vanilla JavaScript, employing object-oriented
              programming and local storage.
            </p>
          </template>
          <template #projectContent>
            <p>
              Developed a photographer's website using Bootstrap for responsive
              design. Integrated EmailJS to create a functional contact form,
              allowing visitors to send messages directly to the photographer's
              inbox.
            </p>
          </template>
        </Card>

        <Card class="mt-6 border-fourth">
          <template #projectTitle>
            <h3>Tic-Tac-Toe Game and Etch-A-Sketch</h3>
          </template>
          <template #projectDescription>
            <p>
              Built with vanilla JavaScript, employing object-oriented
              programming and local storage.
            </p>
          </template>
          <template #projectContent>
            <p>Demonstrating proficiency in front-end web technologies.</p>
          </template>
        </Card>
      </div>

      <hr id="contact" class="border-secondary my-12" />

      <h1 class="text-center mb-9 text-5xl">Contact Me</h1>

      <form
        id="contact-form"
        class="flex flex-col gap-4 sm:w-full lg:w-2/3 ml-auto mr-auto"
      >
        <!-- To simplify the tutorial, the value is static. -->
        <label class="hidden">Name</label>
        <input
          type="text"
          name="user_name"
          class="bg-white text-primary"
          placeholder="Name"
          required
        />
        <label class="hidden">Email</label>
        <input
          type="email"
          name="user_email"
          class="bg-white focus:border-blue"
          placeholder="Email"
          required
        />
        <label class="hidden">Message</label>
        <textarea
          name="message"
          class="bg-white text-primary h-40"
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
          class="bg-secondary text-primary col-span-2 hover:cursor-pointer p-4 rounded-md hover:bg-fourth transition-colors duration-400 ease-in-out"
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

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
