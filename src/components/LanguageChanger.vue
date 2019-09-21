<template>
    <div v-if="false" class="locale-changer">
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang"> {{ full_langs[i] }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'locale-changer',
        data () {
            return {
                langs: ['en', 'fr', 'sk', 'de', 'es'],
                full_langs: ['English', 'Français', 'Slovensky', 'Deutsch', 'Espanol']
            }
        }
    }
</script>

<style scoped>
.locale-changer{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
}
</style>
