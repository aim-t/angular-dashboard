## Notes

- For getting data from Node to Angular, there was an error regarding dependency injection even after importing HttpClient and HttpClientModule in service and app root respectively. The solution is to add `provideHttpClient()` to the providers array in app.config.ts
- Also add DatePipe to the providers. (Used when formatting current time)
