<template>
  <div>
  <header class="PomodoroHeader">
    <img v-if="false" alt="Vue logo" class="PomodoroHeader__img">
    <h1 class="PomodoroHeader__heading">{{$t('heading')}}</h1>
    <LanguageChanger/>

  </header>
  </div>
</template>

<script>


  import LanguageChanger from "./LanguageChanger";

  export default {
  name: 'PomodoroHeader',
  components: {
    LanguageChanger,
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/_mixins';

.PomodoroHeader {
  align-items: center;
  display: flex;

  &__heading {
    display: none;
    margin: 0;
    text-align: center;
    font-family: 'Indie Flower', cursive;


    @include respond-to('tablet-min') {
      display: block;
    }
  }

  &__img {
    height: 50px;
    width: 50px;
  }
}
</style>


<i18n>
  {
  "en": {
  "heading": "25 minutes"
  },

  "sk": {
  "heading": "25 minút"
  },

  "de": {
  "heading": "25 minuten"
  },

  "fr": {
  "heading": "25 minutes"
  },

  "es": {
  "heading": "25 minutos"
  }
  }
</i18n>
