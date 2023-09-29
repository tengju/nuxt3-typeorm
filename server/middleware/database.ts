import { connection } from "../database";

export default defineEventHandler(async event => {
    event.context.db = await connection();
});