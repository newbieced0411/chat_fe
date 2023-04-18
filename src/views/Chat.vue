<template>
    <section class="min-h-screen flex flex-col">
        <div class="flex flex-1 items-center justify-center">
            <div class="w-full rounded-lg sm:border-2 p-4 lg:px-24lg:max-w-xl sm:max-w-md">
                <div class="flex flex-row justify-between">
                    <h1>John Doe</h1>
                    <a href="/home">Back</a>
                </div>
                <div class="my-3 p-2 h-80 border border-1">

                </div>
                <form @submit.prevent="chat" class="w-full flex flex-row space-x-1">
                    <input type="textarea" placeholder="Message" class="w-3/4 bg-gray-200 border border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 ">
                    <button type="submit" class="w-1/4 px-2 rounded bg-blue-300 text-center">Send</button>
                </form>

            </div>
        </div>
    </section>
</template>

<script setup>

function chat(){

}

</script>