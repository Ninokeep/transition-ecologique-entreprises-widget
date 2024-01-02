// LEGACY
export enum YesNo {
  Yes = 'oui',
  No = 'non'
}

export enum Entreprise {
  SectorActivity = "entreprise . secteur d'activité . est ",
  CodeNAF1 = 'entreprise . code NAF niveau 1 . est ',
  CodeNAF = 'entreprise . code NAF',
  Workforce = 'entreprise . effectif',
  TransportMode = 'entreprise . mode de transport domicile-travail . est ',
  BuildingOwner = 'entreprise . est propriétaire de ses locaux',
  VehicleOwner = 'entreprise . possède des véhicules motorisés'
}

export enum Questionnaire {
  priorityObjectives = 'questionnaire . objectif prioritaire . est ',
  path = 'questionnaire . parcours'
}

export enum Sector {
  Craftsmanship = 'artisanat',
  Industry = 'industrie',
  Tourism = 'tourisme',
  Tertiary = 'tertiaire',
  Agriculture = 'agriculture',
  Other = 'autre secteur'
}

export enum EntrepriseSector {
  Craftsmanship = Entreprise.SectorActivity + Sector.Craftsmanship,
  Industry = Entreprise.SectorActivity + Sector.Industry,
  Tourism = Entreprise.SectorActivity + Sector.Tourism,
  Tertiary = Entreprise.SectorActivity + Sector.Tertiary,
  Agriculture = Entreprise.SectorActivity + Sector.Agriculture,
  Other = Entreprise.SectorActivity + Sector.Other
}

export const Sectors = {
  [EntrepriseSector.Craftsmanship]: YesNo.No,
  [EntrepriseSector.Industry]: YesNo.No,
  [EntrepriseSector.Tourism]: YesNo.No,
  [EntrepriseSector.Tertiary]: YesNo.No,
  [EntrepriseSector.Agriculture]: YesNo.No,
  [EntrepriseSector.Other]: YesNo.No
}

// NAF CODES
// Associates a NAF1 (composed of 1 letter) to its expected publicode variable
export const NAF1ToVar = (letter: string): string => Entreprise.CodeNAF1 + letter

export const NAF1Letters = [...'ABCDEFGHIJKLMNOPQRSTU'] as const

// publicodes variable initialization to "non"
export const codesNAF1: { [p: string]: YesNo } = Object.fromEntries(NAF1Letters.map((l) => [NAF1ToVar(l), YesNo.No]))

export const SectorByNAF = {
  [EntrepriseSector.Craftsmanship]: ['C', 'F', 'G'],
  [EntrepriseSector.Industry]: ['B', 'C', 'D', 'E'],
  [EntrepriseSector.Tourism]: ['I'],
  [EntrepriseSector.Tertiary]: ['G', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U'],
  [EntrepriseSector.Agriculture]: ['A'],
  [EntrepriseSector.Other]: ['D', 'E', 'F', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U']
}

enum Objective {
  EnvironmentalImpact = 'mon impact environnemental',
  EnergyPerformance = 'ma performance énergétique',
  WaterConsumption = "diminuer ma consommation d'eau",
  BuildingRenovation = 'rénover mon bâtiment',
  SustainableMobility = 'la mobilité durable',
  WasteManagement = 'la gestion des déchets',
  EcoDesign = "l'écoconception",
  TrainOrRecruit = 'former ou recruter',
  MakeSavings = 'faire des économies',
  DurablyInvest = 'investir durable',
  UnknownYet = 'je ne sais pas encore'
}

export enum Objectives {
  EnvironmentalImpact = Questionnaire.priorityObjectives + Objective.EnvironmentalImpact,
  EnergyPerformance = Questionnaire.priorityObjectives + Objective.EnergyPerformance,
  WaterConsumption = Questionnaire.priorityObjectives + Objective.WaterConsumption,
  BuildingRenovation = Questionnaire.priorityObjectives + Objective.BuildingRenovation,
  SustainableMobility = Questionnaire.priorityObjectives + Objective.SustainableMobility,
  WasteManagement = Questionnaire.priorityObjectives + Objective.WasteManagement,
  EcoDesign = Questionnaire.priorityObjectives + Objective.EcoDesign,
  TrainOrRecruit = Questionnaire.priorityObjectives + Objective.TrainOrRecruit,
  MakeSavings = Questionnaire.priorityObjectives + Objective.MakeSavings,
  DurablyInvest = Questionnaire.priorityObjectives + Objective.DurablyInvest,
  UnknownYet = Questionnaire.priorityObjectives + Objective.UnknownYet
}

export const priorityObjectives = {
  [Objectives.EnvironmentalImpact]: YesNo.No,
  [Objectives.EnergyPerformance]: YesNo.No,
  [Objectives.WaterConsumption]: YesNo.No,
  [Objectives.BuildingRenovation]: YesNo.No,
  [Objectives.SustainableMobility]: YesNo.No,
  [Objectives.WasteManagement]: YesNo.No,
  [Objectives.EcoDesign]: YesNo.No,
  [Objectives.TrainOrRecruit]: YesNo.No,
  [Objectives.MakeSavings]: YesNo.No,
  [Objectives.DurablyInvest]: YesNo.No,
  [Objectives.UnknownYet]: YesNo.No
}

enum TransportMode {
  Bike = 'vélo',
  Bus = 'bus',
  Car = 'voiture',
  Motorcycle = 'moto',
  Other = 'autre',
  Train = 'train ou métro',
  Truck = 'camion'
}

export enum TransportModes {
  Bike = Entreprise.TransportMode + TransportMode.Bike,
  Bus = Entreprise.TransportMode + TransportMode.Bus,
  Car = Entreprise.TransportMode + TransportMode.Car,
  Motorcycle = Entreprise.TransportMode + TransportMode.Motorcycle,
  Other = Entreprise.TransportMode + TransportMode.Other,
  Train = Entreprise.TransportMode + TransportMode.Train,
  Truck = Entreprise.TransportMode + TransportMode.Truck
}

export const allTransportModes = {
  [TransportModes.Bike]: YesNo.No,
  [TransportModes.Bus]: YesNo.No,
  [TransportModes.Car]: YesNo.No,
  [TransportModes.Motorcycle]: YesNo.No,
  [TransportModes.Other]: YesNo.No,
  [TransportModes.Train]: YesNo.No,
  [TransportModes.Truck]: YesNo.No
}
export enum PublicodesTrackHelpValue {
  Unknown = 'je ne sais pas par où commencer',
  Precise = 'objectif précis'
}