<template>
  <header class="text-slate-900 p-4 m-7 sticky top-0">
    <nav
      class="flex flex-col justify-between items-center mx-auto gap-5 rounded-full"
    >
      <ul class="flex space-x-4 bg-gray-200 rounded-full py-4 px-7">
        <li>
          <a
            href="#"
            class="hover:text-slate-500 transition ease-in-out duration-300"
            >Home</a
          >
        </li>
        <li>
          <a
            href="#"
            class="hover:text-slate-500 transition ease-in-out duration-300"
            >About</a
          >
        </li>
        <li>
          <a
            href="#"
            class="hover:text-slate-500 transition ease-in-out duration-300"
            >Projects</a
          >
        </li>
        <li>
          <a
            href="#"
            class="hover:text-slate-500 transition ease-in-out duration-300"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
