export default defineEventHandler(async event => {
    return await event.context.db.query("SELECT * FROM user");
})