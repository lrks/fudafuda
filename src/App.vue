<template>
  <header class="text-gray-600">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span class="text-xl">fudafuda</span>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <router-link to="/fudafuda/">Home</router-link>
        <router-link to="/fudafuda/akizukimini">AkizukiMini</router-link>
        <router-link to="/fudafuda/akizukibig">AkizukiBig</router-link>
      </nav>
    </div>
  </header>
  <router-view/>
</template>

<style lang="scss">
#app {
  color: red;
}

nav a {
  @apply mr-5 text-gray-800 hover:text-gray-500;
  &.router-link-exact-active {
    @apply text-blue-700;
  }
}
</style>
