export type User = {
  id: string;
  email: string;
  name: string;
}

export type Form = {
  id: string;
  fields: Record<string, any>;
}

export type Submission = {
  id: string;
  form: Form;
}
