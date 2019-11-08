<template>
  <div class="birds-eye-widget">
    <SectionBirdsEye :sections="sections" @select="onSelect" />
  </div>
</template>

<script>
import SectionBirdsEye from '../../components/widgets/birds-eye/SectionBirdsEye.vue';
import sira from './sira';

export default {
  scaifeConfig: {
    displayName: 'Section Birds Eye',
    singleton: true,
    location: 'sidebar',
  },
  components: { SectionBirdsEye },
  computed: {
    sections() {
        return sira.data.superheadings.edges.map(superheading => {
            return superheading.node.sections.edges.map(section => {
                return { highlight: section.node.isSirah, id: section.node.label };
            });
        });

        const sections = [];
        sira.data.sections.edges.forEach(section => {
            if (sections.length < section.node.superheading.position) {
                sections.push([]);
            }
            const sectionIndex = section.node.superheading.position - 1;
            sections[sectionIndex].push({
                highlight: section.node.isSirah,
                id: section.node.chapterPosition,
            });
        });
        return sections;
    },
  },
  methods: {
      onSelect(id) {
          console.log(id, 'was clicked');
      }
  }
}
</script>

<style lang="scss">
  @import "../../variables.scss";

</style>
