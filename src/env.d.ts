/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
declare namespace App {
  interface Locals {
    userEmail: string | null
    userName: string | null
  }
}
