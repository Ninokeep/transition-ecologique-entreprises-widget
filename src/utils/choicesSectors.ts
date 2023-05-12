export const sectors = {
  id: 'track_sectors',
  label: { fr: "Secteur d'activité" },
  interface: {
    component: 'buttons',
  },
  behavior: {
    multipleChoices: false,
  },
  next: {
    default: 'track_structure_sizes'
  },
  options: [
    {
      value: 'project_sectors.artisanat',
      label: { fr: "J’ai une activité artisanale" },
      next: {
        default: 'track_form'
      }
    },
    {
      value: 'project_sectors.industry',
      label: { fr: "J’ai une activité industrielle, fabrication, production" },
      next: {
        default: 'track_form'
      }
    },
    {
      value: 'project_sectors.tourism',
      label: { fr: "j’ai une activité de tourisme" },
      next: {
        default: 'track_form'
      }
    },
    {
      value: 'project_sectors.tertiary',
      label: { fr: "j’ai une activité tertiaire, de services" },
      next: {
        default: 'track_form'
      }
    },
    {
      value: 'project_sectors.agriculture',
      label: { fr: "J’ai une activité agricole" },
      next: {
        default: 'track_form'
      }
    }
  ]
}