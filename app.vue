<template>
  <div>
    <NuxtLayout>
      <Header />
      <main class="bg-gray-900">
        <Banner />
        <Search />
        <CardList />
      </main>
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
  body {
    @apply bg-gray-900;
  }
</style>
