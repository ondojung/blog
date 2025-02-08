import db from "./database"; // MySQL 연결

export class BaseModel {
    static tableName: string;

    static async create < T extends BaseModel > (this: {
        new (): T; tableName: string
    }, data: Partial < T >) {
        const keys = Object.keys(data);
        const values = Object.values(data);
        const placeholders = keys.map(() => "?").join(", ");
        const sql = `INSERT INTO ${this.tableName} (${keys.join(", ")}) VALUES (${placeholders})`;

        const result = await db.query(sql, values);
        return true;
    }

    static async find < T extends BaseModel > (
        this: {
            new (): T; tableName: string
        },
        options: {
            columns?: string[], // 원하는 칼럼을 선택할 수 있도록 추가
            where?: Record < string, any >,
            limit?: number,
            offset?: number
        }
    ) {
        const selectedColumns = options.columns?.length ? options.columns.join(", "): "*"; // 선택한 칼럼이 있으면 해당 칼럼만, 없으면 전체 조회
        let sql = `SELECT ${selectedColumns} FROM ${this.tableName}`;
        let values: any[] = [];

        if (options.where) {
            const conditions = Object.entries(options.where).map(([key, value]) => {
                values.push(value);
                return `${key} = ?`;
            }).join(" AND ");
            sql += ` WHERE ${conditions}`;
        }

        if (options.limit) sql += ` LIMIT ${options.limit}`;
        if (options.offset) sql += ` OFFSET ${options.offset}`;

        return db.query(sql, values);
    }

    static async update < T extends BaseModel > (this: {
        new (): T; tableName: string
    }, where: Record < string, any >, data: Partial < T >) {
        const updateFields = Object.keys(data).map((key) => `${key} = ?`).join(", ");
        const whereClause = Object.keys(where).map((key) => `${key} = ?`).join(" AND ");

        const values = [...Object.values(data),
            ...Object.values(where)];
        const sql = `UPDATE ${this.tableName} SET ${updateFields} WHERE ${whereClause}`;
        const [rows] = await db.query(sql, values);
        return rows;
    }

    static async delete < T extends BaseModel > (this: {
        new (): T; tableName: string
    }, where: Record < string, any >) {
        return BaseModel.update(where, {
            status: "DELETED", updatedAt: new Date()
        });
    }
}