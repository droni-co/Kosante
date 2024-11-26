<template>
  <div class="bg-slate-800 text-white">
    <div class="container mx-auto md:flex items-center">
      <div class="w-1/2">
        <h1 class="text-5xl font-bold text-balance">
          La mejor herramienta para amantes de la nutrición.
        </h1>
        <p class="text-balance">
          Bienvenido a la más moderna plataforma especializada en nutrición para la salud.<br>
          Genere y consulte fácilmente planes de adecuación nutricional, obtención de gasto energético, aporte nutricional de los alimentos y mucho más.
        </p>
      </div>
      <div class="w-1/2 py-4">
        <img src="~/assets/img/kotheme/home.svg" class="w-full" alt="Expertos en nutrición.">
      </div>
    </div>
  </div>
  <section class="container mx-auto py-8">
    <h1>
      Novedades en nutrición
    </h1>
    <div class="md:grid grid-cols-3 gap-4">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  </section>
</template>