<script setup>
import { SalesFromLocationData } from "@/_mockApis/components/dashboard/dashboard2";
import svgMap from "svgmap";
import "svgmap/dist/svgMap.min.css";
import { onMounted, ref } from "vue";
const map = ref(null);

onMounted(() => {
  new svgMap({
    targetElementID: "svgMap",
    mouseWheelZoomEnabled: true,
    hideFlag: false,
    initialZoom: 4,
    countries: {
      SA: "dshs",
    },
    data: {
      data: {
        countresidents: {
          format: "{0}",
          thousandSeparator: ",",
          thresholdMax: 50000,
          thresholdMin: 1000,
        },
      },
      applyData: "countresidents",
      values: {
        SA: { countresidents: 587, color: "rgba(var(--v-theme-primary))" },
        AE: { countresidents: 700, color: "rgba(var(--v-theme-secondary))" },
        QA: { countresidents: 700, color: "rgba(var(--v-theme-error))" },
        BH: { countresidents: 560, color: "rgba(var(--v-theme-warning))" },
        KW: { countresidents: 232, color: "rgba(var(--v-theme-success))" },
        OM: { countresidents: 42393, color: "rgba(var(--v-theme-muted))" },
      },
    },
  });
});
</script>

<template>
  <v-card elevation="10">
    <v-card-item>
      <v-card-title class="text-h5">{{ $t("SalesFromLocations") }}</v-card-title>
      <v-card-subtitle class="text-subtitle-1">{{ $t("MiddleEast") }}</v-card-subtitle>
      <div id="svgMap" ref="map" class="mt-7 mb-4"></div>
      <v-row
        v-for="item in SalesFromLocationData"
        :key="item.name"
        class="align-center justify-space-between mt-1"
      >
        <v-col cols="2" xl="auto" lg="3" sm="2">
          <h6 class="text-textPrimary text-body-1">{{ item.name }}</h6>
        </v-col>
        <v-col cols="7" xl="8" lg="6" class="px-0"
          ><v-progress-linear
            :model-value="item.percentage"
            height="7"
            :bg-color="'light' + item.color"
            :color="item.color"
            rounded
          ></v-progress-linear
        ></v-col>
        <v-col cols="3" xl="auto" lg="3" sm="3" class="text-end">
          <h6 class="text-grey200 text-body-1">{{ item.percentage }}</h6>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<style lang="scss">
.svgMap-map-wrapper {
  background: transparent;
  padding-top: 70%;
  top: -20px;
}

.svgMap-map-wrapper {
  .svgMap-country {
    stroke: #fff;
    fill: #c9d6de !important;

    &#svgMap-map-country-SA {
      fill: rgb(var(--v-theme-primary)) !important;
    }

    &#svgMap-map-country-AE {
      fill: rgb(var(--v-theme-secondary)) !important;
    }

    &#svgMap-map-country-QA {
      fill: rgb(var(--v-theme-error)) !important;
    }

    &#svgMap-map-country-BH {
      fill: rgb(var(--v-theme-warning)) !important;
    }

    &#svgMap-map-country-KW {
      fill: rgb(var(--v-theme-success)) !important;
    }

    &#svgMap-map-country-OM {
      fill: rgb(var(--v-theme-muted)) !important;
    }
  }

  .svgMap-map-controls-zoom {
    background: #c9d6de !important;
    .svgMap-control-button.svgMap-zoom-button:before {
      width: 9px !important;
      height: 2px !important;
    }
    .svgMap-control-button.svgMap-zoom-in-button:after {
      width: 2px !important;
      height: 10px !important;
    }
  }
  .svgMap-control-button {
    height: 20px;
    width: 20px;
  }
}
</style>
