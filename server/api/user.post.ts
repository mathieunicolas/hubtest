export default eventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body);
  
  const todo = await useDrizzle().insert(tables.users).values(body).returning().get()

  return todo
})