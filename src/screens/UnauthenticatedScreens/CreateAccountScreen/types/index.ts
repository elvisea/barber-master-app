import { schema } from "../constants";

type Form = Record<keyof typeof schema.fields, string>;

type Role = "OWNER" | "EMPLOYEE";

type UserCreated = { email: string; id: string; name: string; role: Role };

export { Form, UserCreated };
