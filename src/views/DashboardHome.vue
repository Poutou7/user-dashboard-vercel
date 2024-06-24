<template>
  <!-- Loader -->
  <SnackBar />
  <!-- Loader -->

  <v-row>
    <!-- Welcome Cards -->
    <v-col cols="12" lg="5">
      <v-row>
        <v-col cols="12">
          <WelcomeCard />
        </v-col>
        <v-col cols="12" md="6">
          <CustomerCard />
        </v-col>
        <v-col cols="12" md="6">
          <ProjectCard />
        </v-col>
      </v-row>
    </v-col>
    <!-- Revenue Forecast -->
    <v-col cols="12" lg="7">
      <RevenueForcast />
    </v-col>
    <!-- Sales from Locations -->
    <v-col cols="12" lg="4">
      <SalesFromLocation />
    </v-col>
    <v-col cols="12" lg="8">
      <TotalSettelment />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import WelcomeCard from "@/components/dashboard/WelcomeCard.vue";
import CustomerCard from "@/components/dashboard/CustomerCard.vue";
import ProjectCard from "@/components/dashboard/ProjectCard.vue";
import RevenueForcast from "@/components/dashboard/RevenueForcast.vue";
import SalesFromLocation from '@/components/dashboard/SalesFromLocation.vue';
import TotalSettelment from "@/components/dashboard/TotalSettelment.vue";
import SnackBar from "@/components/dashboard/snackbar.vue";
</script>
