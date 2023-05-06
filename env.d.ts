declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PROD_URL: string;
    }
  }
}
