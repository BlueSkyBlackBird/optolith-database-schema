/**
 * @main ArcaneBardTradition
 */

import { Prerequisite } from "./_Prerequisite"

/**
 * @title Arcane Bard Tradition
 */
export type ArcaneBardTradition = {
  /**
   * The arcane bard tradition's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  prerequisites: Prerequisite.GroupCollection.ArcaneTradition

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The arcane bard tradition's name.
       * @minLength 1
       */
      name: string
    }
  }
}
