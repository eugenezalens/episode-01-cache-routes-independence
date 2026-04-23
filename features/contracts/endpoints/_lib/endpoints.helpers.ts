import {
  type TMutationUpdateEndpoint,
  type TMutationCreateEndpoint,
  type TQueryByIdEndpoint,
  type TQueryListEndpoint,
  type TMutationDeleteEndpoint,
} from './endpoints.types'

function createBffPath(entity: string): string {
  return `/api/${entity}`
}

function buildQueryListEndpoint(entity: string): TQueryListEndpoint {
  return {
    getPath: () => `/${entity}`,
    getBff: () => createBffPath(entity),
  }
}

function buildQueryByIdEndpoint(entity: string): TQueryByIdEndpoint {
  return {
    getPath: (id) => `/${entity}/${id}`,
    getBff: (id) => createBffPath(entity) + `/${id}`,
  }
}

function buildMutationCreateEndpoint(entity: string): TMutationCreateEndpoint {
  return {
    getPath: () => `/${entity}`,
  }
}

function buildMutationUpdateEndpoint(entity: string): TMutationUpdateEndpoint {
  return {
    getPath: (id) => `/${entity}/${id}`,
  }
}

function buildMutationDeleteEndpoint(entity: string): TMutationDeleteEndpoint {
  return {
    getPath: (id) => `/${entity}/${id}`,
  }
}

export const EndpointsHelpers = {
  queries: {
    buildList: buildQueryListEndpoint,
    buildById: buildQueryByIdEndpoint,
  },
  mutations: {
    buildCreate: buildMutationCreateEndpoint,
    buildUpdate: buildMutationUpdateEndpoint,
    buildDelete: buildMutationDeleteEndpoint,
  },
} as const
