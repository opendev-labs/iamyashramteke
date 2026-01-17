<template>
  <component :is="iconComponent" v-bind="$attrs" />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const icons = {
  layers: {
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('polygon', { points: '12 2 2 7 12 12 22 7 12 2' }),
      h('polyline', { points: '2 17 12 22 22 17' }),
      h('polyline', { points: '2 12 12 17 22 12' })
    ])
  },
  cpu: {
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('rect', { x: '4', y: '4', width: '16', height: '16', rx: '2', ry: '2' }),
      h('rect', { x: '9', y: '9', width: '6', height: '6' }),
      h('line', { x1: '9', y1: '1', x2: '9', y2: '4' }),
      h('line', { x1: '15', y1: '1', x2: '15', y2: '4' }),
      h('line', { x1: '9', y1: '20', x2: '9', y2: '23' }),
      h('line', { x1: '15', y1: '20', x2: '15', y2: '23' }),
      h('line', { x1: '20', y1: '9', x2: '23', y2: '9' }),
      h('line', { x1: '20', y1: '14', x2: '23', y2: '14' }),
      h('line', { x1: '1', y1: '9', x2: '4', y2: '9' }),
      h('line', { x1: '1', y1: '14', x2: '4', y2: '14' })
    ])
  },
  brain: {
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z' }),
      h('path', { d: 'M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z' })
    ])
  },
  github: {
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' }),
      h('path', { d: 'M9 18c-4.51 2-5-2-7-2' })
    ])
  },
  link: {
    render: () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' }),
      h('path', { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' })
    ])
  }
};

const iconComponent = computed(() => icons[props.name] || 'div');
</script>
