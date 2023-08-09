/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface interaction {
  description: string;
  name: string;
  request: {
    headers?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    method: string;
    params?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    query?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    url: string;
  };
}

export interface interactionWithoutRequire {
  description: string;
  name: string;
  request: {
    headers?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    method: string;
    params?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    query?: {
      /**
       * Unknown Property
       */
      [x: string]: unknown;
    };
    url: string;
  };
}

export interface param {
  default: string;
  description: string;
  required: boolean;
  type: string;
}

export interface query {
  name: string;
}

export interface queryAll {
  name?: string;
}

export interface request {
  headers?: {
    /**
     * Unknown Property
     */
    [x: string]: unknown;
  };
  method: string;
  params?: {
    /**
     * Unknown Property
     */
    [x: string]: unknown;
  };
  query?: {
    /**
     * Unknown Property
     */
    [x: string]: unknown;
  };
  url: string;
}
