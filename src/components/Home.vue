<template>
  <div class="h-screen flex justify-center items-center home-background">
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
  <div id="scrollArea" class="pl-5 pr-5">
    <div id="about"></div>
    <header
      class="text-primary p-11 sticky top-0 opacity-0 animate-fade-in-fast"
    >
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
          <li>
            <a
              href="#contact"
              class="hover:text-secondary transition ease-in-out duration-300"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </header>
    <main class="max-w-3xl mx-auto p-4">
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
        <div class="flex flex-col justify-center items-center">
          <h2 class="font-secondary">Hi, I'm Alex!</h2>
          <p>
            I'm a dedicated software developer based in Colorado Springs. With
            two years of self-taught experience and a recent three-month
            internship in IT, I'm thrilled to create
            <span id="skills"></span>simple solutions across various platforms
            and technologies.
          </p>
        </div>
      </div>
      <div class="">
        <h2 class="pt-6 pb-3">Skills</h2>
        <div class="flex items-center justify-between">
          <div class="flex-grow"><hr /></div>
          <h2 class="mx-4 text-red-400 font-bold">Frontend</h2>
          <div class="flex-grow"><hr /></div>
        </div>
        <div
          class="flex flex-wrap justify-center gap-4 p-4 pt-7 rounded-xl shadow-neumorphic bg-gradient-to-br from-zinc-100 to-red-100"
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
            <img src="../assets/tailwindcss-icon.svg" alt="" class="h-12" />
            <p class="p-0">Tailwind</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/react.svg" alt="" class="h-14" />
            <p class="p-0">React</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/5 min-w-[100px]"
          >
            <img src="../assets/bootstrap.svg" alt="" class="h-14" />
            <p class="p-0">Bootstrap</p>
          </div>
        </div>

        <div class="flex items-center justify-between mt-9">
          <div class="flex-grow"><hr /></div>
          <h2 class="mx-4 text-orange-400 font-bold">Backend</h2>
          <div class="flex-grow"><hr /></div>
        </div>

        <div
          class="flex flex-wrap justify-center gap-4 p-4 pt-7 bg-gradient-to-br from-zinc-100 to-orange-100 rounded-xl shadow-neumorphic"
        >
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/redis.svg" alt="" class="h-16" />
            <p class="p-0">Redis</p>
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
            <img src="../assets/nodejs-icon.svg" alt="" class="h-16" />
            <p class="p-0">Node.js</p>
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

        <div class="flex items-center justify-between mt-9">
          <div class="flex-grow"><hr /></div>
          <h2 class="mx-4 text-indigo-400 font-bold">Mobile</h2>
          <div class="flex-grow"><hr /></div>
        </div>

        <div
          class="flex flex-wrap justify-center gap-4 p-4 pt-7 bg-gradient-to-br from-zinc-100 to-indigo-100 rounded-xl shadow-neumorphic"
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
            <img src="../assets/xaml.svg" alt="" class="h-16" />
            <p class="p-0">XAML</p>
          </div>
        </div>

        <div class="flex items-center justify-between mt-9">
          <div class="flex-grow"><hr /></div>
          <h2 class="mx-4 text-emerald-400 font-bold">Other</h2>
          <div class="flex-grow"><hr /></div>
        </div>

        <div
          class="flex flex-wrap justify-center gap-4 p-4 pt-7 bg-gradient-to-br from-zinc-100 to-emerald-100 rounded-xl shadow-neumorphic"
        >
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/docker-icon.svg" alt="" class="h-16" />
            <p class="p-0">Docker</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/git-icon.svg" alt="" class="h-16" />
            <p class="p-0">Git</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/raspberry-pi.svg" alt="" class="h-16" />
            <p class="p-0">Raspberry Pi</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/terminal.svg" alt="" class="h-16" />
            <p class="p-0">CLI</p>
          </div>
          <div
            class="flex flex-col justify-center items-center p-4 w-1/4 min-w-[100px]"
          >
            <img src="../assets/webpack.svg" alt="" class="h-16" />
            <p id="projects" class="p-0">Webpack</p>
          </div>
        </div>
      </div>
      <div class="my-12">
        <h2>Projects & Experience</h2>

        <hr class="mt-6" />
        <h3 class="text-secondary">Vue-based Documentation App</h3>
        <p>
          During my internship, I collaborated on a markdown document
          application, contributing to several key features:
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
          Designed and implemented a privacy policy landing page for an app
          using Bootstrap, demonstrating my ability to create professional,
          responsive web pages for business use.
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
          design. Integrated EmailJS to create a functional contact form,
          allowing visitors to send messages directly to the photographer's
          inbox.
        </p>
        <hr class="mt-6" />
        <h3 class="text-secondary">Web Development Projects</h3>
        <ul class="list-disc pl-4 pt-3">
          <li id="contact">
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
    <h2>Contact</h2>
    <form
      id="contact-form"
      class="flex flex-col gap-4 sm:w-full lg:w-2/3 ml-auto mr-auto"
    >
      <!-- To simplify the tutorial, the value is static. -->
      <label class="hidden">Name</label>
      <input
        type="text"
        name="user_name"
        class="bg-white text-black border-black"
        placeholder="Name"
        required
      />
      <label class="hidden">Email</label>
      <input
        type="email"
        name="user_email"
        class="bg-white text-black"
        placeholder="Email"
        required
      />
      <label class="hidden">Message</label>
      <textarea
        name="message"
        class="bg-white text-black h-40"
        placeholder="Message..."
      ></textarea>
      <div class="h-6 flex justify-center items-center">
        <Transition>
          <span v-show="success" class="text-secondary"
            >Thank you for your submission! I'll reply soon.</span
          >
        </Transition>
        <Transition>
          <span v-show="failure" class="text-orange-500"
            >Sorry, something went wrong. So sorry!</span
          >
        </Transition>
      </div>
      <button
        type="submit"
        class="bg-white text-black col-span-2 hover:cursor-pointer p-4 rounded-md hover:bg-slate-200 transition-colors duration-400 ease-in-out"
      >
        <div
          v-show="isFormWaiting"
          class="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-secondary"
        >
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
          >
        </div>
        <span v-show="!isFormWaiting">Send</span>
      </button>
      <!-- <input
        type="submit"
        value="Send"
        class="bg-white text-black col-span-2 hover:cursor-pointer"
      /> -->
    </form>
    <div class="p-11"></div>
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
  border: solid 1px #059669;
  background-color: #fefefe;
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

<script setup>
import { ref } from "vue";

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
