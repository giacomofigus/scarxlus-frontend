import { reactive } from "vue";

export const store = reactive({
    apiBase: 'http://127.0.0.1:8000/',
    registerUrl: 'http://127.0.0.1:8000/register',
})