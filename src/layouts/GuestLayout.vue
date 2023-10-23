<template>
    <div class="wrapper container">
        <header class="flex items-center justify-end gap-2 bg-red-400">
            <router-link :to="{ name: 'home' }">Home</router-link>
            <router-link :to="{ name: 'about' }">About</router-link>
        </header>
        <main class="flex grow flex-col md:flex-row">
            <aside class="flex-none bg-slate-300 md:w-1/6">L. Sidebar</aside>
            <div class="flex grow flex-col-reverse md:flex-row">
                <div class="grow bg-slate-400">
                    <h1>Page Content</h1>
                    <router-view />
                </div>
                <aside class="flex-none bg-slate-700 md:w-1/6">
                    R. Sidebar
                </aside>
            </div>
        </main>
        <footer class="bg-green-400">Social links</footer>
    </div>
</template>

<style scoped></style>
