<template>
  <div class="container">
    <div class="grid mt-6 input-fix">
      <div
        v-if="!selectedCity"
        class="text-800 font-semibold text-xl mb-3 col-12 sm:col-6 sm:col-offset-3 lg:col-4 lg:col-offset-4"
      >
        Список переводчиков, аккредитованных консульствами Италии в странах СНГ
      </div>
      <div
        v-if="!selectedCity"
        class="text-800 col-12 sm:col-6 sm:col-offset-3 lg:col-4 lg:col-offset-4 border-2 border-300 border-round-lg mb-3 p-3 bg-white"
      >
        <div>
          <span class="approved font-semibold">Зелёным</span> выделены
          переводчики, к которым я максимально рекомендую обратиться.
        </div>
        <div class="mt-2">
          <span class="notApproved font-semibold">Красным</span> — с кем точно
          не стоит работать!
        </div>
        <div class="mt-2">
          Когда пишите переводчикам, которые выделены зелёным, говорите, что вы
          от <span class="font-semibold">Киры Косаревой</span>.
        </div>
      </div>

      <div
        v-if="selectedCity === 'Санкт-Петербург'"
        class="text-800 col-12 sm:col-6 sm:col-offset-3 lg:col-4 lg:col-offset-4 border-2 border-300 border-round-lg mb-3 p-3 bg-white"
      >
        В консульский округ Генерального консульства Италии в Санкт-Петербурге
        входят:
        <div class="mt-2">
          <div class="mt-1 text-sm">
            — Санкт-Петербург и Ленинградская область
          </div>
          <div class="mt-1 text-sm">— Архангельск и Архангельская область</div>
          <div class="mt-1 text-sm">
            — Великий Новгород и Новгородская область
          </div>
          <div class="mt-1 text-sm">— Вологда и Вологодская область</div>
          <div class="mt-1 text-sm">— Мурманск и Мурманская область</div>
          <div class="mt-1 text-sm">— Петрозаводск и Республика Карелия</div>
          <div class="mt-1 text-sm">— Псков и Псковская область</div>
        </div>
      </div>
      <p-dropdown
        v-model="selectedCity"
        :options="cities"
        placeholder="Город или страна"
        class="col-12 sm:col-6 sm:col-offset-3 lg:col-4 lg:col-offset-4 border-2 border-300"
      >
      </p-dropdown>
    </div>

    <div class="grid mt-3">
      <div
        class="col-12 sm:col-6 lg:col-4"
        v-for="card of filtered"
        :key="card.id"
      >
        <div
          :class="[
            { approved: card.approved === true },
            { notApproved: card.approved === false },
          ]"
          class="flex flex-column p-5 surface-0 border-2 border-300 border-round-lg gap-3 justify-content-center h-full"
        >
          <div
            :class="[
              { approved: card.approved === true },
              { notApproved: card.approved === false },
            ]"
            class="text-xl font-medium"
          >
            <span class="font-semibold text-secondary capitalize">{{
              card.name
            }}</span>
          </div>
          <div v-if="card.region" class="text-lg text-color approved">
            {{ card.region }}
          </div>
          <div class="text-lg text-color">{{ card.phone }}</div>
          <div v-if="card.messenger" class="text-lg text-color">
            {{ card.messenger }}
          </div>
          <div v-if="card.email" class="text-color break">{{ card.email }}</div>
          <div v-if="card.address" class="text-400">
            {{ card.address }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './assets/data';
import Dropdown from 'primevue/dropdown';

export default {
  components: {
    'p-dropdown': Dropdown,
  },
  data() {
    return {
      selectedCity: null,
      translators: data,
      cities: [
        'Москва',
        'Санкт-Петербург',
        'Россия, регионы',
        'Астана',
        'Алматы',
        'Актобе',
        'Киев',
        'Минск',
        'Азербайджан',
        'Армения',
        'Грузия',
        'Узбекистан',
      ],
    };
  },
  computed: {
    filtered() {
      return data.filter(card => card.city === this.selectedCity);
    },
  },
};
</script>

<style lang="scss" scoped>
.approved {
  color: #3e9438 !important;
  border-color: #3e9438 !important;
}
.notApproved {
  color: #ee2a4b !important;
  border-color: #ee2a4b !important;
}
.break {
  word-break: break-all;
}
.input-fix {
  margin: 0 16px;
}
@media screen and (max-width: 576px) {
  .input-fix {
    margin: 8px 0;
  }
}
</style>
