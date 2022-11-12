<template>
  <div class="flex flex-row min-h-screen bg-stone-100 text-gray-800">
      <SideBar />
      <div class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <MainHeader />
        <main role="main" class="main-content bg-white rounded-4-xl p-4 shadow-sm flex flex-col flex-grow p-4 m-4">
            <NuxtPage />
        </main>
    </div>
  </div>
</template>
