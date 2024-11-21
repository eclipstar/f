export interface IGetModules {
  data: Module[]
}

export interface Module {
  id: number
  module_name: string
  module_description: string
  min_age: number
  max_age: number
  status: number
  learning_objectives: LearningObjective[]
}

export interface LearningObjective {
  id: number
  module_id: number
  objective_order: number
  learning_objective: string
  learning_paths: LearningPath[]
}

export interface LearningPath {
  id: number
  learning_objective_id: number
  path_order: number
  content_type: ContentType
  content_id: number
  content: Content
}

export interface Content {
  id: number
  trivia_name?: string
  trivia_objective?: string
  trivia_instructions?: string
  title?: string
  link?: string
}

export enum ContentType {
  AppModelsModuleVideo = 'App\\Models\\ModuleVideo',
  AppModelsTrivia = 'App\\Models\\Trivia'
}
