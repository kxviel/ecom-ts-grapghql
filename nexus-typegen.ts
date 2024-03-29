/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthData: { // root type
    email?: string | null; // String
    name?: string | null; // String
    token?: string | null; // String
    username?: string | null; // String
  }
  AuthResponse: { // root type
    data?: NexusGenRootTypes['AuthData'] | null; // AuthData
    error: boolean; // Boolean!
    message: string; // String!
  }
  CartProductData: { // root type
    brand?: string | null; // String
    category?: string | null; // String
    id?: number | null; // Int
    image_url?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Int
    quantity?: number | null; // Int
    rating?: number | null; // Float
  }
  CartResponse: { // root type
    error: boolean; // Boolean!
    message: string; // String!
  }
  GetCartResponse: { // root type
    data?: Array<NexusGenRootTypes['CartProductData'] | null> | null; // [CartProductData]
    error: boolean; // Boolean!
    message: string; // String!
  }
  Mutation: {};
  ProductData: { // root type
    brand?: string | null; // String
    category?: string | null; // String
    id?: number | null; // Int
    image_url?: string | null; // String
    name?: string | null; // String
    price?: number | null; // Int
    rating?: number | null; // Float
  }
  ProductsResponse: { // root type
    data?: Array<NexusGenRootTypes['ProductData'] | null> | null; // [ProductData]
    error: boolean; // Boolean!
    message: string; // String!
  }
  Query: {};
  User: { // root type
    createdAt?: string | null; // String
    email?: string | null; // String
    id?: number | null; // Int
    name?: string | null; // String
    password?: string | null; // String
    username?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthData: { // field return type
    email: string | null; // String
    name: string | null; // String
    token: string | null; // String
    username: string | null; // String
  }
  AuthResponse: { // field return type
    data: NexusGenRootTypes['AuthData'] | null; // AuthData
    error: boolean; // Boolean!
    message: string; // String!
  }
  CartProductData: { // field return type
    brand: string | null; // String
    category: string | null; // String
    id: number | null; // Int
    image_url: string | null; // String
    name: string | null; // String
    price: number | null; // Int
    quantity: number | null; // Int
    rating: number | null; // Float
  }
  CartResponse: { // field return type
    error: boolean; // Boolean!
    message: string; // String!
  }
  GetCartResponse: { // field return type
    data: Array<NexusGenRootTypes['CartProductData'] | null> | null; // [CartProductData]
    error: boolean; // Boolean!
    message: string; // String!
  }
  Mutation: { // field return type
    addToCart: NexusGenRootTypes['CartResponse'] | null; // CartResponse
    login: NexusGenRootTypes['AuthResponse'] | null; // AuthResponse
    modifyQuantity: NexusGenRootTypes['CartResponse'] | null; // CartResponse
    signup: NexusGenRootTypes['AuthResponse'] | null; // AuthResponse
  }
  ProductData: { // field return type
    brand: string | null; // String
    category: string | null; // String
    id: number | null; // Int
    image_url: string | null; // String
    name: string | null; // String
    price: number | null; // Int
    rating: number | null; // Float
  }
  ProductsResponse: { // field return type
    data: Array<NexusGenRootTypes['ProductData'] | null> | null; // [ProductData]
    error: boolean; // Boolean!
    message: string; // String!
  }
  Query: { // field return type
    getAllProducts: NexusGenRootTypes['ProductsResponse'] | null; // ProductsResponse
    getCartByID: NexusGenRootTypes['GetCartResponse'] | null; // GetCartResponse
    getOneProduct: NexusGenRootTypes['ProductsResponse'] | null; // ProductsResponse
  }
  User: { // field return type
    createdAt: string | null; // String
    email: string | null; // String
    id: number | null; // Int
    name: string | null; // String
    password: string | null; // String
    username: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  AuthData: { // field return type name
    email: 'String'
    name: 'String'
    token: 'String'
    username: 'String'
  }
  AuthResponse: { // field return type name
    data: 'AuthData'
    error: 'Boolean'
    message: 'String'
  }
  CartProductData: { // field return type name
    brand: 'String'
    category: 'String'
    id: 'Int'
    image_url: 'String'
    name: 'String'
    price: 'Int'
    quantity: 'Int'
    rating: 'Float'
  }
  CartResponse: { // field return type name
    error: 'Boolean'
    message: 'String'
  }
  GetCartResponse: { // field return type name
    data: 'CartProductData'
    error: 'Boolean'
    message: 'String'
  }
  Mutation: { // field return type name
    addToCart: 'CartResponse'
    login: 'AuthResponse'
    modifyQuantity: 'CartResponse'
    signup: 'AuthResponse'
  }
  ProductData: { // field return type name
    brand: 'String'
    category: 'String'
    id: 'Int'
    image_url: 'String'
    name: 'String'
    price: 'Int'
    rating: 'Float'
  }
  ProductsResponse: { // field return type name
    data: 'ProductData'
    error: 'Boolean'
    message: 'String'
  }
  Query: { // field return type name
    getAllProducts: 'ProductsResponse'
    getCartByID: 'GetCartResponse'
    getOneProduct: 'ProductsResponse'
  }
  User: { // field return type name
    createdAt: 'String'
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addToCart: { // args
      productID: number; // Int!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    modifyQuantity: { // args
      isInc: boolean; // Boolean!
      productID: number; // Int!
    }
    signup: { // args
      email: string; // String!
      name: string; // String!
      password: string; // String!
    }
  }
  Query: {
    getAllProducts: { // args
      search: string; // String!
    }
    getOneProduct: { // args
      productID: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}