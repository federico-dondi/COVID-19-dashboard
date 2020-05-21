<template>
  <v-flex>
    <h1 class="title">Suggested and common-sense guidelines.</h1>
    <p>
      You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions, like the ones below.
      Remember, Coronavirus is a serious threat, don't underestimate it.
    </p>

    <p>
      <ul>
        <li v-for="g in guidelines" :key="g">
          {{ g }}
        </li>
      </ul>
    </p>

    <h1 class="title">Hints about medical masks.</h1>
    <p>
      Masks are effective only when used in combination with frequent hand-cleaning with alcohol-based hand rub or soap and water.
      If you wear a mask, then you must know how to use it and dispose of it properly.
    </p>

    <p>
      <ul>
        <li v-for="h in hints" :key="h">
          {{ h }}
        </li>
      </ul>
    </p>
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Guidelines extends Vue {
  guidelines: string[] = [
    'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.',
    'Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.',
    'Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).',
    'Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.',
    'Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.',
    'Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.',
    'If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.',
    'Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.'
  ]

  hints: string[] = [
    'Before putting on a mask, clean hands with alcohol-based hand rub or soap and water.',
    'Cover mouth and nose with mask and make sure there are no gaps between your face and the mask.',
    'Avoid touching the mask while using it; if you do, clean your hands with alcohol-based hand rub or soap and water.',
    'Replace the mask with a new one as soon as it is damp and do not re-use single-use masks.',
    'To remove the mask: remove it from behind (do not touch the front of mask); discard immediately in a closed bin; clean hands with alcohol-based hand rub or soap and water.'
  ]
}
</script>
